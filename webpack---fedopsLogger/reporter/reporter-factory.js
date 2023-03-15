import Reporter from "./reporter";

let ReporterFactory;

export function setFactory(factory) {
  ReporterFactory = factory;
}

export function create({
  biLoggerFactory,
  baseUrl,
  endpoint,
  preset,
  useBatch,
} = {}) {
  if (!ReporterFactory) {
    return new Reporter({
      biLoggerFactory,
      baseUrl,
      endpoint,
      preset,
      useBatch,
    });
  } else {
    return ReporterFactory({ preset });
  }
}
