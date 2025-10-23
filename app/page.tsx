import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import PortfolioCard from '@/components/PortfolioCard';
import Link from 'next/link';

export default function HomePage() {
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
                В отличном качестве и без задержек.
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

        {/* Преимущества работы с нами */}
        <FeaturesSection />

        {/* Услуги */}
        <ServicesSection />

        {/* Портфолио */}
        <section className="py-20 relative bg-gradient-to-b from-transparent to-blue-900/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold uppercase tracking-wider mb-4 animate-fade-in">
                Портфолио
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                Наши работы
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in">
                Более 500 успешно выполненных проектов для бизнеса и частных клиентов
              </p>
            </div>

            {/* Сетка работ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  title: 'Фотопечать высокого качества', 
                  category: 'Фотопечать', 
                  image: '/images/gallery/IMG_4678.JPG',
                  description: 'Профессиональная печать фотографий',
                  link: '/photo-printing'
                },
                { 
                  title: 'Широкоформатная печать', 
                  category: 'Баннеры', 
                  image: '/images/gallery/IMG_4685.JPG',
                  description: 'Яркие баннеры для рекламы',
                  link: '/wide-format-printing'
                },
                { 
                  title: 'Визитки премиум класса', 
                  category: 'Визитки', 
                  image: '/images/gallery/IMG_4689.JPG',
                  description: 'Визитки на дизайнерской бумаге',
                  link: '/business-cards'
                },
                { 
                  title: 'Каталоги и брошюры', 
                  category: 'Полиграфия', 
                  image: '/images/gallery/IMG_4690.JPG',
                  description: 'Многостраничная печать',
                  link: '/printing'
                },
                { 
                  title: 'Рекламные материалы', 
                  category: 'Реклама', 
                  image: '/images/gallery/IMG_4696.JPG',
                  description: 'Листовки и флаеры',
                  link: '/advertising'
                },
                { 
                  title: 'Упаковка и этикетки', 
                  category: 'Упаковка', 
                  image: '/images/gallery/IMG_4698.JPG',
                  description: 'Брендированная упаковка',
                  link: '/packaging'
                },
              ].map((project, index) => (
                <PortfolioCard
                  key={index}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </div>

            {/* Кнопка "Смотреть все" */}
            <div className="text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 animate-scale-in"
              >
                <span>Смотреть все работы</span>
                <span className="text-2xl">→</span>
              </Link>
            </div>
          </div>

          {/* Декоративные элементы */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
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
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Быстро', 
                  desc: 'Срочные заказы за 24 часа',
                  gradient: 'from-yellow-500 to-orange-500'
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                  title: 'Качественно', 
                  desc: 'Современное оборудование',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Выгодно', 
                  desc: 'Гибкая система скидок',
                  gradient: 'from-green-500 to-emerald-500'
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Надежно', 
                  desc: 'Гарантия на все услуги',
                  gradient: 'from-purple-500 to-pink-500'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
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
