'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store';
import { toggleMobileMenu } from '@/lib/features/navigation/navigationSlice';
import Link from 'next/link';
import styles from '@/styles/components/Header.module.css';

export default function Header() {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector((state) => state.navigation);
  const { items } = useAppSelector((state) => state.cart);
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <nav className={`${styles.container} ${styles.nav}`}>
        {/* Логотип */}
        <Link href="/" className={styles.brand}>
          <div className={styles.brandLogo} />
          <span className={styles.brandName}>
            Print<span className={styles.brandNameLight}>Core</span>
          </span>
        </Link>

        {/* Контактная информация (скрыта на планшетах) */}
        <div className={styles.contactContainer}>
          <span className={styles.contactItem}>
            <i className="mr-2">📍</i>
            Пр. Дзержинского 3Б
          </span>
          <span className={styles.contactItem}>
            <i className="mr-2">📞</i>
            +375 33 336 5678
          </span>
        </div>

        {/* Навигация (десктоп) */}
        <ul className={styles.menu}>
          <li>
            <Link href="/services" className={styles.menuLink}>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className={styles.menuLink}>
              Портфолио
            </Link>
          </li>
          <li>
            <Link href="/blog" className={styles.menuLink}>
              Блог
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.menuLink}>
              О нас
            </Link>
          </li>
          <li>
            <Link href="/contacts" className={styles.menuLink}>
              Контакты
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <Link href="/account" className={styles.loginButton}>
                <span>👤</span>
                <span>{user?.name?.split(' ')[0] || 'Кабинет'}</span>
              </Link>
            ) : (
              <Link href="/login" className={styles.loginButton}>
                Войти
              </Link>
            )}
          </li>
        </ul>

        {/* Бургер-меню */}
        <button
          onClick={() => dispatch(toggleMobileMenu())}
          className={`${styles.burger} ${isMobileMenuOpen ? styles.active : ''}`}
          aria-label="Меню"
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </nav>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={`${styles.container} ${styles.mobileMenuList}`}>
            <li>
              <Link href="/services" className={styles.mobileMenuLink}>
                Услуги
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={styles.mobileMenuLink}>
                Портфолио
              </Link>
            </li>
            <li>
              <Link href="/blog" className={styles.mobileMenuLink}>
                Блог
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.mobileMenuLink}>
                О нас
              </Link>
            </li>
            <li>
              <Link href="/contacts" className={styles.mobileMenuLink}>
                Контакты
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <Link href="/account" className={styles.mobileLoginButton}>
                  <span>👤</span>
                  <span>{user?.name?.split(' ')[0] || 'Кабинет'}</span>
                </Link>
              ) : (
                <Link href="/login" className={styles.mobileLoginButton}>
                  Войти
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
