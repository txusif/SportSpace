import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  image: string;
  fullName: string;
}

const UserAvatar = ({ fullName, image }: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{fullName}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
