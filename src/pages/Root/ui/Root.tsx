import { Spin } from "antd";
import { Outlet, useNavigation } from "react-router-dom";

export default function Root() {
  const { state } = useNavigation();
  if (state === "loading") return <Spin size="large" />;
  return <Outlet />;
}
