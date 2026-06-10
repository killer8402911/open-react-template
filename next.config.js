/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  ...(isStaticExport && {
    output: "export",
    basePath: process.env.BASE_PATH || "",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

module.exports = nextConfig;
