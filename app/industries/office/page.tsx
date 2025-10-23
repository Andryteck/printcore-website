import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для офиса и продаж - PrintCore',
  description: 'Корпоративные визитки, прайс-листы, коммерческие предложения, договоры, бланки документов, презентационные материалы.',
  keywords: 'полиграфия офис, корпоративные визитки, коммерческие предложения, договоры, бланки документов, печать для офиса',
  openGraph: {
    title: 'Полиграфия для офиса и продаж - PrintCore',
    description: 'Профессиональная полиграфия для офисов и отделов продаж',
    url: 'https://printcore.by/industries/office',
    images: [
      {
        url: 'https://printcore.by/images/industries/office-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для офиса и продаж',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для офиса и продаж - PrintCore',
    description: 'Профессиональная полиграфия для офисов и отделов продаж',
  },
};

export default function OfficePage() {
  const products = [
    {
      category: 'Визитки и контакты',
      items: [
        'Корпоративные визитки',
        'Визитки менеджеров',
        'Визитки директоров',
        'Карточки с контактами'
      ]
    },
    {
      category: 'Коммерческие предложения',
      items: [
        'Прайс-листы услуг',
        'Коммерческие предложения',
        'Каталоги продукции',
        'Презентационные буклеты'
      ]
    },
    {
      category: 'Документооборот',
      items: [
        'Договоры и соглашения',
        'Бланки документов',
        'Акты выполненных работ',
        'Счета и накладные'
      ]
    },
    {
      category: 'Презентационные материалы',
      items: [
        'Презентационные папки',
        'Буклеты о компании',
        'Каталоги услуг',
        'Информационные листовки'
      ]
    },
    {
      category: 'Офисная полиграфия',
      items: [
        'Бланки заявок',
        'Формы обратной связи',
        'Инструкции для сотрудников',
        'Таблички на кабинеты'
      ]
    },
    {
      category: 'Рекламные материалы',
      items: [
        'Рекламные буклеты',
        'Флаеры о услугах',
        'Календари с логотипом',
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
            src="/images/industries/office-hero.jpg" 
            alt="Офис и продажи - деловая атмосфера"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Офис и продажи</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для офисов и отделов продаж
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для деловой деятельности</h2>
          <p className={styles.descriptionText}>
            Офисы и отделы продаж нуждаются в качественной полиграфии для ведения деловой деятельности, 
            презентации услуг и создания профессионального имиджа. Мы создаем материалы, которые 
            помогают эффективно вести бизнес и привлекать клиентов.
          </p>
          <p className={styles.descriptionText}>
            От корпоративных визиток до коммерческих предложений — все материалы разрабатываются 
            с учетом специфики деловой деятельности и помогают создать положительное впечатление 
            о вашей компании.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для офисов</h2>
          
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
                <Image src="/icons/business-card.svg" alt="Профессионализм" width={40} height={40} />
              </div>
              <h3>Деловой стиль</h3>
              <p>Создаем материалы, которые подчеркивают профессионализм и серьезность вашего бизнеса</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/document.svg" alt="Точность" width={40} height={40} />
              </div>
              <h3>Точность исполнения</h3>
              <p>Особое внимание к деталям в документах и коммерческих материалах для деловой сферы</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/lightning.svg" alt="Срочность" width={40} height={40} />
              </div>
              <h3>Оперативность</h3>
              <p>Понимаем важность сроков в бизнесе — выполняем заказы быстро и качественно</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для офиса?</h2>
          <p className={styles.ctaText}>
            Создадим материалы, которые помогут повысить эффективность вашего бизнеса
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
