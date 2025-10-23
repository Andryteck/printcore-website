import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '@/styles/services.module.css';
 import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги полиграфии и печати в Минске',
  description: 'Полный спектр полиграфических услуг: фотопечать от 1.2 руб, широкоформатная печать, визитки, брошюры, наклейки, сувениры. Срочная печать за 24 часа. Качество гарантируем.',
  keywords: 'услуги типографии, фотопечать Минск, полиграфия цены, печать визиток, широкоформатная печать, печать документов',
  openGraph: {
    title: 'Услуги полиграфии и печати — PrintCore',
    description: 'Фотопечать, полиграфия, широкоформатная печать и другие услуги. Доступные цены и высокое качество.',
    url: 'https://printcore.by/services',
    type: 'website',
  },
};

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  badge?: string;
  link: string;
}

export default function ServicesPage() {
  const products: Product[] = [
    {
      id: 1,
      title: 'Фотопечать',
      price: 'от 1.2 руб',
      image: '/images/gallery/IMG_4678.JPG',
      badge: 'Хит',
      link: '/services/photo'
    },
    {
      id: 2,
      title: 'Полиграфия',
      price: 'от 0.5 руб',
      image: '/images/gallery/IMG_4758.JPG',
      link: '/services/poligrafy'
    },
    {
      id: 3,
      title: 'Широкоформатная печать',
      price: 'от 2 руб',
      image: '/images/gallery/IMG_4689.JPG',
      link: '/services/wide-format'
    },
    {
      id: 4,
      title: 'Переплетные работы',
      price: 'от 7 руб',
      image: '/images/gallery/IMG_4698.JPG',
      link: '/services/binding'
    },
    {
      id: 5,
      title: 'Дизайн полиграфии',
      price: 'от 17 руб',
      image: '/images/gallery/IMG_4685.JPG',
      link: '/services/design'
    },
    {
      id: 6,
      title: 'Печать документов',
      price: 'от 0.3 руб',
      image: '/images/gallery/IMG_4690.JPG',
      link: '/services/documents'
    },
    {
      id: 7,
      title: 'Наклейки, этикетки',
      price: 'от 0.4 руб',
      image: '/images/gallery/IMG_4696.JPG',
      link: '/services/stickers'
    },
    {
      id: 8,
      title: 'Сувениры и брендирование',
      price: 'от 25 руб',
      image: '/images/gallery/IMG_4706.JPG',
      link: '/services/souvenirs'
    }
  ];

  return (
    <>
      <Header />
      
      <main className={styles.wrapper} id="services">
        <div className={styles['products-container']}>
          <div className={styles['page-header']}>
            <h2>Наши продукты</h2>
            <p>Выберите интересующий вас товар</p>
          </div>
          
          <div className={styles['products-flex']}>
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.link}
                className={styles['product-card']}
              >
                <img
                  className={styles['product-image']}
                  src={product.image}
                  alt={product.title}
                />
                {product.badge && (
                  <div className={styles['product-badge']}>{product.badge}</div>
                )}
                <div className={styles['product-content']}>
                  <h2>{product.title}</h2>
                  <div className={styles['product-price']}>{product.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

