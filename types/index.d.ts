type ForecastData = {
  hour: number;
  value: number;
};

type ParkingLot = {
  name: string;
  lat: number;
  lng: number;
  phone: string;
  address: string;
  slots: Slot[];
  history: ParkedHistory;
  quality: "low" | "medium" | "high";
  status: "available" | "busy";
  price: number;
};

type Slot = {
  status: "empty" | "served";
  licensePlate?: string;
};

type ParkedHistory = {
  licensePlate: string;
  parkingLot: string;
  startTime: Date;
  endTime: Date | undefined;
}[];
