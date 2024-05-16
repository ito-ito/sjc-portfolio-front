import { Skill } from "@/app/utils/skill/types";
import { Progress } from "@/components/ui/progress";

interface Props {
  skills: Skill[];
}

const SkillList = (props: Props) => {
  const { skills } = props;
  return (
    <div className="h-screen content-center">
      <h2 className="text-semibold text-slate-300 text-center">Skills</h2>
      <div className="">
        {skills.map((skill) => (
          <div key={skill.id} className="w-2/3 mx-auto">
            <p className="mt-2">{skill.name}</p>
            <Progress value={skill.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
