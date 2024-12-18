import React from "react";

import Leaflet from "./Leaflet";
import { getParkingLots } from "@/actions/parking";
import { Card } from "@/components/ui/card";

const Map = async () => {
  const parkingLots = await getParkingLots();

  return (
    <Card className="col-span-7">
      <Leaflet parkingLots={parkingLots} />
    </Card>
  );
};

export default Map;
