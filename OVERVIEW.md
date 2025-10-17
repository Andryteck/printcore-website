# 📋 PrintCore Website - Обзор проекта

## 🎯 Назначение
Современный веб-сайт для типографии PrintCore с онлайн-заказами и личным кабинетом

---

## 🏗️ Архитектура

### Tech Stack
```
┌─────────────────────────────────────┐
│         Next.js 15 (App Router)     │
│  ┌───────────────────────────────┐  │
│  │   React 19 Components         │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │   Redux Toolkit         │  │  │
│  │  │   (Flux Architecture)   │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
│         Tailwind CSS 4              │
│         TypeScript 5                │
└─────────────────────────────────────┘
```

### Flux Data Flow
```
┌─────────┐     dispatch()     ┌──────────┐
│  View   │ ───────────────>   │  Action  │
│(React)  │                    │ (Redux)  │
└─────────┘                    └──────────┘
     ↑                              │
     │                              ↓
     │                         ┌──────────┐
     │                         │ Reducer  │
     │                         │ (Redux)  │
     │                         └──────────┘
     │                              │
     │                              ↓
     │                         ┌──────────┐
     └─────── subscribe ────── │  Store   │
                               │ (Redux)  │
                               └──────────┘
```

---

## 📁 Структура (кратко)

```
printcore_website/
│
├── 📱 app/              # 7 страниц (Next.js App Router)
│   ├── page.tsx         # Главная
│   ├── services/        # Услуги
│   ├── portfolio/       # Портфолио
│   ├── blog/            # Блог
│   ├── about/           # О нас
│   ├── contacts/        # Контакты
│   └── account/         # Личный кабинет
│
├── 🧩 components/       # React компоненты
│   ├── Header.tsx       # Навигация
│   ├── Footer.tsx       # Подвал
│   └── ServiceCard.tsx  # Карточка
│
├── 🔄 lib/              # Redux Store
│   ├── store.ts         # Store
│   ├── providers.tsx    # Provider
│   └── features/        # 4 Slices
│       ├── services/    # Услуги
│       ├── navigation/  # Меню
│       ├── cart/        # Корзина
│       └── auth/        # Авторизация
│
└── 📚 docs/             # Документация
    ├── README.md
    ├── START_HERE.md
    ├── STRUCTURE.md
    ├── DEPLOYMENT.md
    └── PROJECT_SUMMARY.md
```

---

## 🎨 Дизайн

### Цвета
```css
🌑 Фон:          #0b0f17 (темно-синий)
📦 Карточки:     #0f1420
🔵 Акцент:       #3b82f6 (синий)
💎 Акцент 2:     #06b6d4 (cyan)
📝 Текст:        #e6e8ec
```

### Особенности
- ✨ Градиенты
- 🌊 Blur эффекты
- 🎭 Анимации
- 📱 Responsive
- 🌙 Темная тема

---

## 🔄 Redux Slices

### 1️⃣ Services
```typescript
// Управление услугами
{
  services: Service[],
  selectedCategory: string | null,
  isLoading: boolean
}
```

### 2️⃣ Navigation
```typescript
// Меню и навигация
{
  isMobileMenuOpen: boolean,
  activeSubmenu: string | null,
  currentPage: string
}
```

### 3️⃣ Cart
```typescript
// Корзина заказов
{
  items: CartItem[],
  total: number,
  isOpen: boolean
}
```

### 4️⃣ Auth
```typescript
// Аутентификация
{
  user: User | null,
  isAuthenticated: boolean,
  isLoading: boolean
}
```

---

## 📄 Страницы

| Страница | Путь | Описание |
|----------|------|----------|
| **Главная** | `/` | Hero, услуги, о компании |
| **Услуги** | `/services` | Каталог услуг |
| **Портфолио** | `/portfolio` | Примеры работ |
| **Блог** | `/blog` | Статьи и советы |
| **О нас** | `/about` | Миссия, оборудование |
| **Контакты** | `/contacts` | Контакты, форма |
| **Кабинет** | `/account` | Заказы, профиль |

---

## 🚀 Быстрый старт

```bash
# 1. Установка
npm install

# 2. Запуск dev
npm run dev

# 3. Открыть
http://localhost:3000

# 4. Сборка
npm run build
```

---

## 💡 Ключевые фичи

### ✅ Технические
- Server Components (по умолчанию)
- Client Components ('use client')
- Redux для состояния
- TypeScript типизация
- Абсолютные импорты (@/*)

### ✅ UX/UI
- Современный дизайн
- Анимации и эффекты
- Мобильная адаптация
- Темная тема
- Интуитивная навигация

### ✅ Performance
- Next.js оптимизация
- Lazy loading
- Code splitting
- Кэширование

---

## 📚 Документация

| Файл | Для кого | Содержание |
|------|----------|-----------|
| **README.md** | Разработчики | Полная документация |
| **START_HERE.md** | Новички | Быстрый старт |
| **STRUCTURE.md** | Архитекторы | Структура проекта |
| **DEPLOYMENT.md** | DevOps | Развертывание |
| **PROJECT_SUMMARY.md** | Менеджеры | Итоговый отчет |
| **OVERVIEW.md** | Все | Краткий обзор (этот файл) |

---

## 🎯 Использование Redux

### Получение данных
```typescript
import { useAppSelector } from '@/lib/store';

const { services } = useAppSelector(state => state.services);
const { isAuthenticated } = useAppSelector(state => state.auth);
```

### Изменение данных
```typescript
import { useAppDispatch } from '@/lib/store';
import { toggleMobileMenu } from '@/lib/features/navigation/navigationSlice';

const dispatch = useAppDispatch();
dispatch(toggleMobileMenu());
```

---

## 🧩 Создание компонента

```tsx
// components/MyComponent.tsx
'use client';

import { useAppSelector } from '@/lib/store';

export default function MyComponent() {
  const data = useAppSelector(state => state.mySlice);
  
  return (
    <div className="bg-gray-900 rounded-2xl p-6">
      <h3 className="text-xl font-bold">
        Мой компонент
      </h3>
    </div>
  );
}
```

---

## 📦 Зависимости

```json
{
  "next": "15.5.6",              // Framework
  "react": "19.1.0",             // UI Library
  "@reduxjs/toolkit": "^2.9.1",  // State Management
  "tailwindcss": "^4",           // Styling
  "typescript": "^5"             // Types
}
```

---

## 🌐 Развертывание

### Vercel (рекомендуется)
```bash
# Автоматическое развертывание из Git
vercel --prod
```

### Docker
```bash
docker-compose up -d
```

### VPS
```bash
npm run build
pm2 start npm --name "printcore" -- start
```

---

## 📊 Статистика

- **Страниц**: 7
- **Компонентов**: 3
- **Redux Slices**: 4
- **Строк кода**: ~3500+
- **Файлов**: 20+
- **Технологий**: 5 (Next.js, React, Redux, TypeScript, Tailwind)

---

## 🎓 Архитектурные решения

### 1. App Router (Next.js 15)
File-based routing для простоты структуры

### 2. Redux Toolkit
Flux архитектура для предсказуемого состояния

### 3. TypeScript
Строгая типизация для надежности

### 4. Tailwind CSS
Utility-first для быстрой разработки

### 5. Server Components
По умолчанию для лучшей производительности

---

## 🔮 Будущие улучшения

- [ ] API интеграция
- [ ] Формы с валидацией
- [ ] Тесты (Jest, RTL)
- [ ] Storybook
- [ ] i18n (мультиязычность)
- [ ] Payment integration
- [ ] Image optimization
- [ ] PWA support

---

## 📞 Контакты

**PrintCore Типография**

- 📍 Пр. Дзержинского 3Б, Минск
- 📞 +375 33 336 5678
- 📧 info@printcore.by
- 💬 https://t.me/+375333365678

---

## 🏆 Заключение

PrintCore Website - это:
- ✅ Современный стек технологий
- ✅ Flux архитектура с Redux
- ✅ Продуманная структура
- ✅ Полная документация
- ✅ Готов к production

### 🚀 Готов к использованию!

---

**Разработано с ❤️ для PrintCore**

© 2024 PrintCore. Все права защищены.

