import React from "react";

import Greeting from "./Greeting";
import ThemeConfig from "@/components/ThemeConfig";

const Header = () => {
  return (
    <header className="sm:flex justify-between mb-12">
      <Greeting />
      <ThemeConfig />
    </header>
  );
};

export default Header;
