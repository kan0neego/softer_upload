import { Link } from "react-router-dom";
import { useAppSelector } from "@/app/store/hooks";
import { List } from "antd";
import style from "./filesList.module.scss";

export default function FilesList() {
  const selectItems = useAppSelector((state) => state.files.items);
  return (
    <>
      {selectItems.length ? (
        <div className={style.filesListWrapper}>
          <List
            style={{ width: 950 }}
            itemLayout="horizontal"
            dataSource={selectItems}
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
      ) : null}
    </>
  );
}
