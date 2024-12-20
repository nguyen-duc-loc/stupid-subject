import React from "react";

import ColorToggle from "./ColorToggle";
import ModeToggle from "./ModeToggle";

const ThemeConfig = () => {
  return (
    <div className="flex gap-4 items-center">
      <ColorToggle />
      <ModeToggle />
    </div>
  );
};

export default ThemeConfig;
