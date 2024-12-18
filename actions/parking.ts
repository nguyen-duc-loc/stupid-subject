"use server";

import { faker, fakerVI } from "@faker-js/faker";
import { Banknote, Car, CircleParking, type LucideIcon } from "lucide-react";
import slug from "slug";

import { qualities, statuses } from "@/constants";

export const getStatistics = async (): Promise<
  {
    name: string;
    icon: LucideIcon;
    iconColor: string;
    value: string | number;
    valuePrefix?: string;
  }[]
> => [
  {
    name: "total revenue",
    icon: Banknote,
    iconColor: "green",
    value: faker.number.int({ min: 50000000, max: 500000000 }),
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
    const slots: Slot[] = [];
    for (let j = 0; j < 30; j++) {
      const status = faker.helpers.arrayElement(["empty", "served"]);

      slots.push({
        status: status,
        licensePlate:
          status === "served"
            ? `${faker.helpers.arrayElement([29, 30])}${faker.string.alpha({
                casing: "upper",
              })} ${String(faker.number.int({ min: 1, max: 99999 })).padStart(
                5,
                "0"
              )}`
            : undefined,
      });
    }

    const history: ParkedHistory = [];
    for (let j = 0; j < 50; j++) {
      const isEnd = faker.datatype.boolean();
      let startTime = faker.date.recent({ days: 1 });
      let endTime = faker.date.recent({ days: 1 });
      if (startTime.getTime() > endTime.getTime()) {
        [startTime, endTime] = [endTime, startTime];
      }

      history.push({
        licensePlate: `${faker.helpers.arrayElement([
          29, 30,
        ])}${faker.string.alpha({ casing: "upper" })} ${String(
          faker.number.int({ min: 1, max: 99999 })
        ).padStart(5, "0")}`,
        parkingLot: `Parking Lot Number ${faker.number.int({
          min: 1,
          max: 10,
        })}`,
        startTime: startTime,
        endTime: isEnd ? endTime : undefined,
      });
    }

    history.sort((a, b) => b.startTime.getTime() - a.startTime.getTime());

    parkingLots.push({
      lat: latlngs[i][0],
      lng: latlngs[i][1],
      name: `Parking Lot Number ${i + 1}`,
      phone: faker.phone.number({ style: "national" }),
      address: fakerVI.location.streetAddress({ useFullAddress: true }),
      slots: slots,
      history: history,
      quality: qualities[i % qualities.length],
      status: statuses[i % statuses.length],
      price: faker.number.int({ min: 5, max: 10 }) * 1000,
    });
  }

  return parkingLots;
};

export const getParkingLotByName = async (
  sl: string
): Promise<ParkingLot | undefined> => {
  const pl = (await getParkingLots()).filter((pl) => slug(pl.name) === sl);

  return pl.length > 0 ? pl[0] : undefined;
};

export const getHistory = async (): Promise<ParkedHistory> => {
  const history: ParkedHistory = [];

  for (let i = 0; i < 10000; i++) {
    const isEnd = faker.datatype.boolean();
    let startTime = faker.date.recent({ days: 1 });
    let endTime = faker.date.recent({ days: 1 });
    if (startTime.getTime() > endTime.getTime()) {
      [startTime, endTime] = [endTime, startTime];
    }

    history.push({
      licensePlate: `${faker.helpers.arrayElement([
        29, 30,
      ])}${faker.string.alpha({ casing: "upper" })} ${String(
        faker.number.int({ min: 1, max: 99999 })
      ).padStart(5, "0")}`,
      parkingLot: `Parking Lot Number ${faker.number.int({ min: 1, max: 10 })}`,
      startTime: faker.date.recent({ days: 1 }),
      endTime: isEnd ? endTime : undefined,
    });
  }

  return history.sort((a, b) => b.startTime.getTime() - a.startTime.getTime());
};
