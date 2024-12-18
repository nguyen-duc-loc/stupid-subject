"use client";

import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ data }: { data: ForecastData[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="text-red-500">
      <BarChart data={data}>
        <XAxis
          dataKey="hour"
          tickLine={false}
          tickFormatter={(value: number) => `${value}h`}
          tick={{ fill: "hsl(var(--muted-foreground))" }}
          dy={4}
        />
        <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} dx={-6} />
        <Tooltip
          cursor={false}
          formatter={(value: number) => [
            <span className="font-bold" key={value}>
              {value}
            </span>,
            "Number of cars",
          ]}
          labelClassName="hidden"
          wrapperClassName="rounded-lg text-sm text-black"
        />
        <Bar
          dataKey="value"
          fill="var(--primary)"
          className="fill-primary"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
