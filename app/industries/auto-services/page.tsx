import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для автоуслуг и ремонта - PrintCore',
  description: 'Визитки механиков, прайс-листы услуг, вывески, наклейки на авто, буклеты о сервисе, календари с логотипом автосервиса.',
  keywords: 'полиграфия автосервис, визитки механиков, вывески автосервиса, наклейки на авто, буклеты автосервиса, печать для автоуслуг',
  openGraph: {
    title: 'Полиграфия для автоуслуг и ремонта - PrintCore',
    description: 'Профессиональная полиграфия для автосервисов и грузоперевозок',
    url: 'https://printcore.by/industries/auto-services',
    images: [
      {
        url: 'https://printcore.by/images/industries/auto-services-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для автоуслуг и ремонта',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для автоуслуг и ремонта - PrintCore',
    description: 'Профессиональная полиграфия для автосервисов и грузоперевозок',
  },
};

export default function AutoServicesPage() {
  const products = [
    {
      category: 'Визитки и контакты',
      items: [
        'Визитки механиков и мастеров',
        'Визитки администраторов',
        'Визитки директора автосервиса',
        'Карточки с контактами для клиентов'
      ]
    },
    {
      category: 'Прайс-листы и каталоги',
      items: [
        'Прайс-листы услуг автосервиса',
        'Каталоги запчастей и расходников',
        'Буклеты о видах ремонта',
        'Информационные листовки о услугах'
      ]
    },
    {
      category: 'Вывески и наружная реклама',
      items: [
        'Вывески автосервиса',
        'Наружная реклама с логотипом',
        'Баннеры для акций и скидок',
        'Таблички с часами работы'
      ]
    },
    {
      category: 'Наклейки и маркировка',
      items: [
        'Наклейки на авто с логотипом сервиса',
        'Этикетки для инструментов',
        'Маркировка рабочих мест',
        'Стикеры для клиентских авто'
      ]
    },
    {
      category: 'Документы и сертификаты',
      items: [
        'Сертификаты качества работ',
        'Гарантийные талоны',
        'Акты выполненных работ',
        'Договоры на обслуживание'
      ]
    },
    {
      category: 'Промо-материалы',
      items: [
        'Календари с логотипом автосервиса',
        'Подарочные сертификаты',
        'Купоны на скидки',
        'Флаеры для рекламы'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero секция с большим фото */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/industries/auto-services-hero.jpg" 
            alt="Автосервис - профессиональный ремонт автомобилей"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Автоуслуги и ремонт</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для автосервисов, СТО и мастерских
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для автосервиса</h2>
          <p className={styles.descriptionText}>
            Автосервисы нуждаются в качественной полиграфической продукции для привлечения клиентов, 
            информирования об услугах и создания профессионального имиджа. Мы предлагаем полный 
            спектр полиграфических услуг специально для автомобильной отрасли.
          </p>
          <p className={styles.descriptionText}>
            От визиток мастеров до наружной рекламы — все материалы создаются с учетом специфики 
            автосервисного бизнеса и помогают повысить доверие клиентов к вашему сервису.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для автосервисов</h2>
          
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
                <Image src="/icons/lightning.svg" alt="Срочность" width={40} height={40} />
              </div>
              <h3>Срочная печать</h3>
              <p>Выполняем заказы для автосервисов в кратчайшие сроки — понимаем важность оперативности в вашем бизнесе</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/design.svg" alt="Дизайн" width={40} height={40} />
              </div>
              <h3>Профессиональный дизайн</h3>
              <p>Создаем макеты, которые подчеркивают профессионализм и надежность вашего автосервиса</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/shield.svg" alt="Качество" width={40} height={40} />
              </div>
              <h3>Качественные материалы</h3>
              <p>Используем прочные материалы, устойчивые к воздействию масел, грязи и других факторов автосервиса</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для вашего автосервиса?</h2>
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
