'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store';
import { removeFromCart, updateQuantity, clearCart } from '@/lib/features/cart/cartSlice';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { items, total } = useAppSelector((state) => state.cart);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      if (confirm('Удалить товар из корзины?')) {
        dispatch(removeFromCart(id));
      }
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      // Перенаправляем на страницу входа с возвратом на оформление заказа
      router.push('/login?redirect=/checkout');
    } else {
      // Перенаправляем на оформление заказа
      router.push('/checkout');
    }
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-400">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Корзина</span>
          </nav>

          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              🛒 Корзина
            </h1>
            <p className="text-gray-400">
              {items.length === 0 
                ? 'Ваша корзина пуста' 
                : `В корзине ${items.length} ${items.length === 1 ? 'товар' : items.length < 5 ? 'товара' : 'товаров'}`
              }
            </p>
          </div>

          {items.length === 0 ? (
            /* Пустая корзина */
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-6 opacity-30">🛒</div>
              <h2 className="text-2xl font-bold mb-3">Корзина пуста</h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Добавьте товары из каталога, чтобы оформить заказ
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/services"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all inline-block"
                >
                  Перейти к услугам
                </Link>
                <Link
                  href="/account/favorites"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold transition-all inline-block border border-gray-700"
                >
                  ❤️ Избранное
                </Link>
              </div>
            </div>
          ) : (
            /* Корзина с товарами */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Список товаров */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all"
                  >
                    <div className="flex gap-6">
                      {/* Изображение */}
                      {item.image ? (
                        <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-800">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center text-3xl">
                          📦
                        </div>
                      )}

                      {/* Информация о товаре */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        
                        {/* Опции */}
                        {item.options && Object.keys(item.options).length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {Object.entries(item.options).map(([key, value]) => (
                              <span
                                key={key}
                                className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full"
                              >
                                {key}: {String(value)}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Цена и количество */}
                        <div className="flex items-center gap-6 flex-wrap">
                          {/* Управление количеством */}
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-400">Количество:</span>
                            <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                                aria-label="Уменьшить количество"
                              >
                                −
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                className="w-16 text-center bg-transparent border-none text-white font-semibold"
                                min="1"
                              />
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                                aria-label="Увеличить количество"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Цена */}
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">Цена:</span>
                            <span className="text-lg font-bold text-blue-400">
                              {item.price.toFixed(2)} BYN
                            </span>
                          </div>

                          {/* Итого за товар */}
                          <div className="flex items-center gap-2 ml-auto">
                            <span className="text-sm text-gray-400">Итого:</span>
                            <span className="text-xl font-bold text-blue-400">
                              {(item.price * item.quantity).toFixed(2)} BYN
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Кнопка удаления */}
                      <button
                        onClick={() => {
                          if (confirm('Удалить товар из корзины?')) {
                            dispatch(removeFromCart(item.id));
                          }
                        }}
                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                        aria-label="Удалить товар"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}

                {/* Кнопка очистить корзину */}
                <button
                  onClick={() => {
                    if (confirm('Очистить всю корзину?')) {
                      dispatch(clearCart());
                    }
                  }}
                  className="w-full bg-gray-900 hover:bg-red-500/10 border border-gray-800 hover:border-red-500/50 text-red-400 px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Очистить корзину
                </button>
              </div>

              {/* Итого и оформление */}
              <div className="lg:col-span-1">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Итого</h2>

                  {/* Расчеты */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-400">
                      <span>Товары ({items.length}):</span>
                      <span className="font-semibold">{total.toFixed(2)} BYN</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Доставка:</span>
                      <span className="font-semibold">Рассчитается при оформлении</span>
                    </div>
                    <div className="h-px bg-gray-800"></div>
                    <div className="flex justify-between text-xl font-bold">
                      <span>Итого:</span>
                      <span className="text-blue-400">{total.toFixed(2)} BYN</span>
                    </div>
                  </div>

                  {/* Кнопки */}
                  <div className="space-y-3">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-4 rounded-xl font-bold transition-all"
                    >
                      {isAuthenticated ? 'Оформить заказ' : 'Войти и оформить'}
                    </button>
                    <Link
                      href="/services"
                      className="block w-full bg-transparent hover:bg-gray-800 border border-gray-700 hover:border-gray-600 text-white text-center px-6 py-3 rounded-xl font-semibold transition-all"
                    >
                      Продолжить покупки
                    </Link>
                  </div>

                  {/* Информация */}
                  <div className="mt-6 pt-6 border-t border-gray-800 space-y-3 text-sm text-gray-400">
                    <div className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Быстрое оформление заказа</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Гарантия качества</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Доставка по всей Беларуси</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Рекомендации */}
          {items.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Вам может понравиться</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/services/photo"
                  className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all group"
                >
                  <div className="text-4xl mb-3">📸</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    Фотопечать
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Профессиональная печать фотографий
                  </p>
                </Link>
                
                <Link
                  href="/services/poligrafy"
                  className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all group"
                >
                  <div className="text-4xl mb-3">📄</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    Полиграфия
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Визитки, листовки и буклеты
                  </p>
                </Link>
                
                <Link
                  href="/services/wide-format"
                  className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all group"
                >
                  <div className="text-4xl mb-3">📐</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    Широкоформатная печать
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Баннеры и плакаты больших размеров
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}



