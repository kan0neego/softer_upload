import { Spin } from "antd";
import { Suspense, lazy } from "react";
import style from "./styles.module.scss";

const UploadDragger = lazy(() =>
  import("@/features/upload-files").then((module) => ({
    default: module.UploadDrugger,
  }))
);

export default function Upload() {
  return (
    <section className={style.sectionWrapper}>
      <Suspense fallback={<Spin size="large" />}>
        <UploadDragger />
      </Suspense>
    </section>
  );
}
