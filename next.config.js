// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: "export",
//   images: { unoptimized: true },
//   trailingSlash: true,
//   head: {
//     meta: [
//       {
//         name: 'viewport',
//         content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    ],
  },
};

module.exports = nextConfig;

