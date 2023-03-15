import { env } from "../env";

/**
 * Local storage wrapper (for tests mainly)
 */
export default {
  getItem(key) {
    try {
      return env().localStorage && env().localStorage.getItem(key);
    } catch (e) {}
  },

  setItem(key, value) {
    try {
      return env().localStorage && env().localStorage.setItem(key, value);
    } catch (e) {}
  },
};
