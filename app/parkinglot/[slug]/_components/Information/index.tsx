import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BadgeCheck,
  Banknote,
  ChartNoAxesCombined,
  EthernetPort,
  IdCard,
  type LucideIcon,
  MapPin,
  ParkingMeter,
  Phone,
} from "lucide-react";
import { Background } from "./Background";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const Information = ({ parkingLot }: { parkingLot: ParkingLot }) => {
  const { name, phone, address, slots, status, quality, price } = parkingLot;

  const fields: {
    name: string;
    value: string | number | React.ReactNode;
    icon: LucideIcon;
    iconClasses?: string;
  }[] = [
    {
      name: "Name",
      value: name,
      icon: IdCard,
      iconClasses: "text-foreground",
    },
    {
      name: "Phone",
      value: phone,
      icon: Phone,
      iconClasses: "text-red-600",
    },
    {
      name: "Address",
      value: address,
      icon: MapPin,
      iconClasses: "text-blue-600",
    },
    {
      name: "Total slots",
      value: slots.length,
      icon: EthernetPort,
      iconClasses: "text-purple-600",
    },
    {
      name: "Status",
      value: (
        <Badge
          className={`${
            status === "available"
              ? "bg-green-600 dark:text-green-600"
              : "bg-red-600 dark:text-red-600"
          }`}
        >
          {status}
        </Badge>
      ),
      icon: ChartNoAxesCombined,
      iconClasses: "text-green-500",
    },
    {
      name: "Quality",
      value: (
        <Badge
          className={`${
            quality === "high"
              ? "bg-green-600 dark:text-green-600"
              : quality === "low"
              ? "bg-red-600 dark:text-red-600"
              : "bg-yellow-600 dark:text-yellow-600"
          }`}
        >
          {quality}
        </Badge>
      ),
      icon: BadgeCheck,
      iconClasses: "text-yellow-500",
    },
    {
      name: "Price",
      value: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
      }).format(price),
      icon: Banknote,
      iconClasses: "text-green-600",
    },
  ];

  return (
    <div className="col-span-2 xl:border-r-2 xl:pr-6 xl:col-span-1">
      <Card className="overflow-hidden">
        <CardHeader className="h-60 xl:h-40 relative border-b overflow-hidden bg-transparent dark">
          <Background number={30} />
        </CardHeader>
        <CardContent className="relative pt-20 pb-8 px-12">
          <ParkingMeter className="rounded-full border p-4 w-20 h-20 -translate-y-1/2 -translate-x-1/2 top-0 left-1/2 bg-background text-primary absolute" />
          <div className="space-y-6">
            {fields.map((field) => (
              <div key={field.name} className="flex gap-3 items-start">
                <div className="flex gap-2 items-center">
                  <field.icon
                    className={cn("text-primary", field.iconClasses)}
                  />
                  <span className="font-semibold">{field.name}:</span>
                </div>
                <span className="capitalize">{field.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Information;
