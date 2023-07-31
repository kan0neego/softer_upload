import { Upload } from "antd";
import { useUploadActions } from "../lib/useUploadActions";
const { Dragger } = Upload;

export default function UploadDragger() {
  const { handleAction, handleChange } = useUploadActions();
  return (
    <Dragger
      name="file"
      multiple={true}
      action={handleAction}
      onChange={handleChange}
      style={{ padding: 20 }}
    >
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  );
}
