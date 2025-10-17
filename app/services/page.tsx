'use client';

import { useAppSelector } from '@/lib/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  const { services } = useAppSelector((state) => state.services);

  return (
    <>
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Наши услуги
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Полный спектр полиграфических услуг
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              От визиток до сложных тиражей и упаковки. Подбираем технологию под задачу: 
              цифровая печать, широкоформат, тиснение, вырубка и постпечатная обработка.
            </p>
          </div>

          {/* Сетка услуг */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Дополнительная информация */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-2">Бесплатная консультация</h3>
                <p className="text-gray-400 mb-4">
                  Не знаете, какая технология подойдет? Звоните, поможем выбрать оптимальное решение.
                </p>
                <a href="tel:+375333365678" className="text-blue-400 hover:text-blue-300 font-semibold">
                  +375 33 336 5678
                </a>
              </div>

              <div>
                <div className="text-4xl mb-4">📐</div>
                <h3 className="text-xl font-bold mb-2">Помощь с макетами</h3>
                <p className="text-gray-400 mb-4">
                  Наши дизайнеры проверят макет, подскажут, как улучшить, или создадут с нуля.
                </p>
                <a href="/services/design" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Дизайн-услуги →
                </a>
              </div>

              <div>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Срочные заказы</h3>
                <p className="text-gray-400 mb-4">
                  Нужно быстро? Печатаем срочные тиражи от 24 часов без потери качества.
                </p>
                <a href="/contacts" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Связаться →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

