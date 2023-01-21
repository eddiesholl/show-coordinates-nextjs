import MapWrapper, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const token =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const locations = {
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
  ],
};
const Map = () => {
  return (
    <MapWrapper
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={token}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </MapWrapper>
  );
};

export default Map;
