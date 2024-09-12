import { Metadata } from "next";
import UpdateProfileForm from "@/components/UpdateProfileForm";
import {
  TypographyH3,
  // TypographyMutedBold,
} from "@/components/typography/Typography";
import { getProfile } from "@/lib/data-profile";
import { getCurrentUser } from "@/lib/auth-actions";
import UpdateAvatar from "@/components/UpdateAvatar";

export const metadata: Metadata = {
  title: "Profile",
};

export interface ProfileProps {
  id: string;
  full_name: string;
  email: string;
  avatar_url?: string;
  phone_number?: string;
}

export default async function ProfilePage() {
  const {
    data: { user },
  } = await getCurrentUser();

  const userProfile: ProfileProps = await getProfile(user!.id);

  return (
    <div>
      <TypographyH3>Update your profile</TypographyH3>

      {/* <TypographyMutedBold>
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </TypographyMutedBold> */}

      <div className="mt-6 grid lg:grid-cols-2 gap-12">
        <UpdateProfileForm user={userProfile} />
        <UpdateAvatar />
      </div>
    </div>
  );
}
