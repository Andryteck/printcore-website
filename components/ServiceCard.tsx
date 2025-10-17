'use client';

import Link from 'next/link';
import { Service } from '@/lib/features/services/servicesSlice';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.category}`}
      className="group block bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
    >
      {/* Изображение */}
      <div className="relative h-48 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
          {service.category === 'digital' && '🖨️'}
          {service.category === 'wide-format' && '📐'}
          {service.category === 'offset' && '📰'}
          {service.category === 'uv' && '☀️'}
          {service.category === 'business-cards' && '💼'}
          {service.category === 'design' && '🎨'}
        </div>
      </div>

      {/* Контент */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Кнопка */}
        <div className="mt-4 flex items-center text-blue-400 text-sm font-semibold">
          <span className="group-hover:translate-x-1 transition-transform">
            Подробнее →
          </span>
        </div>
      </div>
    </Link>
  );
}

