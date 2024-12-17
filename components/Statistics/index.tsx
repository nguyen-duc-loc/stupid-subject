import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ValueCountUp from "../ValueCountUp";
import { cn } from "@/lib/utils";
import { getStatistics } from "@/actions/parking";

const Statistics = async () => {
  const statistics = await getStatistics();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statistics.map((stat) => {
        const { name, iconColor, value, valuePrefix } = stat;

        return (
          <Card key={name} className="max-lg:first:col-span-full">
            <CardHeader>
              <CardTitle className="font-normal text-lg text-muted-foreground capitalize tracking-wide">
                {name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-2xl xl:text-3xl font-semibold tracking-wide flex items-center gap-6">
              <stat.icon
                className={cn(
                  "rounded-full p-3 w-12 h-12 dark:bg-transparent dark:border-current border-[1px]",
                  iconColor === "red"
                    ? "text-red-600"
                    : iconColor === "green"
                    ? "text-green-600"
                    : "text-blue-600",
                  iconColor === "red"
                    ? "bg-red-100"
                    : iconColor === "green"
                    ? "bg-green-100"
                    : "bg-blue-100"
                )}
              />
              <ValueCountUp value={value} prefix={valuePrefix} />
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
};

export default Statistics;
