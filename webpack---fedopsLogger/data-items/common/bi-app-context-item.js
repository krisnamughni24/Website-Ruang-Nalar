import DataItem from "./data-item";

export default class BiAppContextDataItem extends DataItem {
  constructor({ appId, widgetId, isServerSide, widgetArray }) {
    super();
    this.data = this._filterUndefined({
      appId,
      widgetId,
      isServerSide,
      widgetArray,
    });
  }

  _filterUndefined(contextData) {
    const definedValues = {};
    Object.keys(contextData).forEach((key) => {
      if (contextData[key]) {
        definedValues[key] = contextData[key];
      }
    });
    return definedValues;
  }
}
