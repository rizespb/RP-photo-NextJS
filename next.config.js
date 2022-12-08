/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },

  reactStrictMode: false,
  swcMinify: true,
  // Для импорта SVG
  webpack(config) {
    config.module.rules.push({
      issuer:
        // for webpack < 5
        // { test: /\.(js|ts)x?$/ },
        // for webpack 5 or more use
        { and: [/\.(js|ts)x?$/] },
      test: /\.svg$/,

      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
