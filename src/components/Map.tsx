"use client";

import { BUSINESS } from "@/utils/constants";
import { FC, useEffect, useState } from "react";

const LOCATIONS = BUSINESS.stores;

const Map: FC = ({}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || LOCATIONS.length === 0) return;

    const centerLat = LOCATIONS.reduce((sum, loc) => sum + loc.lat, 0) / LOCATIONS.length;
    const centerLng = LOCATIONS.reduce((sum, loc) => sum + loc.lng, 0) / LOCATIONS.length;

    const map = new google.maps.Map(document.getElementById("map")!, {
      center: { lat: centerLat, lng: centerLng },
      zoom: 12,
      zoomControl: true,
    });

    LOCATIONS.forEach((location, index) => {
      new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        title: location.mallName,
        label: {
          text: (index + 1).toString(),
          color: "white",
        },
      });
    });

    const bounds = new google.maps.LatLngBounds();
    LOCATIONS.forEach((location) => {
      bounds.extend({ lat: location.lat, lng: location.lng });
    });
    map.fitBounds(bounds);
  }, [isLoaded]);

  return (
    <div className="w-100">
      <div id="map" style={{ width: "100%", height: "646px" }}></div>
    </div>
  );
};

export default Map;
