'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/DiscountBanner.module.css';

interface Product {
  href: string;
  label: string;
}

interface DiscountBannerProps {
  discount: number;
  products: Product[];
  timeOut?: number; // в секундах
  bannerId?: string;
  accentColor?: string;
}

export default function DiscountBanner({
  discount = 15.0,
  products = [
    { href: '/produkciya/photobook', label: 'Фотоальбом' },
    { href: '/produkciya/standar-foto', label: 'Стандартные Фотографии' },
    { href: '/produkciya/zine-book', label: 'Zine Book (Зинбук)' },
    { href: '/produkciya/kalendar-a3-perekidnoy', label: 'Настенный календарь А3 горизонтальный' },
  ],
  timeOut = 2,
  bannerId = 'discount-banner-1',
  accentColor = '#DF0050',
}: DiscountBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    // Проверяем, закрывал ли пользователь баннер ранее
    const bannerClosed = localStorage.getItem(`${bannerId}-closed`);
    
    if (!bannerClosed) {
      // Показываем баннер через заданное время
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, timeOut * 1000);

      return () => clearTimeout(timer);
    }
  }, [bannerId, timeOut]);

  const handleClose = () => {
    setIsVisible(false);
    // Сохраняем в localStorage, что баннер был закрыт
    localStorage.setItem(`${bannerId}-closed`, 'true');
  };

  const handleToggleBanner = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggleProducts = () => {
    setShowProducts(!showProducts);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`${styles.discountBanner} ${isExpanded ? styles.expanded : ''}`}
      style={{ '--accent-color': accentColor } as React.CSSProperties}
    >
      {/* Кнопка свернуть/развернуть */}
      <button 
        className={styles.toggleButton}
        onClick={handleToggleBanner}
        aria-label={isExpanded ? 'Свернуть баннер' : 'Развернуть баннер'}
      >
        <span className={styles.discountIcon}>%</span>
        <div className={styles.toggleText}>
          Скидка {discount}%
        </div>
        <i className={`${styles.arrow} ${isExpanded ? styles.arrowUp : styles.arrowDown}`}>
          ▼
        </i>
      </button>

      {/* Кнопка закрыть */}
      <button 
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Закрыть баннер"
      >
        ✕
      </button>

      {/* Основной контент */}
      <div className={styles.content}>
        <h2 className={styles.title}>
          Скидка {discount}%
        </h2>
        
        <div className={styles.description}>
          <div className={styles.productsSection}>
            <button 
              className={styles.showProductsButton}
              onClick={handleToggleProducts}
            >
              На следующие товары
            </button>
            
            {showProducts && (
              <div className={styles.productsList}>
                {products.map((product, index) => (
                  <Link 
                    key={index}
                    href={product.href}
                    target="_blank"
                    className={styles.productLink}
                  >
                    {product.label}
                  </Link>
                ))}
                <button 
                  className={styles.hideProductsButton}
                  onClick={handleToggleProducts}
                >
                  Свернуть список
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

