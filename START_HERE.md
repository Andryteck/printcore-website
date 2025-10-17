# 🚀 Быстрый старт - PrintCore Website

## Первые шаги

### 1️⃣ Установка зависимостей

```bash
cd printcore_website
npm install
```

### 2️⃣ Запуск dev-сервера

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### 3️⃣ Структура проекта

```
printcore_website/
├── app/          # Страницы (Next.js App Router)
├── components/   # React компоненты
├── lib/          # Redux Store и Slices
└── public/       # Статические файлы
```

## 📄 Основные файлы

### Главная страница
📁 `app/page.tsx`
- Hero секция
- Услуги
- О компании
- Преимущества

### Redux Store
📁 `lib/store.ts`
```typescript
import { useAppDispatch, useAppSelector } from '@/lib/store';

// В компоненте
const dispatch = useAppDispatch();
const { services } = useAppSelector(state => state.services);
```

### Компоненты
- `components/Header.tsx` - Шапка с навигацией
- `components/Footer.tsx` - Подвал
- `components/ServiceCard.tsx` - Карточка услуги

## 🎨 Как изменить дизайн?

### Цвета (app/globals.css)
```css
:root {
  --accent: #3b82f6;    /* Основной акцент */
  --accent-2: #06b6d4;  /* Второй акцент */
  --bg: #0b0f17;        /* Фон */
}
```

### Стили компонентов
Используйте Tailwind CSS классы:
```tsx
<div className="bg-gray-900 rounded-2xl p-6">
  <h2 className="text-2xl font-bold">Заголовок</h2>
</div>
```

## 🔄 Redux (Flux архитектура)

### Services Slice
Управление услугами:
```typescript
import { setSelectedCategory } from '@/lib/features/services/servicesSlice';

dispatch(setSelectedCategory('digital'));
```

### Navigation Slice
Мобильное меню:
```typescript
import { toggleMobileMenu } from '@/lib/features/navigation/navigationSlice';

dispatch(toggleMobileMenu());
```

### Cart Slice
Корзина:
```typescript
import { addToCart } from '@/lib/features/cart/cartSlice';

dispatch(addToCart({
  id: '1',
  serviceId: 'digital-print',
  title: 'Цифровая печать',
  quantity: 100,
  price: 50
}));
```

### Auth Slice
Авторизация:
```typescript
import { loginSuccess } from '@/lib/features/auth/authSlice';

dispatch(loginSuccess({
  id: '1',
  email: 'user@example.com',
  name: 'Иван'
}));
```

## 📁 Добавить новую страницу

1. Создайте папку в `app/`
2. Добавьте `page.tsx`:

```tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Новая страница
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

3. Страница доступна по `/new-page`

## 🧩 Добавить новый компонент

```tsx
// components/MyComponent.tsx
'use client';

export default function MyComponent() {
  return (
    <div className="bg-gray-900 rounded-2xl p-6">
      <h3 className="text-xl font-bold">Мой компонент</h3>
    </div>
  );
}
```

Импортируйте в страницу:
```tsx
import MyComponent from '@/components/MyComponent';
```

## 🎯 Redux Slice (новый)

```typescript
// lib/features/myFeature/mySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyState {
  value: number;
}

const initialState: MyState = {
  value: 0,
};

const mySlice = createSlice({
  name: 'myFeature',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, setValue } = mySlice.actions;
export default mySlice.reducer;
```

Добавьте в store:
```typescript
// lib/store.ts
import myReducer from './features/myFeature/mySlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      // ...другие редюсеры
      myFeature: myReducer,
    },
  });
};
```

## 🛠️ Полезные команды

```bash
# Разработка
npm run dev

# Проверка типов
npx tsc --noEmit

# Сборка
npm run build

# Запуск production
npm start
```

## 📚 Документация

- **Next.js 15**: https://nextjs.org/docs
- **Redux Toolkit**: https://redux-toolkit.js.org
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

## ❓ Частые вопросы

### Как использовать Redux в компоненте?

```tsx
'use client';

import { useAppSelector, useAppDispatch } from '@/lib/store';
import { increment } from '@/lib/features/myFeature/mySlice';

export default function Counter() {
  const value = useAppSelector(state => state.myFeature.value);
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      Счет: {value}
    </button>
  );
}
```

### Как сделать компонент Client-Side?

Добавьте `'use client';` в начало файла:
```tsx
'use client';

import { useState } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);
  // ...
}
```

### Как использовать абсолютные импорты?

```typescript
// ✅ Правильно
import Header from '@/components/Header';
import { useAppSelector } from '@/lib/store';

// ❌ Неправильно
import Header from '../../components/Header';
```

## 🎯 Следующие шаги

1. ✅ Изучите структуру проекта
2. ✅ Запустите dev-сервер
3. ✅ Откройте страницы в браузере
4. ✅ Поэкспериментируйте с Redux
5. ✅ Измените стили
6. ✅ Создайте свой компонент
7. ✅ Добавьте новую страницу

## 💡 Подсказки

- **Server Components** используются по умолчанию (быстрее)
- **Client Components** нужны для интерактивности (`'use client'`)
- **Redux** подключен через Provider в `app/layout.tsx`
- **Стили** в Tailwind CSS (utility-first)
- **Типизация** TypeScript (строгая)

## 📞 Нужна помощь?

- Читайте README.md
- Смотрите STRUCTURE.md
- Изучайте примеры кода в компонентах

---

**Успехов в разработке! 🚀**

PrintCore Website - Next.js 15 + Redux Toolkit

