// Types shared by client and server

export type CoordinatesResponse = {
  coordinates: Coordinate[];
};
export type Coordinate = {
  lat: number;
  long: number;
};
