import { Suspense, lazy } from "react";
import { Spin } from "antd";
import style from "./styles.module.scss";

const DiskCard = lazy(() => import("@/entities/disk").then(module => ({ default: module.DiskCard })));

export default function Disk() {
  return (
    <section className={style.sectionWrapper}>
      <Suspense fallback={<Spin size="large" />}>
        <DiskCard />
      </Suspense>
    </section>
  );
}
