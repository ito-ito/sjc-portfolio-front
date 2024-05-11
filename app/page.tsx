import Product from "./_components/Product";
import Profile from "./_components/Profile";
import Skill from "./_components/Skill";
import Title from "./_components/Title";
import Work from "./_components/Work";

const Page = () => {
  return (
    <div className="m-8 sm:m-20">
      <Title />
      <Profile />
      <Work />
      <Skill />
      <Product />
    </div>
  );
};

export default Page;
