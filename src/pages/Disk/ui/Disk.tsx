import { DiskCard } from "@/entities/disk";
import style from "./styles.module.scss";

export default function Disk() {
  return (
    <section className={style.sectionWrapper}>
      <DiskCard />
    </section>
  );
}
