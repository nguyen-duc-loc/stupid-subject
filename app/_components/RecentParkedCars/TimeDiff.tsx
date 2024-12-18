"use client";

import dynamic from "next/dynamic";
import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

const DynamicTimeDiff = dynamic(() => import("./DynamicTimeDiff"), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-6 rounded-sm" />,
});

const TimeDiff = ({ time }: { time: Date }) => {
  return <DynamicTimeDiff time={time} />;
};

export default TimeDiff;
