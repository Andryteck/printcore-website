'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoGallery from '@/components/PhotoGallery';
import Link from 'next/link';

export default function BusinessCardsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const photos = [
    {
      id: 1,
      title: 'Классические визитки',
      category: 'classic',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
      format: '90x50мм, плотность 350г',
      description: 'Визитки на мелованной бумаге с глянцевой ламинацией'
    },
    {
      id: 2,
      title: 'Премиум визитки',
      category: 'premium',
      image: 'https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=800&q=80',
      format: 'Дизайнерская бумага 600г',
      description: 'Визитки с тиснением фольгой и выборочным лаком'
    },
    {
      id: 3,
      title: 'Минималистичный дизайн',
      category: 'minimal',
      image: 'https://images.unsplash.com/photo-1565520651265-1325c8609bc1?w=800&q=80',
      format: 'Матовая бумага 350г',
      description: 'Лаконичный дизайн для современного бизнеса'
    },
    {
      id: 4,
      title: 'Визитки с логотипом',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1586170299106-5a1e58600e8c?w=800&q=80',
      format: '90x50мм, двухсторонняя',
      description: 'Корпоративные визитки с фирменным стилем'
    },
    {
      id: 5,
      title: 'Цветные визитки',
      category: 'colorful',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80',
      format: 'CMYK печать, ламинация',
      description: 'Яркие визитки для творческих профессий'
    },
    {
      id: 6,
      title: 'Визитки на черном',
      category: 'dark',
      image: 'https://images.unsplash.com/photo-1588613254380-51a3b3c4e9f1?w=800&q=80',
      format: 'Черная бумага + белая печать',
      description: 'Стильные визитки на черной основе'
    },
    {
      id: 7,
      title: 'Визитки с QR-кодом',
      category: 'tech',
      image: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=800&q=80',
      format: 'Интеграция QR-кодов',
      description: 'Современные визитки с цифровыми технологиями'
    },
    {
      id: 8,
      title: 'Золотое тиснение',
      category: 'premium',
      image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=800&q=80',
      format: 'Тиснение золотой фольгой',
      description: 'Роскошные визитки с золотым акцентом'
    },
    {
      id: 9,
      title: 'Корпоративные визитки',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1497005367839-6e852de72767?w=800&q=80',
      format: 'Фирменный стиль компании',
      description: 'Единый дизайн для всех сотрудников'
    },
    {
      id: 10,
      title: 'Визитки на крафте',
      category: 'eco',
      image: 'https://images.unsplash.com/photo-1606921231106-f1083329a65c?w=800&q=80',
      format: 'Крафт-бумага 300г',
      description: 'Эко-френдли визитки на натуральной бумаге'
    },
    {
      id: 11,
      title: 'Двухсторонние визитки',
      category: 'double',
      image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&q=80',
      format: 'Печать 4+4, ламинация',
      description: 'Максимум информации на двух сторонах'
    },
    {
      id: 12,
      title: 'Визитки с конгревом',
      category: 'premium',
      image: 'https://images.unsplash.com/photo-1606765680645-34c3b6f5c0dc?w=800&q=80',
      format: 'Выпуклое тиснение',
      description: 'Тактильные визитки с объемным эффектом'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все работы', icon: '💼' },
    { id: 'classic', name: 'Классика', icon: '📇' },
    { id: 'premium', name: 'Премиум', icon: '💎' },
    { id: 'minimal', name: 'Минимализм', icon: '⬜' },
    { id: 'corporate', name: 'Корпоративные', icon: '🏢' },
    { id: 'eco', name: 'Эко', icon: '♻️' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-teal-900/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Наши работы
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Визитные карточки
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8">
                Визитки любой сложности — от классических до премиум с тиснением. 
                Множество вариантов бумаги, отделки и дизайна.
              </p>
              
              {/* Статистика */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                {[
                  { number: '50000+', label: 'Визиток напечатано' },
                  { number: '30+', label: 'Видов бумаги' },
                  { number: '15', label: 'Вариантов отделки' },
                  { number: '1 день', label: 'Срок изготовления' },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-emerald-500/50 transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" />
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
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/50 scale-105'
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

        {/* Варианты отделки */}
        <section className="py-20 bg-gradient-to-b from-transparent to-emerald-900/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Варианты отделки
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Создайте уникальные визитки с различными вариантами бумаги и отделки
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Типы бумаги',
                  icon: '📄',
                  items: ['Мелованная 300-600г', 'Дизайнерская', 'Тачкавер (бархатная)', 'Крафт-бумага']
                },
                {
                  title: 'Ламинация',
                  icon: '✨',
                  items: ['Глянцевая', 'Матовая', 'Soft-touch', 'Без ламинации']
                },
                {
                  title: 'Тиснение',
                  icon: '💫',
                  items: ['Золото', 'Серебро', 'Цветная фольга', 'Конгрев (выпуклое)']
                },
                {
                  title: 'Спецэффекты',
                  icon: '🎨',
                  items: ['Выборочный УФ-лак', 'Скругленные углы', 'Фигурная вырубка', 'Цветной торец']
                },
                {
                  title: 'Размеры',
                  icon: '📐',
                  items: ['90x50мм (стандарт)', '85x55мм (евро)', '90x55мм', 'Нестандартные']
                },
                {
                  title: 'Тиражи и сроки',
                  icon: '⏱️',
                  items: ['От 50 штук', 'Срочно - 1 день', 'Стандарт - 2 дня', 'С отделкой - 3-5 дней']
                }
              ].map((block, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{block.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-emerald-400 mt-1">•</span>
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
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Закажите визитки прямо сейчас
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Поможем с дизайном, подберем бумагу и изготовим качественные визитки за 1-2 дня
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
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

