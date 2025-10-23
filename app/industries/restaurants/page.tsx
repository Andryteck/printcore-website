import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для ресторанов и кафе - PrintCore',
  description: 'Меню, визитки шеф-повара, посадочные карты, наклейки на блюда, промо-материалы, сертификаты подарочные.',
  keywords: 'полиграфия ресторан, меню ресторана, визитки повара, посадочные карты, наклейки на блюда, печать для ресторанов',
  openGraph: {
    title: 'Полиграфия для ресторанов и кафе - PrintCore',
    description: 'Профессиональная полиграфия для ресторанного бизнеса',
    url: 'https://printcore.by/industries/restaurants',
    images: [
      {
        url: 'https://printcore.by/images/industries/restaurants-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для ресторанов и кафе',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для ресторанов и кафе - PrintCore',
    description: 'Профессиональная полиграфия для ресторанного бизнеса',
  },
};

export default function RestaurantsPage() {
  const products = [
    {
      category: 'Меню и карты блюд',
      items: [
        'Меню ресторана и кафе',
        'Посадочные карты для гостей',
        'Карты вин и напитков',
        'Детские меню'
      ]
    },
    {
      category: 'Визитки и контакты',
      items: [
        'Визитки шеф-повара',
        'Визитки менеджера ресторана',
        'Визитки сомелье',
        'Карточки для доставки'
      ]
    },
    {
      category: 'Промо-материалы',
      items: [
        'Наклейки на блюда',
        'Флаеры с акциями',
        'Купоны на скидки',
        'Подарочные сертификаты'
      ]
    },
    {
      category: 'Вывески и реклама',
      items: [
        'Вывески ресторана',
        'Таблички с часами работы',
        'Баннеры для акций',
        'Наружная реклама'
      ]
    },
    {
      category: 'Упаковка и этикетки',
      items: [
        'Упаковка для доставки',
        'Этикетки на бутылки',
        'Наклейки на контейнеры',
        'Пакеты с логотипом'
      ]
    },
    {
      category: 'Документы и сертификаты',
      items: [
        'Сертификаты качества',
        'Договоры с поставщиками',
        'Акты выполненных работ',
        'Лицензии на алкоголь'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero секция с большим фото */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/industries/restaurants-hero.jpg" 
            alt="Ресторан - вкусная еда и атмосфера"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Рестораны и кафе</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для ресторанного бизнеса и HoReCa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для ресторанного бизнеса</h2>
          <p className={styles.descriptionText}>
            Рестораны и кафе нуждаются в качественной полиграфии для создания атмосферы, 
            информирования гостей и привлечения клиентов. Мы создаем материалы, которые 
            подчеркивают уникальность вашего заведения.
          </p>
          <p className={styles.descriptionText}>
            От элегантных меню до стильных вывесок — все материалы разрабатываются с учетом 
            концепции вашего ресторана и помогают создать незабываемый опыт для гостей.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для ресторанов</h2>
          
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
              <h3>Креативный дизайн</h3>
              <p>Создаем уникальные дизайны, которые отражают стиль и атмосферу вашего ресторана</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/shield.svg" alt="Качество" width={40} height={40} />
              </div>
              <h3>Пищевые стандарты</h3>
              <p>Используем безопасные материалы, соответствующие стандартам пищевой промышленности</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/lightning.svg" alt="Срочность" width={40} height={40} />
              </div>
              <h3>Быстрое исполнение</h3>
              <p>Понимаем важность оперативности в ресторанном бизнесе — выполняем заказы в срок</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для вашего ресторана?</h2>
          <p className={styles.ctaText}>
            Создадим материалы, которые подчеркнут уникальность вашего заведения
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
