import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true }, // 关闭 ESLint（如适用）
  typescript: { ignoreBuildErrors: true }, // 关闭 TypeScript 类型检查
};

export default nextConfig;
