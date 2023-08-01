import { Link, useLoaderData } from "react-router-dom";
import { Card } from "antd";
import { FileOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import { bytesToSize } from "@/shared";
import type { InformationDisk } from "@/shared/types";
const { Meta } = Card;

export default function DiskCard() {
  const diskInformation = useLoaderData() as InformationDisk;
  const totalSpace = bytesToSize(diskInformation.total_space);
  const usedSpace = bytesToSize(diskInformation.used_space);

  return (
    <Card
      style={{ width: 304 }}
      actions={[
        <Link to="/files">
          <FileOutlined key="files" />
        </Link>,
        <Link to="upload">
          <CloudDownloadOutlined key="upload" />
        </Link>,
      ]}
    >
      <img
        width={256}
        height={256}
        alt="Yandex Disk"
        src="images/yandex-disk.png"
      />
      <Meta
        title={
          <Link to="/files">
            Yandex Диск - {diskInformation.user.display_name}
          </Link>
        }
        description={
          <ul>
            <li>{`Объем - ${totalSpace}`}</li>
            <li>{`Использовано - ${usedSpace}`}</li>
          </ul>
        }
      />
    </Card>
  );
}
