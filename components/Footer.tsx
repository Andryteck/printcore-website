import Link from 'next/link';
import Image from 'next/image';
import PhoneLink from './PhoneLink';
import styles from '@/styles/components/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} itemScope itemType="https://schema.org/Organization">
      <div className={styles.footerWrapper}>
        <ul className={`${styles.footerGroup} ${styles.toggleWrapper} ${styles.footerGroup1}`}>
          
          {/* Полиграфия */}
          <li className={`${styles.footerItem} ${styles.toggleItem}`} itemScope itemType="https://schema.org/OfferCatalog" itemProp="hasOfferCatalog">
            <Link href="/printing" className={`${styles.footerTitle} ${styles.toggleBtn}`}>
              Полиграфия
            </Link>
            <ul className={styles.footerLinksGroup} itemScope itemType="https://schema.org/ItemList" itemProp="itemListElement">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/business-cards" itemProp="url">
                  Визитки
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/printing#leaflets" itemProp="url">
                  Листовки
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/printing#brochures" itemProp="url">
                  Буклеты
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/printing#catalogs" itemProp="url">
                  Каталоги
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/printing#calendars" itemProp="url">
                  Календари
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/printing#diplomas" itemProp="url">
                  Дипломы и грамоты
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/printing#notebooks" itemProp="url">
                  Блокноты
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/printing#blanks" itemProp="url">
                  Бланки
                </Link>
              </li>
            </ul>
          </li>

          {/* Фотопечать */}
          <li className={`${styles.footerItem} ${styles.toggleItem}`} itemScope itemType="https://schema.org/OfferCatalog" itemProp="hasOfferCatalog">
            <Link href="/photo-printing" className={`${styles.footerTitle} ${styles.toggleBtn}`}>
              Фотопечать
            </Link>
            <ul className={styles.footerLinksGroup} itemScope itemType="https://schema.org/ItemList" itemProp="itemListElement">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/photo-documents" itemProp="url">
                  Фото на документы
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/photo-printing#standard" itemProp="url">
                  Стандартные форматы
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/photo-printing#large" itemProp="url">
                  Большие форматы
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/photo-printing#canvas" itemProp="url">
                  Печать на холсте
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/photo-retouching" itemProp="url">
                  Ретушь фото
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/photo-editor" itemProp="url">
                  Фоторедактор онлайн
                </Link>
              </li>
            </ul>
          </li>

          {/* Широкоформатная печать */}
          <li className={`${styles.footerItem} ${styles.toggleItem}`} itemScope itemType="https://schema.org/OfferCatalog" itemProp="hasOfferCatalog">
            <Link href="/wide-format-printing" className={`${styles.footerTitle} ${styles.toggleBtn}`}>
              Широкоформатная печать
            </Link>
            <ul className={styles.footerLinksGroup} itemScope itemType="https://schema.org/ItemList" itemProp="itemListElement">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/wide-format-printing#banners" itemProp="url">
                  Баннеры
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/wide-format-printing#posters" itemProp="url">
                  Плакаты
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/wide-format-printing#rollup" itemProp="url">
                  Ролл-апы
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/wide-format-printing#stands" itemProp="url">
                  Выставочные стенды
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/advertising" itemProp="url">
                  Наружная реклама
                </Link>
              </li>
            </ul>
          </li>

          {/* Сувениры */}
          <li className={`${styles.footerItem} ${styles.toggleItem}`} itemScope itemType="https://schema.org/OfferCatalog" itemProp="hasOfferCatalog">
            <Link href="/services#souvenirs" className={`${styles.footerTitle} ${styles.toggleBtn}`}>
              Сувенирная продукция
            </Link>
            <ul className={styles.footerLinksGroup} itemScope itemType="https://schema.org/ItemList" itemProp="itemListElement">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services#mugs" itemProp="url">
                  Кружки
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services#tshirts" itemProp="url">
                  Футболки
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services#pens" itemProp="url">
                  Ручки
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services#caps" itemProp="url">
                  Кепки
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services#bags" itemProp="url">
                  Сумки
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services#corporate" itemProp="url">
                  Корпоративные подарки
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <ul className={`${styles.footerGroup} ${styles.toggleWrapper} ${styles.footerGroup2}`}>
          
          {/* Дополнительные услуги */}
          <li className={`${styles.footerItem} ${styles.toggleItem}`}>
            <button className={`${styles.footerTitle} ${styles.toggleBtn}`}>
              Дополнительные услуги
            </button>
            <ul className={styles.footerLinksGroup} itemScope itemType="https://schema.org/ItemList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services#binding" itemProp="url">
                  Переплетные работы
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services#lamination" itemProp="url">
                  Ламинирование
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services#cutting" itemProp="url">
                  Резка и вырубка
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services/design" itemProp="url">
                  Дизайн макетов
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services#stickers" itemProp="url">
                  Наклейки и этикетки
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/packaging" itemProp="url">
                  Упаковка
                </Link>
              </li>
            </ul>
          </li>

          {/* Клиентам */}
          <li className={`${styles.footerItem} ${styles.toggleItem}`}>
            <button className={`${styles.footerTitle} ${styles.toggleBtn}`}>
              Клиентам
            </button>
            <ul className={styles.footerLinksGroup} itemScope itemType="https://schema.org/ItemList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/services" itemProp="url">
                  Прайс-лист
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/account" itemProp="url">
                  Личный кабинет
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/blog" itemProp="url">
                  Блог
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/portfolio" itemProp="url">
                  Наши работы
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/about#how-to-order" itemProp="url">
                  Как заказать
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/about#delivery" itemProp="url">
                  Доставка и оплата
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/contacts" itemProp="url">
                  Контакты
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/about" itemProp="url">
                  О компании
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/public-offer" itemProp="url">
                  Договор публичной оферты
                </Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className={styles.footerText} href="/business-terms" itemProp="url">
                  Условия для бизнеса
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className={`${styles.footerGroupSecondary} ${styles.footerGroup3} ${styles.toggleWrapper}`}>
          <div className={styles.toggleItem}>
            <button className={`${styles.footerTitle} ${styles.toggleBtn}`}>
              Как с нами связаться
            </button>
            <div className={styles.footerContacts}>
              <div className={styles.footerContactsGroup} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p className={styles.footerTitleSecondary}>Адрес</p>
                <p className={styles.footerText}>г. Минск, пр. Дзержинского 3Б</p>
                <p className={styles.footerText}>пн-пт: 9:00-20:00</p>
                <p className={styles.footerText}>сб-вс: 10:00-19:00</p>
                <p className={styles.footerTitleSecondary}>E-mail</p>
                <a className={styles.footerText} href="mailto:printcorecenter@gmail.com">
                  printcorecenter@gmail.com
                </a>
              </div>
              <div className={styles.footerContactsGroup}>
                <p className={styles.footerTitleSecondary}>Телефоны</p>
                <p itemProp="telephone" className={styles.footerText}>
                  <PhoneLink />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.footerInfoWrapper} ${styles.footerGroup4}`}>
          <div className={styles.footerInfoPay}>
            <Link className={styles.footerTitle} href="/about#payment">
              Способы оплаты
            </Link>
            <div className={styles.footerInfoPayWrapper}>
              <div className={styles.footerInfoPayItem}>
                <Image src="/icons/credit-card.svg" alt="Карты" width={20} height={20} />
              </div>
              <div className={styles.footerInfoPayItem}>
                <Image src="/icons/apple-pay.svg" alt="Apple Pay" width={20} height={20} />
              </div>
              <div className={styles.footerInfoPayItem}>
                <Image src="/icons/cash.svg" alt="Наличные" width={20} height={20} />
              </div>
              <div className={styles.footerInfoPayItem}>
                <Image src="/icons/bank.svg" alt="Банковский перевод" width={20} height={20} />
              </div>
            </div>
          </div>

          <div className={styles.footerInfoSocial}>
            <p className={styles.footerTitle}>Социальные сети</p>
            <div className={styles.footerInfoSocialWrapper}>
              <a 
                className={styles.footerInfoSocialItem} 
                href="https://t.me/+375333365678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <Image src="/icons/telegram.svg" alt="Telegram" width={20} height={20} />
              </a>
              <a 
                className={styles.footerInfoSocialItem} 
                href="https://www.instagram.com/printcoreby/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
              </a>
              <a 
                className={styles.footerInfoSocialItem} 
                href="viber://chat?number=%2B375333365678"
                aria-label="Viber"
              >
                <Image src="/icons/viber.svg" alt="Viber" width={20} height={20} />
              </a>
            </div>
          </div>

          <div className={styles.footerInfoDetails}>
            <p className={styles.footerTitle}>Наши реквизиты</p>
            <div className={styles.footerInfoDetailsContent}>
              <p className={styles.footerText}>
                ООО «Светлан Эстетикс»<br />
                РБ, 220069, г. Минск,<br />
                Проспект Дзержинского 3Б, офис 5<br />
                УНП: 193679900
              </p>
              <p className={styles.footerText}>
                Текущий (расчетный):<br />
                BY96ALFA30122D24630010270000 в BYN<br />
                в ЗАО «Альфа-Банк»<br />
                БИК: ALFABY2X
              </p>
              <p className={styles.footerText}>
                Тел: <PhoneLink />
              </p>
            </div>
            <div className={styles.footerLogo}>
              <Link href="/">
                <span className={styles.logoText}>PrintCore</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p>© {currentYear} PrintCore — команда, которой можно доверять.</p>
      </div>
    </footer>
  );
}
