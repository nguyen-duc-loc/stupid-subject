import React from "react";

import Greeting from "./Greeting";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="sm:flex justify-between mb-12">
      <Greeting />
      <ModeToggle />
    </div>
  );
};

export default Header;
