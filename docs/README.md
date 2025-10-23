# PrintCore Website

Современный веб-сайт типографии PrintCore, построенный на Next.js 15 с Redux Toolkit.

## 🚀 Технологии

- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - Типизация для надежного кода
- **Redux Toolkit** - Управление состоянием (Flux архитектура)
- **Tailwind CSS 4** - Утилитарный CSS фреймворк
- **React 19** - Последняя версия React

## 📁 Структура проекта

```
printcore_website/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Главная страница
│   ├── services/page.tsx         # Страница услуг
│   ├── portfolio/page.tsx        # Портфолио
│   ├── blog/page.tsx             # Блог
│   ├── about/page.tsx            # О компании
│   ├── contacts/page.tsx         # Контакты
│   ├── account/page.tsx          # Личный кабинет
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Глобальные стили
│
├── components/                   # React компоненты
│   ├── Header.tsx                # Шапка сайта
│   ├── Footer.tsx                # Подвал
│   └── ServiceCard.tsx           # Карточка услуги
│
├── lib/                          # Redux и утилиты
│   ├── store.ts                  # Конфигурация Redux Store
│   ├── providers.tsx             # Redux Provider
│   └── features/                 # Redux Slices
│       ├── services/             # Управление услугами
│       │   └── servicesSlice.ts
│       ├── navigation/           # Навигация и меню
│       │   └── navigationSlice.ts
│       ├── cart/                 # Корзина заказов
│       │   └── cartSlice.ts
│       └── auth/                 # Аутентификация
│           └── authSlice.ts
│
└── public/                       # Статические файлы
```

## 🎯 Основные страницы

### Главная (/)
- Hero секция с видео-фоном
- Карточки услуг
- О компании
- Преимущества
- CTA секция

### Услуги (/services)
- Полный список услуг
- Фильтрация по категориям
- Детальное описание каждой услуги

### Портфолио (/portfolio)
- Примеры выполненных работ
- Фильтрация проектов
- Детальные кейсы

### Блог (/blog)
- Статьи о полиграфии
- Советы и лайфхаки
- Новости индустрии

### О нас (/about)
- Миссия компании
- Оборудование
- Команда
- Статистика

### Контакты (/contacts)
- Контактная информация
- Форма обратной связи
- Карта

### Личный кабинет (/account)
- Авторизация
- Заказы
- История
- Профиль

## 🔄 Redux Store

### Services Slice
Управление услугами и их категориями:
```typescript
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { setSelectedCategory } from '@/lib/features/services/servicesSlice';

const { services, selectedCategory } = useAppSelector(state => state.services);
const dispatch = useAppDispatch();

dispatch(setSelectedCategory('digital'));
```

### Navigation Slice
Управление навигацией и мобильным меню:
```typescript
import { toggleMobileMenu } from '@/lib/features/navigation/navigationSlice';

const { isMobileMenuOpen } = useAppSelector(state => state.navigation);
dispatch(toggleMobileMenu());
```

### Cart Slice
Управление корзиной заказов:
```typescript
import { addToCart, removeFromCart } from '@/lib/features/cart/cartSlice';

const { items, total } = useAppSelector(state => state.cart);

dispatch(addToCart({
  id: '1',
  serviceId: 'digital-print',
  title: 'Цифровая печать',
  quantity: 100,
  price: 50
}));
```

### Auth Slice
Управление аутентификацией:
```typescript
import { loginSuccess, logout } from '@/lib/features/auth/authSlice';

const { isAuthenticated, user } = useAppSelector(state => state.auth);

dispatch(loginSuccess({
  id: '1',
  email: 'user@example.com',
  name: 'Иван Иванов'
}));
```

## 🎨 Дизайн

Проект использует темную цветовую схему с акцентами:
- **Фон**: `#0b0f17` (темно-синий)
- **Карточки**: `#0f1420`
- **Акцент 1**: `#3b82f6` (синий)
- **Акцент 2**: `#06b6d4` (cyan)
- **Текст**: `#e6e8ec`

Анимации и эффекты:
- Плавные переходы
- Hover эффекты
- Градиенты
- Backdrop blur
- Box shadows с цветными свечениями

## 🚀 Запуск проекта

### Установка зависимостей
```bash
npm install
```

### Режим разработки
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### Сборка для продакшена
```bash
npm run build
npm start
```

## 📦 Зависимости

```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^2.9.1",
    "next": "15.5.6",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-redux": "^9.2.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## 🔧 Конфигурация

### TypeScript (tsconfig.json)
Проект использует строгую типизацию TypeScript с абсолютными импортами через `@/*`.

### Tailwind CSS
Используется Tailwind CSS 4 с кастомными CSS переменными для темной темы.

### Next.js Config
- Turbopack для быстрой разработки
- App Router
- TypeScript support

## 📱 Адаптивность

Сайт полностью адаптивен:
- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)
- 🖥️ Large Desktop (> 1280px)

## 🎯 Особенности

- ✅ Server Components по умолчанию
- ✅ Client Components с 'use client'
- ✅ Redux для управления состоянием
- ✅ TypeScript для типобезопасности
- ✅ Темная тема с градиентами
- ✅ Плавные анимации
- ✅ SEO-оптимизация
- ✅ Accessibility (a11y)

## 📞 Контакты

- **Адрес**: Пр. Дзержинского 3Б, Минск
- **Телефон**: +375 33 336 5678
- **Email**: printcorecenter@gmail.com
- **Telegram**: https://t.me/+375333365678

## 📄 Лицензия

© 2024 PrintCore. Все права защищены.

---

**Разработано с ❤️ для PrintCore**
