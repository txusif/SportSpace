import Link from "next/link";
import { buttonVariants } from "./ui/button";

const LoginMessage = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-lg text-center">
        Please login to reserve this
        <br /> turf right now
      </p>
      <Link
        href="/login"
        className={buttonVariants({
          variant: "default",
        })}
      >
        Login
      </Link>{" "}
    </div>
  );
};

export default LoginMessage;
