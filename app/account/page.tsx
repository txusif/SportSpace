import { getCurrentUser } from "@/lib/auth-actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

export default async function AccountPage() {
  const {
    data: { user },
  } = await getCurrentUser();

  return (
    <h2 className="text-2xl font-semibold text-primary mb-7">
      Welcome, {user?.user_metadata.full_name.split(" ")[0]}
    </h2>
  );
}
