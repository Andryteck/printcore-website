'use client';

import { useAppSelector } from '@/lib/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AccountPage() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              {/* Вход */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Личный кабинет</h1>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold mb-2">
                      Пароль
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30 mb-4">
                  Войти
                </button>

                <div className="text-center">
                  <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                    Забыли пароль?
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                  <p className="text-gray-400 mb-4">Нет аккаунта?</p>
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all">
                    Зарегистрироваться
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // Личный кабинет (авторизован)
  return (
    <>
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Добро пожаловать, {user?.name || 'Пользователь'}!
            </h1>
            <p className="text-gray-400">Управляйте своими заказами и настройками аккаунта</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Меню */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <nav className="space-y-2">
                  <Link
                    href="/account"
                    className="block px-4 py-3 rounded-xl bg-blue-500/10 text-blue-400 font-semibold"
                  >
                    Мои заказы
                  </Link>
                  <Link
                    href="/account/profile"
                    className="block px-4 py-3 rounded-xl hover:bg-gray-800 text-gray-300 transition-colors"
                  >
                    Профиль
                  </Link>
                  <Link
                    href="/account/files"
                    className="block px-4 py-3 rounded-xl hover:bg-gray-800 text-gray-300 transition-colors"
                  >
                    Мои файлы
                  </Link>
                  <Link
                    href="/account/history"
                    className="block px-4 py-3 rounded-xl hover:bg-gray-800 text-gray-300 transition-colors"
                  >
                    История
                  </Link>
                  <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 text-red-400 transition-colors">
                    Выйти
                  </button>
                </nav>
              </div>
            </div>

            {/* Контент */}
            <div className="lg:col-span-2 space-y-6">
              {/* Активные заказы */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6">Активные заказы</h2>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-sm text-gray-400">Заказ #12345</span>
                        <h3 className="text-lg font-bold">Визитки 500 шт</h3>
                      </div>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold">
                        В работе
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      Готовность: 18 марта 2024
                    </p>
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Быстрые действия */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/services"
                  className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 hover:from-blue-700 hover:to-cyan-600 transition-all"
                >
                  <div className="text-4xl mb-2">➕</div>
                  <h3 className="font-bold text-white">Новый заказ</h3>
                  <p className="text-white/80 text-sm">Оформить печать</p>
                </Link>

                <Link
                  href="/account/files"
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all"
                >
                  <div className="text-4xl mb-2">📁</div>
                  <h3 className="font-bold">Загрузить файл</h3>
                  <p className="text-gray-400 text-sm">Добавить макет</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

