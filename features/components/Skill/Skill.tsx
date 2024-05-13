import { Progress } from "@/components/ui/progress";

const fetchSkills = async () => {
  const response = await fetch("http://back:3000/skills", {
    cache: "no-store",
  });
  return response.json();
};

const SkillsList = async () => {
  const skills = await fetchSkills();
  return (
    <>
      {skills.map((skill) => (
        <>
          <p key={skill.id}>{skill.name}</p>
          <Progress value={skill.level} />
        </>
      ))}
    </>
  );
};

const Skill = () => {
  return (
    <div className="relative pt-8">
      <h2 className="text-slate-900 font-bold text-2xl">Skills</h2>
      <SkillsList />
    </div>
  );
};

export default Skill;
