"use client";

import React from "react";
import TacticalGlobe3D, { REACH_LOCATIONS } from "./tactical-globe-3d";
import { cn } from "@/lib/utils";

export { REACH_LOCATIONS };

export function IndiaReachGlobe({ className }) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-[#070f18]",
        className,
      )}
    >
      <TacticalGlobe3D
        initialRotation={{ lambda: 50, phi: -4, gamma: 0 }}
        autoRotateSpeed={0}
        allowZoom={true}
      />
    </div>
  );
}

