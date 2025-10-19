'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/services.module.css';

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
      image: 'https://static.printcore.by/content/IMG_4678.JPG',
      badge: 'Хит',
      link: 'https://printcore.by/photo'
    },
    {
      id: 2,
      title: 'Полиграфия',
      price: 'от 0.5 руб',
      image: 'https://static.printcore.by/content/IMG_4758.JPG',
      link: 'https://printcore.by/all_poligrafy'
    },
    {
      id: 3,
      title: 'Широкоформатная печать',
      price: 'от 2 руб',
      image: 'https://static.printcore.by/content/IMG_4689.JPG',
      link: 'https://printcore.by/wide_format'
    },
    {
      id: 4,
      title: 'Переплетные работы',
      price: 'от 7 руб',
      image: 'https://static.printcore.by/content/IMG_4698.JPG',
      link: 'https://printcore.by/order'
    },
    {
      id: 5,
      title: 'Дизайн полиграфии',
      price: 'от 17 руб',
      image: 'https://static.printcore.by/content/IMG_4685.JPG',
      link: 'http://printcore.by/design_order'
    },
    {
      id: 6,
      title: 'Печать документов',
      price: 'от 0.3 руб',
      image: 'https://static.printcore.by/content/IMG_4690.JPG',
      link: 'https://printcore.by/order'
    },
    {
      id: 7,
      title: 'Наклейки, этикетки',
      price: 'от 0.4 руб',
      image: 'https://static.printcore.by/content/IMG_4696.JPG',
      link: 'https://printcore.by/stikers'
    },
    {
      id: 8,
      title: 'Сувениры и брендирование',
      price: 'от 25 руб',
      image: 'https://static.printcore.by/content/IMG_4706.JPG',
      link: 'https://printcore.by/order'
    }
  ];

  const handleProductClick = (link: string) => {
    window.location.href = link;
  };

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
              <div
                key={product.id}
                className={styles['product-card']}
                onClick={() => handleProductClick(product.link)}
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
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

