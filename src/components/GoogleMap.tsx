import React, { useRef, useEffect, useState } from "react"

//import { Loader } from '@googlemaps/js-api-loader';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

//const loader = new Loader({
//  apiKey: 'AIzaSyArSU-U4zfUGfrHo3EpAe43SU5fGVu_U-I',
//  version: "weekly",
//  libraries: ["places"]
//});

const initOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

function MyMap({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(
          ref.current,
          {
            center,
            zoom,
          }
        )
      );
    }
  }, [ref, map]);

  return <div ref={ref} id="map" />;
}

// https://github.com/googlemaps/react-wrapper/blob/main/examples/basic.tsx
// https://developers.google.com/maps/documentation/javascript/react-map
export default function GoogleMap() {
  return (
    <Wrapper
      apiKey=""
    >
      <MyMap
        center={initOptions.center}
        zoom={initOptions.zoom}
      />
    </Wrapper>
  );
}
