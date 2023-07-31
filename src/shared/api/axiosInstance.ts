import qs from "qs";
import axios from "axios";
import { getStrapiError } from "../lib/getStrapiError";

export const axiosInstance = axios.create({
  headers: {
    Authorization: `OAuth ${process.env.REACT_APP_SECRET_TOKEN}`,
  },
  baseURL: "https://cloud-api.yandex.net/v1/disk",
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { encodeValuesOnly: true }),
  },
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(getStrapiError(err) || err)
);
