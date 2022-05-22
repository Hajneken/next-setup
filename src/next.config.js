/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const path = require("path");

const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      // custom loader to enable static image export
      images: {
        loader: "custom",
      },
      sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
      },
    };
  }

  return {
    reactStrictMode: true,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    // custom loader to enable static image export
    images: {
      loader: "custom",
    },
    // TODO always Change for production build
    // basePath: "/~hynekz20/fc",
  };
};
module.exports = nextConfig;
