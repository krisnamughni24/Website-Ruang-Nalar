import DataItem from "../data-items/common/data-item";
import { RESOURCES_TYPES_PROPS } from "../data-items/resource/resource-item";

/**
 * Data accumulator
 */
export default class DataSource {
  constructor(item = null) {
    this.items = [];

    if (item) {
      (typeof item.length === "undefined" ? [item] : item).forEach((item) =>
        this.addItem(item)
      );
    }
  }

  /**
   * Creates a new DataSource instance and clones internal state.
   *
   * @returns {DataSource}
   */
  clone() {
    return new DataSource(this.items.slice());
  }

  /**
   * Adds a new item.
   *
   * @param {Object | DataItem} item
   *
   * @return {DataSource} self
   */
  addItem(item) {
    this.items.push(item instanceof DataItem ? item : new DataItem(item));

    return this;
  }

  /**
   * Merges all added items into one plain object.
   *
   * @returns {Object}
   */
  mergeItems() {
    let res = {};

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (!item.isActive()) {
        res = null;
        break;
      }

      const data = item.export();

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          res[key] = data[key];
        }
      }
    }

    return res;
  }

  /**
   * Merges all added items into one plain object and sum up resource types props.
   *
   * @returns {Object}
   */
  mergePhasesItems() {
    let res = {};

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (!item.isActive()) {
        res = null;
        break;
      }

      const data = item.export();

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          // eslint-disable-line
          if (
            RESOURCES_TYPES_PROPS.includes(key) &&
            typeof res[key] === "number"
          ) {
            res[key] += data[key];
          } else {
            res[key] = data[key];
          }
        }
      }
    }

    return res;
  }
}
