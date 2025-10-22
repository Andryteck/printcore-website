'use client';

import { useAppSelector } from '@/lib/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/ProtectedRoute';
import FavoriteButton from '@/components/FavoriteButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function FavoritesContent() {
  const router = useRouter();
  const { items: favorites } = useAppSelector((state) => state.favorites);
  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return (
      <>
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-400">Загрузка данных...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-400">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/account" className="hover:text-blue-400">Личный кабинет</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Избранное</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold">❤️ Избранное</h1>
              <button
                onClick={() => router.back()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Назад
              </button>
            </div>
            <p className="text-gray-400">
              Здесь хранятся ваши любимые услуги для быстрого доступа
            </p>
          </div>

          {/* Favorites Grid */}
          {favorites.length === 0 ? (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">💔</div>
              <h2 className="text-2xl font-bold mb-3">Избранное пусто</h2>
              <p className="text-gray-400 mb-6">
                Добавьте услуги в избранное, чтобы быстро находить их позже
              </p>
              <Link
                href="/services"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all"
              >
                Смотреть услуги
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6 text-sm text-gray-400">
                Найдено услуг: <span className="text-white font-semibold">{favorites.length}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((service) => (
                  <div
                    key={service.id}
                    className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all"
                  >
                    {/* Image */}
                    <Link href={`/services/${service.category}`} className="block">
                      {service.image ? (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                        </div>
                      ) : (
                        <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center">
                          <div className="text-6xl opacity-50">📄</div>
                        </div>
                      )}
                    </Link>

                    {/* Favorite Button */}
                    <div className="absolute top-4 right-4 z-10">
                      <FavoriteButton service={service} size="medium" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <Link href={`/services/${service.category}`}>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                      </Link>
                      
                      {service.description && (
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {service.description}
                        </p>
                      )}

                      {service.price && (
                        <div className="mb-4">
                          <span className="text-sm text-gray-500">от</span>
                          <span className="text-2xl font-bold text-blue-400 ml-2">
                            {service.price} BYN
                          </span>
                        </div>
                      )}

                      <Link
                        href={`/services/${service.category}`}
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-xl font-semibold transition-all"
                      >
                        Заказать
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Quick Actions */}
          {favorites.length > 0 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/services"
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🔍</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">
                      Смотреть все услуги
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Откройте для себя больше услуг
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/account"
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">👤</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">
                      Личный кабинет
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Управление заказами и профилем
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function FavoritesPage() {
  return (
    <ProtectedRoute>
      <FavoritesContent />
    </ProtectedRoute>
  );
}

