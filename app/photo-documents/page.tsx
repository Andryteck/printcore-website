'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './photo-documents.module.css';

export default function PhotoDocumentsPage() {
  const documentTypes = [
    {
      icon: '📋',
      title: 'Паспорт РБ',
      size: '40×50 мм',
      description: 'Биометрическое фото для паспорта Республики Беларусь'
    },
    {
      icon: '🌐',
      title: 'Загранпаспорт',
      size: '35×45 мм',
      description: 'Фото для биометрического загранпаспорта'
    },
    {
      icon: '🚙',
      title: 'Водительское удостоверение',
      size: '35×45 мм',
      description: 'Фото для водительских прав'
    },
    {
      icon: '📚',
      title: 'Студенческий билет',
      size: '30×40 мм',
      description: 'Фото для студенческого или ученического билета'
    },
    {
      icon: '⚕️',
      title: 'Медицинская книжка',
      size: '30×40 мм',
      description: 'Фото для медицинской книжки'
    },
    {
      icon: '🏢',
      title: 'Пропуск',
      size: '30×40 мм',
      description: 'Фото для рабочего пропуска или удостоверения'
    },
    {
      icon: '🛫',
      title: 'Виза',
      size: 'Различные форматы',
      description: 'Фото для виз разных стран (Шенген, США, и др.)'
    },
    {
      icon: '👤',
      title: 'Свидетельство о рождении',
      size: '30×40 мм',
      description: 'Фото для детских документов'
    }
  ];

  const advantages = [
    {
      icon: '⏱️',
      title: 'Быстро',
      description: 'Готовые фото через 5-7 минут'
    },
    {
      icon: '📷',
      title: 'Профессиональная камера',
      description: 'Современное оборудование Canon/Nikon'
    },
    {
      icon: '💡',
      title: 'Студийный свет',
      description: 'Профессиональное освещение для идеального результата'
    },
    {
      icon: '✔️',
      title: 'Соответствие требованиям',
      description: 'Гарантируем принятие фото во всех инстанциях'
    },
    {
      icon: '✨',
      title: 'Ретушь',
      description: 'Легкая ретушь входит в стоимость'
    },
    {
      icon: '💾',
      title: 'Цифровая копия',
      description: 'Отправим фото на email или в Telegram'
    }
  ];

  const features = [
    {
      title: 'Профессиональное оборудование',
      description: 'Мы используем профессиональные камеры Canon EOS и Nikon с высоким разрешением. Студийное освещение создает равномерный свет без теней, что гарантирует качественный результат.',
      icon: '📷'
    },
    {
      title: 'Соответствие стандартам',
      description: 'Все фотографии выполняются строго по требованиям ICAO (Международной организации гражданской авиации) и соответствуют стандартам МВД РБ. Гарантируем принятие фото.',
      icon: '✔️'
    },
    {
      title: 'Быстрое изготовление',
      description: 'Весь процесс занимает 5-7 минут: съемка, обработка, печать. Не нужно записываться заранее — приходите в удобное время в рабочие часы.',
      icon: '⏱️'
    },
    {
      title: 'Цифровая копия в подарок',
      description: 'Отправим готовое фото на вашу электронную почту или в Telegram бесплатно. Удобно для электронных заявок и для хранения.',
      icon: '💾'
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
            "name": "Фото на документы",
            "description": "Профессиональная фотография на документы в Минске. Быстро, качественно, недорого. Готовые фото за 5-7 минут.",
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
              "price": "17",
              "description": "Фото на документы 17 рублей"
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
                <span className={styles.heroIcon}>📷</span>
                Фото на документы
              </h1>
              <p className={styles.heroSubtitle}>
                Профессиональная фотография на любые документы за 5-7 минут
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.heroFeatureIcon}>⏱️</span>
                  <span>Готово за 5-7 минут</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.heroFeatureIcon}>📷</span>
                  <span>Профессиональная камера</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.heroFeatureIcon}>💡</span>
                  <span>Студийный свет</span>
                </div>
              </div>
            </div>
          </div>

          {/* Document Types */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Типы документов</h2>
            <p className={styles.sectionDescription}>
              Делаем фото для любых документов с соблюдением всех требований
            </p>
            <div className={styles.documentsGrid}>
              {documentTypes.map((doc, index) => (
                <div key={index} className={styles.documentCard}>
                  <span className={styles.documentIcon}>{doc.icon}</span>
                  <h3 className={styles.documentTitle}>{doc.title}</h3>
                  <div className={styles.documentSize}>{doc.size}</div>
                  <p className={styles.documentDescription}>{doc.description}</p>
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
            <h2 className={styles.sectionTitle}>Как мы работаем</h2>
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
                <span className={styles.equipmentIcon}>📷</span>
                Профессиональное оборудование
              </h2>
              <div className={styles.equipmentGrid}>
                <div className={styles.equipmentItem}>
                  <h3>📷 Камера</h3>
                  <p>Профессиональные зеркальные камеры Canon EOS и Nikon с высоким разрешением матрицы. Обеспечивают четкость и естественную цветопередачу.</p>
                </div>
                <div className={styles.equipmentItem}>
                  <h3>💡 Освещение</h3>
                  <p>Студийный свет с софтбоксами создает равномерное освещение без бликов и теней. Идеальное качество для биометрических фото.</p>
                </div>
                <div className={styles.equipmentItem}>
                  <h3>🖨️ Печать</h3>
                  <p>Профессиональный фотопринтер FUJIFILM. Фотографии не выцветают и сохраняют качество годами.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className={styles.pricingSection}>
            <h2 className={styles.sectionTitle}>Стоимость</h2>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>Фото на документы</h3>
                <div className={styles.price}>17 руб</div>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>✓ Профессиональная съемка</li>
                <li>✓ Студийный свет и камера</li>
                <li>✓ Легкая ретушь</li>
                <li>✓ Печать 4-6 экземпляров</li>
                <li>✓ Цифровая копия на email/Telegram</li>
                <li>✓ Соответствие всем требованиям</li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <section className={styles.ctaSection}>
            <h2>Нужно фото на документы?</h2>
            <p>Приходите к нам — сделаем быстро, качественно и недорого!</p>
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

