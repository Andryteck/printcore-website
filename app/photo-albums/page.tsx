'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlbumBuilder from '@/components/AlbumBuilder';
import AlbumEditor from '@/components/AlbumEditor';
import TemplateManager from '@/components/TemplateManager';
import styles from './photo-albums.module.css';

export default function PhotoAlbumsPage() {
  const [activeTab, setActiveTab] = useState<'create' | 'templates' | 'editor'>('create');
  const [showEditor, setShowEditor] = useState(false);

  const albumTypes = [
    {
      id: 'classic',
      name: 'Классический альбом',
      description: 'Стандартный фотоальбом с твердой обложкой',
      price: 'от 45 BYN',
      pages: '20-50 страниц',
      size: '20×30 см',
      icon: '📖'
    },
    {
      id: 'premium',
      name: 'Премиум альбом',
      description: 'Люксовая версия с кожаной обложкой',
      price: 'от 85 BYN',
      pages: '30-100 страниц',
      size: '25×35 см',
      icon: '👑'
    },
    {
      id: 'wedding',
      name: 'Свадебный альбом',
      description: 'Специально для свадебных фотографий',
      price: 'от 65 BYN',
      pages: '40-80 страниц',
      size: '30×40 см',
      icon: '💒'
    },
    {
      id: 'family',
      name: 'Семейный альбом',
      description: 'Для семейных фотографий и воспоминаний',
      price: 'от 35 BYN',
      pages: '20-60 страниц',
      size: '20×25 см',
      icon: '👨‍👩‍👧‍👦'
    }
  ];

  const features = [
    {
      icon: '🎨',
      title: 'Онлайн редактор',
      description: 'Создавайте альбомы прямо в браузере с удобным редактором'
    },
    {
      icon: '📱',
      title: 'Мобильная версия',
      description: 'Работайте с любого устройства - телефона, планшета или компьютера'
    },
    {
      icon: '☁️',
      title: 'Облачное хранение',
      description: 'Ваши проекты сохраняются в облаке и доступны в любое время'
    },
    {
      icon: '🖨️',
      title: 'Профессиональная печать',
      description: 'Печатаем на качественной фотобумаге с высоким разрешением'
    },
    {
      icon: '📦',
      title: 'Быстрая доставка',
      description: 'Готовые альбомы доставляем по Минску за 1-2 дня'
    },
    {
      icon: '✨',
      title: 'Уникальные шаблоны',
      description: 'Большой выбор готовых шаблонов от наших дизайнеров'
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
            "name": "Фотоальбомы на заказ",
            "description": "Создание персональных фотоальбомов онлайн. Загрузите фото, выберите шаблон и получите готовый альбом.",
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
              "price": "35",
              "description": "Фотоальбомы от 35 BYN"
            }
          })
        }}
      />
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Hero Section */}
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <h1>
                <span className={styles.heroIcon}>📖</span>
                Фотоальбомы на заказ
              </h1>
              <p className={styles.heroSubtitle}>
                Создайте персональный фотоальбом онлайн с профессиональным качеством
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.heroFeatureIcon}>🎨</span>
                  <span>Онлайн редактор</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.heroFeatureIcon}>📱</span>
                  <span>Работает на всех устройствах</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.heroFeatureIcon}>✨</span>
                  <span>Уникальные шаблоны</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'create' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('create')}
            >
              <span className={styles.tabIcon}>🎨</span>
              Создать альбом
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'templates' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('templates')}
            >
              <span className={styles.tabIcon}>📋</span>
              Управление шаблонами
            </button>
          </div>

          {/* Main Content */}
          {showEditor ? (
            <AlbumEditor 
              onSave={(albumData) => {
                console.log('Сохранение альбома:', albumData);
                setShowEditor(false);
              }}
              onClose={() => setShowEditor(false)}
            />
          ) : activeTab === 'create' ? (
            <AlbumBuilder onOpenEditor={() => setShowEditor(true)} />
          ) : (
            <TemplateManager />
          )}

          {/* Album Types */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Типы альбомов</h2>
            <p className={styles.sectionDescription}>
              Выберите подходящий тип альбома для ваших фотографий
            </p>
            <div className={styles.albumTypesGrid}>
              {albumTypes.map((type) => (
                <div key={type.id} className={styles.albumTypeCard}>
                  <div className={styles.albumTypeIcon}>{type.icon}</div>
                  <h3 className={styles.albumTypeTitle}>{type.name}</h3>
                  <p className={styles.albumTypeDescription}>{type.description}</p>
                  <div className={styles.albumTypeDetails}>
                    <div className={styles.albumTypeDetail}>
                      <span className={styles.detailLabel}>Цена:</span>
                      <span className={styles.detailValue}>{type.price}</span>
                    </div>
                    <div className={styles.albumTypeDetail}>
                      <span className={styles.detailLabel}>Страниц:</span>
                      <span className={styles.detailValue}>{type.pages}</span>
                    </div>
                    <div className={styles.albumTypeDetail}>
                      <span className={styles.detailLabel}>Размер:</span>
                      <span className={styles.detailValue}>{type.size}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Наши возможности</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className={styles.ctaSection}>
            <h2>Готовы создать свой фотоальбом?</h2>
            <p>Начните прямо сейчас - это просто и увлекательно!</p>
            <div className={styles.ctaButtons}>
              <button 
                className={styles.ctaButton}
                onClick={() => setActiveTab('create')}
              >
                <span>🎨</span> Начать создание
              </button>
              <a href="tel:+375333365678" className={styles.ctaButtonSecondary}>
                <span>📞</span> +375 33 336 5678
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
