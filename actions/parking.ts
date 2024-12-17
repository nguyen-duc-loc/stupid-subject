"use server";

import { qualities, statuses } from "@/constants";
import { faker } from "@faker-js/faker";
import { Banknote, Car, CircleParking, type LucideIcon } from "lucide-react";

export const getStatistics = async (): Promise<
  {
    name: string;
    icon: LucideIcon;
    iconColor: string;
    value: string;
    valuePrefix?: string;
  }[]
> => [
  {
    name: "total revenue",
    icon: Banknote,
    iconColor: "green",
    value: `${faker.number.int({ min: 50000000, max: 500000000 })}`,
    valuePrefix: "₫",
  },
  {
    name: "total parked cars",
    icon: Car,
    iconColor: "red",
    value: `${faker.number.int({ min: 10000, max: 100000 })}`,
  },
  {
    name: "total parking lots",
    icon: CircleParking,
    iconColor: "blue",
    value: `${10}`,
  },
];

export const getForecastData = async (
  nextHours: number
): Promise<ForecastData[]> => {
  const data: ForecastData[] = [];

  const currentHour = new Date().getHours();
  for (let i = 1; i <= nextHours; i++) {
    data.push({
      hour: (currentHour + i) % 24,
      value: faker.number.int({ min: 50, max: 200 }),
    });
  }

  return data;
};

export const getParkingLots = async (): Promise<ParkingLot[]> => {
  const latlngs = [
    [21.036956749376927, 105.78225550964487],
    [21.03755493601789, 105.78336908159015],
    [21.038355006895337, 105.78272817687346],
    [21.039342004300334, 105.78177483110736],
    [21.0372184563279, 105.78594872307488],
    [21.040358903904842, 105.78272817684082],
    [21.0403663810819, 105.78132619777303],
    [21.04085239678571, 105.78445861957593],
    [21.03967847922107, 105.78485117371491],
    [21.03571550444019, 105.78269613161174],
    [21.03449668150883, 105.78135824299393],
    [21.0329637919672, 105.78121403943265],
  ];

  const parkingLots: ParkingLot[] = [];

  for (let i = 0; i < 10; i++) {
    parkingLots.push({
      lat: latlngs[i][0],
      lng: latlngs[i][1],
      name: `Parking Lot Number ${i + 1}`,
      phone: faker.phone.number({ style: "national" }),
      quality: qualities[i % qualities.length],
      status: statuses[i % statuses.length],
      price: faker.number.int({ min: 5, max: 10 }) * 1000,
    });
  }

  return parkingLots;
};

export const getHistory = async (): Promise<ParkedHistory> => {
  const history: ParkedHistory = [];

  for (let i = 0; i < 10000; i++) {
    history.push({
      licensePlate: `${faker.helpers.arrayElement([
        29, 30,
      ])}${faker.string.alpha({ casing: "upper" })} ${String(
        faker.number.int({ min: 1, max: 99999 })
      ).padStart(5, "0")}`,
      parkingLot: `Parking Lot Number ${faker.number.int({ min: 1, max: 10 })}`,
      time: faker.date.recent({ days: 1 }),
    });
  }

  return history.sort((a, b) => b.time.getTime() - a.time.getTime());
};
