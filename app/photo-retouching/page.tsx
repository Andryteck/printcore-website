'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './photo-retouching.module.css';

export default function PhotoRetouchingPage() {
  const services = [
    {
      icon: '✨',
      title: 'Базовая ретушь',
      price: 'от 5 руб',
      description: 'Цветокоррекция, кадрирование, устранение мелких дефектов',
      features: ['Коррекция яркости и контраста', 'Настройка баланса белого', 'Устранение эффекта красных глаз', 'Кадрирование и выравнивание']
    },
    {
      icon: '🎨',
      title: 'Портретная ретушь',
      price: 'от 15 руб',
      description: 'Профессиональная обработка портретов для социальных сетей и печати',
      features: ['Разглаживание кожи', 'Устранение дефектов кожи', 'Отбеливание зубов', 'Коррекция формы лица', 'Подчеркивание деталей']
    },
    {
      icon: '💎',
      title: 'Премиум ретушь',
      price: 'от 25 руб',
      description: 'Глубокая ретушь для профессиональных фотосессий',
      features: ['Детальная обработка кожи', 'Frequency Separation', 'Dodge & Burn', 'Коррекция фигуры', 'Работа с цветом и светом', 'Финальная доводка']
    },
    {
      icon: '🖼️',
      title: 'Реставрация фото',
      price: 'от 20 руб',
      description: 'Восстановление старых и поврежденных фотографий',
      features: ['Устранение царапин и потертостей', 'Восстановление утраченных фрагментов', 'Коррекция выцветших цветов', 'Реставрация черно-белых фото']
    },
    {
      icon: '🎭',
      title: 'Художественная обработка',
      price: 'от 30 руб',
      description: 'Креативная обработка с применением эффектов и стилизации',
      features: ['Цветокоррекция в стиле кино', 'Добавление эффектов', 'Стилизация под живопись', 'Создание коллажей']
    },
    {
      icon: '📸',
      title: 'Обработка каталожных фото',
      price: 'от 10 руб/фото',
      description: 'Профессиональная обработка товарных фотографий для интернет-магазинов',
      features: ['Удаление фона', 'Коррекция света и цвета', 'Выравнивание перспективы', 'Создание теней']
    }
  ];

  const advantages = [
    {
      icon: '👨‍🎨',
      title: 'Опытные ретушеры',
      description: 'Профессиональные специалисты с портфолио более 1000 работ'
    },
    {
      icon: '💻',
      title: 'Adobe Photoshop',
      description: 'Работаем в профессиональных программах последних версий'
    },
    {
      icon: '🔄',
      title: 'Бесплатные правки',
      description: 'До 2 правок включены в стоимость услуги'
    },
    {
      icon: '⏱️',
      title: 'Быстрые сроки',
      description: 'От 1 часа для базовой ретуши, 1-3 дня для сложных работ'
    },
    {
      icon: '💾',
      title: 'Все форматы',
      description: 'Работаем с JPEG, PNG, TIFF, RAW и другими форматами'
    },
    {
      icon: '🎯',
      title: 'Индивидуальный подход',
      description: 'Учитываем все ваши пожелания и особенности фото'
    }
  ];

  const beforeAfterExamples = [
    {
      title: 'Портретная ретушь',
      description: 'Устранение дефектов кожи, выравнивание тона, подчеркивание деталей'
    },
    {
      title: 'Реставрация старого фото',
      description: 'Восстановление поврежденной фотографии из семейного архива'
    },
    {
      title: 'Обработка для каталога',
      description: 'Удаление фона и коррекция цвета для товарной фотографии'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Отправьте фото',
      description: 'Загрузите фотографии через форму на сайте или отправьте на email/Telegram',
      icon: '📤'
    },
    {
      step: '2',
      title: 'Опишите задачу',
      description: 'Расскажите, что нужно исправить или улучшить. Можете приложить примеры',
      icon: '📝'
    },
    {
      step: '3',
      title: 'Получите оценку',
      description: 'Мы оценим сложность работы и сообщим стоимость и сроки',
      icon: '💰'
    },
    {
      step: '4',
      title: 'Ретушь и правки',
      description: 'Выполним ретушь и внесем правки по вашим комментариям',
      icon: '✨'
    },
    {
      step: '5',
      title: 'Получите результат',
      description: 'Готовые файлы отправим на email или Telegram в нужном формате',
      icon: '✅'
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
            "name": "Ретушь и обработка фотографий",
            "description": "Профессиональная ретушь фото в Минске. Портретная ретушь, реставрация старых фото, обработка для каталогов.",
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
              "@type": "AggregateOffer",
              "priceCurrency": "BYN",
              "lowPrice": "5",
              "highPrice": "30",
              "offerCount": "6"
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
                <span className={styles.heroIcon}>✨</span>
                Ретушь и обработка фотографий
              </h1>
              <p className={styles.heroSubtitle}>
                Профессиональная ретушь фото любой сложности. От базовой коррекции до премиум обработки.
              </p>
            </div>
          </div>

          {/* Services */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Наши услуги</h2>
            <p className={styles.sectionDescription}>
              Выберите подходящий вариант обработки для ваших фотографий
            </p>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <div className={styles.servicePrice}>{service.price}</div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className={styles.processSection}>
            <h2 className={styles.sectionTitle}>Как проходит работа</h2>
            <div className={styles.processGrid}>
              {process.map((item, index) => (
                <div key={index} className={styles.processCard}>
                  <div className={styles.processStep}>{item.step}</div>
                  <span className={styles.processIcon}>{item.icon}</span>
                  <h3 className={styles.processTitle}>{item.title}</h3>
                  <p className={styles.processDescription}>{item.description}</p>
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

          {/* Examples */}
          <section className={styles.examplesSection}>
            <h2 className={styles.sectionTitle}>Примеры работ</h2>
            <div className={styles.examplesGrid}>
              {beforeAfterExamples.map((example, index) => (
                <div key={index} className={styles.exampleCard}>
                  <div className={styles.examplePlaceholder}>
                    <span className={styles.examplePlaceholderIcon}>🖼️</span>
                    <span className={styles.exampleLabel}>До / После</span>
                  </div>
                  <h3 className={styles.exampleTitle}>{example.title}</h3>
                  <p className={styles.exampleDescription}>{example.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Software Info */}
          <section className={styles.softwareSection}>
            <div className={styles.softwareContent}>
              <h2 className={styles.softwareTitle}>
                <span className={styles.softwareIcon}>💻</span>
                Профессиональное ПО
              </h2>
              <div className={styles.softwareGrid}>
                <div className={styles.softwareItem}>
                  <h3>Adobe Photoshop CC</h3>
                  <p>Основной инструмент для ретуши. Используем последнюю версию с полным набором плагинов для профессиональной обработки портретов и фотографий.</p>
                </div>
                <div className={styles.softwareItem}>
                  <h3>Adobe Lightroom</h3>
                  <p>Для базовой коррекции и пакетной обработки большого количества фотографий. Идеально для каталогов и фотосессий.</p>
                </div>
                <div className={styles.softwareItem}>
                  <h3>Capture One</h3>
                  <p>Для работы с RAW-файлами профессиональных камер. Обеспечивает максимальное качество цветопередачи.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className={styles.ctaSection}>
            <h2>Нужна ретушь фотографий?</h2>
            <p>Отправьте нам свои фото, и мы сделаем их идеальными!</p>
            <div className={styles.ctaButtons}>
              <Link href="/contacts" className={styles.ctaButton}>
                <span>📧</span> Написать нам
              </Link>
              <a href="tel:+375333365678" className={styles.ctaButtonSecondary}>
                <span>📞</span> +375 33 336 5678
              </a>
            </div>
            <div className={styles.ctaNote}>
              Или отправьте фото в Telegram: <a href="https://t.me/printcoreby" target="_blank" rel="noopener noreferrer">@printcoreby</a>
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


