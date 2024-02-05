import axios from "axios";

class AxiosService {
  constructor(baseURL) {
    this.createInstance(baseURL);
  }

  createInstance(baseURL) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
    });
    return this.axiosInstance;
  }

  async get(url, params = {}, headers = {}) {
    try {
      const response = await this.axiosInstance.get(url, { params, headers });
      return response.data;
    } catch (error) {
      this.#handleAxiosError(error);
    }
  }

  async post(url, data = {}, headers = {}) {
    try {
      const response = await this.axiosInstance.post(url, data, { headers });
      return response.data;
    } catch (error) {
      this.#handleAxiosError(error);
    }
  }

  #handleAxiosError(error) {
    if (axios.isCancel(error)) {
      console.log("Request cancelled:", error.message);
    } else {
      console.error("Request error:", error.message);
      throw new Error(error.message || "An error occurred");
    }
  }
}

const axiosService = new AxiosService();
export default axiosService;
