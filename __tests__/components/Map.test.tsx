import Map from "@/components/Map";
import { Map as MockMap } from "mapbox-gl";

import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

describe("Map", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    const response = {
      coordinates: [
        { lat: 1, long: 2 },
        { lat: 3, long: 4 },
      ],
    };
    fetchMock.once(JSON.stringify(response));
  });

  // Check the dependency is being passed correct config
  it("renders a map", async () => {
    render(<Map />);
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(MockMap).toHaveBeenCalledTimes(1));
    expect(MockMap).toHaveBeenCalledWith(
      expect.objectContaining({
        initialViewState: {
          bounds: [2, 1, 4, 3],
          fitBoundsOptions: { padding: 100 },
        },
      })
    );
  });

  // Snapshot test to help detect regressions
  it("matches the current snapshot", () => {
    const { container } = render(<Map />);
    expect(container).toMatchSnapshot();
  });
});
