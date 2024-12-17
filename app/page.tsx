import React from "react";

import Forecast from "@/components/Forecast";
import ParkingLots from "@/components/ParkingLots";
import Map from "@/components/Map";
import RecentParkedCars from "@/components/RecentParkedCars";
import Statistics from "@/components/Statistics";
import Header from "@/components/Header";

const page = () => {
  return (
    <>
      <Header />
      <div className="space-y-8">
        <Statistics />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-6 lg:h-[480px]">
          <Forecast />
          <ParkingLots />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-6 xl:gap-6 ">
          <RecentParkedCars />
          <Map />
        </div>
      </div>
    </>
  );
};

export default page;
