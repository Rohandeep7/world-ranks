import BaseModel from "../../models/common/BaseModel";

export default class BaseService {
  constructor(model = {}) {
    if (!model) {
      console.log("Error Please Provide Model");
    }
    this.model = model;
  }

  /**
   *
   * @param {Object} data
   * @param {BaseModel} model
   * @returns
   */
  convertToModel(data, model) {
    if (Array.isArray(data)) {
      return model.mapModels(data);
    }
    return model.mapModel(data);
  }
}
