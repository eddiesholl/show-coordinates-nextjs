import type { NextApiRequest, NextApiResponse } from "next";
import { BoundingBox, coordinatesInBbox } from "@/geometry";
import { CoordinatesResponse } from "@/types";

const bbox: BoundingBox = {
  ne: {
    lat: -20.46200484509549,
    long: 148.42340511757158,
  },
  sw: {
    lat: -28.33474088655335,
    long: 141.47006662831163,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CoordinatesResponse>
) {
  const coordinates = [
    coordinatesInBbox(bbox),
    coordinatesInBbox(bbox),
    coordinatesInBbox(bbox),
  ];
  res.status(200).json({ coordinates });
}
