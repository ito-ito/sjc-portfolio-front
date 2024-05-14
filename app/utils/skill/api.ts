import { Skill } from "./types";

export const getSkills = async (): Promise<Skill[]> => {
  const response = await fetch("http://back:3000/skills", {
    cache: "no-store",
  });
  return response.json();
};
