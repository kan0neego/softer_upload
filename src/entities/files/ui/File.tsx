import { useLoaderData } from "react-router-dom";

type Props = {};

export default function File({}: Props) {
  const file = useLoaderData();
  console.log(file);
  return <div>File</div>;
}
