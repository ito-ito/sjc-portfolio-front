import { Skill } from "@/app/utils/skill/types";
import { Progress } from "@/components/ui/progress";

interface Props {
  skills: Skill[];
}

const SkillList = (props: Props) => {
  const { skills } = props;
  return (
    <div className="relative pt-8">
      <h2 className="text-slate-900 font-bold text-2xl">Skills</h2>
      {skills.map((skill) => (
        <>
          <p key={skill.id}>{skill.name}</p>
          <Progress value={skill.level} />
        </>
      ))}
    </div>
  );
};

export default SkillList;
