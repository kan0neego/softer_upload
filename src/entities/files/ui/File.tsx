import { useLoaderData } from "react-router-dom";

export default function File() {
  const file = useLoaderData();
  return <span>{JSON.stringify(file)}</span>;
}
