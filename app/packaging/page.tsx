'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoGallery from '@/components/PhotoGallery';
import Link from 'next/link';

export default function PackagingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const photos = [
    {
      id: 1,
      title: 'Коробки для косметики',
      category: 'boxes',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
      format: 'Картон 350г, ламинация',
      description: 'Брендированная упаковка для косметических средств'
    },
    {
      id: 2,
      title: 'Бумажные пакеты',
      category: 'bags',
      image: 'https://images.unsplash.com/photo-1592791896074-0c9cea76c1af?w=800&q=80',
      format: 'Крафт-бумага, с ручками',
      description: 'Экологичные пакеты с фирменной печатью'
    },
    {
      id: 3,
      title: 'Подарочная упаковка',
      category: 'gift',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80',
      format: 'Дизайнерская бумага, фольга',
      description: 'Премиум упаковка для подарков'
    },
    {
      id: 4,
      title: 'Этикетки для продуктов',
      category: 'labels',
      image: 'https://images.unsplash.com/photo-1599750461501-ed542c25d03f?w=800&q=80',
      format: 'Самоклеящаяся пленка',
      description: 'Этикетки для продуктов питания'
    },
    {
      id: 5,
      title: 'Коробки для кондитерских',
      category: 'boxes',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
      format: 'Пищевой картон, с окном',
      description: 'Упаковка для тортов и десертов'
    },
    {
      id: 6,
      title: 'Упаковка для одежды',
      category: 'textile',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
      format: 'Картон, лента, вкладыши',
      description: 'Элегантная упаковка для одежды'
    },
    {
      id: 7,
      title: 'Этикетки на бутылки',
      category: 'labels',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800&q=80',
      format: 'Водостойкая печать',
      description: 'Этикетки для напитков'
    },
    {
      id: 8,
      title: 'Коробки складные',
      category: 'boxes',
      image: 'https://images.unsplash.com/photo-1523363587-d6253f72e43a?w=800&q=80',
      format: 'Микрогофрокартон',
      description: 'Транспортировочная упаковка'
    },
    {
      id: 9,
      title: 'Крафт-пакеты',
      category: 'bags',
      image: 'https://images.unsplash.com/photo-1591116479360-52449e1fe8e6?w=800&q=80',
      format: 'Крафт с логотипом',
      description: 'Эко-френдли пакеты для магазинов'
    },
    {
      id: 10,
      title: 'Стикеры на упаковку',
      category: 'stickers',
      image: 'https://images.unsplash.com/photo-1618670968581-ad36de5aa755?w=800&q=80',
      format: 'Контурная резка',
      description: 'Брендированные стикеры-наклейки'
    },
    {
      id: 11,
      title: 'Коробки на заказ',
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1565531819215-d3ca3ab4b3e8?w=800&q=80',
      format: 'Индивидуальный дизайн',
      description: 'Упаковка под конкретный продукт'
    },
    {
      id: 12,
      title: 'Гофрокоробки',
      category: 'corrugated',
      image: 'https://images.unsplash.com/photo-1558452297-d9f5eb8bc84d?w=800&q=80',
      format: 'Трехслойный гофрокартон',
      description: 'Прочная транспортная упаковка'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все работы', icon: '📦' },
    { id: 'boxes', name: 'Коробки', icon: '📦' },
    { id: 'bags', name: 'Пакеты', icon: '🛍️' },
    { id: 'labels', name: 'Этикетки', icon: '🏷️' },
    { id: 'gift', name: 'Подарочная', icon: '🎁' },
    { id: 'custom', name: 'На заказ', icon: '✂️' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-transparent to-cyan-900/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Наши работы
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Упаковка и этикетки
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8">
                Брендированная упаковка, коробки, пакеты и этикетки для вашей продукции. 
                Создаем индивидуальные решения под любые задачи.
              </p>
              
              {/* Статистика */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                {[
                  { number: '5000+', label: 'Видов упаковки' },
                  { number: '100+', label: 'Форм и размеров' },
                  { number: '30', label: 'Типов материалов' },
                  { number: '3-7', label: 'Дней производство' },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-sky-500/50 transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
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
                      ? 'bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/50 scale-105'
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

        {/* Виды упаковки */}
        <section className="py-20 bg-gradient-to-b from-transparent to-sky-900/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Виды упаковки
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Разработаем и изготовим упаковку под ваш продукт
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Коробки',
                  icon: '📦',
                  items: ['Складные коробки', 'Жесткие коробки', 'Коробки-книжки', 'С окном PVC']
                },
                {
                  title: 'Пакеты',
                  icon: '🛍️',
                  items: ['Крафт-пакеты', 'Глянцевые', 'С ручками', 'Подарочные']
                },
                {
                  title: 'Этикетки',
                  icon: '🏷️',
                  items: ['Самоклеящиеся', 'На рулонах', 'Фигурные', 'Водостойкие']
                },
                {
                  title: 'Материалы',
                  icon: '📄',
                  items: ['Картон 250-600г', 'Микрогофрокартон', 'Крафт-бумага', 'Дизайнерская бумага']
                },
                {
                  title: 'Отделка',
                  icon: '✨',
                  items: ['Ламинация', 'УФ-лак', 'Тиснение', 'Конгрев']
                },
                {
                  title: 'Дополнительно',
                  icon: '🎨',
                  items: ['Разработка дизайна', 'Изготовление макета', 'Вырубка', 'Сборка']
                }
              ].map((block, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-sky-500/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{block.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-sky-400 mt-1">•</span>
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
            <div className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Нужна упаковка для продукции?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Разработаем дизайн, изготовим макет и напечатаем качественную упаковку
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
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

