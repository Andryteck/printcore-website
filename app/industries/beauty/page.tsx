import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для салонов красоты - PrintCore',
  description: 'Визитки мастеров, прайс-листы услуг, сертификаты на процедуры, рекламные буклеты, купоны на скидки, подарочные сертификаты.',
  keywords: 'полиграфия салон красоты, визитки мастеров, сертификаты процедур, купоны скидки, печать для красоты, СПА полиграфия',
  openGraph: {
    title: 'Полиграфия для салонов красоты - PrintCore',
    description: 'Профессиональная полиграфия для салонов красоты и СПА',
    url: 'https://printcore.by/industries/beauty',
    images: [
      {
        url: 'https://printcore.by/images/industries/beauty-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для салонов красоты',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для салонов красоты - PrintCore',
    description: 'Профессиональная полиграфия для салонов красоты и СПА',
  },
};

export default function BeautyPage() {
  const products = [
    {
      category: 'Визитки и контакты',
      items: [
        'Визитки мастеров маникюра',
        'Визитки парикмахеров',
        'Визитки косметологов',
        'Визитки администраторов салона'
      ]
    },
    {
      category: 'Прайс-листы и каталоги',
      items: [
        'Прайс-листы услуг салона',
        'Каталоги процедур',
        'Буклеты о новых услугах',
        'Информационные листовки'
      ]
    },
    {
      category: 'Сертификаты и купоны',
      items: [
        'Подарочные сертификаты',
        'Купоны на скидки',
        'Сертификаты на процедуры',
        'Карты постоянного клиента'
      ]
    },
    {
      category: 'Вывески и интерьер',
      items: [
        'Вывески салона красоты',
        'Таблички с услугами',
        'Информационные стенды',
        'Декоративные элементы'
      ]
    },
    {
      category: 'Реклама и промо',
      items: [
        'Флаеры с акциями',
        'Рекламные буклеты',
        'Плакаты о процедурах',
        'Календари с логотипом'
      ]
    },
    {
      category: 'Упаковка и сувениры',
      items: [
        'Пакеты для клиентов',
        'Этикетки для косметики',
        'Подарочная упаковка',
        'Сувенирная продукция'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero секция с большим фото */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/industries/beauty-hero.jpg" 
            alt="Салон красоты - уход и красота"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Салоны красоты</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для салонов красоты, барбершопов и СПА
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для индустрии красоты</h2>
          <p className={styles.descriptionText}>
            Салоны красоты и СПА нуждаются в стильной полиграфии для создания атмосферы роскоши, 
            информирования клиентов и привлечения новых посетителей. Мы создаем материалы, которые 
            подчеркивают элегантность и профессионализм вашего салона.
          </p>
          <p className={styles.descriptionText}>
            От элегантных визиток до стильных сертификатов — все материалы разрабатываются с учетом 
            тенденций beauty-индустрии и помогают создать незабываемый опыт для ваших клиентов.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для салонов красоты</h2>
          
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
                <Image src="/icons/design.svg" alt="Стиль" width={40} height={40} />
              </div>
              <h3>Элегантный дизайн</h3>
              <p>Создаем стильные материалы, которые отражают премиальность и элегантность вашего салона</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/gift.svg" alt="Качество" width={40} height={40} />
              </div>
              <h3>Премиальные материалы</h3>
              <p>Используем высококачественные материалы и отделку для создания роскошного впечатления</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/shield.svg" alt="Надежность" width={40} height={40} />
              </div>
              <h3>Надежный партнер</h3>
              <p>Понимаем специфику beauty-бизнеса и создаем материалы, которые помогают развивать ваш салон</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для вашего салона красоты?</h2>
          <p className={styles.ctaText}>
            Создадим материалы, которые подчеркнут уникальность и элегантность вашего салона
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
