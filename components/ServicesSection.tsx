'use client';

import { useAppSelector } from '@/lib/store';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export default function ServicesSection() {
  const { services } = useAppSelector((state) => state.services);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Наши услуги
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Что мы предлагаем
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Полный спектр полиграфических услуг для бизнеса и частных лиц
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              badge={service.id === '1' ? 'Хит' : undefined}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-lg group"
          >
            <span>Все услуги</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

