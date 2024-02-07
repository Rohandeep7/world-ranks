export default class BaseModel {
  constructor(model = {}) {
    this.assign(model);
  }

  static mapModel(data = {}) {
    return new this(data);
  }

  static mapModels(arrayOfData = []) {
    return arrayOfData ? arrayOfData.map((data) => new this(data)) : [];
  }

  assign(model) {
    Object.assign(this, model);
  }
}
