'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoGallery from '@/components/PhotoGallery';
import Link from 'next/link';

export default function WideFormatPrintingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const photos = [
    {
      id: 1,
      title: 'Рекламный баннер для выставки',
      category: 'banners',
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80',
      format: '3x6 метров, баннерная ткань',
      description: 'Яркий баннер для наружной рекламы с защитой от УФ'
    },
    {
      id: 2,
      title: 'Выставочный стенд',
      category: 'stands',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
      format: '2.5x3 метра, Pop-up конструкция',
      description: 'Мобильный стенд для выставок и презентаций'
    },
    {
      id: 3,
      title: 'Оклейка витрины',
      category: 'windows',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      format: 'Перфорированная пленка',
      description: 'Брендирование витрин магазинов'
    },
    {
      id: 4,
      title: 'Фасадная вывеска',
      category: 'facade',
      image: 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=800&q=80',
      format: '5x2 метра, баннер + подсветка',
      description: 'Вывеска с внутренней подсветкой'
    },
    {
      id: 5,
      title: 'Билборд 3x6',
      category: 'billboards',
      image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80',
      format: '3x6 метров, ламинация',
      description: 'Наружная реклама премиум качества'
    },
    {
      id: 6,
      title: 'Оформление торгового центра',
      category: 'indoor',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      format: 'Различные размеры, самоклеящаяся пленка',
      description: 'Комплексное оформление интерьера'
    },
    {
      id: 7,
      title: 'Ситилайт постер',
      city: 'citylight',
      image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&q=80',
      format: '1.2x1.8 метра, backlit',
      description: 'Плакат для световых коробов'
    },
    {
      id: 8,
      title: 'Стикеры на пол',
      category: 'floor',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
      format: 'Различные размеры, антискользящее покрытие',
      description: 'Напольная реклама и навигация'
    },
    {
      id: 9,
      title: 'Оклейка автомобиля',
      category: 'vehicle',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
      format: 'Полная/частичная оклейка, виниловая пленка',
      description: 'Брендирование корпоративного транспорта'
    },
    {
      id: 10,
      title: 'Постеры для метро',
      category: 'metro',
      image: 'https://images.unsplash.com/photo-1485447433894-c54b0bc5b6c4?w=800&q=80',
      format: '1.2x1.8 метра, ламинация',
      description: 'Рекламные постеры для метрополитена'
    },
    {
      id: 11,
      title: 'Ролл-ап стенд',
      category: 'rollup',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      format: '0.85x2 метра, мобильная конструкция',
      description: 'Мобильный стенд для презентаций'
    },
    {
      id: 12,
      title: 'Баннер на здание',
      category: 'building',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      format: '10x15 метров, сетка mesh',
      description: 'Гигантский баннер на фасад здания'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все работы', icon: '🖼️' },
    { id: 'banners', name: 'Баннеры', icon: '🎯' },
    { id: 'stands', name: 'Стенды', icon: '📊' },
    { id: 'windows', name: 'Витрины', icon: '🏪' },
    { id: 'facade', name: 'Вывески', icon: '🏢' },
    { id: 'vehicle', name: 'Авто', icon: '🚗' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-red-900/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Наши работы
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Широкоформатная печать
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8">
                Баннеры, стенды, вывески и наружная реклама любых размеров. 
                Долговечные материалы и яркие цвета.
              </p>
              
              {/* Статистика */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                {[
                  { number: '2000+', label: 'Баннеров напечатано' },
                  { number: '15м', label: 'Максимальная ширина' },
                  { number: '10', label: 'Типов материалов' },
                  { number: '24/7', label: 'Срочная печать' },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" />
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
                      ? 'bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-lg shadow-orange-500/50 scale-105'
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

        {/* Материалы и услуги */}
        <section className="py-20 bg-gradient-to-b from-transparent to-orange-900/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Материалы и услуги
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Широкий выбор материалов для любых задач наружной и внутренней рекламы
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Баннерная ткань',
                  icon: '🎯',
                  items: ['Frontlit 440г', 'Blockout 510г', 'Mesh 270г', 'Backlit 510г']
                },
                {
                  title: 'Пленки',
                  icon: '📋',
                  items: ['Самоклеящаяся', 'Перфорированная', 'Виниловая', 'Светоотражающая']
                },
                {
                  title: 'Жесткие материалы',
                  icon: '💪',
                  items: ['ПВХ 3-10мм', 'Дибонд', 'Оргстекло', 'Картон']
                },
                {
                  title: 'Размеры',
                  icon: '📐',
                  items: ['До 15м ширина', 'Без ограничений длина', 'Малые форматы', 'Гигантские баннеры']
                },
                {
                  title: 'Доп. услуги',
                  icon: '✨',
                  items: ['Люверсы', 'Карманы', 'Ламинация', 'Монтаж']
                },
                {
                  title: 'Сроки',
                  icon: '⚡',
                  items: ['Срочно - 4 часа', 'Стандарт - 1 день', 'Большие тиражи - 2-3 дня', 'Монтаж по договору']
                }
              ].map((block, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{block.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-orange-400 mt-1">•</span>
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
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Нужна широкоформатная печать?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Проконсультируем по материалам, рассчитаем стоимость и изготовим в кратчайшие сроки
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
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

