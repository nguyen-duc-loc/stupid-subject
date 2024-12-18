"use client";

import React, { useState } from "react";
import Link from "next/link";
import slug from "slug";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { statuses } from "@/constants";

const Content = ({ parkingLots }: { parkingLots: ParkingLot[] }) => {
  const [search, setSearch] = useState<{ name: string; status: string }>({
    name: "",
    status: "all",
  });

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((search) => ({ ...search, name: e.currentTarget?.value }));
  };

  const onFilterChange = (value: string) => {
    setSearch((search) => ({ ...search, status: value }));
  };

  parkingLots = parkingLots.filter((pl) =>
    pl.name.toLowerCase().includes(search.name.toLowerCase())
  );

  if (search.status !== "all") {
    parkingLots = parkingLots.filter((pl) => pl.status === search.status);
  }

  return (
    <CardContent className="h-[calc(100%-140px)]">
      <div className="flex gap-4">
        <Input
          className="mb-4"
          placeholder="Search"
          onChange={onSearchChange}
        />
        <Select onValueChange={onFilterChange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              {statuses.map((s) => (
                <SelectItem key={s} value={s} className="capitalize">
                  {`${s[0].toUpperCase() + s.slice(1)}`}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea>
        {parkingLots.map(({ name, status }) => (
          <Card key={name} className="mb-3 shadow-sm">
            <CardContent className="px-4 py-3">
              <Link
                href={`/parkinglot/${slug(name)}`}
                key={name}
                className="flex items-center justify-between"
              >
                {name}
                <div className="w-[100px] text-center">
                  <Badge
                    className={`${
                      status === "available"
                        ? "bg-green-600 dark:text-green-600"
                        : "bg-red-600 dark:text-red-600"
                    }`}
                  >
                    {status}
                  </Badge>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </CardContent>
  );
};

export default Content;
