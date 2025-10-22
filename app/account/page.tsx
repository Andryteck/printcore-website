'use client';

import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { logoutUser } from '@/lib/features/auth/authSlice';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/ProtectedRoute';
import EditProfileModal from '@/components/EditProfileModal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function AccountContent() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // ProtectedRoute уже проверил авторизацию, поэтому user точно есть
  // Но добавим проверку на всякий случай
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

  // Mock данные для заказов
  const orders = [
    {
      id: '12345',
      title: 'Визитки 500 шт',
      status: 'В работе',
      statusColor: 'blue',
      date: '18 марта 2024',
      price: 25,
    },
    {
      id: '12344',
      title: 'Флаеры А5 1000 шт',
      status: 'Готов к выдаче',
      statusColor: 'green',
      date: '15 марта 2024',
      price: 45,
    },
    {
      id: '12343',
      title: 'Баннер 3x2м',
      status: 'Выполнен',
      statusColor: 'gray',
      date: '10 марта 2024',
      price: 120,
    },
  ];

  return (
    <>
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Добро пожаловать, {user?.name}!
                </h1>
                <p className="text-white/80">
                  Управляйте своими заказами и настройками
                </p>
              </div>
              <div className="hidden md:block text-6xl">
                👤
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sticky top-24">
                <nav className="space-y-2">
                  <button className="w-full text-left px-4 py-3 rounded-xl bg-blue-500/10 text-blue-400 font-semibold">
                    📦 Мои заказы
                  </button>
                  <Link
                    href="/cart"
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 text-gray-300 transition-colors block"
                  >
                    🛒 Корзина
                  </Link>
                  <Link
                    href="/account/favorites"
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 text-gray-300 transition-colors block"
                  >
                    ❤️ Избранное
                  </Link>
                  <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 text-gray-300 transition-colors">
                    👤 Профиль
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 text-gray-300 transition-colors">
                    📁 Мои файлы
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 text-gray-300 transition-colors">
                    📊 История
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 text-gray-300 transition-colors">
                    ⚙️ Настройки
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-400 transition-colors"
                  >
                    🚪 Выйти
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <div className="text-3xl mb-2">📦</div>
                  <div className="text-2xl font-bold mb-1">3</div>
                  <div className="text-gray-400 text-sm">Активных заказа</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <div className="text-3xl mb-2">✅</div>
                  <div className="text-2xl font-bold mb-1">12</div>
                  <div className="text-gray-400 text-sm">Выполнено</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="text-2xl font-bold mb-1">190 BYN</div>
                  <div className="text-gray-400 text-sm">Всего потрачено</div>
                </div>
              </div>

              {/* Active Orders */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Мои заказы</h2>
                  <Link
                    href="/services"
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
                  >
                    + Новый заказ
                  </Link>
                </div>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-blue-500/50 transition-all"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">
                            Заказ #{order.id}
                          </div>
                          <h3 className="text-lg font-bold">{order.title}</h3>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.statusColor === 'blue'
                              ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                              : order.statusColor === 'green'
                              ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                              : 'bg-gray-700 text-gray-400'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="text-gray-400">
                          <span>Дата: {order.date}</span>
                          <span className="mx-2">•</span>
                          <span className="text-white font-semibold">
                            {order.price} BYN
                          </span>
                        </div>
                        <button className="text-blue-400 hover:text-blue-300 font-semibold">
                          Подробнее →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services"
                  className="group bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 hover:from-blue-700 hover:to-cyan-600 transition-all"
                >
                  <div className="text-4xl mb-3">➕</div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    Новый заказ
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    Оформить печать продукции
                  </p>
                  <span className="text-white font-semibold group-hover:translate-x-1 inline-block transition-transform">
                    Перейти →
                  </span>
                </Link>

                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all cursor-pointer">
                  <div className="text-4xl mb-3">📁</div>
                  <h3 className="font-bold text-lg mb-2">Загрузить файл</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Добавить макет для печати
                  </p>
                  <span className="text-blue-400 font-semibold">
                    Выбрать файл →
                  </span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6">Профиль</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      {user?.userType === 'legal' ? 'Название организации' : 'Имя'}
                    </label>
                    <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl">
                      {user?.name}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Email
                    </label>
                    <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl">
                      {user?.email}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Телефон
                    </label>
                    <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl">
                      {user?.phone || 'Не указан'}
                    </div>
                  </div>
                  
                  {/* УНП - только для юридических лиц */}
                  {user?.userType === 'legal' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        УНП
                      </label>
                      <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl">
                        {user?.unp || 'Не указан'}
                      </div>
                    </div>
                  )}
                </div>

                {/* Юридический адрес и банковские реквизиты - только для юридических лиц */}
                {user?.userType === 'legal' && (
                  <>
                    <div className="mt-8 mb-4">
                      <h3 className="text-xl font-bold text-blue-400">Юридическая информация</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-2">
                          Юридический адрес
                        </label>
                        <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl">
                          {user?.legalAddress || 'Не указан'}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 mb-4">
                      <h3 className="text-xl font-bold text-blue-400">Банковские реквизиты</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-2">
                          Название банка
                        </label>
                        <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl">
                          {user?.bankName || 'Не указан'}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-2">
                          БИК банка
                        </label>
                        <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl">
                          {user?.bankCode || 'Не указан'}
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-400 mb-2">
                          Расчетный счет
                        </label>
                        <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl font-mono text-sm">
                          {user?.bankAccount || 'Не указан'}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-6">
                  <button 
                    onClick={() => setIsEditModalOpen(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                  >
                    Редактировать профиль
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Edit Profile Modal */}
      <EditProfileModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </>
  );
}

export default function AccountPage() {
  return (
    <ProtectedRoute>
      <AccountContent />
    </ProtectedRoute>
  );
}
