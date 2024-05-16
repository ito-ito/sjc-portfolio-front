import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div className="h-screen content-center">
      <h2 className="font-semibold text-slate-400">About me</h2>
      <Avatar className="h-32 w-32">
        <AvatarImage
          src="https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_12.png"
          alt="avatar"
        />
        <AvatarFallback>HT</AvatarFallback>
      </Avatar>
      <p className="text-3xl font-extrabold leading-none">Hoge Tara</p>
      <p className="text-md text-muted-foreground mt-2">Software Engineer</p>
      <p className="text-sm mt-4">
        Experienced software engineer with a decade of expertise in designing, developing, and
        deploying software solutions. Proficient in multiple languages and frameworks, with a track
        record of delivering scalable products. Skilled in system architecture, database design, and
        performance optimization. Strong leader and collaborator, translating business needs into
        technical solutions. Committed to innovation, staying updated with emerging technologies.
        Passionate problem-solver dedicated to enhancing product quality and user experience.
        Effective communicator, fostering collaboration and inclusivity for team success.
      </p>
      <div className="mt-4 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <p className="text-sm ml-2">hoge@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
