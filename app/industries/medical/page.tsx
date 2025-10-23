import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/IndustryPage.module.css';

export const metadata: Metadata = {
  title: 'Полиграфия для медицинских центров - PrintCore',
  description: 'Визитки врачей, медицинские карты, информационные листовки, плакаты о здоровье, сертификаты и дипломы.',
  keywords: 'полиграфия медицина, визитки врачей, медицинские карты, листовки о здоровье, сертификаты врачей, печать для медицины',
  openGraph: {
    title: 'Полиграфия для медицинских центров - PrintCore',
    description: 'Профессиональная полиграфия для медицинских учреждений',
    url: 'https://printcore.by/industries/medical',
    images: [
      {
        url: 'https://printcore.by/images/industries/medical-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Полиграфия для медицинских центров',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полиграфия для медицинских центров - PrintCore',
    description: 'Профессиональная полиграфия для медицинских учреждений',
  },
};

export default function MedicalPage() {
  const products = [
    {
      category: 'Визитки и контакты',
      items: [
        'Визитки врачей разных специальностей',
        'Визитки медсестер и администраторов',
        'Визитки главврача',
        'Карточки экстренной связи'
      ]
    },
    {
      category: 'Медицинская документация',
      items: [
        'Медицинские карты пациентов',
        'Бланки рецептов',
        'Справки и выписки',
        'Инструкции по лечению'
      ]
    },
    {
      category: 'Информационные материалы',
      items: [
        'Листовки о профилактике',
        'Плакаты о здоровье',
        'Буклеты о заболеваниях',
        'Информационные стенды'
      ]
    },
    {
      category: 'Сертификаты и дипломы',
      items: [
        'Дипломы врачей',
        'Сертификаты специализации',
        'Справки о повышении квалификации',
        'Лицензии медицинской деятельности'
      ]
    },
    {
      category: 'Вывески и навигация',
      items: [
        'Вывески кабинетов врачей',
        'Таблички с часами приема',
        'Указатели в клинике',
        'Информационные таблички'
      ]
    },
    {
      category: 'Реклама и промо',
      items: [
        'Рекламные буклеты клиники',
        'Флаеры о новых услугах',
        'Подарочные сертификаты',
        'Календари с медицинской тематикой'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero секция с большим фото */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/industries/medical-hero.jpg" 
            alt="Медицинский центр - забота о здоровье"
            fill
            priority
            className={styles.heroImageContent}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Медицинские центры</h1>
              <p className={styles.heroSubtitle}>
                Профессиональная полиграфия для медицинских учреждений и клиник
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание отрасли */}
      <section className={styles.industryDescription}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Полиграфия для медицинских учреждений</h2>
          <p className={styles.descriptionText}>
            Медицинские центры и клиники нуждаются в качественной полиграфии для документооборота, 
            информирования пациентов и создания доверительной атмосферы. Мы создаем материалы, 
            соответствующие высоким стандартам медицинской отрасли.
          </p>
          <p className={styles.descriptionText}>
            От медицинских карт до информационных листовок — все материалы разрабатываются с учетом 
            специфики медицинской деятельности и помогают повысить качество обслуживания пациентов.
          </p>
        </div>
      </section>

      {/* Продукты по категориям */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция для медицинских центров</h2>
          
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
                <Image src="/icons/shield.svg" alt="Безопасность" width={40} height={40} />
              </div>
              <h3>Медицинские стандарты</h3>
              <p>Используем материалы, соответствующие требованиям медицинской отрасли и санитарным нормам</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/document.svg" alt="Конфиденциальность" width={40} height={40} />
              </div>
              <h3>Конфиденциальность</h3>
              <p>Гарантируем полную конфиденциальность при работе с медицинской документацией</p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <Image src="/icons/design.svg" alt="Профессионализм" width={40} height={40} />
              </div>
              <h3>Профессиональный подход</h3>
              <p>Создаем материалы, которые подчеркивают профессионализм и надежность вашей клиники</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы заказать полиграфию для вашей клиники?</h2>
          <p className={styles.ctaText}>
            Создадим материалы, которые помогут повысить качество обслуживания пациентов
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
