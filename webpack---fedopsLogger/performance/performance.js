import { env } from "../env";

export default {
  getNavigation() {
    return env().performance?.navigation || {};
  },

  /**
   * get all loaded resources
   */
  getResources() {
    return env().performance?.getEntriesByType?.("resource") || [];
  },

  /**
   * get all loaded resources
   */
  getMarks() {
    return env().performance?.getEntriesByType?.("mark") || [];
  },

  getTiming() {
    return env().performance?.timing || {};
  },

  clearResourceTimings() {
    // eslint-disable-next-line no-unused-expressions
    env().performance?.clearResourceTimings?.();
  },

  /**
   * Duration relative to navigation start (env().performance.timing.navigationStart)
   * fallback to: performance.now -> now (nodejs) -> getTime()
   */
  now() {
    return (
      env().performance?.now?.() ||
      (typeof performance !== "undefined" && performance?.now?.()) ||
      new Date().getTime()
    );
  },

  /**
   * Duration from fetch start to response end
   */
  responseEndTime() {
    const fetchStart = performance?.timing?.fetchStart;
    const responseEnd = performance?.timing?.responseEnd;

    if (fetchStart && responseEnd) {
      return responseEnd - fetchStart;
    }
  },

  /**
   * Create a performance timestamp
   */
  mark(name) {
    // eslint-disable-next-line no-unused-expressions
    env().performance?.mark?.(name);
  },

  /**
   * Record a performance measurement
   */
  measure(name, startMark, endMark) {
    // eslint-disable-next-line no-unused-expressions
    env().performance?.measure?.(name, startMark, endMark);
  },

  /**
   * Get performance entries by name
   */
  getEntriesByName(name) {
    return env().performance?.getEntriesByName?.(name) || [];
  },
};
