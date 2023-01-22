const webpack = require( 'webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(new webpack.EnvironmentPlugin(['MAPBOX_TOKEN']))
    return config
  }
}

module.exports = nextConfig
