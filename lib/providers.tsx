'use client';

import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { initializeAuth } from './features/auth/authSlice';
import { initializeFavorites } from './features/favorites/favoritesSlice';
import { initializeCart } from './features/cart/cartSlice';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    // Инициализация авторизации, избранного и корзины при загрузке приложения
    if (storeRef.current) {
      storeRef.current.dispatch(initializeAuth());
      storeRef.current.dispatch(initializeFavorites());
      storeRef.current.dispatch(initializeCart());
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
