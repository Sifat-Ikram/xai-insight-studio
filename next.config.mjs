/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile Three.js packages for better compatibility and performance
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],

  // Optimization: Ensure high-performance image loading if you use screenshots
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
