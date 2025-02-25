// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     // appDir: true,
//   },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps catch potential issues in development
  experimental: {
    serverActions: true, // Enables async server actions if you plan to use them
  },
};

module.exports = nextConfig;
