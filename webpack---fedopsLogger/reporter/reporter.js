import * as defaultLoggerFactory from "@wix/web-bi-logger/dist/src/logger";

export default class Reporter {
  constructor({ biLoggerFactory, baseUrl, preset, useBatch }) {
    this._preset = preset;
    const shouldBatch = !(useBatch === false);

    this._factory =
      biLoggerFactory ||
      defaultLoggerFactory.factory({
        host: baseUrl,
        useBatch: shouldBatch,
      });

    this._publisher = this._factory.logger();
    this._nonBatchedPublisher = this._factory.logger({ useBatch: false });
  }

  flush() {
    this._publisher.flush();
  }

  report(data, reporterEndpoint, params) {
    if (!data) {
      return null;
    }

    const endpoint = reporterEndpoint || this._preset.nonPersistentEndpoint;

    if (params && params.useBatch === false) {
      return this._nonBatchedPublisher.log(data, {
        endpoint,
        category: "essential",
      });
    }
    return this._publisher.log(data, {
      endpoint,
      category: "essential",
    });
  }
}
