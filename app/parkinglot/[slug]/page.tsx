import React from "react";
import { notFound } from "next/navigation";

import { getParkingLotByName } from "@/actions/parking";
import Detail from "./_components/Detail";
import Information from "./_components/Information";
import Header from "./_components/Header";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const parkingLot = await getParkingLotByName(slug);
  if (!parkingLot) {
    return {
      title: "Parking lot not found",
      description: `Parking lot you are looking for doesn't exist.`,
    };
  }

  return {
    title: parkingLot.name,
    description: parkingLot.name,
  };
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const parkingLot = await getParkingLotByName(slug);
  if (!parkingLot) {
    notFound();
  }

  return (
    <main className="container mx-auto px-12 xl:px-18 py-20 grid grid-cols-2 xl:grid-cols-3 xl:gap-x-6 gap-y-6">
      <Header />
      <Information parkingLot={parkingLot} />
      <Detail parkingLot={parkingLot} />
    </main>
  );
};

export default page;
