import { lazy } from "react";
import { store } from "./store/store";
import { createBrowserRouter } from "react-router-dom";
import { getFiles } from "@/entities/files/api/getFiles";
import { getMetainformationFile } from "@/entities/files/api/getMetainformationFile";
import { getDiskInformation } from "@/entities/disk/api/getInformation";
import { filesUpdated } from "@/entities/files/model/filesSlice";

const Disk = lazy(() => import("@/pages/Disk").then(module => ({ default: module.Disk })))
const Files = lazy(() => import("@/pages/Files").then(module => ({ default: module.Files })))
const File = lazy(() => import("@/entities/files").then(module => ({ default: module.File })))
const Upload = lazy(() => import("@/pages/Upload").then(module => ({ default: module.Upload })))

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Disk />,
    loader: async () => {
      const result = await getDiskInformation();
      return result.data;
    },
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/files",
    element: <Files />,
    loader: async () => {
      const result = await getFiles();
      store.dispatch(filesUpdated(result.data));
      return result.data;
    },
  },
  {
    path: "/files/*",
    element: <File />,
    loader: async ({ params: path }) => {
      if (path["*"]) {
        const result = await getMetainformationFile(path["*"]);
        return result.data;
      }
    },
  },
]);

export default routers;
