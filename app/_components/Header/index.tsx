import React from "react";

import Greeting from "./Greeting";
import ThemeConfig from "@/components/ThemeConfig";
import Time from "./Time";

const Header = () => {
  return (
    <header className="sm:flex justify-between mb-12">
      <div className="mb-8 sm:mb-0">
        <Greeting />
        <Time />
      </div>
      <ThemeConfig />
    </header>
  );
};

export default Header;
