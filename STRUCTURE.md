# Структура проекта PrintCore Website

## 📂 Полная структура файлов

```
printcore_website/
│
├── 📁 app/                        # Next.js App Router
│   ├── 📄 page.tsx                # Главная страница
│   ├── 📄 layout.tsx              # Root Layout с Redux Provider
│   ├── 📄 globals.css             # Глобальные стили
│   │
│   ├── 📁 services/               # Страница услуг
│   │   └── 📄 page.tsx
│   │
│   ├── 📁 portfolio/              # Портфолио
│   │   └── 📄 page.tsx
│   │
│   ├── 📁 blog/                   # Блог
│   │   └── 📄 page.tsx
│   │
│   ├── 📁 about/                  # О компании
│   │   └── 📄 page.tsx
│   │
│   ├── 📁 contacts/               # Контакты
│   │   └── 📄 page.tsx
│   │
│   └── 📁 account/                # Личный кабинет
│       └── 📄 page.tsx
│
├── 📁 components/                 # React компоненты
│   ├── 📄 Header.tsx              # Шапка сайта с навигацией
│   ├── 📄 Footer.tsx              # Подвал сайта
│   └── 📄 ServiceCard.tsx         # Карточка услуги
│
├── 📁 lib/                        # Библиотеки и утилиты
│   ├── 📄 store.ts                # Конфигурация Redux Store
│   ├── 📄 providers.tsx           # Redux Provider (Client Component)
│   │
│   └── 📁 features/               # Redux Slices (Flux архитектура)
│       ├── 📁 services/           # Управление услугами
│       │   └── 📄 servicesSlice.ts
│       │
│       ├── 📁 navigation/         # Навигация и меню
│       │   └── 📄 navigationSlice.ts
│       │
│       ├── 📁 cart/               # Корзина заказов
│       │   └── 📄 cartSlice.ts
│       │
│       └── 📁 auth/               # Аутентификация пользователей
│           └── 📄 authSlice.ts
│
├── 📁 public/                     # Статические файлы
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── 📄 package.json                # Зависимости и скрипты
├── 📄 tsconfig.json               # Конфигурация TypeScript
├── 📄 next.config.ts              # Конфигурация Next.js
├── 📄 postcss.config.mjs          # Конфигурация PostCSS
├── 📄 .gitignore                  # Git ignore файл
├── 📄 README.md                   # Документация
└── 📄 STRUCTURE.md                # Этот файл
```

## 🎯 Описание основных директорий

### 📁 app/
Next.js App Router - новый подход к роутингу на основе файловой системы.
Каждая папка с `page.tsx` становится маршрутом.

**Страницы:**
- `/` - Главная (page.tsx)
- `/services` - Услуги
- `/portfolio` - Портфолио работ
- `/blog` - Блог и статьи
- `/about` - О компании
- `/contacts` - Контакты
- `/account` - Личный кабинет

### 📁 components/
Переиспользуемые React компоненты:
- **Header** - Навигация, логотип, мобильное меню
- **Footer** - Контакты, ссылки, копирайт
- **ServiceCard** - Карточка для отображения услуги

### 📁 lib/
Логика приложения и управление состоянием:

#### store.ts
Конфигурация Redux Store с TypeScript типами:
```typescript
export const useAppDispatch: () => AppDispatch
export const useAppSelector: TypedUseSelectorHook<RootState>
```

#### providers.tsx
Client Component обертка для Redux Provider

#### features/
Redux Toolkit Slices (Flux архитектура):

1. **servicesSlice** - Управление услугами
   - Список услуг
   - Фильтрация по категориям
   - Состояние загрузки

2. **navigationSlice** - Навигация
   - Мобильное меню
   - Активные подменю
   - Текущая страница

3. **cartSlice** - Корзина
   - Добавление/удаление товаров
   - Подсчет суммы
   - Количество товаров

4. **authSlice** - Аутентификация
   - Данные пользователя
   - Статус авторизации
   - Обработка ошибок

## 🔄 Flux архитектура (Redux Toolkit)

```
┌─────────────┐
│   React     │
│ Components  │
└─────┬───────┘
      │ dispatch(action)
      ↓
┌─────────────┐
│   Actions   │
│  (слайсы)   │
└─────┬───────┘
      │
      ↓
┌─────────────┐
│  Reducers   │
│  (слайсы)   │
└─────┬───────┘
      │ update
      ↓
┌─────────────┐
│    Store    │
│  (состояние)│
└─────┬───────┘
      │ useSelector
      ↓
┌─────────────┐
│   React     │
│ Components  │
└─────────────┘
```

## 🎨 Стилизация

### Tailwind CSS 4
Утилитарный CSS с JIT компиляцией

### CSS переменные (globals.css)
```css
--bg: #0b0f17          /* Фон */
--card: #0f1420        /* Карточки */
--accent: #3b82f6      /* Синий акцент */
--accent-2: #06b6d4    /* Cyan акцент */
--text: #e6e8ec        /* Текст */
```

### Адаптивные брейкпоинты
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1280px
- Large Desktop: > 1280px

## 🚀 Команды

```bash
# Установка
npm install

# Разработка
npm run dev          # http://localhost:3000

# Сборка
npm run build
npm start
```

## 📦 Основные зависимости

```json
{
  "next": "15.5.6",              // Next.js фреймворк
  "react": "19.1.0",             // React библиотека
  "react-redux": "^9.2.0",       // React bindings для Redux
  "@reduxjs/toolkit": "^2.9.1",  // Redux Toolkit
  "typescript": "^5",            // TypeScript
  "tailwindcss": "^4"            // Tailwind CSS
}
```

## 🔧 Конфигурация

### tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]  // Абсолютные импорты
    }
  }
}
```

### next.config.ts
```typescript
{
  turbopack: true  // Быстрая компиляция
}
```

## 📱 Особенности

- ✅ Server Components (по умолчанию)
- ✅ Client Components ('use client')
- ✅ TypeScript strict mode
- ✅ Redux DevTools support
- ✅ Темная тема
- ✅ Responsive design
- ✅ SEO оптимизация
- ✅ Accessibility (a11y)

## 🎯 Следующие шаги

1. Добавить API интеграцию
2. Реализовать формы с валидацией
3. Добавить тесты (Jest, React Testing Library)
4. Настроить CI/CD
5. Добавить мультиязычность (i18n)
6. Оптимизировать изображения
7. Добавить аналитику

---

**PrintCore Website** - современный сайт типографии на Next.js 15 с Redux Toolkit 🚀

