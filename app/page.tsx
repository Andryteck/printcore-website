'use client';

import { useAppSelector } from '@/lib/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export default function HomePage() {
  const { services } = useAppSelector((state) => state.services);

  return (
    <>
      <Header />
      
      <main>
        {/* Hero секция */}
        <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
          {/* Видео фон (заглушка для видео) */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-gray-900/50 to-cyan-900/30" />
          
          {/* Контент */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Профессиональная печать любой сложности
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                В отличном качестве и без задержек. Работаем с 2010 года.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-105"
              >
                <span>Заказать онлайн</span>
                <span className="text-2xl">→</span>
              </Link>
            </div>
          </div>

          {/* Декоративные элементы */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </section>

        {/* Услуги */}
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

        {/* О компании */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  О компании
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Качество без компромиссов
                </h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Мы делаем печать простой и предсказуемой: понятные сроки, прозрачные сметы и
                  гарантированный результат. Наш подход — это внимательность к деталям и ответственность за
                  каждую партию.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl">✓</span>
                    <span className="text-gray-300">Согласование цвета и материалов до запуска</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl">✓</span>
                    <span className="text-gray-300">Тиражный контроль и внутренние чек-листы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl">✓</span>
                    <span className="text-gray-300">Честная консультация и помощь с макетами</span>
                  </li>
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-lg group"
                >
                  <span>Подробнее о нас</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-gray-800 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-8xl">
                    🖨️
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Преимущества
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Почему выбирают нас
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '⚡', title: 'Быстро', desc: 'Срочные заказы за 24 часа' },
                { icon: '💎', title: 'Качественно', desc: 'Современное оборудование' },
                { icon: '💰', title: 'Выгодно', desc: 'Гибкая система скидок' },
                { icon: '🎯', title: 'Надежно', desc: 'Гарантия на все услуги' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA секция */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Готовы начать свой проект?
                </h2>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Свяжитесь с нами для консультации или оформите заказ онлайн
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
                  >
                    <span>Заказать услугу</span>
                  </Link>
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
                  >
                    <span>Связаться с нами</span>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
