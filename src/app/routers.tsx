import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/pages/Root";
import { Disk } from "@/pages/Disk";
import { Files } from "@/pages/Files";
import { File } from "@/entities/files";
import { getFiles } from "@/entities/files/api/getFiles";
import { getMetainformationFile } from "@/entities/files/api/getMetainformationFile";
import { getDiskInformation } from "@/entities/disk/api/getInformation";
import { store } from "./store/store";
import { filesUpdated } from "@/entities/files/model/filesSlice";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Disk />,
        loader: async () => {
          const result = await getDiskInformation();
          return result.data;
        },
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
    ],
  },
]);

export default routers;
