import DataItem from "../common/data-item";

export default class DurationDataItem extends DataItem {
  constructor(duration) {
    super({
      duration,
    });
  }

  setFirstRequestDuration(firstRequestDuration) {
    this.data.frd = firstRequestDuration;
    return this;
  }
}
