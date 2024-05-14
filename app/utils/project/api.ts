import { Project } from "./types";

interface Props {
  limit?: number;
}

export const getProjects = async (props: Props): Promise<Project[]> => {
  const params = props.limit ? `?limit=${props.limit}` : "";
  const response = await fetch(`http://back:3000/projects${params}`, {
    cache: "no-store",
  });
  return response.json();
};
