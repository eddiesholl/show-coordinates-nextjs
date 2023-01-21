import MapWrapper, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import bbox from "@turf/bbox";
import useSWR from "swr";
import { Feature } from "geojson";

import { notEmpty } from "@/util";
import { CoordinatesResponse } from "@/types";

// TODO: extract token
const token =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

// TODO: extract network utils
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Map = () => {
  const { data, error } = useSWR<CoordinatesResponse>(
    "/api/coordinates",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // Convert requested API format to geoJSON
  const points: Feature[] = data.coordinates.map((c) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [c.long, c.lat],
    },
    properties: {},
  }));
  const geoJSON = {
    type: "FeatureCollection",
    features: points,
  };
  const [minLong, minLat, maxLong, maxLat] = bbox(geoJSON);

  const markers = geoJSON.features
    .map((f, ix) => {
      if (f.geometry.type === "Point") {
        return (
          <Marker
            key={ix}
            longitude={f.geometry.coordinates[0]}
            latitude={f.geometry.coordinates[1]}
            color="red"
          />
        );
      }
    })
    .filter(notEmpty);
  return (
    <MapWrapper
      initialViewState={{
        bounds: [minLong, minLat, maxLong, maxLat],
        fitBoundsOptions: {
          padding: 100,
        },
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={token}
    >
      {markers}
    </MapWrapper>
  );
};

export default Map;
