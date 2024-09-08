import { Metadata } from "next";
import UpdateProfileForm from "@/components/UpdateProfileForm";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary mb-7">
        Update your guest profile
      </h2>

      <p className="mb-5 text-base text-primary-200 lg:mb-8 lg:text-lg">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm />
    </div>
  );
}
