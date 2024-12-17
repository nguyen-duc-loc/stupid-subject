import React from "react";

import Leaflet from "./Leaflet";
import { getParkingLots } from "@/actions/parking";

const Map = async () => {
  const parkingLots = await getParkingLots();

  return <Leaflet parkingLots={parkingLots} />;
};

export default Map;
