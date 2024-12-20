"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const AvailableColors = [
  "zinc",
  "red",
  "rose",
  "orange",
  "green",
  "blue",
  "yellow",
  "violet",
] as const;

export type Color = (typeof AvailableColors)[number];

type ColorProviderProps = {
  children: React.ReactNode;
  defaultColor?: Color;
  storageKey?: string;
};

type ColorProviderState = {
  color: Color;
  setColor: (color: Color) => void;
};

const initialState: ColorProviderState = {
  color: "blue",
  setColor: () => null,
};

const ColorProviderContext = createContext<ColorProviderState>(initialState);

export function ColorProvider({
  children,
  defaultColor = "blue",
  storageKey = "color",
  ...props
}: ColorProviderProps) {
  const [color, setColor] = useState<Color>(
    () => (localStorage.getItem(storageKey) as Color) || defaultColor
  );

  useEffect(() => {
    const body = window.document.querySelector("body")!;

    body.classList.remove(...AvailableColors.map((color) => `theme-${color}`));

    body.classList.add(`theme-${color}`);
  }, [color]);

  const value = {
    color,
    setColor: (color: Color) => {
      localStorage.setItem(storageKey, color);
      setColor(color);
    },
  };

  return (
    <ColorProviderContext.Provider {...props} value={value}>
      {children}
    </ColorProviderContext.Provider>
  );
}

export const useColor = () => {
  const context = useContext(ColorProviderContext);

  if (context === undefined)
    throw new Error("useColor must be used within a ColorProvider");

  return context;
};
