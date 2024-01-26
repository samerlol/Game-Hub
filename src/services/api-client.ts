import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
export interface FetchResponse<T> {
  count: number;
  next?: string;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3ac9a056722b4bfbb81c9a2e75f3a2c6" //TODO: move to env variable.
  }
});

class APIClient<T> {
  end_point: string;
  
  constructor(end_point: string) {
    this.end_point = end_point;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>, AxiosResponse>(this.end_point, config)
      .then((res) => res.data);
  };
}

export default APIClient;
