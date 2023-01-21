import { NextApiRequest, NextApiResponse } from "next";
import { createMocks, RequestMethod } from "node-mocks-http";

import handler from "./coordinates";
function mockRequestResponse(method: RequestMethod = "GET") {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({ method });
  req.headers = {
    "Content-Type": "application/json",
  };
  req.query = {};
  return { req, res };
}
describe("api/coordinates", () => {
  describe("handler", () => {
    it("generates coordinates for a simple request", () => {
      const { req, res } = mockRequestResponse();
      handler(req, res);

      expect(res.statusCode).toBe(200);
      expect(res.getHeaders()).toEqual({ "content-type": "application/json" });
      expect(res.statusMessage).toEqual("OK");
    });
  });
});
