import React from "react";

import Greeting from "./Greeting";
import { ModeToggle } from "../../../components/ModeToggle";

const Header = () => {
  return (
    <header className="sm:flex justify-between mb-12">
      <Greeting />
      <ModeToggle />
    </header>
  );
};

export default Header;
