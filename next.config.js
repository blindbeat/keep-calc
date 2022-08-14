/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cha2ds2-vasc",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
