import { env } from "./env";

export const generateGuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8; // eslint-disable-line
    return v.toString(16);
  });

const phaseNameExtractor =
  /\[fedops] phase:([^ ]+) ([^ ]+) ?(.*) (started|finished)/;
export const getPhaseMark = (markName) => {
  const matches = phaseNameExtractor.exec(markName);
  if (matches) {
    return {
      phaseName: matches[1],
      appId: matches[2],
      widgetId: matches[3],
    };
  }
};

const interactionNameExtractor =
  /\[fedops] ([^ ]+) interaction ([^ ]+) (started|ended)/;
export const getInteractionMark = (markName) => {
  const matches = interactionNameExtractor.exec(markName);
  if (matches) {
    return {
      appName: matches[1],
      interactionName: matches[2],
    };
  }
};

export const getPathnameTemplate = (pathname) => {
  if (isNumber(pathname)) {
    return ":param";
  }

  return pathname;
};

const isNumber = (str) => {
  return !isNaN(parseFloat(str)) && isFinite(str);
};

export const extractUrl = (url) => {
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
    return parsedUrl;
  } catch (e) {
    return { pathname: url, origin: env()?.location?.origin ?? "" };
  }
};
