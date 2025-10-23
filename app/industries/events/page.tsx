import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для праздников и мероприятий - PrintCore',
  description: 'Пригласительные, программы мероприятий, сертификаты участников, декоративные элементы, сувенирная продукция.',
  keywords: 'полиграфия праздники, пригласительные, программы мероприятий, сертификаты участников, декоративные элементы, печать для мероприятий',
  openGraph: {
    title: 'Полиграфия для праздников и мероприятий - PrintCore',
    description: 'Профессиональная полиграфия для праздников и мероприятий',
    url: 'https://printcore.by/industries/events',
    images: [
      {
        url: 'https://printcore.by/images/industries/events-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для праздников и мероприятий',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для праздников и мероприятий - PrintCore',
    description: 'Профессиональная полиграфия для праздников и мероприятий',
  },
};

export default function EventsPage() {
  const products = [
    {
      category: 'Приглашения',
      items: [
        'Пригласительные на праздники',
        'Приглашения на корпоративы',
        'Приглашения на свадьбы',
        'Приглашения на детские праздники'
      ]
    },
    {
      category: 'Программы мероприятий',
      items: [
        'Программы праздников',
        'Расписания мероприятий',
        'Схемы рассадки гостей',
        'Планы торжеств'
      ]
    },
    {
      category: 'Сертификаты и дипломы',
      items: [
        'Сертификаты участников',
        'Дипломы и грамоты',
        'Благодарственные письма',
        'Сертификаты подарков'
      ]
    },
    {
      category: 'Декоративные элементы',
      items: [
        'Баннеры и растяжки',
        'Флаги и флажки',
        'Декоративные таблички',
        'Украшения для зала'
      ]
    },
    {
      category: 'Сувенирная продукция',
      items: [
        'Подарочные пакеты',
        'Календари с фото',
        'Блокноты и ручки',
        'Магниты и наклейки'
      ]
    },
    {
      category: 'Рекламные материалы',
      items: [
        'Флаеры о мероприятии',
        'Афиши праздников',
        'Рекламные буклеты',
        'Промо-материалы'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero секция с большим фото */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/industries/events-hero.jpg" 
            alt="Праздники и мероприятия - веселые события"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Праздники и мероприятия</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для праздников, корпоративов и торжеств
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для торжественных событий</h2>
          <p className={styles.descriptionText}>
            Праздники и мероприятия требуют особого подхода к полиграфии. Мы создаем материалы, 
            которые помогают создать атмосферу праздника, информируют гостей и делают мероприятие 
            незабываемым.
          </p>
          <p className={styles.descriptionText}>
            От пригласительных до декоративных элементов — все материалы разрабатываются с учетом 
            специфики праздничных мероприятий и помогают создать особую атмосферу вашего торжества.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для мероприятий</h2>
          
          <div className={styles.productsGrid}>
            {products.map((category, index) => (
              <div key={index} className={styles.productCategory}>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <ul className={styles.productList}>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.productItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className={styles.advantagesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
          
          <div className={styles.advantagesGrid}>
            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/gift.svg" alt="Праздничная атмосфера" width={40} height={40} />
              </div>
              <h3>Праздничная атмосфера</h3>
              <p>Создаем материалы, которые помогают создать особую атмосферу праздника и радости</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/design.svg" alt="Креативность" width={40} height={40} />
              </div>
              <h3>Креативные решения</h3>
              <p>Разрабатываем уникальные дизайны, которые делают ваше мероприятие особенным</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/lightning.svg" alt="Срочность" width={40} height={40} />
              </div>
              <h3>Быстрое исполнение</h3>
              <p>Понимаем важность сроков для мероприятий — выполняем заказы в кратчайшие сроки</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для мероприятия?</h2>
          <p className={styles.ctaText}>
            Создадим материалы, которые сделают ваше торжество незабываемым
          </p>
          
          <div className={styles.ctaButtons}>
            <Link href="/contacts" className={styles.ctaButtonPrimary}>
              Получить расчет
            </Link>
            <Link href="/business-terms" className={styles.ctaButtonSecondary}>
              Условия для бизнеса
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
