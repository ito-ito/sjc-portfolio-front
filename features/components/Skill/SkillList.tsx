import { Skill } from "@/app/utils/skill/types";
import { Progress } from "@/components/ui/progress";

interface Props {
  skills: Skill[];
}

const SkillList = (props: Props) => {
  const { skills } = props;
  return (
    <div className="pb-16 h-1/2 sm:h-screen content-center">
      <h2 className="text-2xl sm:text-3xl text-semibold text-slate-300 text-center pb-8">Skills</h2>
      <div className="">
        {skills.map((skill) => (
          <div key={skill.id} className="sm:w-2/3 mx-auto">
            <p className="mt-2">{skill.name}</p>
            <Progress value={skill.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
