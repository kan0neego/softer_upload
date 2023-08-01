import { Link } from "react-router-dom";
import { List } from "antd";
import { useAppSelector } from "@/app/store/hooks";
import style from "./filesList.module.scss";

export default function FilesList() {
  const items = useAppSelector((state) => state.files.items);

  return (
    <>
      <div className={style.filesListWrapper}>
        <List
          style={{ width: 950 }}
          itemLayout="horizontal"
          dataSource={items}
          renderItem={(item) => (
            <List.Item actions={[]}>
              <List.Item.Meta
                title={<Link to={`/files/${item.path}`}>{item.name}</Link>}
                description={item.media_type}
              />
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
