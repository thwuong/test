const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "dblog.dev-tn.com",
        protocol: "https",
      },
    ],
  },
});

module.exports = nextConfig;
