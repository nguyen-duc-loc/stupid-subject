"use client";

import React from "react";
import CountUp from "react-countup";

const ValueCountUp = ({
  value,
  prefix = "",
}: {
  value: string | number;
  prefix?: string;
}) => {
  return (
    <CountUp
      end={Number(value)}
      prefix={`${prefix} `}
      className="align-middle"
    />
  );
};

export default ValueCountUp;
