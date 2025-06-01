/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.externals.push('onnxruntime-node');
    return config;
  }
};

module.exports = nextConfig;
