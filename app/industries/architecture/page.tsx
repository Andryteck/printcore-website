import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для архитектуры и строительства - PrintCore',
  description: 'Презентационные буклеты проектов, визитки архитекторов, каталоги строительных материалов, планы и чертежи.',
  keywords: 'полиграфия архитектура, визитки архитекторов, буклеты проектов, каталоги строительства, планы чертежи, печать для строительства',
  openGraph: {
    title: 'Полиграфия для архитектуры и строительства - PrintCore',
    description: 'Профессиональная полиграфия для архитекторов и строителей',
    url: 'https://printcore.by/industries/architecture',
    images: [
      {
        url: 'https://printcore.by/images/industries/architecture-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для архитектуры и строительства',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для архитектуры и строительства - PrintCore',
    description: 'Профессиональная полиграфия для архитекторов и строителей',
  },
};

export default function ArchitecturePage() {
  const products = [
    {
      category: 'Презентационные материалы',
      items: [
        'Презентационные буклеты проектов',
        'Портфолио архитектурных работ',
        'Каталоги реализованных объектов',
        'Брошюры для клиентов'
      ]
    },
    {
      category: 'Визитки и контакты',
      items: [
        'Визитки архитекторов',
        'Визитки проектировщиков',
        'Визитки строителей',
        'Карточки с контактами'
      ]
    },
    {
      category: 'Техническая документация',
      items: [
        'Чертежи и планы зданий',
        'Технические спецификации',
        'Проектная документация',
        'Инструкции по строительству'
      ]
    },
    {
      category: 'Каталоги и прайсы',
      items: [
        'Каталоги строительных материалов',
        'Прайс-листы на услуги',
        'Буклеты о технологиях',
        'Справочники материалов'
      ]
    },
    {
      category: 'Рекламные материалы',
      items: [
        'Вывески строительных компаний',
        'Баннеры для выставок',
        'Ролл-апы на объектах',
        'Флаеры для рекламы'
      ]
    },
    {
      category: 'Документы и сертификаты',
      items: [
        'Сертификаты качества работ',
        'Лицензии и разрешения',
        'Договоры подряда',
        'Акты выполненных работ'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero секция с большим фото */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/industries/architecture-hero.jpg" 
            alt="Архитектура и строительство - современные проекты"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Архитектура и строительство</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для архитекторов, проектировщиков и строителей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для строительной отрасли</h2>
          <p className={styles.descriptionText}>
            Архитектурные и строительные компании нуждаются в качественной полиграфии для презентации 
            проектов, технической документации и привлечения клиентов. Мы специализируемся на создании 
            профессиональных материалов для строительной отрасли.
          </p>
          <p className={styles.descriptionText}>
            От презентационных буклетов до технических чертежей — все материалы создаются с учетом 
            специфики строительного бизнеса и помогают подчеркнуть профессионализм вашей компании.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для строительной отрасли</h2>
          
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
                <Image src="/icons/design.svg" alt="Дизайн" width={40} height={40} />
              </div>
              <h3>Профессиональный дизайн</h3>
              <p>Создаем презентационные материалы, которые эффективно демонстрируют ваши проекты и привлекают клиентов</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/document.svg" alt="Точность" width={40} height={40} />
              </div>
              <h3>Точность печати</h3>
              <p>Высокое качество печати технических чертежей и планов с сохранением всех деталей и размеров</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/package.svg" alt="Большие форматы" width={40} height={40} />
              </div>
              <h3>Большие форматы</h3>
              <p>Печать планов и чертежей в форматах А1, А0 и других больших размерах для удобства работы на объектах</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для вашей строительной компании?</h2>
          <p className={styles.ctaText}>
            Свяжитесь с нами для получения персонального предложения и расчета стоимости
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
