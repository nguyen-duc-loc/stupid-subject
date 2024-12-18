"use client";

import dynamic from "next/dynamic";
import React from "react";

const DynamicLeaflet = dynamic(() => import("./DynamicLeaflet"), {
  ssr: false,
});

const Leaflet = ({ parkingLots }: { parkingLots: ParkingLot[] }) => {
  return <DynamicLeaflet parkingLots={parkingLots} />;
};

export default Leaflet;
