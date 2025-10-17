'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
              О компании
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Миссия и оборудование PrintCore
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Мы объединяем опыт и технологию, чтобы создавать безупречную полиграфию: 
              от визиток до сложных тиражей и упаковки.
            </p>
          </div>

          {/* Миссия */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  Наша миссия
                </span>
                <h2 className="text-4xl font-bold mb-6">
                  Качество без компромиссов
                </h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Мы делаем печать простой и предсказуемой: понятные сроки, прозрачные сметы и
                  гарантированный результат. Наш подход — это внимательность к деталям и ответственность за
                  каждую партию.
                </p>
                <ul className="space-y-4">
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
              </div>

              <div className="aspect-video rounded-3xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-gray-800 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-9xl">
                  🏢
                </div>
              </div>
            </div>
          </section>

          {/* Оборудование */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Наше оборудование
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Современный парк оборудования
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Подбираем технологию под задачу: цифровая печать, широкоформат, тиснение, вырубка и
                постпечатная обработка.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: 'Цифровая печать',
                  desc: 'Оперативные тиражи, стабильный цвет, персонализация',
                  icon: '🖨️'
                },
                {
                  title: 'Постпечатная обработка',
                  desc: 'Биговка, фальцовка, ламинат, выборочный лак, тиснение',
                  icon: '✂️'
                },
                {
                  title: 'Вырубка и упаковка',
                  desc: 'Фигурная резка, упаковочные решения, этикетки и стикеры',
                  icon: '📦'
                }
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Финишные операции: конверты, упаковка, сложные изделия', icon: '📮' },
                { title: 'Точные профили и контроль цвета на каждом шаге', icon: '🎨' },
                { title: 'Тиснение, вырубка, склейка — в одном цикле', icon: '⚙️' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl">
                    {item.icon}
                  </div>
                  <div className="p-4 border-t border-gray-800">
                    <p className="text-gray-400 text-sm">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Цифры */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '15+', label: 'Лет на рынке' },
                { value: '5000+', label: 'Довольных клиентов' },
                { value: '50+', label: 'Видов продукции' },
                { value: '24/7', label: 'Онлайн-заказы' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-white/80 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Убедитесь в качестве сами
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Приезжайте к нам в офис, посмотрите на оборудование и образцы работ
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/30"
            >
              <span>Связаться с нами</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

