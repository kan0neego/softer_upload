import { FilesList } from "@/entities/files";
import { UploadDrugger } from "@/features/upload-files";
import style from "./style.module.scss";

export default function Files() {
  return (
    <div className={style.sectionWrapper}>
      <UploadDrugger />
      <FilesList />
    </div>
  );
}
