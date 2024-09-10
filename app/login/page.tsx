import SignInButton from "@/components/SignInButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="mt-10 flex flex-col items-center gap-6">
      <h2 className="text-xl font-semibold lg:text-3xl">
        Sign in to access your account
      </h2>
      <SignInButton />
    </div>
  );
}
