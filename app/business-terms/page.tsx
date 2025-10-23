import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from '@/styles/pages/BusinessTerms.module.css';

export const metadata: Metadata = {
  title: 'Условия для бизнеса - PrintCore',
  description: 'Специальные условия для корпоративных клиентов, оптовые скидки, индивидуальный подход и эксклюзивные предложения для бизнеса.',
  openGraph: {
    title: 'Условия для бизнеса - PrintCore',
    description: 'Специальные условия для корпоративных клиентов',
  },
};

export default function BusinessTermsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Условия для бизнеса</h1>
        <p className={styles.subtitle}>
          Индивидуальные решения для вашей компании с выгодными условиями сотрудничества
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Почему бизнес выбирает нас</h2>
        
        <div className={styles.advantagesGrid}>
          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Image src="/icons/money.svg" alt="Деньги" width={40} height={40} />
            </div>
            <h3 className={styles.advantageTitle}>Оптовые цены</h3>
            <p className={styles.advantageText}>
              Специальные скидки от 10% до 30% для корпоративных клиентов. 
              Чем больше объем заказа, тем выгоднее условия.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Image src="/icons/package.svg" alt="Упаковка" width={40} height={40} />
            </div>
            <h3 className={styles.advantageTitle}>Большие тиражи</h3>
            <p className={styles.advantageText}>
              Выполняем заказы любого объема — от минимальных партий до крупномасштабных 
              тиражей в тысячи экземпляров.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Image src="/icons/lightning.svg" alt="Молния" width={40} height={40} />
            </div>
            <h3 className={styles.advantageTitle}>Срочное производство</h3>
            <p className={styles.advantageText}>
              Приоритетное выполнение заказов для постоянных партнеров. 
              Готовы работать в режиме срочности.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Image src="/icons/design.svg" alt="Дизайн" width={40} height={40} />
            </div>
            <h3 className={styles.advantageTitle}>Бесплатный дизайн</h3>
            <p className={styles.advantageText}>
              Профессиональная разработка макетов, корпоративных стилей 
              и брендированных материалов для наших партнеров.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Image src="/icons/truck.svg" alt="Доставка" width={40} height={40} />
            </div>
            <h3 className={styles.advantageTitle}>Доставка по городу</h3>
            <p className={styles.advantageText}>
              Бесплатная доставка готовой продукции по Минску для заказов 
              от 300 рублей. Курьер привезет в удобное время.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Image src="/icons/credit-card.svg" alt="Кредитная карта" width={40} height={40} />
            </div>
            <h3 className={styles.advantageTitle}>Отсрочка платежа</h3>
            <p className={styles.advantageText}>
              Для постоянных корпоративных клиентов предоставляем отсрочку 
              платежа до 30 дней с оформлением договора.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Image src="/icons/user.svg" alt="Пользователь" width={40} height={40} />
            </div>
            <h3 className={styles.advantageTitle}>Персональный менеджер</h3>
            <p className={styles.advantageText}>
              Каждой компании назначается персональный менеджер, который будет 
              вести все ваши заказы и консультировать по любым вопросам.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Image src="/icons/document.svg" alt="Документ" width={40} height={40} />
            </div>
            <h3 className={styles.advantageTitle}>Полный пакет документов</h3>
            <p className={styles.advantageText}>
              Договор, счета, акты выполненных работ, накладные — 
              все документы для бухгалтерии оформляем оперативно.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Image src="/icons/shield.svg" alt="Гарантия" width={40} height={40} />
            </div>
            <h3 className={styles.advantageTitle}>Гарантия качества</h3>
            <p className={styles.advantageText}>
              Используем только сертифицированные материалы и современное оборудование. 
              Гарантируем высокое качество каждого заказа.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что мы предлагаем бизнесу</h2>
        
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <h3>
              <Image src="/icons/business-card.svg" alt="Визитка" width={24} height={24} style={{marginRight: '8px', verticalAlign: 'middle'}} />
              Корпоративная полиграфия
            </h3>
            <ul>
              <li>Визитные карточки с индивидуальным дизайном</li>
              <li>Бланки, конверты с фирменным стилем</li>
              <li>Каталоги и брошюры о продукции</li>
              <li>Листовки и флаеры для промо-акций</li>
              <li>Календари с логотипом компании</li>
            </ul>
          </div>

          <div className={styles.serviceItem}>
            <h3>
              <Image src="/icons/gift.svg" alt="Подарок" width={24} height={24} style={{marginRight: '8px', verticalAlign: 'middle'}} />
              Сувенирная продукция
            </h3>
            <ul>
              <li>Брендированные кружки, ручки, блокноты</li>
              <li>Корпоративные подарки для партнеров</li>
              <li>Футболки и кепки с логотипом</li>
              <li>Эко-сумки и тканевые шопперы</li>
              <li>USB-флешки с гравировкой</li>
            </ul>
          </div>

          <div className={styles.serviceItem}>
            <h3>
              <Image src="/icons/billboard.svg" alt="Реклама" width={24} height={24} style={{marginRight: '8px', verticalAlign: 'middle'}} />
              Рекламные материалы
            </h3>
            <ul>
              <li>Баннеры для выставок и мероприятий</li>
              <li>Ролл-апы и мобильные стенды</li>
              <li>Наружная реклама любого формата</li>
              <li>POS-материалы для точек продаж</li>
              <li>Вывески и световые короба</li>
            </ul>
          </div>

          <div className={styles.serviceItem}>
            <h3>
              <Image src="/icons/box.svg" alt="Коробка" width={24} height={24} style={{marginRight: '8px', verticalAlign: 'middle'}} />
              Упаковка
            </h3>
            <ul>
              <li>Фирменные коробки и пакеты</li>
              <li>Этикетки и стикеры</li>
              <li>Упаковка для подарков</li>
              <li>Наклейки с логотипом</li>
              <li>Брендированный скотч</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.downloadSection}>
        <div className={styles.downloadCard}>
          <h2 className={styles.downloadTitle}>Коммерческое предложение</h2>
          <p className={styles.downloadText}>
            Скачайте наше подробное коммерческое предложение с ценами, условиями 
            сотрудничества и примерами работ для корпоративных клиентов.
          </p>
          <p className={styles.downloadText}>
            В документе вы найдете:
          </p>
          <ul className={styles.downloadList}>
            <li>Актуальные цены на все виды услуг</li>
            <li>Систему скидок для постоянных клиентов</li>
            <li>Примеры выполненных заказов</li>
            <li>Условия оплаты и доставки</li>
            <li>Контактную информацию менеджеров</li>
          </ul>
          
          <div className={styles.downloadButtons}>
            <a 
              href="/documents/commercial-offer-printcore.pdf" 
              className={styles.downloadButton}
              download
            >
              <Image src="/icons/download.svg" alt="Скачать" width={20} height={20} style={{marginRight: '8px', verticalAlign: 'middle'}} />
              Скачать коммерческое предложение (PDF)
            </a>
            <p className={styles.downloadNote}>
              Файл PDF, размер ~2 МБ
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Начните сотрудничество с нами</h2>
        <p className={styles.contactText}>
          Свяжитесь с нами удобным способом, чтобы обсудить условия сотрудничества 
          и получить индивидуальное коммерческое предложение для вашей компании.
        </p>
        
        <div className={styles.contactMethods}>
          <div className={styles.contactMethod}>
            <h3>
              <Image src="/icons/phone.svg" alt="Телефон" width={20} height={20} style={{marginRight: '8px', verticalAlign: 'middle'}} />
              Позвоните нам
            </h3>
            <p>+375 33 336 56 78</p>
            <p className={styles.contactSchedule}>пн-пт: 9:00-20:00, сб-вс: 10:00-19:00</p>
          </div>

          <div className={styles.contactMethod}>
            <h3>
              <Image src="/icons/mail.svg" alt="Email" width={20} height={20} style={{marginRight: '8px', verticalAlign: 'middle'}} />
              Напишите на email
            </h3>
            <p>printcorecenter@gmail.com</p>
            <p className={styles.contactSchedule}>Ответим в течение часа</p>
          </div>

          <div className={styles.contactMethod}>
            <h3>
              <Image src="/icons/message.svg" alt="Сообщение" width={20} height={20} style={{marginRight: '8px', verticalAlign: 'middle'}} />
              Telegram / Viber
            </h3>
            <p>+375 33 336 56 78</p>
            <p className={styles.contactSchedule}>Быстрая связь в мессенджерах</p>
          </div>

          <div className={styles.contactMethod}>
            <h3>
              <Image src="/icons/location.svg" alt="Локация" width={20} height={20} style={{marginRight: '8px', verticalAlign: 'middle'}} />
              Приезжайте в офис
            </h3>
            <p>г. Минск, пр. Дзержинского 3Б</p>
            <p className={styles.contactSchedule}>Обсудим детали лично</p>
          </div>
        </div>

        <div className={styles.ctaButtons}>
          <Link href="/contacts" className={styles.ctaButton}>
            Оставить заявку
          </Link>
          <Link href="/services" className={styles.ctaButtonSecondary}>
            Посмотреть услуги
          </Link>
        </div>
      </section>

      <section className={styles.industriesSection}>
        <h2 className={styles.sectionTitle}>Решения по отраслям</h2>
        <p className={styles.industriesSubtitle}>
          Мы создаем полиграфическую продукцию для различных отраслей бизнеса. 
          Выберите вашу сферу деятельности и узнайте, какие изделия мы можем для вас изготовить.
        </p>
        
        <div className={styles.industriesGrid}>
          <Link href="/industries/auto-services" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/truck.svg" alt="Автоуслуги" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>Автоуслуги и ремонт</h3>
              <p className={styles.industryDescription}>
                Визитки механиков, прайс-листы услуг, вывески, наклейки на авто, 
                буклеты о сервисе, календари с логотипом автосервиса.
              </p>
            </div>
          </Link>

          <Link href="/industries/architecture" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/design.svg" alt="Архитектура" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>Архитектура и строительство</h3>
              <p className={styles.industryDescription}>
                Презентационные буклеты проектов, визитки архитекторов, 
                каталоги строительных материалов, планы и чертежи.
              </p>
            </div>
          </Link>

          <Link href="/industries/exhibitions" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/billboard.svg" alt="Выставки" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>Выставки и экспозиции</h3>
              <p className={styles.industryDescription}>
                Выставочные стенды, баннеры, ролл-апы, каталоги продукции, 
                визитки для выставок, информационные таблички.
              </p>
            </div>
          </Link>

          <Link href="/industries/conferences" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/document.svg" alt="Конференции" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>Конференции и семинары</h3>
              <p className={styles.industryDescription}>
                Программы мероприятий, бейджи участников, сертификаты, 
                презентационные материалы, флаеры и буклеты.
              </p>
            </div>
          </Link>

          <Link href="/industries/marketplaces" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/package.svg" alt="Маркетплейсы" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>Маркетплейсы</h3>
              <p className={styles.industryDescription}>
                Упаковка товаров, этикетки, наклейки с QR-кодами, 
                инструкции по использованию, сертификаты качества.
              </p>
            </div>
          </Link>

          <Link href="/industries/medical" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/shield.svg" alt="Медицина" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>Медицинские центры</h3>
              <p className={styles.industryDescription}>
                Визитки врачей, медицинские карты, информационные листовки, 
                плакаты о здоровье, сертификаты и дипломы.
              </p>
            </div>
          </Link>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/design.svg" alt="Наука" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Наука и образование</h3>
            <p className={styles.industryDescription}>
              Научные публикации, учебные пособия, дипломы и грамоты, 
              методические материалы, сертификаты курсов.
            </p>
          </div>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/location.svg" alt="Отели" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Отели и HoReCa</h3>
            <p className={styles.industryDescription}>
              Меню ресторанов, посадочные карты, буклеты отелей, 
              визитки персонала, наклейки на блюда, промо-материалы.
            </p>
          </div>

          <Link href="/industries/office" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/business-card.svg" alt="Офис" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>Офис и продажи</h3>
              <p className={styles.industryDescription}>
                Корпоративные визитки, прайс-листы, коммерческие предложения, 
                договоры, бланки документов, презентационные материалы.
              </p>
            </div>
          </Link>

          <Link href="/industries/events" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/gift.svg" alt="Праздники" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>Праздники и мероприятия</h3>
              <p className={styles.industryDescription}>
                Пригласительные, программы мероприятий, сертификаты участников, 
                декоративные элементы, сувенирная продукция.
              </p>
            </div>
          </Link>

          <Link href="/industries/it" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/lightning.svg" alt="IT" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>IT компании</h3>
              <p className={styles.industryDescription}>
                Визитки IT-специалистов, техническая документация, 
                руководства пользователя, сертификаты программ, брендинг.
              </p>
            </div>
          </Link>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/package.svg" alt="Производство" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Производство</h3>
            <p className={styles.industryDescription}>
              Техническая документация, этикетки продукции, инструкции, 
              сертификаты качества, упаковка, промо-материалы.
            </p>
          </div>

          <Link href="/industries/restaurants" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/gift.svg" alt="Рестораны" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>Рестораны и кафе</h3>
              <p className={styles.industryDescription}>
                Меню, визитки шеф-повара, посадочные карты, наклейки на блюда, 
                промо-материалы, сертификаты подарочные.
              </p>
            </div>
          </Link>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/money.svg" alt="Ритейл" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Ритейл и малый бизнес</h3>
            <p className={styles.industryDescription}>
              Визитки, прайс-листы, вывески, наклейки, упаковка товаров, 
              рекламные материалы, сертификаты и купоны.
            </p>
          </div>

          <Link href="/industries/beauty" className={styles.industryCardLink}>
            <div className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <Image src="/icons/gift.svg" alt="Красота" width={40} height={40} />
              </div>
              <h3 className={styles.industryTitle}>Салоны красоты</h3>
              <p className={styles.industryDescription}>
                Визитки мастеров, прайс-листы услуг, сертификаты на процедуры, 
                рекламные буклеты, купоны на скидки, подарочные сертификаты.
              </p>
            </div>
          </Link>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/document.svg" alt="СМИ" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>СМИ и издательства</h3>
            <p className={styles.industryDescription}>
              Газеты, журналы, книги, брошюры, рекламные материалы, 
              визитки журналистов, пресс-релизы, каталоги.
            </p>
          </div>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/shield.svg" alt="Спорт" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Спорт и туризм</h3>
            <p className={styles.industryDescription}>
              Пропуска в спортзал, сертификаты тренеров, туристические буклеты, 
              карты местности, визитки инструкторов, промо-материалы.
            </p>
          </div>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/gift.svg" alt="Культура" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Театры и музеи</h3>
            <p className={styles.industryDescription}>
              Театральные билеты, программки спектаклей, музейные буклеты, 
              сувенирная продукция, визитки актеров, афиши.
            </p>
          </div>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/design.svg" alt="Обучение" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Тренинги и обучение</h3>
            <p className={styles.industryDescription}>
              Учебные пособия, сертификаты курсов, дипломы, методички, 
              рабочие тетради, презентационные материалы, бейджи участников.
            </p>
          </div>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/package.svg" alt="Сельское хозяйство" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Фермерские хозяйства</h3>
            <p className={styles.industryDescription}>
              Этикетки для продуктов, сертификаты качества, 
              рекламные буклеты, визитки фермеров, упаковка товаров.
            </p>
          </div>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/credit-card.svg" alt="Финансы" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Финансы и банки</h3>
            <p className={styles.industryDescription}>
              Визитки банкиров, финансовые отчеты, рекламные буклеты, 
              договоры, сертификаты, промо-материалы услуг.
            </p>
          </div>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/design.svg" alt="Креатив" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Фотографы и дизайнеры</h3>
            <p className={styles.industryDescription}>
              Портфолио, визитки творческих специалистов, календари с фото, 
              открытки, альбомы, сертификаты на фотосессии.
            </p>
          </div>

          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>
              <Image src="/icons/gift.svg" alt="Хендмейд" width={40} height={40} />
            </div>
            <h3 className={styles.industryTitle}>Хендмейд и хобби</h3>
            <p className={styles.industryDescription}>
              Визитки мастеров, этикетки для товаров, сертификаты мастер-классов, 
              упаковка подарков, рекламные материалы, открытки ручной работы.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Часто задаваемые вопросы</h2>
        
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>С какого объема заказа действуют корпоративные цены?</h3>
            <p>
              Специальные условия для бизнеса начинают действовать от заказа на сумму 
              300 рублей. Скидки увеличиваются пропорционально объему.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Как стать постоянным клиентом?</h3>
            <p>
              Достаточно оформить первый заказ и заключить с нами договор. После этого 
              вы автоматически получаете статус корпоративного клиента со всеми привилегиями.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Предоставляете ли вы образцы перед печатью тиража?</h3>
            <p>
              Да, для крупных заказов мы бесплатно делаем пробную печать или макет, 
              чтобы вы могли оценить качество перед запуском всего тиража.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Возможна ли срочная печать для бизнеса?</h3>
            <p>
              Да, мы выполняем срочные заказы за 24 часа. Для постоянных клиентов 
              предусмотрена приоритетная очередь без доплаты за срочность.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

