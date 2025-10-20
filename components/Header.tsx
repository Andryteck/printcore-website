import Link from 'next/link';
import HeaderClient from './HeaderClient';
import PhoneLink from './PhoneLink';
import styles from '@/styles/components/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.container} ${styles.nav}`}>
        {/* Логотип */}
        <Link href="/" className={styles.brand}>
          {/* <div className={styles.brandLogo} /> */}
          <div className={styles.brandText}>
            <span className={styles.brandName}>
              Print<span className={styles.brandNameLight}>Core</span>
            </span>
            <span className={styles.brandSubtitle}>печатный центр</span>
          </div>
        </Link>

        {/* Контактная информация (скрыта на планшетах) */}
        <div className={styles.contactContainer}>
          <span className={styles.contactItem}>
            <i className="mr-2">📍</i>
            Пр. Дзержинского 3Б
          </span>
          <span className={styles.contactItem}>
            <i className="mr-2">📞</i>
            <PhoneLink />
          </span>
        </div>

        {/* Клиентская часть - меню, навигация, мобильное меню */}
        <HeaderClient />
      </nav>
    </header>
  );
}
