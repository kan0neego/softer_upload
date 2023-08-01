import { lazy } from "react";
import { Suspense } from "react";
import { Spin } from "antd";
import style from "./styles.module.scss";

const FilesList = lazy(() =>
  import("@/entities/files").then((module) => ({ default: module.FilesList }))
);

export default function Files() {
  return (
    <div className={style.sectionWrapper}>
      <Suspense fallback={<Spin size="large" />}>
        <FilesList />
      </Suspense>
    </div>
  );
}
