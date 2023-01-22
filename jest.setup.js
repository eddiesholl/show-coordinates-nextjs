require('jest-fetch-mock').enableMocks()

// Mock enough of mapbox-gl to allow it to be rendered
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn(),
    clone: jest.fn(),    
  })),
  NavigationControl: jest.fn(),
  supported: jest.fn(() => true)
}));
