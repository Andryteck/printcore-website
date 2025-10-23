import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для конференций и семинаров - PrintCore',
  description: 'Программы мероприятий, бейджи участников, сертификаты, презентационные материалы, флаеры и буклеты.',
  keywords: 'полиграфия конференции, бейджи участников, программы мероприятий, сертификаты семинары, печать для конференций',
  openGraph: {
    title: 'Полиграфия для конференций и семинаров - PrintCore',
    description: 'Профессиональная полиграфия для конференций и семинаров',
    url: 'https://printcore.by/industries/conferences',
    images: [
      {
        url: 'https://printcore.by/images/industries/conferences-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для конференций и семинаров',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для конференций и семинаров - PrintCore',
    description: 'Профессиональная полиграфия для конференций и семинаров',
  },
};

export default function ConferencesPage() {
  const products = [
    {
      category: 'Программы мероприятий',
      items: [
        'Программы конференций',
        'Расписания семинаров',
        'Схемы залов и комнат',
        'Планы мероприятий'
      ]
    },
    {
      category: 'Бейджи и идентификация',
      items: [
        'Бейджи участников',
        'Карточки спикеров',
        'Бейджи VIP-гостей',
        'Карточки организаторов'
      ]
    },
    {
      category: 'Сертификаты и документы',
      items: [
        'Сертификаты участников',
        'Дипломы спикеров',
        'Благодарственные письма',
        'Справки об участии'
      ]
    },
    {
      category: 'Презентационные материалы',
      items: [
        'Буклеты о конференции',
        'Каталоги спикеров',
        'Информационные листовки',
        'Презентационные наборы'
      ]
    },
    {
      category: 'Рекламные материалы',
      items: [
        'Флаеры о мероприятии',
        'Афиши конференции',
        'Рекламные буклеты',
        'Промо-материалы'
      ]
    },
    {
      category: 'Организационные материалы',
      items: [
        'Таблички на столы',
        'Указатели и навигация',
        'Информационные стенды',
        'Бланки регистрации'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero секция с большим фото */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/industries/conferences-hero.jpg" 
            alt="Конференции и семинары - профессиональные мероприятия"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Конференции и семинары</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для конференций, семинаров и деловых мероприятий
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для деловых мероприятий</h2>
          <p className={styles.descriptionText}>
            Конференции и семинары требуют профессиональной полиграфии для организации, 
            информационного сопровождения и создания деловой атмосферы. Мы создаем материалы, 
            которые помогают провести мероприятие на высоком уровне.
          </p>
          <p className={styles.descriptionText}>
            От программ мероприятий до сертификатов участников — все материалы разрабатываются 
            с учетом специфики деловых мероприятий и помогают создать профессиональное впечатление 
            о вашей конференции или семинаре.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для конференций</h2>
          
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
                <Image src="/icons/document.svg" alt="Профессионализм" width={40} height={40} />
              </div>
              <h3>Профессиональный подход</h3>
              <p>Создаем материалы, которые подчеркивают серьезность и профессионализм вашего мероприятия</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/lightning.svg" alt="Срочность" width={40} height={40} />
              </div>
              <h3>Соблюдение сроков</h3>
              <p>Понимаем важность точности в организации мероприятий — все материалы готовы точно в срок</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/design.svg" alt="Качество" width={40} height={40} />
              </div>
              <h3>Высокое качество</h3>
              <p>Используем качественные материалы и современные технологии печати для безупречного результата</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для конференции?</h2>
          <p className={styles.ctaText}>
            Создадим материалы, которые помогут провести ваше мероприятие на профессиональном уровне
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
