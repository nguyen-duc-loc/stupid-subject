import Image from "next/image";
import React from "react";

const Greeting = () => {
  return (
    <h1 className="font-semibold text-3xl tracking-tight flex gap-4 items-end mb-2 capitalize">
      Welcome back
      <Image src="/logo.png" width={42} height={42} alt="Logo" />
    </h1>
  );
};

export default Greeting;
