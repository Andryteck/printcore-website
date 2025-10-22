'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoGallery from '@/components/PhotoGallery';
import Link from 'next/link';

export default function PhotoPrintingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const photos = [
    {
      id: 1,
      title: 'Портретная фотосессия',
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
      format: 'A4, глянцевая фотобумага',
      description: 'Профессиональная печать портретов с естественной цветопередачей'
    },
    {
      id: 2,
      title: 'Студийная съемка',
      category: 'studio',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
      format: 'A3, матовая фотобумага',
      description: 'Печать студийных фотографий премиум качества'
    },
    {
      id: 3,
      title: 'Пейзажная фотография',
      category: 'landscapes',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      format: '50x70 см, холст',
      description: 'Широкоформатная печать пейзажей для интерьера'
    },
    {
      id: 4,
      title: 'Fashion фотография',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80',
      format: 'A2, премиум глянец',
      description: 'Яркая и контрастная печать для модных съемок'
    },
    {
      id: 5,
      title: 'Архитектурная съемка',
      category: 'architecture',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80',
      format: '40x60 см, матовая',
      description: 'Детализированная печать архитектурных фото'
    },
    {
      id: 6,
      title: 'Городской пейзаж',
      category: 'urban',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80',
      format: '30x40 см, металлик',
      description: 'Печать городских пейзажей с эффектом металлик'
    },
    {
      id: 7,
      title: 'Портрет крупным планом',
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
      format: 'A3, полуматовая',
      description: 'Качественная цветопередача кожи и деталей'
    },
    {
      id: 8,
      title: 'Природа в деталях',
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80',
      format: '60x90 см, холст',
      description: 'Печать природных пейзажей на холсте'
    },
    {
      id: 9,
      title: 'Творческий портрет',
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      format: 'A4, премиум матовая',
      description: 'Художественная печать портретов'
    },
    {
      id: 10,
      title: 'Закат в горах',
      category: 'landscapes',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      format: '70x100 см, холст',
      description: 'Панорамная печать для больших пространств'
    },
    {
      id: 11,
      title: 'Модельная съемка',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80',
      format: 'A2, глянцевая',
      description: 'Профессиональная печать для портфолио'
    },
    {
      id: 12,
      title: 'Ночной город',
      category: 'urban',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
      format: '50x70 см, акрил',
      description: 'Печать с глубокими цветами на акриле'
    },
    {
      id: 13,
      title: 'Океанский берег',
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',
      format: '80x120 см, холст',
      description: 'Широкоформатная печать морских пейзажей'
    },
    {
      id: 14,
      title: 'Женский портрет',
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
      format: 'A3, люкс глянец',
      description: 'Печать с профессиональной цветокоррекцией'
    },
    {
      id: 15,
      title: 'Горные вершины',
      category: 'landscapes',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      format: '100x150 см, холст',
      description: 'Монументальная печать для офисов'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все работы', icon: '🖼️' },
    { id: 'portraits', name: 'Портреты', icon: '👤' },
    { id: 'landscapes', name: 'Пейзажи', icon: '🏔️' },
    { id: 'fashion', name: 'Fashion', icon: '👗' },
    { id: 'urban', name: 'Городские', icon: '🏙️' },
    { id: 'nature', name: 'Природа', icon: '🌿' },
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero секция */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Наши работы
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Фотопечать премиум качества
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8">
                Профессиональная печать фотографий на оборудовании экспертного класса. 
                Точная цветопередача, долговечность и широкий выбор материалов.
              </p>
              
              {/* Статистика */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                {[
                  { number: '10000+', label: 'Фотографий напечатано' },
                  { number: '50+', label: 'Форматов печати' },
                  { number: '15', label: 'Типов бумаги' },
                  { number: '100%', label: 'Гарантия качества' },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
        </section>

        {/* Категории фильтров */}
        <section className="py-8 sticky top-20 bg-[#0b0f17]/95 backdrop-blur-lg z-30 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                      : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:scale-105'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Галерея работ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <PhotoGallery photos={filteredPhotos} />
          </div>
        </section>

        {/* Форматы и материалы */}
        <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Форматы и материалы
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Широкий выбор форматов и типов бумаги для любых задач
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Стандартные форматы',
                  icon: '📐',
                  items: ['10x15 см', '13x18 см', 'A6, A5, A4', 'A3, A2, A1']
                },
                {
                  title: 'Панорамные',
                  icon: '🖼️',
                  items: ['20x60 см', '30x90 см', '40x120 см', 'До 150 см']
                },
                {
                  title: 'Фотобумага',
                  icon: '📄',
                  items: ['Глянцевая', 'Матовая', 'Полуматовая', 'Металлик']
                },
                {
                  title: 'Премиум материалы',
                  icon: '💎',
                  items: ['Холст', 'Акрил', 'Дибонд', 'Пенокартон']
                },
                {
                  title: 'Сроки печати',
                  icon: '⚡',
                  items: ['Экспресс - 1 час', 'Стандарт - 1 день', 'Холст - 2-3 дня', 'Акрил - 3-5 дней']
                },
                {
                  title: 'Дополнительно',
                  icon: '✨',
                  items: ['Цветокоррекция', 'Ретушь', 'Рамки', 'Монтаж']
                }
              ].map((block, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{block.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA секция */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Готовы напечатать свои фотографии?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Приезжайте с флешкой или отправьте файлы онлайн. 
                  Мы поможем выбрать формат и материал для ваших фотографий.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
                  >
                    <span>Связаться с нами</span>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105"
                  >
                    <span>Все услуги</span>
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

