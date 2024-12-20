import React from "react";

import BackButton from "./BackButton";
import ThemeConfig from "@/components/ThemeConfig";

const Header = () => {
  return (
    <header className="col-span-full flex flex-wrap gap-4 justify-between">
      <BackButton />
      <ThemeConfig />
    </header>
  );
};

export default Header;
