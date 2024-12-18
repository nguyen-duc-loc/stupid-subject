import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Slots from "./Slots";
import History from "./History";

const Detail = ({ parkingLot }: { parkingLot: ParkingLot }) => {
  return (
    <Card className="col-span-2 p-8">
      <Tabs defaultValue="slots">
        <CardHeader>
          <TabsList className="gap-4 justify-start p-0">
            <TabsTrigger value="slots">Slots</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent className="pt-6 h-[600px]">
          <TabsContent value="slots">
            <Slots slots={parkingLot.slots} />
          </TabsContent>
          <TabsContent value="history">
            <History history={parkingLot.history} />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default Detail;
