import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import routers from "./routers";
import { Spin } from "antd";
import "./index.css";

export default function App() {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <RouterProvider router={routers} />
    </Suspense>
  );
}
