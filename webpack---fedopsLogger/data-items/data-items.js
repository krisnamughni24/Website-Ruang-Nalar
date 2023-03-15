import DataItem from "./common/data-item";
import BiAppContextDataItem from "./common/bi-app-context-item";
import ResourceDataItem from "./resource/resource-item";
import DurationDataItem from "./duration/duration-item";
import { createPhasesCollection, calcPhaseDuration } from "./phases/utils";

export class DataItems {
  constructor(sessionId, preset) {
    this._sessionId = sessionId;
    this._preset = preset;
  }

  biAppLoadStart() {
    return this._biDataItem(this._preset.appLoadStart.eventId);
  }

  biAppLoadFinish() {
    return this._biDataItem(this._preset.appLoadFinish.eventId);
  }

  biInteractionStart() {
    return this._biDataItem(this._preset.interactionStart.eventId);
  }

  biInteractionEnd() {
    return this._biDataItem(this._preset.interactionEnd.eventId);
  }

  biLoadPhaseStart() {
    return this._biDataItem(this._preset.loadPhaseStart.eventId);
  }

  biLoadPhaseFinish() {
    return this._biDataItem(this._preset.loadPhaseFinish.eventId);
  }

  biHttpRequest() {
    return this._biDataItem(this._preset.httpRequest.eventId);
  }

  biHttpResponse() {
    return this._biDataItem(this._preset.httpResponse.eventId);
  }

  biHttpResponseTime() {
    return this._biDataItem(this._preset.httpResponseTime.eventId);
  }

  biBlackbox(performanceEntry) {
    const entryTypeToEventId = {
      environment: 500,
      "initial-paint": 501,
      loaded: 502,
      visibility: 503,
      "first-input": 504,
      "page-transition": 505,
      crux: 506,
      "crux-cls": 507,
      responsiveness: 508,
    };

    const eventId = entryTypeToEventId[performanceEntry.entryType];
    return eventId && this._biDataItem(eventId);
  }

  blackboxPerformance(performanceEntry) {
    return this.dataItem(performanceEntry);
  }

  webVitalsLoaded() {
    return this._biDataItem(29);
  }

  webVitalsFirstInput() {
    return this._biDataItem(39);
  }

  biError() {
    return this._biDataItem(this._preset.error.eventId);
  }

  appName({ appName, isServerSide }) {
    return this.dataItem({
      appName: isServerSide ? appName + "_ssr" : appName,
    });
  }

  artifact({ id: artifactId, version: artifactVersion, isRollout }) {
    return this.dataItem({ artifactId, artifactVersion, isRollout });
  }

  appContext(params) {
    return new BiAppContextDataItem(params);
  }

  customParams(customParams) {
    return this.dataItem({ customParams });
  }

  duration(duration) {
    return new DurationDataItem(duration);
  }

  loadingPhaseCollection(phasesOfApp) {
    const phases = JSON.stringify(createPhasesCollection(phasesOfApp));
    return this.dataItem({ phases });
  }

  loadingPhaseStart({ name }) {
    return this.dataItem({ name });
  }

  loadingPhaseFinish({ name, phaseStartTime }) {
    const duration = calcPhaseDuration(phaseStartTime);
    return this.dataItem({ name, duration });
  }

  resource() {
    const data = this._asBiEvent(this._preset.resource.eventId);
    return new ResourceDataItem(data);
  }

  dataItem(params) {
    return new DataItem(params);
  }

  _biDataItem(eventId) {
    const data = this._asBiEvent(eventId);
    return this.dataItem(data);
  }

  _asBiEvent(evid) {
    return {
      src: this._preset.src,
      evid,
      session_id: this._sessionId,
      _: new Date().getTime(), // cache buster
    };
  }
}
