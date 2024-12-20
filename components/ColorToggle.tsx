"use client";

import React from "react";

import { AvailableColors, Color, useColor } from "@/hooks/useColor";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const mapColor = {
  zinc: "theme-zinc",
  red: "theme-red",
  rose: "theme-rose",
  orange: "theme-orange",
  green: "theme-green",
  blue: "theme-blue",
  yellow: "theme-yellow",
  violet: "theme-violet",
};

const ColorItem = ({ color }: { color: Color }) => (
  <div className="flex gap-4 items-center">
    <div className={cn("w-6 h-6 rounded-full bg-primary", mapColor[color])} />
    {color}
  </div>
);

const ColorToggle = () => {
  const { color, setColor } = useColor();

  return (
    <Select
      onValueChange={(value) => {
        setColor((value as Color) || "blue");
      }}
    >
      <SelectTrigger className="w-[180px] capitalize text-base">
        <SelectValue placeholder={<ColorItem color={color} />} />
      </SelectTrigger>
      <SelectContent>
        {AvailableColors.map((color) => (
          <SelectItem
            key={color}
            value={color}
            className="capitalize text-base"
          >
            <ColorItem color={color} />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ColorToggle;
