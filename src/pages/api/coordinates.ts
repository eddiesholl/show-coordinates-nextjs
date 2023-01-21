import { BoundingBox, coordinatesInBbox } from "@/geometry";
import { CoordinatesResponse } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

const bbox: BoundingBox = {
  ne: {
    lat: -87.637596,
    long: 42.940403,
  },
  sw: {
    lat: -88.637596,
    long: 41.940403,
  },
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CoordinatesResponse>
) {
  const coordinates = [coordinatesInBbox(bbox), coordinatesInBbox(bbox)];
  res.status(200).json({ coordinates });
}
