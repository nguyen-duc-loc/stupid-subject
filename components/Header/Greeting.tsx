import { getComputerName } from "@/actions/computer-name";
import Image from "next/image";
import React from "react";

const Greeting = async () => {
  const computerName = await getComputerName();

  return (
    <section className="mb-8 sm:mb-0">
      <h1 className="font-semibold text-3xl tracking-tight flex gap-4 items-end mb-2">
        Welcome, {computerName}
        <Image src="/logo.png" width={42} height={42} alt="Logo" />
      </h1>
      <p className="text-muted-foreground text-sm">
        {new Date().toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </section>
  );
};

export default Greeting;
