'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoGallery from '@/components/PhotoGallery';
import Link from 'next/link';

export default function AdvertisingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const photos = [
    {
      id: 1,
      title: 'Промо флаеры',
      category: 'flyers',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      format: 'A6, 4+4, глянцевая ламинация',
      description: 'Яркие флаеры для промо-акций и распространения'
    },
    {
      id: 2,
      title: 'Рекламные листовки',
      category: 'leaflets',
      image: 'https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=800&q=80',
      format: 'A5, мелованная бумага 150г',
      description: 'Листовки для массового распространения'
    },
    {
      id: 3,
      title: 'Постеры A1',
      category: 'posters',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      format: 'A1, плакатная бумага',
      description: 'Крупноформатные постеры для рекламы'
    },
    {
      id: 4,
      title: 'Наклейки на авто',
      category: 'stickers',
      image: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=800&q=80',
      format: 'Виниловая пленка, контурная резка',
      description: 'Рекламные наклейки для транспорта'
    },
    {
      id: 5,
      title: 'Воблеры',
      category: 'wobblers',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80',
      format: 'Пластик 0.3мм, фигурная вырубка',
      description: 'POS-материалы для точек продаж'
    },
    {
      id: 6,
      title: 'Штендеры',
      category: 'standees',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80',
      format: 'A-board, двухсторонняя печать',
      description: 'Уличные рекламные конструкции'
    },
    {
      id: 7,
      title: 'Наклейки круглые',
      category: 'stickers',
      image: 'https://images.unsplash.com/photo-1611095564263-51d33d4fcb18?w=800&q=80',
      format: 'Различные размеры, контурная резка',
      description: 'Брендированные стикеры'
    },
    {
      id: 8,
      title: 'Промо-материалы',
      category: 'promo',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
      format: 'Комплексное оформление',
      description: 'Полный комплект рекламных материалов'
    },
    {
      id: 9,
      title: 'Информационные таблички',
      category: 'signs',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      format: 'ПВХ 3мм, УФ-печать',
      description: 'Навигационные и информационные таблички'
    },
    {
      id: 10,
      title: 'Купоны скидок',
      category: 'coupons',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80',
      format: 'Перфорация, нумерация',
      description: 'Купоны с защитой от подделки'
    },
    {
      id: 11,
      title: 'Ценники',
      category: 'price_tags',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
      format: 'Картон, фигурная вырубка',
      description: 'Ценники для товаров'
    },
    {
      id: 12,
      title: 'Промо-флаги',
      category: 'flags',
      image: 'https://images.unsplash.com/photo-1521106047354-5a5b85e819ee?w=800&q=80',
      format: 'Флаговая ткань, с креплением',
      description: 'Рекламные флаги для выставок'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все работы', icon: '📣' },
    { id: 'flyers', name: 'Флаеры', icon: '📄' },
    { id: 'leaflets', name: 'Листовки', icon: '📃' },
    { id: 'posters', name: 'Постеры', icon: '🖼️' },
    { id: 'stickers', name: 'Наклейки', icon: '🏷️' },
    { id: 'promo', name: 'POS', icon: '🎯' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-transparent to-amber-900/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Наши работы
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                Рекламные материалы
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8">
                Флаеры, листовки, наклейки и POS-материалы для эффективного продвижения. 
                Большие тиражи по выгодным ценам.
              </p>
              
              {/* Статистика */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                {[
                  { number: '100k+', label: 'Флаеров напечатано' },
                  { number: '500+', label: 'Довольных клиентов' },
                  { number: '24ч', label: 'Срочное производство' },
                  { number: '50%', label: 'Скидка на тираж' },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-rose-500/50 transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow" />
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
                      ? 'bg-gradient-to-r from-rose-600 to-amber-500 text-white shadow-lg shadow-rose-500/50 scale-105'
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

        {/* Типы продукции */}
        <section className="py-20 bg-gradient-to-b from-transparent to-rose-900/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Виды рекламной продукции
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Полный спектр рекламных материалов для продвижения вашего бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Массовая раздача',
                  icon: '📄',
                  items: ['Флаеры A6, A5', 'Листовки A4', 'Купоны скидок', 'Пригласительные']
                },
                {
                  title: 'Наклейки',
                  icon: '🏷️',
                  items: ['Виниловые', 'Бумажные', 'Прозрачные', 'Контурная резка']
                },
                {
                  title: 'POS-материалы',
                  icon: '🎯',
                  items: ['Воблеры', 'Шелфтокеры', 'Диспенсеры', 'Ценники']
                },
                {
                  title: 'Крупный формат',
                  icon: '📐',
                  items: ['Постеры A0-A1', 'Плакаты', 'Афиши', 'Схемы проезда']
                },
                {
                  title: 'Специальные',
                  icon: '✨',
                  items: ['С нумерацией', 'С перфорацией', 'Фигурная вырубка', 'Конгрев']
                },
                {
                  title: 'Тиражи и цены',
                  icon: '💰',
                  items: ['От 50 штук', 'Скидки на тираж', 'Срочно за 24 часа', 'Доставка бесплатно']
                }
              ].map((block, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-rose-500/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{block.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-rose-400 mt-1">•</span>
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
            <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Запустите рекламную кампанию
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Напечатаем флаеры, листовки и другие материалы большим тиражом по выгодной цене
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
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

