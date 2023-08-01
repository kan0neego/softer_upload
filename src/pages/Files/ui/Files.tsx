import { lazy } from "react";
import { Suspense } from "react";
import { Spin } from "antd";
import style from "./styles.module.scss";

const UploadDrugger = lazy(() => import("@/features/upload-files").then(module => ({ default: module.UploadDrugger })))
const FilesList = lazy(() => import("@/entities/files").then(module => ({ default: module.FilesList })))

export default function Files() {
  return (
    <div className={style.sectionWrapper}>
      <Suspense fallback={<Spin size="large" />}>
        <UploadDrugger />
        <FilesList />
      </Suspense>
    </div>
  );
}
