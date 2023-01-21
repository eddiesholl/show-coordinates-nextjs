import type { NextApiRequest, NextApiResponse } from "next";

type Coordinate = {
  lat: number;
  long: number;
};

type CoordinatesResponse = {
  coordinates: Coordinate[];
};

const coordinates = [
  { lat: -87.637596, long: 41.940403 },
  { lat: -88.637596, long: 42.940403 },
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CoordinatesResponse>
) {
  res.status(200).json({ coordinates });
}
