import { RcFile } from "antd/es/upload";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { useAppDispatch } from "@/app/store/hooks";
import { addFile } from "@/entities/files/model/filesSlice";
import { getDownloadUrl } from "../api/getDownloadUrl";

export const useUploadActions = () => {
  const dispatch = useAppDispatch();

  const handleAction = async (file: RcFile) => {
    const downloadUrl = await getDownloadUrl(file.name);
    return downloadUrl;
  };

  const handleChange = (e: UploadChangeParam<UploadFile<any>>) => {
    const file = e.file;
    if (file.status === "done") {
      const { name, type, size } = file;
      dispatch(addFile({ name, type, size }));
    }
  };

  return { handleAction, handleChange };
};
