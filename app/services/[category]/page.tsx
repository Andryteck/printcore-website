'use client';

import { useParams } from 'next/navigation';
import { useAppSelector } from '@/lib/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Calculator from '@/components/Calculator';
import Link from 'next/link';

export default function ServiceOrderPage() {
  const params = useParams();
  const category = params.category as string;
  const { services } = useAppSelector((state) => state.services);
  
  const service = services.find((s) => s.category === category);

  if (!service) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Услуга не найдена</h1>
            <Link href="/services" className="text-blue-400 hover:text-blue-300">
              ← Вернуться к услугам
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-400">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-blue-400">Услуги</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Image Only */}
            <div className="lg:col-span-5">
              {service.image && (
                <div className="rounded-2xl overflow-hidden sticky top-24">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>

            {/* Right Column - Service Info + Calculator */}
            <div className="lg:col-span-7">
              {/* Service Info */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <span className="text-gray-400 text-sm mr-3">4.98</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-3">(380)</span>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Characteristics */}
                <details className="mb-6 bg-gray-900 rounded-lg border border-gray-800">
                  <summary className="cursor-pointer p-4 font-semibold flex items-center justify-between">
                    <span>Характеристики</span>
                    <span className="text-blue-400">→</span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-400 space-y-2">
                    <p>Размер: 90×50 мм</p>
                    <p>Бумага: мелованная 250 г</p>
                    <p>Печать: офсетная цветная (4+4, 4+0), сборный тираж</p>
                  </div>
                </details>
              </div>

              {/* Calculator */}
              <Calculator service={service} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

