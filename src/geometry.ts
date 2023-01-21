export type Coordinate = {
  lat: number;
  long: number;
};
export type BoundingBox = {
  ne: Coordinate;
  sw: Coordinate;
};

export const coordinatesInBbox = (bbox: BoundingBox): Coordinate => {
  return {
    lat: Math.random() * (bbox.ne.lat - bbox.sw.lat) + bbox.sw.lat,
    long: Math.random() * (bbox.ne.long - bbox.sw.long) + bbox.sw.long,
  };
};
