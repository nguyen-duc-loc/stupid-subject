"use client";

import React from "react";
import { formatDistanceToNowStrict } from "date-fns";

const TimeDiff = ({ time }: { time: Date }) => {
  return <span>{formatDistanceToNowStrict(time)}</span>;
};

export default TimeDiff;
