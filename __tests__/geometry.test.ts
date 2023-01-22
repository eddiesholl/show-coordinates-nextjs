import { BoundingBox, coordinatesInBbox } from "@/geometry";
describe("geometry", () => {
  describe("coordinatesInBbox", () => {
    const bounds1: BoundingBox = {
      ne: {
        lat: -4.0,
        long: 3.5,
      },
      sw: {
        lat: -4.11111123,
        long: 2.5,
      },
    };
    it("generates coordinates within bounds", () => {
      const result = coordinatesInBbox(bounds1);
      expect(result.lat).toBeLessThanOrEqual(bounds1.ne.lat);
      expect(result.lat).toBeGreaterThanOrEqual(bounds1.sw.lat);
      expect(result.lat).toBeLessThanOrEqual(bounds1.ne.long);
      expect(result.long).toBeGreaterThanOrEqual(bounds1.sw.long);
    });
  });
});
