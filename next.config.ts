import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Форматы изображений (автоматическая конвертация)
    formats: ['image/avif', 'image/webp'],
    
    // Размеры для разных устройств
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Внешние источники изображений
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wow2print.com',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'static.printcore.by',
        pathname: '/content/**',
      },
    ],
  },
};

export default nextConfig;
