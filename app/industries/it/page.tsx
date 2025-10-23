import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для IT компаний - PrintCore',
  description: 'Визитки IT-специалистов, техническая документация, руководства пользователя, сертификаты программ, брендинг.',
  keywords: 'полиграфия IT, визитки программистов, техническая документация, руководства пользователя, брендинг IT, печать для IT',
  openGraph: {
    title: 'Полиграфия для IT компаний - PrintCore',
    description: 'Профессиональная полиграфия для IT компаний и разработчиков',
    url: 'https://printcore.by/industries/it',
    images: [
      {
        url: 'https://printcore.by/images/industries/it-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для IT компаний',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для IT компаний - PrintCore',
    description: 'Профессиональная полиграфия для IT компаний и разработчиков',
  },
};

export default function ITPage() {
  const products = [
    {
      category: 'Визитки и контакты',
      items: [
        'Визитки IT-специалистов',
        'Визитки программистов',
        'Визитки дизайнеров',
        'Визитки менеджеров проектов'
      ]
    },
    {
      category: 'Техническая документация',
      items: [
        'Руководства пользователя',
        'Технические спецификации',
        'API документация',
        'Инструкции по установке'
      ]
    },
    {
      category: 'Сертификаты и лицензии',
      items: [
        'Сертификаты программ',
        'Лицензии на ПО',
        'Сертификаты разработчиков',
        'Дипломы IT-курсов'
      ]
    },
    {
      category: 'Презентационные материалы',
      items: [
        'Презентации проектов',
        'Каталоги IT-услуг',
        'Буклеты о технологиях',
        'Портфолио разработок'
      ]
    },
    {
      category: 'Брендинг и реклама',
      items: [
        'Логотипы IT-компаний',
        'Фирменный стиль',
        'Рекламные буклеты',
        'Календари с логотипом'
      ]
    },
    {
      category: 'Организационные материалы',
      items: [
        'Таблички на офисы',
        'Бейджи сотрудников',
        'Инструкции для персонала',
        'Формы обратной связи'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero секция с большим фото */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/industries/it-hero.jpg" 
            alt="IT компании - современные технологии"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>IT компании</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для IT компаний и разработчиков
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для IT-сферы</h2>
          <p className={styles.descriptionText}>
            IT компании нуждаются в качественной полиграфии для технической документации, 
            презентации проектов и создания профессионального имиджа. Мы создаем материалы, 
            которые помогают IT-специалистам эффективно работать и презентовать свои решения.
          </p>
          <p className={styles.descriptionText}>
            От технической документации до презентационных материалов — все изделия разрабатываются 
            с учетом специфики IT-сферы и помогают подчеркнуть инновационность вашей компании.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для IT компаний</h2>
          
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
                <Image src="/icons/lightning.svg" alt="Инновации" width={40} height={40} />
              </div>
              <h3>Современные технологии</h3>
              <p>Используем современные технологии печати для создания материалов, соответствующих IT-сфере</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/design.svg" alt="Техничность" width={40} height={40} />
              </div>
              <h3>Технический подход</h3>
              <p>Понимаем специфику IT-проектов и создаем материалы, которые подчеркивают профессионализм</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/document.svg" alt="Точность" width={40} height={40} />
              </div>
              <h3>Точность исполнения</h3>
              <p>Особое внимание к деталям в технической документации и презентационных материалах</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для IT компании?</h2>
          <p className={styles.ctaText}>
            Создадим материалы, которые подчеркнут инновационность и профессионализм вашей IT компании
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
