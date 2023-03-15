import { presetLoader, presetsTypes } from "@wix/fedops-presets";
import { ConsentPolicyAccessor } from "@wix/consent-policy-client-accessor";
import { env } from "./env";
import performance from "./performance/performance";
import Times from "./times/times";
import DataSource from "./data-source/data-source";
import sessionManager from "./session-manager/session-manager";
import LoadingPhases from "./loading-phases/loading-phases";
import { create as createReporter } from "./reporter/reporter-factory";
import { DataItems } from "./data-items/data-items";
import { phasesConfigValues } from "./loading-phases/loading-phases-config";
import {
  generateGuid,
  getInteractionMark,
  getPhaseMark,
  getPathnameTemplate,
  extractUrl,
} from "./utils";
import { CookieOverrides } from "./cookie-overrides";
import { APP_LOAD_ERROR_FLOW } from "./errors/error-flow-type";
import httpMonitoringPreset from "./http-monitoring-preset";
import { defer } from "./defer";

const BLACKBOX = "wixPerformanceMeasurements";
const BLACKBOX_ENDPOINT = "bpm";

const callHook = (hook, hookArgs) => {
  if (hook) {
    return hook(hookArgs);
  }
};

/**
 * Base Logger
 * Before adding new parameters to the reported events, please make sure the BI schema supports them:
 * http://bo.wix.com/bi-catalog-webapp/#/sources/72
 */
export default class BaseLogger {
  constructor(appName, appVersion, reporter, params) {
    const defaultParams = {
      appId: null,
      widgetId: null,
      metasiteId: null,
      sessionId: sessionManager.getSessionId(),
      isServerSide: null,
      disableAutoLoadFinish: false,
      phasesConfig: phasesConfigValues.SEND_ON_START,
      interactionTimeout: null,
      timeoutHook: null,
      startHook: null,
      endHook: null,
      isPersistent: false,
      corrId: generateGuid(),
      presetType: presetsTypes.DEFAULT,
      customParams: {},
      paramsOverrides: {},
    };

    const paramsWithDefaults = Object.assign({}, defaultParams, params);

    this.appName = appName;
    this.appVersion = appVersion;
    this.appId = paramsWithDefaults.appId;
    this.widgetId = paramsWithDefaults.widgetId;
    this.metasiteId = paramsWithDefaults.metasiteId;
    this.corrId = paramsWithDefaults.corrId;
    this.isServerSide = paramsWithDefaults.isServerSide;
    this.params = { sessionId: paramsWithDefaults.sessionId };

    this.httpMonitoringDataItems = new DataItems(
      this.sessionId,
      httpMonitoringPreset
    );
    this.httpMonitoringReporter = createReporter({
      preset: httpMonitoringPreset,
    });

    this._customParams = Object.assign({}, paramsWithDefaults.customParams);
    this.disableAutoLoadFinish = paramsWithDefaults.disableAutoLoadFinish;
    this.phasesConfig = paramsWithDefaults.phasesConfig;
    this._appLoadedCalled = {};
    this._appStartLoadCalled = {};
    this._presetType = paramsWithDefaults.presetType;
    this._preset = presetLoader(this._presetType);
    this._constructorParamsOverrides = paramsWithDefaults.paramsOverrides;
    this._cookiesParamsOverrides = new CookieOverrides();
    this.dataItems = new DataItems(this.sessionId, this._preset);
    this.reporter = reporter || createReporter({ preset: this._preset });
    this._times = new Times(appName);
    this.loadingPhases = new LoadingPhases(appName, this._times);
    this.dataSourceBase = new DataSource();
    this.dataSourceBase
      .addItem(
        this.dataItems.appName({
          appName,
          isServerSide: this.isServerSide,
        })
      )
      .addItem(
        this.dataItems.dataItem({ corrId: this.corrId, is_rollout: false })
      )
      .addItem(this.dataItems.dataItem(paramsWithDefaults.paramsOverrides));

    if (params && params.artifactData) {
      this.dataSourceBase.addItem(this.dataItems.artifact(params.artifactData));
    }

    this._outgoingInteractions = {};
    this._outgoingHttpRequests = {};
    this.interactionTimeout = paramsWithDefaults.interactionTimeout;
    this.timeoutHook = paramsWithDefaults.timeoutHook;
    this.startHook = paramsWithDefaults.startHook;
    this.endHook = paramsWithDefaults.endHook;
    this.isPersistent = paramsWithDefaults.isPersistent;
    this._firstErrorFiredInFlow = {};
    this._platformTenantsPromise = defer();
    this._webVitalsLoadedPromise = defer();
    this._webVitalsFirstInputPromise = defer();

    if (paramsWithDefaults.reportBlackbox) {
      this._handleBlackboxPerformance();
    }
    this._reportWebVitalsWhenAvailable();
  }

  get dataSource() {
    return this.dataSourceBase.clone();
  }

  _report(dataSource, reporterEndpoint, params) {
    return this.reporter.report(
      dataSource.mergeItems(),
      reporterEndpoint,
      params
    );
  }

  _reportIfNotSSR(dataSource, reporterEndpoint, params) {
    if (!this.isServerSide || this.appName.includes("thunderbolt")) {
      return this._report(dataSource, reporterEndpoint, params);
    }
  }

  _reportHttpMonitoring(dataSource) {
    return this.httpMonitoringReporter.report(
      dataSource.mergeItems(),
      httpMonitoringPreset.endpoint
    );
  }

  _reportPhases(dataSource, reporterEndpoint) {
    return this.reporter.report(
      dataSource.mergePhasesItems(),
      reporterEndpoint
    );
  }

  getAppName() {
    return this.appName;
  }

  getAppVersion() {
    return this.appVersion;
  }

  getReporter() {
    return this.reporter;
  }

  getHttpMonitoringReporter() {
    return this.httpMonitoringReporter;
  }

  getParam(paramName) {
    return this.params[paramName];
  }

  _isDisableAutoLoadFinish() {
    return this.disableAutoLoadFinish;
  }

  get sessionId() {
    return this.getParam("sessionId");
  }

  set sessionId(sessionId) {
    this.params["sessionId"] = sessionId;
  }

  isDisableAutoLoadFinish() {
    return this._isDisableAutoLoadFinish();
  }

  reportNetworkAnalysis({ appId }) {
    const resources = performance.getResources();
    setTimeout(() => {
      try {
        const resourceDataItem = this.dataItems.resource();

        const analysis = resourceDataItem.performNetworkAnalysis(resources);
        if (!analysis) {
          return;
        }
        const dataSource = this.dataSource
          .addItem(resourceDataItem)
          .addItem(analysis)
          .addItem(
            this._getDataItemWithDefaultParamsOverrides({
              appName: appId,
            })
          );

        if (appId) {
          this._changeAppNameForEvent(dataSource, appId);
        }

        this._report(dataSource);
      } catch (e) {
        console.error("[fedops] Failed to report resource metrics", e);
      }
    }, 1000);
  }

  _getAppLoadingPhaseMarksForApp({ appId }) {
    const allMarks = performance.getMarks();
    const appMarks = [];

    allMarks.forEach((x) => {
      const markData = getPhaseMark(x.name);
      if (markData && markData.appId === appId && !markData.widgetId) {
        const { startTime, name } = x;
        const markWithStartTime = Object.assign(
          {},
          { startTime, name },
          markData
        );
        appMarks.push(markWithStartTime);
      }
    });

    return appMarks;
  }

  _getTimesOfPhase({ phaseName, appPhasesMarks, appId }) {
    const startMarkTime = appPhasesMarks.find(
      (mark) => mark.name === `[fedops] phase:${phaseName} ${appId} started`
    )?.startTime;
    const finishMarkTime = appPhasesMarks.find(
      (mark) => mark.name === `[fedops] phase:${phaseName} ${appId} finished`
    )?.startTime;

    return {
      startMarkTime,
      finishMarkTime,
    };
  }

  _getPhaseNamesFromMarks(marks) {
    return new Set(marks.map((mark) => mark.phaseName));
  }

  reportAppPhasesNetworkAnalysis({ appId }) {
    const appPhasesMarks = this._getAppLoadingPhaseMarksForApp({ appId });
    const phaseNames = this._getPhaseNamesFromMarks(appPhasesMarks);
    const resources = performance.getResources();
    const dataSource = this.dataSource;
    const resourceDataItem = this.dataItems.resource();
    dataSource.addItem(resourceDataItem);

    for (const phaseName of phaseNames) {
      try {
        const { startMarkTime, finishMarkTime } = this._getTimesOfPhase({
          phaseName,
          appPhasesMarks,
          appId,
        });

        const resourcesInPhase = resources.filter(
          (resource) =>
            resource.startTime > startMarkTime &&
            resource.startTime + resource.duration < finishMarkTime
        );

        const analysis =
          resourceDataItem.performNetworkAnalysis(resourcesInPhase);

        if (analysis) {
          dataSource.addItem(analysis);
        }
      } catch (e) {
        console.error(
          `[fedops] Failed to report resource metrics for "${phaseName}" phase`,
          e
        );
      }
    }

    const dataSourceContainsNetworkAnalysis = (datasource) =>
      datasource.items.find(
        (dataItem) => typeof dataItem.data.countXhr !== "undefined"
      );

    if (dataSourceContainsNetworkAnalysis(dataSource)) {
      this._changeAppNameForEvent(dataSource, appId);
      this._reportPhases(dataSource);
    }
  }

  /**
   * Manual report for widget load start - Should only be used if your widget doesn't have its own .vm / .ejs file
   * Call this method at the earliest point possible when your widget starts loading.
   */
  appLoadStarted({ appId, paramsOverrides } = {}) {
    if (
      (appId && this._appStartLoadCalled[appId]) ||
      (!appId && this._appStartLoadCalled[this.appName])
    ) {
      return;
    }

    BaseLogger._markAppLoadStarted(this.appName);
    this._appStartLoadCalled[appId || this.appName] = true;
    this._times.setLoadStarted({ appId });

    const dataSource = this.dataSource
      .addItem(this.dataItems.biAppLoadStart())
      .addItem(
        this.dataItems.appContext({
          appId: appId || this.appId,
          widgetId: this.widgetId,
          isServerSide: this.isServerSide,
        })
      )
      .addItem(
        this._getDataItemWithDefaultParamsOverrides({
          appName: appId,
        })
      )
      .addItem(this.dataItems.dataItem(paramsOverrides));

    if (appId) {
      this._changeAppNameForEvent(dataSource, appId);
    }

    return this._report(dataSource, this._getEndpoint());
  }

  httpRequest({ artifactId, method, url }) {
    const urlTemplate = this._getUrlTemplate(url);

    this._outgoingHttpRequests[urlTemplate] = {
      timestamp: performance.now(),
    };

    const dataSource = this.dataSource
      .addItem(this.httpMonitoringDataItems.biHttpRequest())
      .addItem({
        artifactId,
        method,
        url: urlTemplate,
      });

    this._reportHttpMonitoring(dataSource);
  }

  httpResponse({ artifactId, method, statusCode, url }) {
    const urlTemplate = this._getUrlTemplate(url);

    if (!this._outgoingHttpRequests[urlTemplate]) {
      throw new Error("To use httpResponse you must use httpRequest first");
    }

    const startTime = this._outgoingHttpRequests[urlTemplate].timestamp;
    const endTime = performance.now();
    const responseTime = Math.floor(endTime - startTime);

    const dataSource = this.dataSource
      .addItem(this.httpMonitoringDataItems.biHttpResponse())
      .addItem({
        artifactId,
        method,
        responseTime,
        status_code: statusCode,
        url: urlTemplate,
      });

    this._httpResponseTime({
      artifactId,
      method,
      responseTime,
      url: urlTemplate,
    });

    this._reportHttpMonitoring(dataSource);
  }

  _httpResponseTime({ artifactId, method, responseTime, url }) {
    const dataSource = this.dataSource
      .addItem(this.httpMonitoringDataItems.biHttpResponseTime())
      .addItem({
        artifactId,
        method,
        responseTime,
        url,
      });

    return this._reportHttpMonitoring(dataSource);
  }

  _getUrlTemplate(url) {
    const { origin, pathname } = extractUrl(url);

    const convertedPathname = pathname
      .split("/")
      .filter((p) => !!p)
      .map((p) => getPathnameTemplate(p))
      .join("/");

    return `${origin}/${convertedPathname}`;
  }

  _shouldAddCustomParams(customParams) {
    const isEmptyObject = (obj) =>
      obj && Object.keys(obj).length === 0 && obj.constructor === Object;
    const bothCustomParamsAreEmpty =
      isEmptyObject(this._customParams) && isEmptyObject(customParams);

    const consentPolicyAccessor = new ConsentPolicyAccessor();
    const { functional, analytics } =
      consentPolicyAccessor.getCurrentConsentPolicy();
    const consentAllowsCustomParams = functional && analytics;

    return !bothCustomParamsAreEmpty && consentAllowsCustomParams;
  }

  _addCustomParamsToEvent(dataSource, customParams) {
    const customParamsObj =
      typeof customParams === "string"
        ? JSON.parse(customParams)
        : customParams;
    customParams = Object.assign({}, this._customParams, customParamsObj);

    if (Object.keys(customParams).length > 0) {
      const stringifiedCustomParams = JSON.stringify(customParams);
      dataSource.addItem(this.dataItems.customParams(stringifiedCustomParams));
    }
  }

  /**
   * Final phase. Call this method when your application finishes loading and after all custom phases.
   */
  appLoaded({ appId, customParams, paramsOverrides } = {}) {
    if (
      (appId && this._appLoadedCalled[appId]) ||
      (!appId && this._appLoadedCalled[this.appName])
    ) {
      return;
    }

    BaseLogger._clearLoadTimeout();
    BaseLogger._markAndMeasureAppLoad(this.appName);
    this._appLoadedCalled[appId || this.appName] = true;

    this._sendLastAppLoadPhaseIfNeeded();
    this.reportNetworkAnalysis({ appId });

    const dataSource = this.dataSource
      .addItem(this.dataItems.biAppLoadFinish())
      .addItem(
        this.dataItems.appContext({
          appId: appId || this.appId,
          widgetId: this.widgetId,
          isServerSide: this.isServerSide,
        })
      )
      .addItem(
        this.dataItems
          .duration(this._times.getAppLoadTime({ appId }))
          .setFirstRequestDuration(this._times.getFirstRequestDuration())
      )
      .addItem(
        this._getDataItemWithDefaultParamsOverrides({
          appName: appId,
        })
      )
      .addItem(this.dataItems.dataItem(paramsOverrides));

    if (appId) {
      this._changeAppNameForEvent(dataSource, appId);
    }

    if (this._shouldAddCustomParams(customParams)) {
      this._addCustomParamsToEvent(dataSource, customParams);
    }

    return this._report(dataSource, this._getEndpoint());
  }

  /**
   * Start of an app loading phase, reports end of previous phase if configured
   */
  appLoadingPhaseStart(name, { appId, widgetId, paramsOverrides } = {}) {
    this.loadingPhases.saveLoadingPhase({ name, appId, widgetId });
    this._sendPreviousPhaseIfNeeded(name, { appId, widgetId, paramsOverrides });
    performance.mark(`[fedops] ${name} started`);
    performance.mark(
      `[fedops] phase:${name} ${appId}${widgetId ? ` ${widgetId}` : ""} started`
    );

    const dataSource = this.dataSource
      .addItem(this.dataItems.biLoadPhaseStart())
      .addItem(this.dataItems.appContext({ appId, widgetId }))
      .addItem(this.dataItems.loadingPhaseStart({ name }))
      .addItem(
        this._getDataItemWithDefaultParamsOverrides({
          appName: appId,
        })
      )
      .addItem(this.dataItems.dataItem(paramsOverrides));

    if (appId) {
      this._changeAppNameForEvent(dataSource, appId);
    }

    this._report(dataSource, this._getEndpoint());
  }

  _changeAppNameForEvent(dataSource, appName) {
    dataSource.addItem(
      this.dataItems.appName({ appName, isServerSide: this.isServerSide })
    );
  }

  _sendPreviousPhaseIfNeeded(name, { appId, widgetId, paramsOverrides } = {}) {
    const previousPhase = this.loadingPhases.getPhasePreviousTo({
      name,
      appId,
      widgetId,
    });

    if (
      previousPhase &&
      this.phasesConfig === phasesConfigValues.SEND_ON_START
    ) {
      performance.mark(`[fedops] ${previousPhase.name} finished`);

      const loadingPhaseDataItem =
        this.dataItems.loadingPhaseFinish(previousPhase);
      const loadingPhaseBiItem = this.dataItems.biLoadPhaseFinish();
      const overridesDataItem = this.dataItems.dataItem(paramsOverrides);

      const dataSource = this.dataSource
        .addItem(loadingPhaseDataItem)
        .addItem(loadingPhaseBiItem)
        .addItem(
          this._getDataItemWithDefaultParamsOverrides({
            appName: appId,
          })
        )
        .addItem(overridesDataItem);

      this._report(dataSource);
    }
  }

  /**
   * End of an app loading phase, reports end of previous phase
   */
  appLoadingPhaseFinish(
    name,
    { appId, widgetId, widgetArray, paramsOverrides } = {},
    { endHook } = {}
  ) {
    if (this.phasesConfig === phasesConfigValues.SEND_ON_START) {
      throw new Error(
        'To use appLoadingPhaseFinish you must use "phasesConfig: SEND_START_AND_FINISH" setting'
      );
    }

    performance.mark(`[fedops] ${name} finished`);
    performance.mark(
      `[fedops] phase:${name} ${appId}${
        widgetId ? ` ${widgetId}` : ""
      } finished`
    );

    const loadingPhase = this.loadingPhases.getAppLoadingPhaseData({
      name,
      appId,
      widgetId,
    });

    if (!loadingPhase) {
      throw new Error(
        `Cannot report end of a phase that wasn't started. Phase ${name} doesn't exist`
      );
    }

    const loadingPhaseDataItem =
      this.dataItems.loadingPhaseFinish(loadingPhase);
    const loadingPhaseBiItem = this.dataItems.biLoadPhaseFinish();
    const defaultParamsOverridesDataItem =
      this._getDataItemWithDefaultParamsOverrides({ appName: appId });
    const overridesDataItem = this.dataItems.dataItem(paramsOverrides);
    const eventContextDataItem = this.dataItems.appContext({
      appId,
      widgetId,
      widgetArray,
      isServerSide: this.isServerSide,
    });

    callHook(endHook || this.endHook, {
      name: loadingPhase.name,
      duration: Math.floor(performance.now() - loadingPhase.phaseStartTime),
    });

    const dataSource = this.dataSource
      .addItem(loadingPhaseDataItem)
      .addItem(loadingPhaseBiItem)
      .addItem(eventContextDataItem)
      .addItem(defaultParamsOverridesDataItem)
      .addItem(overridesDataItem);

    if (appId) {
      this._changeAppNameForEvent(dataSource, appId);
    }

    return this._report(dataSource, this._getEndpoint());
  }

  _getEndpoint() {
    return this.isPersistent
      ? this._preset.persistentEndpoint
      : this._preset.nonPersistentEndpoint;
  }

  _getDataItemWithDefaultParamsOverrides({ appName = null } = {}) {
    return this.dataItems.dataItem({
      ...this._cookiesParamsOverrides.getCookieOverridesForApp(
        appName || this.appName
      ),
      ...this._constructorParamsOverrides,
    });
  }

  // only for backwards compatibility purposes until we eliminate phasesConfig and SEND_ON_START
  _sendLastAppLoadPhaseIfNeeded() {
    const appLoadingPhase = this.loadingPhases.getNextPhaseToReport();
    const shouldReportLastPhase =
      appLoadingPhase && this.phasesConfig === phasesConfigValues.SEND_ON_START;

    if (shouldReportLastPhase) {
      this._report(
        this.dataSource
          .addItem(this.dataItems.loadingPhaseFinish(appLoadingPhase))
          .addItem(this.dataItems.biLoadPhaseFinish())
      );
    }
  }

  static _clearLoadTimeout() {
    if (
      env() &&
      env().fedops &&
      typeof env().fedops.clearLoadTimeout === "function"
    ) {
      env().fedops.clearLoadTimeout();
    }
  }

  clearResourceTimings() {
    performance.clearResourceTimings();
  }

  static _markAppLoadStarted(appName) {
    performance.mark(`[fedops] ${appName} app-load-started`);
  }

  static _markAndMeasureAppLoad(appName) {
    performance.mark(`[fedops] ${appName} app-loaded`);

    try {
      performance.measure(
        `[fedops] ${appName} app-loaded`,
        `[fedops] ${appName} app-load-started`,
        `[fedops] ${appName} app-loaded`
      );
    } catch (e) {}
  }

  _markInteractionStarted(interactionName) {
    performance.mark(
      `[fedops] ${this.appName} interaction ${interactionName} started`
    );
  }

  _markAndMeasureInteractionEnded(interactionName, outgoingInteraction) {
    if (outgoingInteraction) {
      performance.mark(
        `[fedops] ${this.appName} interaction ${interactionName} ended`
      );

      try {
        performance.measure(
          `[fedops] ${interactionName} duration`,
          `[fedops] ${this.appName} interaction ${interactionName} started`,
          `[fedops] ${this.appName} interaction ${interactionName} ended`
        );
      } catch (e) {}
    }
  }

  /**
   * Custom interaction start (http://bo.wix.com/bi-catalog-webapp/#/sources/72/events/)
   */
  interactionStarted(
    interactionName,
    {
      timeOverride,
      interactionTimeout,
      startHook,
      timeoutHook,
      customParams,
      paramsOverrides,
    } = {}
  ) {
    this._markInteractionStarted(interactionName);

    const scheduleTimeoutEvent = () => {
      if (interactionTimeout || this.interactionTimeout) {
        return setTimeout(() => {
          const dataSource = this.dataSource
            .addItem({ interactionName })
            .addItem({ errorType: "timeout" })
            .addItem(this.dataItems.biError());

          this._reportIfNotSSR(dataSource);
          callHook(timeoutHook || this.timeoutHook, {
            name: interactionName,
            timeout: interactionTimeout || this.interactionTimeout,
          });
        }, interactionTimeout || this.interactionTimeout);
      }
    };

    const dataSource = this.dataSource
      .addItem({ name: interactionName })
      .addItem(this.dataItems.biInteractionStart())
      .addItem(this._getDataItemWithDefaultParamsOverrides())
      .addItem(this.dataItems.dataItem(paramsOverrides));

    if (this._shouldAddCustomParams(customParams)) {
      this._addCustomParamsToEvent(dataSource, customParams);
    }

    this._outgoingInteractions[interactionName] = {
      timestamp: timeOverride ? timeOverride : performance.now(),
      timeout: interactionTimeout || this.interactionTimeout,
    };
    this._reportIfNotSSR(dataSource);
    callHook(startHook || this.startHook, { name: interactionName });

    const timeoutId = scheduleTimeoutEvent();
    return {
      timeoutId,
    };
  }

  /**
   * Custom interaction end (http://bo.wix.com/bi-catalog-webapp/#/sources/72/events/)
   */
  interactionEnded(
    interactionName,
    { timeOverride, timeoutId, endHook, customParams, paramsOverrides } = {}
  ) {
    const outgoingInteraction = this._outgoingInteractions[interactionName];
    this._markAndMeasureInteractionEnded(interactionName, outgoingInteraction);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const interaction =
      this._outgoingInteractions[interactionName] ||
      this._getInteractionFromWindowIfPresent(interactionName);

    const endTime = timeOverride ? timeOverride : performance.now();
    const duration = interaction
      ? Math.floor(endTime - interaction.timestamp)
      : "";

    callHook(endHook || this.endHook, {
      name: interactionName,
      duration,
      timeout:
        this._outgoingInteractions[interactionName] &&
        this._outgoingInteractions[interactionName].timeout,
    });

    const dataSource = this.dataSource
      .addItem({ name: interactionName })
      .addItem({ duration })
      .addItem(this.dataItems.biInteractionEnd())
      .addItem(this._getDataItemWithDefaultParamsOverrides())
      .addItem(this.dataItems.dataItem(paramsOverrides));

    if (this._shouldAddCustomParams(customParams)) {
      this._addCustomParamsToEvent(dataSource, customParams);
    }

    delete this._outgoingInteractions[interactionName];

    this._reportIfNotSSR(dataSource);
  }

  _getInteractionsObjectFromWindow() {
    return env()?.fedops?.apps?.[this.appName]?.interactions || {};
  }

  _getInteractionFromWindowIfPresent(interactionName) {
    return this._getInteractionsObjectFromWindow()[interactionName];
  }

  flush() {
    this.reporter.flush();
  }

  _handleBlackboxPerformance() {
    const actualEnv = env();
    const wixPerformanceMeasurements = actualEnv[BLACKBOX];

    if (wixPerformanceMeasurements) {
      this._handleBlackboxPerformanceEntries(
        actualEnv,
        wixPerformanceMeasurements
      );
    }
    if (actualEnv.addEventListener) {
      actualEnv.addEventListener(BLACKBOX, ({ detail }) =>
        this._handleBlackboxPerformanceEntries(actualEnv, detail)
      );
    }
  }

  _handleBlackboxPerformanceEntries(actualEnv, measurements) {
    measurements
      .filter(({ then }) => then)
      .forEach((performanceEntryPromise) => {
        performanceEntryPromise.then((performanceEntry) => {
          // eslint-disable-next-line default-case
          switch (performanceEntry.entryType) {
            case "loaded":
              this._webVitalsLoadedPromise.resolve(performanceEntry);
              break;
            case "first-input":
              this._webVitalsFirstInputPromise.resolve(performanceEntry);
              break;
            case "page-transitions":
            case "crux-cls-s":
            case "responsiveness":
              if (performanceEntry.eventName && actualEnv.addEventListener) {
                actualEnv.addEventListener(
                  performanceEntry.eventName,
                  ({ detail }) => this._sendBlackboxMeasurement(detail)
                );
              }
              return; // these entries are wrappers for sequences - they themselves are not reported
          }
          this._sendBlackboxMeasurement(performanceEntry);
        });
      });
  }

  _sendBlackboxMeasurement(measurement) {
    const blackboxBiDataItem = this.dataItems.biBlackbox(measurement);

    if (blackboxBiDataItem) {
      const blackboxDataItem = this.dataItems.blackboxPerformance(measurement);

      const dataSource = new DataSource()
        .addItem(blackboxBiDataItem)
        .addItem(blackboxDataItem);

      let params;
      if (measurement.entryType === "loaded") {
        params = { useBatch: false };
      }
      this._report(dataSource, BLACKBOX_ENDPOINT, params);
      if (measurement.entryType === "crux") {
        this.flush();
      }
    }
  }

  getLoggerForWidget({
    appName,
    appId,
    widgetId,
    version,
    timeoutHook,
    startHook,
    endHook,
    useGlobalLogger,
    paramsOverrides,
    phasesConfig,
  }) {
    const widgetAppName = appName || `${appId}_${widgetId}`;
    const widgetVersion = version || this.getAppVersion();
    const reporter = useGlobalLogger
      ? this.reporter
      : createReporter({
          biLoggerFactory: this.reporter._factory,
          preset: this._preset,
        });

    const config = {
      isServerSide: this.isServerSide,
      appId,
      widgetId,
      sessionId: this.sessionId,
      phasesConfig: phasesConfig || phasesConfigValues.SEND_ON_START,
      isPersistent: this.isPersistent,
      timeoutHook,
      startHook,
      endHook,
      customParams: this._customParams,
      presetType: this._presetType,
      paramsOverrides: {
        ...this._constructorParamsOverrides,
        ...paramsOverrides,
      },
    };

    return new BaseLogger(widgetAppName, widgetVersion, reporter, config);
  }

  _getUnReportedErrorFlows(flows) {
    return flows.filter((flow) => !this._firstErrorFiredInFlow[flow]);
  }

  reportErrorThrownOncePerFlow() {
    const flows = this._getFlowsOfError();
    const unReportedErrorFlows = this._getUnReportedErrorFlows(flows);

    if (unReportedErrorFlows.length) {
      unReportedErrorFlows.forEach((flow) => {
        this._firstErrorFiredInFlow[flow] = true;

        const dataSource = this.dataSource
          .addItem({ interactionName: flow })
          .addItem(this.dataItems.biError());

        this._report(dataSource);
      });
    }
  }

  _errorHappenedInOneOfAppLoadFlows() {
    return (
      this._errorHappenedInAppLoadFlow() ||
      this._errorHappenedInAppLoadingPhasesFlow()
    );
  }

  _errorHappenedInAppLoadFlow() {
    const appLoadStarted = this._getAppLoadStartedIndication();
    const appLoaded = this._getAppLoadedIndication();
    return appLoadStarted && !appLoaded;
  }

  _getAppLoadStartedIndication() {
    const appLoadStartedMarkName = `[fedops] ${this.appName} app-load-started`;
    const appLoadStartedMark = performance.getEntriesByName(
      appLoadStartedMarkName
    )?.[0];
    const appLoadStartedTime = this._times.getLoadStartTime();

    return appLoadStartedMark || appLoadStartedTime;
  }

  _getAppLoadedIndication() {
    const appLoadedMarkName = `[fedops] ${this.appName} app-loaded`;
    const appLoadedMark = performance.getEntriesByName(appLoadedMarkName)?.[0];
    return appLoadedMark || this._appLoadedCalled[this.appName];
  }

  _errorHappenedInAppLoadingPhasesFlow({ appId } = { appId: this.appName }) {
    const appPhasesMarks = this._getAppLoadingPhaseMarksForApp({ appId });
    const phaseNames = this._getPhaseNamesFromMarks(appPhasesMarks);

    for (const phaseName of phaseNames) {
      const { startMarkTime, finishMarkTime } = this._getTimesOfPhase({
        phaseName,
        appPhasesMarks,
        appId,
      });

      if (startMarkTime && !finishMarkTime) {
        return true;
      }
    }

    return false;
  }

  _getFlowsOfError() {
    const flowsWithErrors = this._errorHappenedInOneOfAppLoadFlows()
      ? [APP_LOAD_ERROR_FLOW]
      : [];

    return [
      ...flowsWithErrors,
      ...this._getInteractionNamesWhereErrorHappened(),
    ];
  }

  _getInteractionNamesWhereErrorHappened() {
    const interactionsFromInstance =
      this._getInteractionNamesWhereErrorHappenedFromInstance();

    if (interactionsFromInstance.length) {
      return interactionsFromInstance;
    }

    const interactionsFromWindow = Object.keys(
      this._getInteractionsObjectFromWindow()
    );

    if (interactionsFromWindow.length) {
      return interactionsFromWindow;
    }

    return this._getInteractionNamesWhereErrorHappenedFromPerformanceMarks();
  }

  _getInteractionNamesWhereErrorHappenedFromInstance() {
    return Object.keys(this._outgoingInteractions);
  }

  _getInteractionNamesWhereErrorHappenedFromPerformanceMarks() {
    const interactionMarks = this._getInteractionMarksOfCurrentApp();
    return BaseLogger._getInteractionsThatDidntEndFromMarks(interactionMarks);
  }

  _getInteractionMarksOfCurrentApp() {
    const allMarks = performance.getMarks();

    return allMarks.reduce((interactionMarksOfCurrentApp, mark) => {
      const markData = getInteractionMark(mark.name);

      if (markData && markData.appName === this.appName) {
        interactionMarksOfCurrentApp[markData.interactionName] =
          interactionMarksOfCurrentApp[markData.interactionName] || [];

        interactionMarksOfCurrentApp[markData.interactionName].push({
          startTime: mark.startTime,
          name: mark.name,
        });
      }

      return interactionMarksOfCurrentApp;
    }, {});
  }

  static _getInteractionsThatDidntEndFromMarks(interactionsMarks) {
    const unFinishedInteractions = [];

    for (const interactionName in interactionsMarks) {
      if (interactionsMarks.hasOwnProperty(interactionName)) {
        const { startedInteractions, endedInteractions } =
          BaseLogger._countStartedEndedInteractionMarks(
            interactionsMarks[interactionName]
          );

        const noInteractionMarks = !startedInteractions && !endedInteractions;
        const moreStartedOrEndedInteractions =
          startedInteractions - endedInteractions !== 0;

        if (noInteractionMarks || moreStartedOrEndedInteractions) {
          unFinishedInteractions.push(interactionName);
        }
      }
    }

    return unFinishedInteractions;
  }

  static _countStartedEndedInteractionMarks(interactionsMarks) {
    let startedInteractions = 0;
    let endedInteractions = 0;

    interactionsMarks.forEach((mark) => {
      if (mark.name.includes("started")) {
        startedInteractions++;
      } else if (mark.name.includes("ended")) {
        endedInteractions++;
      }
    });

    return { startedInteractions, endedInteractions };
  }

  registerPlatformTenants(appNames) {
    this._platformTenantsPromise.resolve(appNames);
  }

  _reportWebVitalsWhenAvailable() {
    Promise.all([
      this._webVitalsLoadedPromise,
      this._platformTenantsPromise,
    ]).then(([webVitalsLoaded, platformTenantAppNames]) => {
      const { cls, lcp } = webVitalsLoaded;
      platformTenantAppNames.forEach((appName) => {
        const dataSource = this.dataSource
          .addItem(this.dataItems.webVitalsLoaded())
          .addItem(this.dataItems.appName({ appName }))
          .addItem({ cls, lcp });
        this._report(dataSource);
      });
    });

    Promise.all([
      this._webVitalsFirstInputPromise,
      this._platformTenantsPromise,
    ]).then(([webVitalsFirstInput, platformTenantAppNames]) => {
      const { delay } = webVitalsFirstInput;
      platformTenantAppNames.forEach((appName) => {
        const dataSource = this.dataSource
          .addItem(this.dataItems.webVitalsFirstInput())
          .addItem(this.dataItems.appName({ appName }))
          .addItem({ fid: delay });
        this._report(dataSource);
      });
    });
  }
}
