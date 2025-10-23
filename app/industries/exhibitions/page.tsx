import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для выставок и экспозиций - PrintCore',
  description: 'Выставочные стенды, баннеры, ролл-апы, каталоги продукции, визитки для выставок, информационные таблички.',
  keywords: 'выставочные стенды, баннеры выставки, ролл-апы, каталоги продукции, визитки выставки, полиграфия выставки',
  openGraph: {
    title: 'Полиграфия для выставок и экспозиций - PrintCore',
    description: 'Профессиональная полиграфия для выставок и экспозиций',
    url: 'https://printcore.by/industries/exhibitions',
    images: [
      {
        url: 'https://printcore.by/images/industries/exhibitions-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для выставок и экспозиций',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для выставок и экспозиций - PrintCore',
    description: 'Профессиональная полиграфия для выставок и экспозиций',
  },
};

export default function ExhibitionsPage() {
  const products = [
    {
      category: 'Выставочные стенды',
      items: [
        'Мобильные выставочные стенды',
        'Ролл-апы и роллапы',
        'Баннеры и флаги',
        'Стенды с подсветкой'
      ]
    },
    {
      category: 'Печатные материалы',
      items: [
        'Каталоги продукции',
        'Буклеты и проспекты',
        'Листовки и флаеры',
        'Плакаты и постеры'
      ]
    },
    {
      category: 'Визитки и контакты',
      items: [
        'Визитки для выставок',
        'Карточки с контактами',
        'Бейджи участников',
        'QR-коды для быстрого контакта'
      ]
    },
    {
      category: 'Информационные материалы',
      items: [
        'Информационные таблички',
        'Указатели и навигация',
        'Ценники и описания',
        'Инструкции по использованию'
      ]
    },
    {
      category: 'Сувенирная продукция',
      items: [
        'Подарочные пакеты',
        'Календари с логотипом',
        'Блокноты и ручки',
        'Наклейки и стикеры'
      ]
    },
    {
      category: 'Документы и сертификаты',
      items: [
        'Сертификаты качества',
        'Дипломы и грамоты',
        'Договоры и соглашения',
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
            src="/images/industries/exhibitions-hero.jpg" 
            alt="Выставки и экспозиции - профессиональные стенды"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Выставки и экспозиции</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для выставок, экспозиций и мероприятий
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для выставочной деятельности</h2>
          <p className={styles.descriptionText}>
            Выставки и экспозиции требуют особого подхода к полиграфии. Мы создаем материалы, 
            которые эффективно привлекают внимание посетителей и помогают представить ваш продукт 
            или услугу в лучшем свете.
          </p>
          <p className={styles.descriptionText}>
            От выставочных стендов до информационных материалов — все изделия разрабатываются 
            с учетом специфики выставочной деятельности и помогают максимально эффективно 
            использовать пространство выставки.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для выставок</h2>
          
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
                <Image src="/icons/billboard.svg" alt="Большие форматы" width={40} height={40} />
              </div>
              <h3>Большие форматы</h3>
              <p>Печатаем баннеры и стенды в форматах до А0 и больше для максимального воздействия на посетителей выставки</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/lightning.svg" alt="Срочность" width={40} height={40} />
              </div>
              <h3>Срочное исполнение</h3>
              <p>Понимаем важность сроков для выставок — выполняем заказы в кратчайшие сроки без потери качества</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/design.svg" alt="Дизайн" width={40} height={40} />
              </div>
              <h3>Привлекательный дизайн</h3>
              <p>Создаем материалы, которые выделяются на фоне конкурентов и привлекают внимание посетителей</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для выставки?</h2>
          <p className={styles.ctaText}>
            Создадим материалы, которые помогут вам выделиться на выставке и привлечь максимальное внимание
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
