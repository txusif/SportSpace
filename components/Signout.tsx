import React from "react";
import { Button } from "./ui/button";
import { LuLogOut } from "react-icons/lu";

const Signout = () => {
  return (
    <Button className="flex items-center gap-2">
      <span className="">Signout </span>

      <LuLogOut size={18} />
    </Button>
  );
};

export default Signout;
