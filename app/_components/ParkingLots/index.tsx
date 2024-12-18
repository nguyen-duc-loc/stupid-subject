import React from "react";

import { getParkingLots } from "@/actions/parking";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Content from "./Content";

const ParkingLots = async () => {
  const parkingLots = await getParkingLots();

  return (
    <section>
      <Card className="h-[480px]">
        <CardHeader className="mb-2">
          <CardTitle>Parking Lots</CardTitle>
        </CardHeader>
        <Content parkingLots={parkingLots} />
      </Card>
    </section>
  );
};

export default ParkingLots;
