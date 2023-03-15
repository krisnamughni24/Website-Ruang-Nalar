import { FEDOPS_OVERRIDES_COOKIE } from "@wix/fedops-overrides";
import { env } from "./env";

export const FEDOPS_OVERRIDES_WINDOW_IDENTIFIER =
  "__DEFAULT_FEDOPS_OVERRIDES__";

export class CookieOverrides {
  /**
   * @param {import('@wix/fedops-overrides').FedopsOverrideCookie} overridesCookie
   */
  constructor() {
    this._overridesCookie =
      this._getOverridesFromWindow() ??
      this._getOverridesFromDocumentCookieIfExists();
  }

  getCookieOverridesForApp(appName) {
    return Object.assign(
      {},
      this._overridesCookie.paramsOverrides,
      this._overridesCookie.paramsOverridesForApp &&
        this._overridesCookie.paramsOverridesForApp[appName]
    );
  }

  _getOverridesFromDocumentCookieIfExists() {
    try {
      const overridesCookieContent = getCookie(FEDOPS_OVERRIDES_COOKIE);
      const overridesObject = parseJsonFromNodeOrScalaServers(
        overridesCookieContent
      );
      if (overridesObject && typeof overridesObject === "object") {
        if (overridesObject.paramsOverridesForApp) {
          overridesObject.paramsOverridesForApp = Object.entries(
            overridesObject.paramsOverridesForApp
          ).reduce(toOverridesWithoutDots, {});
        }

        this._persistOverridesToWindow(overridesObject);
        return overridesObject;
      } else {
        return {};
      }
    } catch (err) {
      console.log(err);
      return {};
    }
  }

  _persistOverridesToWindow(overridesObject) {
    env()[FEDOPS_OVERRIDES_WINDOW_IDENTIFIER] = overridesObject;
  }

  _getOverridesFromWindow() {
    return env()[FEDOPS_OVERRIDES_WINDOW_IDENTIFIER];
  }
}

function toOverridesWithoutDots(overridesMap, [appName, overrides]) {
  return {
    ...overridesMap,
    [appName.replace(/\./g, "-")]: overrides,
  };
}

function getCookie(cookieName) {
  if (!env().document || !env().document.cookie) {
    return "";
  }

  const cookieKeyValuePairs = env()
    .document.cookie.split(";")
    .map((c) => c.trim().split("="));

  const [relevantCookie] = cookieKeyValuePairs.filter(
    ([key]) => key === cookieName
  );

  if (relevantCookie) {
    const [, value] = relevantCookie;
    return value;
  } else {
    return "";
  }
}

function parseJsonFromNodeOrScalaServers(rawPayload) {
  function attemptToParseJsonRecursivelySinceScalaServersSerializeItTwice() {
    try {
      return JSON.parse(JSON.parse(rawPayload));
    } catch (err) {
      return null;
    }
  }

  function attemptURIDecodeAndParseJsonSinceNodeServersUseWithURIEncoding() {
    try {
      return JSON.parse(decodeURIComponent(rawPayload));
    } catch (err) {
      return null;
    }
  }

  return (
    attemptToParseJsonRecursivelySinceScalaServersSerializeItTwice() ||
    attemptURIDecodeAndParseJsonSinceNodeServersUseWithURIEncoding()
  );
}
