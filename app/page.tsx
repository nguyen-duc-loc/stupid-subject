import React from "react";

import Forecast from "@/app/_components/Forecast";
import ParkingLots from "@/app/_components/ParkingLots";
import Map from "@/app/_components/Map";
import RecentParkedCars from "@/app/_components/RecentParkedCars";
import Statistics from "@/app/_components/Statistics";
import Header from "@/app/_components/Header";

const page = () => {
  return (
    <main className="container mx-auto px-6 xl:px-20 py-20 ">
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
    </main>
  );
};

export default page;
