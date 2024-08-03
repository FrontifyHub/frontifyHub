// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const nextConfig = {
  transpilePackages: ["@frontifyHub/common-ui"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgo: false,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
