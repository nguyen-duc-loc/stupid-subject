type ForecastData = {
  hour: number;
  value: number;
};

type ParkingLot = {
  name: string;
  lat: number;
  lng: number;
  phone: string;
  quality: "low" | "medium" | "high";
  status: "available" | "busy";
  price: number;
};

type ParkedHistory = {
  licensePlate: string;
  parkingLot: string;
  time: Date;
}[];
