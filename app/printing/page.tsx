'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoGallery from '@/components/PhotoGallery';
import Link from 'next/link';

export default function PrintingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const photos = [
    {
      id: 1,
      title: 'Корпоративный каталог',
      category: 'catalogs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      format: 'A4, 48 страниц, скрепка',
      description: 'Полноцветный каталог продукции'
    },
    {
      id: 2,
      title: 'Рекламная брошюра',
      category: 'brochures',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
      format: 'A5, 16 страниц, евробуклет',
      description: 'Трехфальцовая брошюра для промо-акций'
    },
    {
      id: 3,
      title: 'Журнал на скрепке',
      category: 'magazines',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80',
      format: 'A4, 64 страницы, КБС',
      description: 'Корпоративный журнал с глянцевой обложкой'
    },
    {
      id: 4,
      title: 'Презентационный буклет',
      category: 'booklets',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
      format: 'A4, фальцовка гармошкой',
      description: 'Многостраничный буклет для презентаций'
    },
    {
      id: 5,
      title: 'Книга твердый переплет',
      category: 'books',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
      format: '170x240мм, 200 страниц',
      description: 'Книга в твердом переплете с тиснением'
    },
    {
      id: 6,
      title: 'Меню для ресторана',
      category: 'menus',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      format: 'A4, ламинация',
      description: 'Меню с защитным покрытием'
    },
    {
      id: 7,
      title: 'Листовки А6',
      category: 'leaflets',
      image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&q=80',
      format: 'A6, 4+4, глянец',
      description: 'Рекламные листовки большим тиражом'
    },
    {
      id: 8,
      title: 'Настенный календарь',
      category: 'calendars',
      image: 'https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?w=800&q=80',
      format: 'A3, 13 листов, пружина',
      description: 'Перекидной календарь на год'
    },
    {
      id: 9,
      title: 'Блокнот с логотипом',
      category: 'notebooks',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
      format: 'A5, 50 листов, скрепка',
      description: 'Брендированные блокноты для сотрудников'
    },
    {
      id: 10,
      title: 'Папка с клапанами',
      category: 'folders',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      format: 'A4, картон 300г',
      description: 'Презентационная папка с логотипом'
    },
    {
      id: 11,
      title: 'Каталог на пружине',
      category: 'catalogs',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80',
      format: 'A4, 80 страниц, wire-o',
      description: 'Каталог с пружинным переплетом'
    },
    {
      id: 12,
      title: 'Открытки премиум',
      category: 'postcards',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
      format: '100x150мм, тиснение',
      description: 'Поздравительные открытки с золотым тиснением'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все работы', icon: '📚' },
    { id: 'catalogs', name: 'Каталоги', icon: '📖' },
    { id: 'brochures', name: 'Брошюры', icon: '📄' },
    { id: 'books', name: 'Книги', icon: '📕' },
    { id: 'booklets', name: 'Буклеты', icon: '📰' },
    { id: 'magazines', name: 'Журналы', icon: '📑' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-violet-900/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Наши работы
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                Полиграфия
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8">
                Каталоги, брошюры, журналы и многостраничная продукция. 
                Профессиональное качество и быстрые сроки изготовления.
              </p>
              
              {/* Статистика */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                {[
                  { number: '15000+', label: 'Изделий изготовлено' },
                  { number: '20', label: 'Видов переплета' },
                  { number: '500', label: 'Страниц максимум' },
                  { number: '2-5', label: 'Дней изготовление' },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-indigo-500/50 transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" />
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
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-500 text-white shadow-lg shadow-indigo-500/50 scale-105'
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

        {/* Типы переплета */}
        <section className="py-20 bg-gradient-to-b from-transparent to-indigo-900/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Виды переплета и отделки
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Выберите подходящий тип переплета для вашей продукции
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Переплет',
                  icon: '📖',
                  items: ['Скоба (скрепка)', 'Пружина Wire-o', 'КБС (клеевой)', 'Твердый переплет']
                },
                {
                  title: 'Форматы',
                  icon: '📐',
                  items: ['A6, A5, A4', 'A3, нестандартные', 'Квадратные', 'Фигурные']
                },
                {
                  title: 'Бумага блока',
                  icon: '📄',
                  items: ['Офсетная 80-150г', 'Мелованная 115-300г', 'Дизайнерская', 'Самокопирующая']
                },
                {
                  title: 'Обложка',
                  icon: '🎨',
                  items: ['Мягкая 200-350г', 'Твердая (картон)', 'С ламинацией', 'С тиснением']
                },
                {
                  title: 'Отделка',
                  icon: '✨',
                  items: ['Ламинация', 'УФ-лак', 'Тиснение фольгой', 'Вырубка']
                },
                {
                  title: 'Тиражи',
                  icon: '📊',
                  items: ['От 1 экземпляра', 'Малые тиражи (1-100)', 'Средние (100-1000)', 'Большие (1000+)']
                }
              ].map((block, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{block.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-indigo-400 mt-1">•</span>
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
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Нужна полиграфическая продукция?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Подберем оптимальный вариант переплета, бумаги и отделки под ваш бюджет
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
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

