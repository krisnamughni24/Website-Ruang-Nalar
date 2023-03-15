import { presetLoader } from "@wix/fedops-presets";
import { env, hasSendBeacon, sendBeacon } from "./env";
import { DEFAULT_APP_VERSION } from "./conf";
import { create as createReporter } from "./reporter/reporter-factory";
import BaseLogger from "./base-logger";
import {
  initializeGlobal,
  setLoadStartTime,
  setSessionId,
} from "./global-app-data/global-app-data";
import sessionManager from "./session-manager/session-manager";
import performance from "./performance/performance";
import { phasesConfigValues } from "./loading-phases/loading-phases-config";
import { CookieOverrides } from "./cookie-overrides";

function getAppVersion() {
  return env().__CI_APP_VERSION__ || DEFAULT_APP_VERSION;
}

/*
 * @param baseUrl
 * @param appId
 * @param disableAutoLoadFinish
 * @param interactionTimeout
 * @param timeoutHook
 * @param startHook
 * @param endHook
 * @param biLoggerFactory
 * @param endpoint
 * @param endpoint artifactData
 */
/**
 * @param {string} appName
 */
export function create(appName, params = {}) {
  if (!appName) {
    return null;
  }
  const appNameWithoutDots = appName.replace(/\./g, "-").toLowerCase();

  initializeGlobal(appNameWithoutDots);

  const fullParams = { ...params, preset: presetLoader(params.presetType) };
  const reporter = createReporter(fullParams);

  return new BaseLogger(
    appNameWithoutDots,
    getAppVersion(),
    reporter,
    fullParams
  );
}

/**
 * Report application started loading
 * @param {string} appName Application/Dashboard name
 * @param {{artifactData}} artifact data
 */
export function reportAppLoadStarted(
  appName,
  { artifactData, presetType, isPersistent, paramsOverrides } = {}
) {
  initializeGlobal(appName);
  setLoadStartTime(appName, performance.responseEndTime() || performance.now());

  const sessionId = sessionManager.getSessionId();
  setSessionId(sessionId);

  const preset = presetLoader(presetType);
  const endpoint =
    isPersistent === true
      ? preset.persistentEndpoint
      : preset.nonPersistentEndpoint;

  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set("appName", appName);
  urlSearchParams.set("src", preset.src);
  urlSearchParams.set("evid", preset.appLoadStart.eventId);
  urlSearchParams.set("session_id", sessionId);
  urlSearchParams.set("_", Math.random());
  urlSearchParams.set("is_rollout", false);

  if (artifactData) {
    urlSearchParams.set("artifactId", artifactData.id);
    urlSearchParams.set("artifactVersion", artifactData.version);
    urlSearchParams.set("is_rollout", artifactData.isRollout);
  }

  const cookieOverrides = new CookieOverrides().getCookieOverridesForApp(
    appName
  );

  Object.keys(cookieOverrides || {}).forEach((x) =>
    urlSearchParams.set(x, cookieOverrides[x])
  );

  Object.keys(paramsOverrides || {}).forEach((x) =>
    urlSearchParams.set(x, paramsOverrides[x])
  );

  const url = `//frog.wix.com/${endpoint}?${urlSearchParams.toString()}`;

  if (hasSendBeacon()) {
    sendBeacon(url);
  } else {
    new Image().src = url;
  }
}

export const phasesConfig = phasesConfigValues;
