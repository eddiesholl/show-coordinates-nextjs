# show-coordinates-nextjs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the tests:

```bash
npm run test
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Background

This is a full stack demo app built on next.js, with the goal of showing a set of coordinates in a map, displayed in a simple react web client.

With the basic requirements describing a single API endpoint, plus a react client to read from it, the streamlined workflow with next.js felt like a great fit.

| Requirement                                       | Detail                                                                                                                                                                          |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Single express API endpoint                       | ✅ Implemented via a next.js handler in `api/coordinates.ts`, so it's a thin wrapper on top of an express request                                                               |
| Generates a number of random geometry coordinates | ✅ The endpoint returns an array of random coordinate objects                                                                                                                   |
| Points are within a bounding box                  | ✅                                                                                                                                                                              |
| Simple react client                               | ✅ React pages and components built via next.js conventions                                                                                                                     |
| Code is clear and documented                      | -                                                                                                                                                                               |
| Code is well tested                               | ✅ Includes server side test for coordinate generation, and calling an API method. Includes a client side test for rendering the Map component, with a mocked mapbox instance - |

### Location and data formats

A mapping client API like `mapbox` is likely to work most easily with commonly used data formats, like `geoJSON`. I initially started with the API endpoint returning a `FeatureCollection`, but these particular requirements specifically ask for a simpler format to be used for the locations they return.

Once this has been translated to `geoJSON` on the client, it makes it easier to call on other tools in the ecosystem, like `@turf/bbox`

## Extensions

There's a few things I had in my mind I would have liked to add, or would make the demo a little nicer or more fun:

- Add API parameters so the client can choose how many points, or the bounding box
- Add user controls to exersize those API parameters, or just pluck the params off the browser URL used
- Show some details when you click on each marker
- A button to regenerate fresh markers
- The Next.js and Vercel ecosystem offers very simple [deployment](https://nextjs.org/docs/deployment#managed-nextjs-with-vercel), it would be easy to get a copy of the demo app running.

## Known issues

After messing around for a while, the `mapbox` instance is not fully and cleanly mocked when the `Map` component is rendered in a test. It generates some runtime error output on the test console. Some options are to mock one layer higher up, at the `react-map-gl` dependency level, or to yank a copy of a full mapbox [mock](https://github.com/visgl/react-map-gl/tree/master/test/src/utils/mapbox-gl-mock)
