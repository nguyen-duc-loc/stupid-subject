"use client";

import dynamic from "next/dynamic";
import React from "react";

const DynamicLeaflet = dynamic(() => import("./DynamicLeaflet"), {
  ssr: false,
});

const Leaflet = ({ parkingLots }: { parkingLots: ParkingLot[] }) => {
  return (
    <section className="col-span-7">
      <DynamicLeaflet parkingLots={parkingLots} />
    </section>
  );
};

export default Leaflet;
