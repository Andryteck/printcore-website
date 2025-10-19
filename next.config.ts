import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Форматы изображений (автоматическая конвертация)
    formats: ['image/avif', 'image/webp'],
    
    // Размеры для разных устройств
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Если используете внешние источники изображений, добавьте их:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'res.cloudinary.com',
    //   },
    // ],
  },
};

export default nextConfig;
