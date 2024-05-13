import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div className="relative pt-8">
      <h2 className="text-slate-900 font-bold text-2xl">About me</h2>
      <div className="flex mt-5 ml-5 item-center">
        <Avatar>
          <AvatarImage
            src="https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_12.png"
            alt="avatar"
          />
          <AvatarFallback>HT</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Hoge Tara</p>
          <p className="text-sm text-muted-foreground">hoge@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
