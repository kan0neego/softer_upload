import { RouterProvider } from "react-router-dom";
import routers from "./routers";
import "./index.css";

export default function App() {
  return <RouterProvider router={routers} />;
}
