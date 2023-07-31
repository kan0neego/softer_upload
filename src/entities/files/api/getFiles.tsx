import { axiosInstance } from "@/shared";
import { AxiosRequestConfig } from "axios";
import type { QueryFileParams } from "@/shared/types";

export const getFiles = async (params?: QueryFileParams) => {
  const query = params || { fields: "items.name, items.path, items.file, items.antivirus_status, items.media_type" };
  const result = await axiosInstance.get("/resources/files", { params: query } as AxiosRequestConfig);
  return result;
};
