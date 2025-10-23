'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './souvenirs.module.css';
import { useState, useEffect } from 'react';

export default function SouvenirsPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const souvenirProducts = [
    { 
      name: "Кружки", 
      image: "https://static.printcore.by/content/mug_core.png",
      order: "/order",
      delay: 0.1
    },
    { 
      name: "Футболки", 
      image: "https://static.printcore.by/content/tshirt_core.png",
      order: "/order",
      delay: 0.2
    },
    { 
      name: "Бейсболки", 
      image: "https://static.printcore.by/content/cap_core.png",
      order: "/order",
      delay: 0.3
    },
    { 
      name: "Ручки", 
      image: "https://static.printcore.by/content/pen_core.png",
      order: "/order",
      delay: 0.4
    },
    { 
      name: "Блокноты", 
      image: "https://static.printcore.by/content/notebook_core.png",
      order: "/order",
      delay: 0.5
    },
    { 
      name: "Значки", 
      image: "https://static.printcore.by/content/badge_core.png",
      order: "/order",
      delay: 0.6
    },
    { 
      name: "Брелоки", 
      image: "https://static.printcore.by/content/keychain_core.png",
      order: "/order",
      delay: 0.7
    },
    { 
      name: "Сумки", 
      image: "https://static.printcore.by/content/bag_core.png",
      order: "/order",
      delay: 0.8
    },
    { 
      name: "Плакаты", 
      image: "https://static.printcore.by/content/poster_core.png",
      order: "/order",
      delay: 0.9
    },
    { 
      name: "Календари", 
      image: "https://static.printcore.by/content/calendar_core.png",
      order: "/order",
      delay: 1.0
    },
    { 
      name: "Магниты", 
      image: "https://static.printcore.by/content/magnet_core.png",
      order: "/order",
      delay: 1.1
    },
    { 
      name: "Наклейки", 
      image: "https://static.printcore.by/content/sticker_core.png",
      order: "/stikers",
      delay: 1.2
    },
    { 
      name: "Таблички", 
      image: "https://static.printcore.by/content/plaque_core.png",
      order: "/order",
      delay: 1.3
    },
    { 
      name: "Вывески", 
      image: "https://static.printcore.by/content/sign_core.png",
      order: "/order",
      delay: 1.4
    }
  ];

  const badges = [
    { name: "Кружки", href: "/order" },
    { name: "Футболки", href: "/order" },
    { name: "Бейсболки", href: "/order" },
    { name: "Ручки", href: "/order" },
    { name: "Блокноты", href: "/order" },
    { name: "Значки", href: "/order" },
    { name: "Брелоки", href: "/order" },
    { name: "Сумки", href: "/order" },
    { name: "Плакаты", href: "/order" },
    { name: "Календари", href: "/order" },
    { name: "Магниты", href: "/order" },
    { name: "Наклейки", href: "/stikers" },
    { name: "Таблички", href: "/order" },
    { name: "Вывески", href: "/order" },
    { name: "Подарки", href: "/order" },
    { name: "Корпоративные сувениры", href: "/order" }
  ];

  const advantages = [
    {
      icon: '🎨',
      title: 'Индивидуальный дизайн',
      description: 'Создаем уникальные дизайны под ваш бренд и требования'
    },
    {
      icon: '⚡',
      title: 'Быстрое изготовление',
      description: 'Большинство сувениров изготавливаем за 3-7 дней'
    },
    {
      icon: '💰',
      title: 'Доступные цены',
      description: 'Конкурентные цены при любых тиражах. Скидки от 100 штук'
    },
    {
      icon: '🏢',
      title: 'Корпоративные решения',
      description: 'Специальные условия для корпоративных клиентов'
    },
    {
      icon: '📦',
      title: 'Доставка',
      description: 'Доставляем готовые сувениры по Минску и области'
    },
    {
      icon: '✅',
      title: 'Гарантия качества',
      description: 'Гарантируем высокое качество печати и материалов'
    }
  ];

  const features = [
    {
      title: 'Сублимационная печать',
      description: 'Печать на кружках, футболках, кепках. Яркие, стойкие цвета, которые не выцветают и не стираются.',
      icon: '🔥'
    },
    {
      title: 'Шелкография',
      description: 'Классический метод нанесения на текстиль и другие материалы. Идеально для больших тиражей.',
      icon: '🖼️'
    },
    {
      title: 'Лазерная гравировка',
      description: 'Нанесение логотипов и текста на металл, дерево, пластик. Долговечное и стильное решение.',
      icon: '⚡'
    },
    {
      title: 'УФ-печать',
      description: 'Печать на любых поверхностях: пластик, металл, стекло. Высокое качество и стойкость.',
      icon: '💡'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Сувениры и брендирование",
            "description": "Производство сувенирной продукции с нанесением логотипов. Кружки, футболки, ручки, бейсболки. Корпоративные подарки.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PrintCore",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "пр. Дзержинского 3Б",
                "addressLocality": "Минск",
                "addressCountry": "BY"
              },
              "telephone": "+375333365678"
            },
            "areaServed": "BY",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "BYN",
              "description": "Сувенирная продукция от 5 рублей"
            }
          })
        }}
      />
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>

          {/* Categories Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Виды сувениров</h2>
            <p className={styles.sectionDescription}>
              Выберите нужный вид сувенирной продукции
            </p>
            <div className={styles.badgesWrapper}>
              <div className={`${styles.badgesContainer} ${isExpanded ? styles.expanded : ''}`}>
                {badges.map((badge, index) => (
                  <Link key={index} href={badge.href} className={styles.badge}>
                    {badge.name}
                  </Link>
                ))}
              </div>
              <button 
                className={`${styles.showMore} ${isExpanded ? styles.expanded : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Скрыть' : 'Показать ещё'}
                <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#93989f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </section>

          {/* Products Grid */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Наша продукция</h2>
            <p className={styles.sectionDescription}>
              Широкий ассортимент сувенирной продукции
            </p>
            <div className={styles.blocksContainer}>
              {souvenirProducts.map((product, index) => (
                <div key={index} className={styles.printBlock}>
                  <Link href={product.order} className={styles.hrefItem}>
                    <p>{product.name}</p>
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Наши преимущества</h2>
            <div className={styles.advantagesGrid}>
              {advantages.map((advantage, index) => (
                <div key={index} className={styles.advantageCard}>
                  <span className={styles.advantageIcon}>{advantage.icon}</span>
                  <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                  <p className={styles.advantageDescription}>{advantage.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Details */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Технологии нанесения</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureHeader}>
                    <span className={styles.featureIcon}>{feature.icon}</span>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                  </div>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Equipment Section */}
          <section className={styles.equipmentSection}>
            <div className={styles.equipmentContent}>
              <h2 className={styles.equipmentTitle}>
                <span className={styles.equipmentIcon}>🎨</span>
                Современное оборудование
              </h2>
              <div className={styles.equipmentGrid}>
                <div className={styles.equipmentItem}>
                  <h3>🔥 Сублимационные принтеры</h3>
                  <p>Профессиональные принтеры для печати на текстиле и керамике. Яркие, стойкие изображения.</p>
                </div>
                <div className={styles.equipmentItem}>
                  <h3>⚡ Лазерные граверы</h3>
                  <p>Точная гравировка на металле, дереве, пластике. Идеально для корпоративных подарков.</p>
                </div>
                <div className={styles.equipmentItem}>
                  <h3>🖼️ Шелкотрафаретная печать</h3>
                  <p>Классический метод для больших тиражей. Высокое качество и экономичность.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className={styles.ctaSection}>
            <h2>Нужны сувениры с логотипом?</h2>
            <p>Закажите сувенирную продукцию — создадим уникальные подарки для вашего бренда!</p>
            <div className={styles.ctaButtons}>
              <Link href="/contacts" className={styles.ctaButton}>
                <span>📍</span> Как нас найти
              </Link>
              <a href="tel:+375333365678" className={styles.ctaButtonSecondary}>
                <span>📞</span> +375 33 336 5678
              </a>
            </div>
          </section>

          {/* Back Button */}
          <div className={styles.backButtonWrapper}>
            <Link href="/services" className={styles.backBtn}>
              <span>←</span> Назад к услугам
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
