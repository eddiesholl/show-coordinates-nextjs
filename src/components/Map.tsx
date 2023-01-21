import MapWrapper, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import bbox from "@turf/bbox";

const token =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const locations = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        title: "Lincoln Park",
        description: "A northside park that is home to the Lincoln Park Zoo",
      },
      geometry: {
        coordinates: [-87.637596, 41.940403],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Somewhere else",
        description: "A northside park that is home to the Lincoln Park Zoo",
      },
      geometry: {
        coordinates: [-88.637596, 42.940403],
        type: "Point",
      },
    },
  ],
};
const Map = () => {
  const [minLong, minLat, maxLong, maxLat] = bbox(locations);

  const markers = locations.features.map((f, ix) => (
    <Marker
      key={ix}
      longitude={f.geometry.coordinates[0]}
      latitude={f.geometry.coordinates[1]}
      color="red"
    />
  ));
  return (
    <MapWrapper
      initialViewState={{
        bounds: [minLong, minLat, maxLong, maxLat],
        fitBoundsOptions: {
          padding: 40,
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
