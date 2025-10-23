'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';
import Link from 'next/link';

// Метаданные для client component добавляем через metadata.ts файл
// См. portfolio/metadata.ts

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Все');

  const projects = [
    { 
      id: 1, 
      title: 'Фотопечать высокого качества', 
      category: 'Фотопечать', 
      image: '/images/gallery/IMG_4678.JPG',
      description: 'Профессиональная печать фотографий на премиум бумаге',
      link: '/photo-printing'
    },
    { 
      id: 2, 
      title: 'Широкоформатная печать баннеров', 
      category: 'Баннеры', 
      image: '/images/gallery/IMG_4685.JPG',
      description: 'Яркие и долговечные баннеры для наружной рекламы',
      link: '/wide-format-printing'
    },
    { 
      id: 3, 
      title: 'Печать визиток премиум класса', 
      category: 'Визитки', 
      image: '/images/gallery/IMG_4689.JPG',
      description: 'Визитки на дизайнерской бумаге с тиснением',
      link: '/business-cards'
    },
    { 
      id: 4, 
      title: 'Каталоги и брошюры', 
      category: 'Полиграфия', 
      image: '/images/gallery/IMG_4690.JPG',
      description: 'Многостраничная печать с идеальным качеством',
      link: '/printing'
    },
    { 
      id: 5, 
      title: 'Рекламные материалы', 
      category: 'Реклама', 
      image: '/images/gallery/IMG_4696.JPG',
      description: 'Листовки, флаеры и промо-материалы',
      link: '/advertising'
    },
    { 
      id: 6, 
      title: 'Упаковка и этикетки', 
      category: 'Упаковка', 
      image: '/images/gallery/IMG_4698.JPG',
      description: 'Брендированная упаковка для вашего продукта',
      link: '/packaging'
    },
    { 
      id: 7, 
      title: 'Интерьерная печать', 
      category: 'Интерьер', 
      image: '/images/gallery/IMG_4706.JPG',
      description: 'Печать на холсте и фотообоях',
      link: '/photo-printing'
    },
    { 
      id: 8, 
      title: 'Корпоративная полиграфия', 
      category: 'Корпоративное', 
      image: '/images/gallery/IMG_4758.JPG',
      description: 'Бланки, папки, сертификаты для бизнеса',
      link: '/printing'
    },
  ];

  const categories = ['Все', 'Фотопечать', 'Баннеры', 'Визитки', 'Полиграфия', 'Реклама', 'Упаковка'];

  const filteredProjects = activeFilter === 'Все' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Header />
      
      <main className="py-20 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Заголовок с анимацией */}
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Портфолио
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Наши работы
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Примеры выполненных проектов для бизнеса и частных клиентов. 
              Каждая работа выполнена с вниманием к деталям и высочайшим качеством.
            </p>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '500+', label: 'Проектов' },
              { number: '200+', label: 'Клиентов' },
              { number: '5', label: 'Лет опыта' },
              { number: '98%', label: 'Довольных клиентов' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Фильтры с анимацией */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === activeFilter
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Сетка проектов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-xl">
                Проекты в этой категории скоро появятся
              </p>
            </div>
          )}

          {/* CTA секция */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Хотите увидеть больше?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Приезжайте к нам в офис — покажем образцы работ, материалы и расскажем о всех возможностях
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacts"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
                >
                  <span>Связаться с нами</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105"
                >
                  <span>Наши услуги</span>
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

