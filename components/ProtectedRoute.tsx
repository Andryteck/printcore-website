'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { initializeAuth } from '@/lib/features/auth/authSlice';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, isInitialized, isLoading } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // Инициализация авторизации при первой загрузке
    if (!isInitialized) {
      dispatch(initializeAuth());
    }
  }, [dispatch, isInitialized]);

  useEffect(() => {
    // Редирект на login если не авторизован и инициализация завершена
    if (isInitialized && !isAuthenticated && !isLoading) {
      router.push('/login');
    }
  }, [isAuthenticated, isInitialized, isLoading, router]);

  // Показываем загрузку пока идет инициализация
  if (!isInitialized || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-400">Загрузка...</p>
        </div>
      </div>
    );
  }

  // Если не авторизован - показываем пустой экран (редирект произойдет)
  if (!isAuthenticated) {
    return null;
  }

  // Если авторизован - показываем контент
  return <>{children}</>;
}

