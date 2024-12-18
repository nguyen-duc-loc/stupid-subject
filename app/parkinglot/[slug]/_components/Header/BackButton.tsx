"use client";

import React from "react";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="outline" onClick={() => router.back()}>
      <Undo2 />
      Back
    </Button>
  );
};

export default BackButton;
