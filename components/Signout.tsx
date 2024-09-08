import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

const Signout = () => {
  return (
    <Button className="flex items-center gap-2">
      <span className="">Signout </span>

      <LogOut size={18} />
    </Button>
  );
};

export default Signout;
