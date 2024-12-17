import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { getForecastData } from "@/actions/parking";
import Chart from "./Chart";

const Forecast = async () => {
  const data = await getForecastData(9);

  return (
    <section className="col-span-2">
      <Card className="h-full">
        <CardHeader className="mb-4">
          <CardTitle>Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-4 h-[360px]">
            <Chart data={data} />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Forecast;
