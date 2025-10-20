'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store';
import { toggleMobileMenu } from '@/lib/features/navigation/navigationSlice';
import Link from 'next/link';
import styles from '@/styles/components/Header.module.css';

export default function HeaderClient() {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector((state) => state.navigation);
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <>
      {/* Десктоп меню - правая часть */}
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
    </>
  );
}

