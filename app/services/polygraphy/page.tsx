'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './polygraphy.module.css';
import { useState, useEffect } from 'react';

export default function PolygraphyPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const printProducts = [
    { 
      name: "Визитки", 
      image: "https://static.printcore.by/content/business_card_core.png",
      order: "/business-cards",
      delay: 0.1
    },
    { 
      name: "Брошюры", 
      image: "https://static.printcore.by/content/broshures_core.png",
      order: "/brochures",
      delay: 0.2
    },
    { 
      name: "Каталоги и журналы", 
      image: "https://static.printcore.by/content/album_core.jpg",
      order: "/catalog_journals",
      delay: 0.4
    },
    { 
      name: "Буклеты", 
      image: "https://static.printcore.by/content/trifold_core.png",
      order: "/trifolds",
      delay: 0.5
    },
    { 
      name: "Подарочные сертификаты", 
      image: "https://static.printcore.by/content/sert_core.png",
      order: "/diploma_sertificat",
      delay: 0.6
    },
    { 
      name: "Грамоты и дипломы", 
      image: "https://static.printcore.by/content/diploma.png",
      order: "/diploma_sertificat",
      delay: 0.7
    },
    { 
      name: "Флаеры и листовки", 
      image: "https://static.printcore.by/content/flyer_pc.png",
      order: "/flaeryi-listovki",
      delay: 0.8
    },
    { 
      name: "Открытки", 
      image: "https://static.printcore.by/content/postcard.png",
      order: "/opencard",
      delay: 0.9
    },
    { 
      name: "Переплет", 
      image: "https://static.printcore.by/content/bloknot_core.png",
      order: "/order",
      delay: 1.0
    },
    { 
      name: "Стикеры и Наклейки", 
      image: "https://static.printcore.by/content/stiker_core.png",
      order: "/stikers",
      delay: 1.1
    },
    { 
      name: "3d(обьемные) стикеры", 
      image: "https://static.printcore.by/content/3d_order.png",
      order: "/stikers3d",
      delay: 1.1
    },
    { 
      name: "Бирки", 
      image: "https://static.printcore.by/content/birki_core.png",
      order: "/order",
      delay: 1.2
    },
    { 
      name: "Меню", 
      image: "https://static.printcore.by/content/menu_core.png",
      order: "/menu_order",
      delay: 1.3
    },
    { 
      name: "Конверты", 
      image: "https://static.printcore.by/content/envelop.png",
      order: "/order",
      delay: 1.3
    }
  ];

  const badges = [
    { name: "Визитки", href: "/business-cards" },
    { name: "Брошюры", href: "/brochures" },
    { name: "Листовки", href: "/flaeryi-listovki" },
    { name: "Каталоги журналы", href: "/catalog_journals" },
    { name: "Буклеты", href: "/trifolds" },
    { name: "Плакаты", href: "/order" },
    { name: "Грамоты и дипломы", href: "/diploma_sertificat" },
    { name: "Открытки", href: "/opencard" },
    { name: "Конверты", href: "/order" },
    { name: "Бирки", href: "/order" },
    { name: "Наклейки", href: "/stikers" },
    { name: "3d(обьемные) стикеры", href: "/stikers3d" },
    { name: "Флаеры", href: "/flaeryi-listovki" },
    { name: "Приглашения", href: "/order" },
    { name: "Меню", href: "/menu_order" },
    { name: "Сертификаты", href: "/diploma_sertificat" }
  ];

  const advantages = [
    {
      icon: '🖨️',
      title: 'Современное оборудование',
      description: 'Используем профессиональные печатные машины для высокого качества печати'
    },
    {
      icon: '⚡',
      title: 'Быстрое изготовление',
      description: 'Большинство заказов выполняем в течение 1-3 рабочих дней'
    },
    {
      icon: '💰',
      title: 'Доступные цены',
      description: 'Конкурентные цены без потери качества. Скидки при больших тиражах'
    },
    {
      icon: '🎨',
      title: 'Дизайн-услуги',
      description: 'Поможем создать дизайн или адаптировать существующий под печать'
    },
    {
      icon: '📦',
      title: 'Доставка',
      description: 'Доставляем готовую продукцию по Минску и области'
    },
    {
      icon: '✅',
      title: 'Гарантия качества',
      description: 'Гарантируем соответствие заявленным характеристикам и срокам'
    }
  ];

  const features = [
    {
      title: 'Цифровая печать',
      description: 'Быстрая печать небольших тиражей с высоким качеством. Идеально для визиток, листовок, буклетов и другой оперативной полиграфии.',
      icon: '💻'
    },
    {
      title: 'Офсетная печать',
      description: 'Экономичная печать больших тиражей. Используем современные офсетные машины для производства каталогов, журналов, брошюр.',
      icon: '📄'
    },
    {
      title: 'Послепечатная обработка',
      description: 'Ламинация, вырубка, фальцовка, склейка, переплет. Полный цикл изготовления полиграфической продукции.',
      icon: '✂️'
    },
    {
      title: 'Широкоформатная печать',
      description: 'Печать баннеров, плакатов, постеров больших форматов. Используем экосольвентные чернила для наружной рекламы.',
      icon: '🖼️'
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
            "name": "Полиграфия",
            "description": "Профессиональная полиграфия в Минске. Визитки, буклеты, каталоги, листовки. Цифровая и офсетная печать.",
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
              "description": "Полиграфические услуги от 5 рублей"
            }
          })
        }}
      />
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>

          {/* Categories Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Виды полиграфии</h2>
            <p className={styles.sectionDescription}>
              Выберите нужный вид полиграфической продукции
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
              Широкий ассортимент полиграфической продукции
            </p>
            <div className={styles.blocksContainer}>
              {printProducts.map((product, index) => (
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
            <h2 className={styles.sectionTitle}>Технологии печати</h2>
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
                <span className={styles.equipmentIcon}>🖨️</span>
                Современное оборудование
              </h2>
              <div className={styles.equipmentGrid}>
                <div className={styles.equipmentItem}>
                  <h3>🖨️ Цифровые машины</h3>
                  <p>Современные цифровые печатные машины для быстрой печати небольших тиражей с высоким качеством.</p>
                </div>
                <div className={styles.equipmentItem}>
                  <h3>📄 Офсетные машины</h3>
                  <p>Профессиональные офсетные машины для экономичной печати больших тиражей каталогов и журналов.</p>
                </div>
                <div className={styles.equipmentItem}>
                  <h3>✂️ Послепечатная обработка</h3>
                  <p>Полный набор оборудования для ламинации, вырубки, фальцовки, склейки и переплета.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className={styles.ctaSection}>
            <h2>Нужна полиграфия?</h2>
            <p>Закажите полиграфическую продукцию — сделаем быстро, качественно и недорого!</p>
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
