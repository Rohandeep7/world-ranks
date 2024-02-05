import BaseModel from "../../../models/common/models/BaseModel";

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
    return model.mapModel(data);
  }
}
