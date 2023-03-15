import {
  getLoadStartTime as getLoadStartTimeFromGlobal,
  setLoadStartTime as setLoadStartTimeToGlobal,
} from "../global-app-data/global-app-data";
import performance from "../performance/performance";

export default class Times {
  constructor(appName) {
    this.appName = appName;
    this.apps = {};
    this.apps[appName] = {};
  }

  _getKeyForApp(appId = this.appName, widgetId) {
    return widgetId ? `${appId}_${widgetId}` : appId;
  }

  setLoadStarted({ appId, widgetId } = {}) {
    const key = this._getKeyForApp(appId, widgetId);

    if (!this.apps[key]) {
      this.apps[key] = {};
    }

    const loadStartTime = performance.now();
    this.apps[key].startLoadTime = loadStartTime;

    if (!appId) {
      setLoadStartTimeToGlobal(key, loadStartTime);
    }
  }

  getLoadStartTime({ appId, widgetId } = {}) {
    const key = this._getKeyForApp(appId, widgetId);
    const loadStartTime =
      this.getLoadStartTimeFromInstance(key) ||
      getLoadStartTimeFromGlobal(key) ||
      0;

    return Math.floor(loadStartTime);
  }

  getLoadStartTimeFromInstance(key) {
    return this.apps[key] && this.apps[key].startLoadTime;
  }

  getAppLoadTime({ appId, widgetId } = {}) {
    return Math.floor(
      performance.now() - this.getLoadStartTime({ appId, widgetId })
    );
  }

  getFirstRequestDuration({ appId, widgetId } = {}) {
    return this.getLoadStartTime({ appId, widgetId });
  }
}
