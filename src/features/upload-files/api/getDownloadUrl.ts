import { axiosInstance } from "@/shared";
import { AxiosRequestConfig } from "axios";
import type { DownloadURL } from "@/shared/types";

export const getDownloadUrl = async (path: string) => {
  try {
    const downloadURL = (await axiosInstance.get("/resources/upload", {
      params: { path: path },
    })) as AxiosRequestConfig<DownloadURL>;
    if (downloadURL.data) return downloadURL.data.href;
    return "";
  } catch (e: any) {
    console.error(e);
    return "";
  }
}
