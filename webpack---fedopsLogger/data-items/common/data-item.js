export default class DataItem {
  constructor(data = undefined) {
    this.data = data;
  }

  isActive() {
    return true;
  }

  export() {
    return this.data;
  }
}
