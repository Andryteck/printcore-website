'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store';
import { toggleMobileMenu, closeMobileMenu, openSubmenu, closeSubmenu } from '@/lib/features/navigation/navigationSlice';
import { toggleCart } from '@/lib/features/cart/cartSlice';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { lockScroll, unlockScroll } from '@/lib/utils/scrollLock';
import Cart from './Cart';
import SearchModal from './Modals/SearchModal';
import ThemeToggle from './ThemeToggle';
import styles from '@/styles/components/Header.module.css';

// Данные меню с подкатегориями
const menuData = [
  {
    id: 'digital-print',
    icon: '🖨️',
    title: 'Цифровая печать',
    items: [
      { href: 'https://printcore.by/business_card', label: 'Визитки' },
      { href: 'https://printcore.by/flaeryi-listovki', label: 'Листовки и флаеры' },
      { href: 'https://printcore.by/trifolds', label: 'Буклеты' },
      { href: 'https://printcore.by/brochures', label: 'Брошюры и каталоги' },
      { href: 'https://printcore.by/order', label: 'Бланки и формуляры' },
      { href: 'https://printcore.by/opencard', label: 'Открытки' },
      { href: 'https://printcore.by/diploma_sertificat', label: 'Пригласительные' },
      { href: 'https://printcore.by/diploma_sertificat', label: 'Плакаты' },
    ]
  },
  {
    id: 'wide-format',
    icon: '📐',
    title: 'Широкоформатная печать',
    items: [
      { href: 'https://printcore.by/order', label: 'Баннеры' },
      { href: 'https://printcore.by/order', label: 'Плакаты больших размеров' },
      { href: 'https://printcore.by/order', label: 'Чертежи и схемы' },
      { href: 'https://printcore.by/order', label: 'Наружная реклама' },
      { href: 'https://printcore.by/order', label: 'Интерьерная печать' },
      { href: 'https://printcore.by/order', label: 'Печать на ткани' },
    ]
  },
  {
    id: 'photo-print',
    icon: '📷',
    title: 'Фотопечать',
    items: [
      { href: 'https://printcore.by/photo', label: 'Фото на документы' },
      { href: 'https://printcore.by/photo', label: 'Печать фотографий' },
      { href: 'https://printcore.by/photo', label: 'Фотокниги' },
      { href: 'https://printcore.by/photo', label: 'Холсты с фото' },
      { href: 'https://printcore.by/photo', label: 'Фото на магнитах' },
      { href: 'https://printcore.by/photo', label: 'Фотокалендари' },
    ]
  },
  {
    id: 'uv-print',
    icon: '☀️',
    title: 'УФ-печать',
    items: [
      { href: 'https://printcore.by/order', label: 'Печать на стекле' },
      { href: 'https://printcore.by/order', label: 'Печать на дереве' },
      { href: 'https://printcore.by/order', label: 'Печать на металле' },
      { href: 'https://printcore.by/order', label: 'Печать на пластике' },
      { href: 'https://printcore.by/order', label: 'Печать на акриле' },
    ]
  },
  {
    id: 'stickers',
    icon: '🏷️',
    title: 'Наклейки',
    items: [
      { href: 'https://printcore.by/stikers', label: 'Стикеры и наклейки' },
      { href: 'https://printcore.by/stikers', label: 'Этикетки для продукции' },
      { href: 'https://printcore.by/stikers', label: 'Виниловые наклейки' },
      { href: 'https://printcore.by/stikers', label: 'Наклейки на авто' },
      { href: 'https://printcore.by/stikers', label: 'Прозрачные наклейки' },
      { href: 'https://printcore.by/stikers', label: 'Декоративные стикеры' },
      { href: 'https://printcore.by/stikers3d', label: '3D стикеры' },
    ]
  },
  {
    id: 'business-cards',
    icon: '💳',
    title: 'Визитки',
    items: [
      { href: 'https://printcore.by/business_card', label: 'Стандартные визитки' },
      { href: 'https://printcore.by/business_card', label: 'Визитки премиум' },
      { href: 'https://printcore.by/business_card', label: 'Визитки с УФ-лаком' },
      { href: 'https://printcore.by/business_card', label: 'Визитки с тиснением' },
      { href: 'https://printcore.by/business_card', label: 'Визитки на дизайнерской бумаге' },
      { href: 'https://printcore.by/business_card', label: 'Визитки с ламинацией' },
    ]
  },
  {
    id: 'popular-polygraphy',
    icon: '🔥',
    title: 'Популярная полиграфия',
    items: [
      { href: 'https://printcore.by/photo', label: 'Фотопечать' },
      { href: 'https://printcore.by/business_card', label: 'Визитки' },
      { href: 'https://printcore.by/flaeryi-listovki', label: 'Листовки' },
      { href: 'https://printcore.by/trifolds', label: 'Буклеты' },
      { href: 'https://printcore.by/flaeryi-listovki', label: 'Флаеры' },
      { href: 'https://printcore.by/order', label: 'Календари' },
      { href: 'https://printcore.by/opencard', label: 'Открытки' },
    ]
  },
  {
    id: 'engineering-print',
    icon: '📏',
    title: 'Инженерная печать',
    items: [
      { href: 'https://printcore.by/order', label: 'Чертежи формата А0-А4' },
      { href: 'https://printcore.by/order', label: 'Технические схемы' },
      { href: 'https://printcore.by/order', label: 'Архитектурные планы' },
      { href: 'https://printcore.by/order', label: 'Печать проектов' },
    ]
  },
  {
    id: 'business-events',
    icon: '💼',
    title: 'Бизнес и мероприятия',
    items: [
      { href: 'https://printcore.by/order', label: 'Бейджи и бирки' },
      { href: 'https://printcore.by/opencard', label: 'Пригласительные' },
      { href: 'https://printcore.by/trifolds', label: 'Программки мероприятий' },
      { href: 'https://printcore.by/order', label: 'Презентационные материалы' },
      { href: 'https://printcore.by/diploma_sertificat', label: 'Сертификаты и дипломы' },
    ]
  },
  {
    id: 'restaurants-cafe',
    icon: '🍽️',
    title: 'Для ресторанов и кафе',
    items: [
      { href: 'https://printcore.by/menu_order', label: 'Меню' },
      { href: 'https://printcore.by/order', label: 'Винные карты' },
      { href: 'https://printcore.by/order', label: 'Подставки под бокалы' },
      { href: 'https://printcore.by/order', label: 'Таблички на столы' },
      { href: 'https://printcore.by/diploma_sertificat', label: 'Сертификаты на питание' },
    ]
  },
  {
    id: 'students',
    icon: '🎓',
    title: 'Для студентов и учащихся',
    items: [
      { href: 'https://printcore.by/order', label: 'Печать документов' },
      { href: 'https://printcore.by/order', label: 'Переплет дипломов' },
      { href: 'https://printcore.by/order', label: 'Печать курсовых работ' },
      { href: 'https://printcore.by/brochures', label: 'Брошюровка' },
      { href: 'https://printcore.by/photo', label: 'Фото на документы' },
    ]
  },
  {
    id: 'post-print',
    icon: '✂️',
    title: 'Постпечатная обработка',
    items: [
      { href: 'https://printcore.by/order', label: 'Переплет' },
      { href: 'https://printcore.by/order', label: 'Ламинирование' },
      { href: 'https://printcore.by/catalog_journals', label: 'Брошюровка' },
      { href: 'https://printcore.by/order', label: 'Фальцовка' },
      { href: 'https://printcore.by/order', label: 'Биговка' },
      { href: 'https://printcore.by/order', label: 'Резка и обрезка' },
    ]
  },
  {
    id: 'souvenirs',
    icon: '🎁',
    title: 'Сувенирная продукция',
    items: [
      { href: 'https://printcore.by/order', label: 'Кружки с логотипом' },
      { href: 'https://printcore.by/order', label: 'Футболки' },
      { href: 'https://printcore.by/order', label: 'Ручки и блокноты' },
      { href: 'https://printcore.by/order', label: 'Магниты' },
      { href: 'https://printcore.by/order', label: 'Значки и брелоки' },
      { href: 'https://printcore.by/order', label: 'Календари' },
    ]
  },
  {
    id: 'children',
    icon: '👶',
    title: 'Для детей',
    items: [
      { href: 'https://printcore.by/order', label: 'Пригласительные на праздник' },
      { href: 'https://printcore.by/catalog_journals', label: 'Детские книжки' },
      { href: 'https://printcore.by/order', label: 'Раскраски' },
      { href: 'https://printcore.by/diploma_sertificat', label: 'Плакаты и постеры' },
      { href: 'https://printcore.by/stikers', label: 'Наклейки' },
    ]
  },
  {
    id: 'design',
    icon: '🎨',
    title: 'Дизайн и верстка',
    items: [
      { href: 'https://printcore.by/order', label: 'Дизайн визиток' },
      { href: 'https://printcore.by/order', label: 'Дизайн листовок' },
      { href: 'https://printcore.by/order', label: 'Дизайн логотипа' },
      { href: 'https://printcore.by/order', label: 'Верстка каталогов' },
      { href: 'https://printcore.by/order', label: 'Создание макетов' },
      { href: 'https://printcore.by/order', label: 'Дизайн упаковки' },
    ]
  },
];

export default function HeaderClient() {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen, activeSubmenu } = useAppSelector((state) => state.navigation);
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);
  const { items: favoriteItems } = useAppSelector((state) => state.favorites);
  
  // Состояние для поиска
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{label: string, href: string, category: string}>>([]);

  // Блокировка прокрутки при открытом меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => {
      unlockScroll();
    };
  }, [isMobileMenuOpen]);

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      // Проверяем, что клик не по элементам меню
      if (
        isMobileMenuOpen &&
        !target.closest(`.${styles.sidebar}`) &&
        !target.closest(`.${styles.burger}`) &&
        !target.closest(`.${styles.mobileIcons}`)
      ) {
        dispatch(closeMobileMenu());
        if (activeSubmenu) {
          dispatch(closeSubmenu());
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, activeSubmenu, dispatch]);

  const handleBurgerClick = () => {
    if (activeSubmenu) {
      dispatch(closeSubmenu());
    } else if (isMobileMenuOpen) {
      dispatch(closeMobileMenu());
    } else {
      dispatch(toggleMobileMenu());
    }
  };

  // Подсчет количества товаров в корзине
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);
  
  // Создание плоского списка всех услуг для поиска
  const allServices = menuData.flatMap(category => 
    category.items.map(item => ({
      label: item.label,
      href: item.href,
      category: category.title
    }))
  );
  
  // Функция поиска
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.length < 3) {
      setSearchResults([]);
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    const results = allServices.filter(service => 
      service.label.toLowerCase().includes(lowercaseQuery) ||
      service.category.toLowerCase().includes(lowercaseQuery)
    );
    
    setSearchResults(results.slice(0, 10)); // Ограничиваем 10 результатами
  };
  
  // Закрытие поиска
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };
  
  // Закрытие поиска при клике вне области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      if (
        isSearchOpen &&
        !target.closest(`.${styles.searchModal}`) &&
        !target.closest(`.${styles.searchIcon}`)
      ) {
        closeSearch();
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

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
          <button
            className={styles.searchIcon}
            onClick={() => setIsSearchOpen(true)}
            aria-label="Поиск"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </li>
        <li>
          <Link href="/cart" className={styles.cartIconDesktop} aria-label="Корзина">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartItemsCount > 0 && (
              <span className={styles.cartBadge}>{cartItemsCount}</span>
            )}
          </Link>
        </li>
        <li>
          <Link href="/account/favorites" className={styles.favoriteIcon} aria-label="Избранное">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {favoriteItems.length > 0 && (
              <span className={styles.favoriteBadge}>{favoriteItems.length}</span>
            )}
          </Link>
        </li>
        <li>
          {isAuthenticated ? (
            <Link href="/account" className={styles.loginButton}>
              <span className={styles.loginButtonIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <span>{user?.name?.split(' ')[0] || 'Кабинет'}</span>
            </Link>
          ) : (
            <Link href="/login" className={styles.loginButton}>
              Войти
            </Link>
          )}
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>

      {/* Мобильные иконки (корзина, поиск, личный кабинет) */}
      <div className={styles.mobileIcons}>
        {/* Иконка корзины */}
        <button
          className={styles.mobileIcon}
          onClick={() => dispatch(toggleCart())}
          aria-label="Корзина"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartItemsCount > 0 && (
            <span className={styles.cartBadge}>{cartItemsCount}</span>
          )}
        </button>

        {/* Иконка поиска */}
        <button
          className={styles.mobileIcon}
          onClick={() => setIsSearchOpen(true)}
          aria-label="Поиск"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>

        {/* Иконка личного кабинета */}
        <Link
          href={isAuthenticated ? '/account' : '/login'}
          className={styles.mobileIcon}
          aria-label={isAuthenticated ? 'Личный кабинет' : 'Войти'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </Link>
      </div>

      {/* Бургер-меню */}
      <button
        onClick={handleBurgerClick}
        className={`${styles.burger} ${isMobileMenuOpen ? styles.active : ''} ${activeSubmenu ? styles.backMode : ''}`}
        aria-label="Меню"
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>

      {/* Боковое меню для мобильной версии */}
      <div className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarActive : ''}`}>
        {/* Заголовок меню */}
        <div className={styles.sidebarHeader}>Меню</div>
        
        <div className={styles.menuItems}>
          {menuData.map((category) => (
            <div
              key={category.id}
              className={styles.menuItem}
              onClick={() => dispatch(openSubmenu(category.id))}
            >
              <div className={styles.menuItemContent}>
                <span className={styles.menuItemIcon}>{category.icon}</span>
                <span>{category.title}</span>
              </div>
              <span className={styles.menuItemArrow}>›</span>
            </div>
        ))}

        {/* Разделитель */}
        <div className={styles.menuDivider}></div>

        {/* Дополнительные ссылки */}
        <div className={styles.menuSection}>
          <div className={styles.menuSectionTitle}>Информация</div>
          <Link href="/portfolio" className={styles.menuItem} onClick={() => dispatch(closeMobileMenu())}>
            <div className={styles.menuItemContent}>
              <span className={styles.menuItemIcon}>🖼️</span>
              <span>Портфолио</span>
            </div>
          </Link>
          <Link href="/blog" className={styles.menuItem} onClick={() => dispatch(closeMobileMenu())}>
            <div className={styles.menuItemContent}>
              <span className={styles.menuItemIcon}>📝</span>
              <span>Блог</span>
            </div>
          </Link>
          <Link href="/about" className={styles.menuItem} onClick={() => dispatch(closeMobileMenu())}>
            <div className={styles.menuItemContent}>
              <span className={styles.menuItemIcon}>ℹ️</span>
              <span>О нас</span>
            </div>
          </Link>
          <Link href="/contacts" className={styles.menuItem} onClick={() => dispatch(closeMobileMenu())}>
            <div className={styles.menuItemContent}>
              <span className={styles.menuItemIcon}>📞</span>
              <span>Контакты</span>
            </div>
          </Link>
        </div>

        {/* Личный кабинет */}
        <div className={styles.menuSection}>
          <div className={styles.menuSectionTitle}>Аккаунт</div>
          {isAuthenticated ? (
            <Link href="/account" className={styles.menuItem} onClick={() => dispatch(closeMobileMenu())}>
              <div className={styles.menuItemContent}>
                <span className={styles.menuItemIcon}>👤</span>
                <span>{user?.name?.split(' ')[0] || 'Личный кабинет'}</span>
              </div>
            </Link>
          ) : (
            <Link href="/login" className={styles.menuItem} onClick={() => dispatch(closeMobileMenu())}>
              <div className={styles.menuItemContent}>
                <span className={styles.menuItemIcon}>🔑</span>
                <span>Войти</span>
              </div>
            </Link>
          )}
        </div>
        </div>

        {/* Подменю для каждой категории */}
        {menuData.map((category) => (
          <div
            key={`submenu-${category.id}`}
            className={`${styles.submenu} ${activeSubmenu === category.id ? styles.submenuActive : ''}`}
          >
            <div className={styles.submenuTitle}>{category.title}</div>
            <div className={styles.submenuItems}>
              {category.items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={styles.submenuItem}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => dispatch(closeMobileMenu())}
                >
                  <span className={styles.submenuItemIcon}>▸</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* Модальное окно поиска */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={closeSearch}
        searchResults={searchResults}
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />

      {/* Компонент корзины */}
      <Cart />
    </>
  );
}

