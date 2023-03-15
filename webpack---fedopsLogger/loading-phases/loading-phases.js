import performance from "../performance/performance";
import Times from "../times/times";

export default class LoadingPhases {
  constructor(appName, times) {
    this.appName = appName;
    this.phases = new Map();
    this.indexToKey = new Map();
    this.times = times || new Times(appName);
  }

  static _getIndexForPhase({ name, appId = "", widgetId = "" }) {
    return `${name}_${appId}_${widgetId}`;
  }

  getAppLoadingPhaseData({ name, appId, widgetId }) {
    return this.phases.get(
      LoadingPhases._getIndexForPhase({ name, appId, widgetId })
    );
  }

  saveLoadingPhase({ name, appId, widgetId }) {
    const phaseKey = LoadingPhases._getIndexForPhase({ name, appId, widgetId });

    if (!this.phases.has(phaseKey)) {
      const index = this.phases.size;
      this.phases.set(phaseKey, {
        name,
        phaseStartTime: performance.now(),
        index,
      });

      this.indexToKey.set(index, phaseKey);
    }
  }

  endLoadingPhase({ name, appId, widgetId, widgetArray }) {
    const phaseKey = LoadingPhases._getIndexForPhase({ name, appId, widgetId });
    if (!this.phases.has(phaseKey) || this.phases.get(phaseKey).duration) {
      return;
    }

    const phase = this.phases.get(phaseKey);
    phase.duration = performance.now() - phase.phaseStartTime;

    if (widgetArray) {
      phase.widgetArray = widgetArray;
    }
    if (widgetId) {
      phase.widgetId = widgetId;
    }

    this.phases.set(phaseKey, phase);
  }

  getNextPhaseToReport() {
    const latestStepIndex = this.phases.size - 1;
    const lastPhaseKey = this.indexToKey.get(latestStepIndex);
    return this.phases.get(lastPhaseKey);
  }

  getPhasePreviousTo({ name, appId, widgetId }) {
    const currentPhase = this.phases.get(
      LoadingPhases._getIndexForPhase({ name, appId, widgetId })
    );
    const previousPhaseIndex = this.indexToKey.get(currentPhase.index - 1);
    return this.phases.get(previousPhaseIndex);
  }

  getPhases({ appId } = {}) {
    const phaseToNamedPhaseObject = (phase) => ({
      [phase.name]: phase,
    });

    return Array.from(this.phases)
      .filter(([phaseKey]) => {
        const [, appIdOfPhase] = phaseKey.split("_");
        return (appId && appIdOfPhase === appId) || !appId;
      })
      .map(([, phase]) => phaseToNamedPhaseObject(phase));
  }
}
