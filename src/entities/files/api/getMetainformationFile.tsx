import { axiosInstance } from "@/shared";
import { PreviewSize, Sort } from "@/shared/types";
import { AxiosRequestConfig } from "axios";

type Params = AxiosRequestConfig<{
  fields: string;
  limit: number;
  offset: number;
  preview_crop: true | false;
  preview_size: PreviewSize;
  sort: Sort;
}>;

export const getMetainformationFile = async (path: string, params?: Params) => {
  const result = await axiosInstance.get(`/resources?path=${path}`, params);
  return result;
};
