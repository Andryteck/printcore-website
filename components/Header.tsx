'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store';
import { toggleMobileMenu } from '@/lib/features/navigation/navigationSlice';
import Link from 'next/link';

export default function Header() {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector((state) => state.navigation);
  const { items } = useAppSelector((state) => state.cart);
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/85 border-b border-gray-800">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/80 transition-shadow" />
            <span className="text-2xl font-bold text-white">
              Print<span className="font-light text-gray-300">Core</span>
            </span>
          </Link>

          {/* Контактная информация (скрыта на планшетах) */}
          <div className="hidden xl:flex flex-col text-sm">
            <span className="text-gray-300 font-semibold">
              <i className="mr-2">📍</i>
              Пр. Дзержинского 3Б
            </span>
            <span className="text-gray-300 font-semibold">
              <i className="mr-2">📞</i>
              +375 33 336 5678
            </span>
          </div>

          {/* Навигация (десктоп) */}
          <ul className="hidden lg:flex items-center gap-6">
            <li>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Портфолио
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Контакты
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <Link
                  href="/account"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/30"
                >
                  <span>👤</span>
                  <span>{user?.name?.split(' ')[0] || 'Кабинет'}</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/30"
                >
                  Войти
                </Link>
              )}
            </li>
          </ul>

          {/* Бургер-меню */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Меню"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 shadow-xl">
          <ul className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <li>
              <Link
                href="/services"
                className="block text-gray-300 hover:text-white transition-colors px-4 py-3 rounded-lg hover:bg-gray-800"
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="block text-gray-300 hover:text-white transition-colors px-4 py-3 rounded-lg hover:bg-gray-800"
              >
                Портфолио
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block text-gray-300 hover:text-white transition-colors px-4 py-3 rounded-lg hover:bg-gray-800"
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors px-4 py-3 rounded-lg hover:bg-gray-800"
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="block text-gray-300 hover:text-white transition-colors px-4 py-3 rounded-lg hover:bg-gray-800"
              >
                Контакты
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <Link
                  href="/account"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold"
                >
                  <span>👤</span>
                  <span>{user?.name?.split(' ')[0] || 'Кабинет'}</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="block bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center px-6 py-3 rounded-full font-semibold"
                >
                  Войти
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

