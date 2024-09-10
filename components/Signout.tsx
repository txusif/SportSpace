import React from "react";
import { LuLogOut } from "react-icons/lu";
import { Button } from "./ui/button";

const Signout = () => {
  return (
    <Button className="flex items-center gap-2">
      <span className="">Signout </span>

      <LuLogOut size={18} />
    </Button>
  );
};

export default Signout;
