import React from "react";

import BackButton from "./BackButton";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  return (
    <header className="col-span-full flex justify-between">
      <BackButton />
      <ModeToggle />
    </header>
  );
};

export default Header;
