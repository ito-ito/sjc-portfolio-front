import * as Top from "@/features/components/Index";
import { getSkills } from "./utils/skill/api";
import { getProducts } from "./utils/product/api";
import { getProjects } from "./utils/project/api";

const Page = async () => {
  const skills = await getSkills();
  const products = await getProducts();
  const projects = await getProjects({ limit: 9 });

  return (
    <div className="container">
      <Top.Home />
      <Top.Profile />
      <Top.ProjectList projects={projects} />
      <Top.SkillList skills={skills} />
      <Top.ProductList products={products} />
    </div>
  );
};

export default Page;
