import React from "react";
import { formatDistanceToNowStrict } from "date-fns";

const DynamicTimeDiff = ({ time }: { time: Date }) => {
  return <span>{`${formatDistanceToNowStrict(time)} ago`}</span>;
};

export default DynamicTimeDiff;
