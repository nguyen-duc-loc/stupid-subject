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
} from "../ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
                <TableHead className="text-center capitalize">
                  License plate
                </TableHead>
                <TableHead className="text-center capitalize">
                  Parking lot
                </TableHead>
                <TableHead className="text-center">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {history.map(({ licensePlate, parkingLot, time }) => (
                <TableRow key={licensePlate}>
                  <TableCell className="text-center">{licensePlate}</TableCell>
                  <TableCell className="text-center">
                    <Link href={`/parkinglot/${slug(parkingLot)}`}>
                      {parkingLot}
                    </Link>
                  </TableCell>
                  <TableCell className="text-center">
                    <TimeDiff time={time} />
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
