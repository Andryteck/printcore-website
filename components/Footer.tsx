import Link from 'next/link';
import PhoneLink from './PhoneLink';
import styles from '@/styles/components/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* О компании */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>PrintCore</h3>
            <p className={styles.sectionText}>
              Профессиональная полиграфия в Минске. Качественная печать любой сложности с 2010 года.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://t.me/+375333365678"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                📱
              </a>
              <a href="#" className={styles.socialLink}>
                📧
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Услуги</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/digital" className={styles.link}>
                  Цифровая печать
                </Link>
              </li>
              <li>
                <Link href="/services/wide-format" className={styles.link}>
                  Широкоформатная печать
                </Link>
              </li>
              <li>
                <Link href="/services/offset" className={styles.link}>
                  Офсетная печать
                </Link>
              </li>
              <li>
                <Link href="/services/uv" className={styles.link}>
                  УФ-печать
                </Link>
              </li>
              <li>
                <Link href="/services/design" className={styles.link}>
                  Дизайн и верстка
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Информация</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.link}>
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={styles.link}>
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.link}>
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/contacts" className={styles.link}>
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/account" className={styles.link}>
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Контакты</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span>📍</span>
                <span>Пр. Дзержинского 3Б, Минск</span>
              </li>
              <li className={styles.contactItem}>
                <span>📞</span>
                <PhoneLink />
              </li>
              <li className={styles.contactItem}>
                <span>📧</span>
                <a href="mailto:printcorecenter@gmail.com">printcorecenter@gmail.com</a>
              </li>
              <li className={styles.contactItem}>
                <span>🕐</span>
                <span>
                  Пн-Пт: 9:00-18:00<br />
                  Сб-Вс: выходной
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© {currentYear} PrintCore — команда, которой можно доверять.</p>
        </div>
      </div>
    </footer>
  );
}
