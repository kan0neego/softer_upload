import { axiosInstance } from "@/shared";
import { AxiosRequestConfig } from "axios";
import { PARAMS_FILES} from "@/shared";
import type { QueryFileParams } from "@/shared/types";

export const getFiles = async (params?: QueryFileParams) => {
  const query = params || PARAMS_FILES;
  const result = await axiosInstance.get("/resources/files", { params: query } as AxiosRequestConfig);
  return result;
};
