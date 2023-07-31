import { axiosInstance } from "@/shared";
import { AxiosResponse } from "axios";
import type { InformationDisk } from "@/shared/types";

export const getDiskInformation = async (): Promise<AxiosResponse<InformationDisk>> => {
  const information = await axiosInstance.get("/");
  return information;
};
