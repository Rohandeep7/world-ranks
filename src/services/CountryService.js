import BaseService from "./common/BaseService";
import axiosService from "./common/AxiosService";
import { BASE_URL } from "../constants";
import CountryDetailsModel from "../models/CountryDetailsModel";
class CountryService extends BaseService {
  constructor(baseUrl) {
    super();
    axiosService.createInstance(baseUrl);
  }

  async getAllCountries(params) {
    const response = await axiosService.get("all");

    return this.convertToModel(response, CountryDetailsModel);
  }

  async searchCountries(params) {
    const url = params.name ? `name/${params.name}` : "all";
    const response = await axiosService.get(url, {});
    return this.convertToModel(response, CountryDetailsModel);
  }
}

const countryService = new CountryService(BASE_URL.REST_COUNTRIES_API);
export default countryService;
