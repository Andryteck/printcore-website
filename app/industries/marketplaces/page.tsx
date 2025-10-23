import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для маркетплейсов - PrintCore',
  description: 'Упаковка товаров, этикетки, наклейки с QR-кодами, инструкции по использованию, сертификаты качества.',
  keywords: 'полиграфия маркетплейс, упаковка товаров, этикетки товаров, QR коды, инструкции товаров, печать для интернет магазинов',
  openGraph: {
    title: 'Полиграфия для маркетплейсов - PrintCore',
    description: 'Профессиональная полиграфия для маркетплейсов и интернет-торговли',
    url: 'https://printcore.by/industries/marketplaces',
    images: [
      {
        url: 'https://printcore.by/images/industries/marketplaces-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для маркетплейсов',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для маркетплейсов - PrintCore',
    description: 'Профессиональная полиграфия для маркетплейсов и интернет-торговли',
  },
};

export default function MarketplacesPage() {
  const products = [
    {
      category: 'Упаковка товаров',
      items: [
        'Коробки для товаров',
        'Пакеты с логотипом',
        'Конверты для документов',
        'Упаковка для подарков'
      ]
    },
    {
      category: 'Этикетки и наклейки',
      items: [
        'Этикетки для товаров',
        'Наклейки с QR-кодами',
        'Стикеры с логотипом',
        'Штрих-коды и штриховки'
      ]
    },
    {
      category: 'Инструкции и документы',
      items: [
        'Инструкции по использованию',
        'Руководства пользователя',
        'Гарантийные талоны',
        'Сертификаты качества'
      ]
    },
    {
      category: 'Рекламные материалы',
      items: [
        'Вкладыши в упаковку',
        'Купоны на скидки',
        'Рекламные буклеты',
        'Каталоги продукции'
      ]
    },
    {
      category: 'Брендинг',
      items: [
        'Логотипы на упаковке',
        'Фирменные цвета',
        'Брендбуки',
        'Гайдлайны по использованию'
      ]
    },
    {
      category: 'Документооборот',
      items: [
        'Накладные и счета',
        'Акты выполненных работ',
        'Договоры поставки',
        'Сертификаты соответствия'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero секция с большим фото */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/industries/marketplaces-hero.jpg" 
            alt="Маркетплейсы - интернет-торговля и доставка"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Маркетплейсы</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для маркетплейсов и интернет-торговли
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для интернет-торговли</h2>
          <p className={styles.descriptionText}>
            Маркетплейсы и интернет-магазины нуждаются в качественной полиграфии для упаковки товаров, 
            информирования покупателей и создания узнаваемого бренда. Мы создаем материалы, которые 
            помогают повысить доверие клиентов и улучшить их опыт покупки.
          </p>
          <p className={styles.descriptionText}>
            От упаковки товаров до рекламных материалов — все изделия разрабатываются с учетом 
            специфики интернет-торговли и помогают создать профессиональный образ вашего бизнеса.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для маркетплейсов</h2>
          
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
                <Image src="/icons/package.svg" alt="Упаковка" width={40} height={40} />
              </div>
              <h3>Профессиональная упаковка</h3>
              <p>Создаем упаковку, которая защищает товары и создает положительное впечатление у покупателей</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/design.svg" alt="Брендинг" width={40} height={40} />
              </div>
              <h3>Эффективный брендинг</h3>
              <p>Помогаем создать узнаваемый бренд через качественную полиграфию и фирменный стиль</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/shield.svg" alt="Надежность" width={40} height={40} />
              </div>
              <h3>Надежный партнер</h3>
              <p>Понимаем специфику интернет-торговли и создаем материалы, которые помогают развивать ваш бизнес</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для маркетплейса?</h2>
          <p className={styles.ctaText}>
            Создадим материалы, которые помогут повысить продажи и доверие покупателей
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
