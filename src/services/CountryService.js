import BaseService from "./common/BaseService";
import axiosService from "./common/AxiosService";
import { BASE_URL } from "../constants";
class CountryService extends BaseService {
  constructor(baseUrl) {
    super();
    axiosService.createInstance(baseUrl);
  }

  async getAllCountries(params) {
    const response = await axiosService.get("all");

    return response;
  }
}

const countryService = new CountryService(BASE_URL.REST_COUNTRIES_API);
export default countryService;
