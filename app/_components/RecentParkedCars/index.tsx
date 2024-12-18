import React from "react";
import Link from "next/link";
import slug from "slug";

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getHistory } from "@/actions/parking";
import TimeDiff from "./TimeDiff";

const RecentParkedCars = async () => {
  const history = (await getHistory()).slice(0, 7);

  return (
    <section className="col-span-5 h-full">
      <Card>
        <CardHeader>
          <CardTitle className="capitalize">Recent parked cars</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>License plate</TableHead>
                <TableHead>Parking lot</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {history.map(({ licensePlate, parkingLot, startTime }) => (
                <TableRow key={licensePlate}>
                  <TableCell className="font-semibold">
                    {licensePlate}
                  </TableCell>
                  <TableCell>
                    <Link href={`/parkinglot/${slug(parkingLot)}`}>
                      {parkingLot}
                    </Link>
                  </TableCell>
                  <TableCell className="w-28 sm:w-44">
                    <TimeDiff time={startTime} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default RecentParkedCars;
