"use client";

import {
  FlightAirport,
  FlightMultiRoute,
  Map,
} from "@/components/ui/flightcn-flight-multi-route";
import { cn } from "@/lib/utils";

const MANJERI = [76.12, 11.12];

const destinations = [
  { name: "Delhi", coordinates: [77.21, 28.61], duration: 6600 },
  { name: "Mumbai", coordinates: [72.88, 19.08], duration: 5900 },
  { name: "Bengaluru", coordinates: [77.59, 12.97], duration: 5200 },
  { name: "Hyderabad", coordinates: [78.49, 17.39], duration: 6100 },
  { name: "Chennai", coordinates: [80.27, 13.08], duration: 5600 },
  { name: "Kolkata", coordinates: [88.36, 22.57], duration: 7000 },
  { name: "South Africa", coordinates: [28.04, -26.2], duration: 9200 },
];

const destinationMarker = (
  <span className="block size-3 rounded-full border-2 border-[#FAF7F2] bg-[#B8863F] shadow-[0_0_0_4px_rgba(184,134,63,.18)]" />
);

export function IndiaReachGlobe({ className }) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-dark-section",
        className,
      )}
    >
      <Map
        theme="dark"
        center={[67, 9]}
        zoom={2.05}
        minZoom={1.5}
        maxZoom={7}
        pitch={18}
        bearing={-4}
        dragRotate={false}
        touchPitch={false}
        attributionControl={{ compact: true }}
      >
        {destinations.map((destination, index) => (
          <FlightMultiRoute
            key={destination.name}
            id={`entrain-reach-${index}`}
            waypoints={[MANJERI, destination.coordinates]}
            color="#B8863F"
            width={1.6}
            opacity={0.72}
            lineStyle="solid"
            hoverEffect
            interactive
            animate={{ duration: destination.duration, loop: true }}
          />
        ))}

        <FlightAirport
          longitude={MANJERI[0]}
          latitude={MANJERI[1]}
          name="Manjeri · Academy hub"
          showLabel
          labelPosition="top"
          labelClassName="!border-accent/40 !bg-dark-section/95 !text-background"
          markerContent={
            <span className="block size-4 rounded-full border-2 border-accent bg-background shadow-[0_0_0_6px_rgba(184,134,63,.22)]" />
          }
        />

        {destinations.map((destination) => (
          <FlightAirport
            key={destination.name}
            longitude={destination.coordinates[0]}
            latitude={destination.coordinates[1]}
            name={destination.name}
            showLabel
            labelPosition="top"
            labelClassName="!border-background/15 !bg-dark-section/90 !text-background"
            markerContent={destinationMarker}
          />
        ))}
      </Map>

      <div className="pointer-events-none absolute bottom-4 right-4 z-10 border border-background/15 bg-dark-section/80 px-3 py-2 text-[0.55rem] font-bold uppercase tracking-[0.12em] text-background/70 backdrop-blur-md">
        Drag and zoom to explore
      </div>
    </div>
  );
}
