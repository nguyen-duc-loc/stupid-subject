"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DynamicLeaflet = ({ parkingLots }: { parkingLots: ParkingLot[] }) => {
  return (
    <MapContainer
      center={[
        parkingLots.reduce((cur, p) => cur + p.lat, 0) / parkingLots.length,
        parkingLots.reduce((cur, p) => cur + p.lng, 0) / parkingLots.length,
      ]}
      zoom={16}
      scrollWheelZoom={false}
      className="rounded-lg border max-xl:!h-[480px] w-full h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {parkingLots.map(({ lat, lng, name }) => (
        <Marker key={name} position={[lat, lng]}>
          <Popup className="font-bold text-sm">{name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DynamicLeaflet;
