import { TypographyH3 } from "@/components/typography/Typography";
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
    <TypographyH3>
      Welcome, {user?.user_metadata.full_name.split(" ")[0]}
    </TypographyH3>
  );
}
