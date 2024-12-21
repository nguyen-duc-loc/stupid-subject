"use client";

import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const Time = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-muted-foreground text-sm">
      {format(now, "PPPP 'at' HH:mm:ss")}
    </p>
  );
};

export default Time;
