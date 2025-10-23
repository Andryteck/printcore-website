'use client';

import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import axios from 'axios';
import { clearCart } from '@/lib/features/cart/cartSlice';

interface CustomerData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  comment?: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const [customerData, setCustomerData] = useState<CustomerData>({
    email: user?.email || '',
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    phone: user?.phone || '',
    comment: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cash'>('online');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  // Перенаправляем на страницу входа если не авторизован
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login?redirect=/checkout');
    }
  }, [isAuthenticated, router]);

  // Перенаправляем в корзину если она пустая
  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart');
    }
  }, [items, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!customerData.email || !customerData.firstName || !customerData.phone) {
      setError('Пожалуйста, заполните все обязательные поля');
      return false;
    }

    // Простая валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerData.email)) {
      setError('Пожалуйста, введите корректный email');
      return false;
    }

    // Простая валидация телефона
    const phoneRegex = /^\+?[0-9\s\-\(\)]{9,}$/;
    if (!phoneRegex.test(customerData.phone)) {
      setError('Пожалуйста, введите корректный номер телефона');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      if (paymentMethod === 'online') {
        // Создаем платеж через BePaid
        const response = await axios.post('/api/payments/create', {
          amount: total,
          currency: 'BYN',
          description: `Заказ PrintCore (${items.length} товаров)`,
          customer: {
            email: customerData.email,
            first_name: customerData.firstName,
            last_name: customerData.lastName,
            phone: customerData.phone,
          },
          items: items.map(item => ({
            name: item.title,
            quantity: item.quantity,
            price: item.price,
          })),
          comment: customerData.comment,
        });

        if (response.data.success) {
          // Сохраняем ID заказа для отслеживания
          localStorage.setItem('currentOrderId', response.data.orderId);
          
          // Очищаем корзину
          dispatch(clearCart());
          
          // Перенаправляем на страницу оплаты BePaid
          window.location.href = response.data.checkoutUrl;
        } else {
          setError('Ошибка при создании платежа. Попробуйте еще раз.');
        }
      } else {
        // Оплата наличными - создаем заказ без оплаты
        // Здесь должна быть логика сохранения заказа в БД
        console.log('Создан заказ с оплатой наличными:', {
          customer: customerData,
          items,
          total,
        });
        
        // Очищаем корзину
        dispatch(clearCart());
        
        // Перенаправляем на страницу успеха
        router.push('/payment/success?method=cash');
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError('Произошла ошибка при оформлении заказа. Попробуйте еще раз.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isAuthenticated || items.length === 0) {
    return null;
  }

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-400">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/cart" className="hover:text-blue-400">Корзина</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Оформление заказа</span>
          </nav>

          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              📦 Оформление заказа
            </h1>
            <p className="text-gray-400">
              Заполните контактную информацию и выберите способ оплаты
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Форма оформления */}
            <div className="lg:col-span-2 space-y-6">
              {/* Ошибки */}
              {error && (
                <div className="bg-red-500/10 border border-red-500 text-red-400 px-6 py-4 rounded-xl">
                  ⚠️ {error}
                </div>
              )}

              {/* Контактная информация */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Имя *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={customerData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Иван"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Фамилия
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={customerData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Иванов"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={customerData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="ivan@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+375 29 123-45-67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Комментарий к заказу
                    </label>
                    <textarea
                      name="comment"
                      value={customerData.comment}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Дополнительная информация о заказе"
                    />
                  </div>
                </div>
              </div>

              {/* Способ оплаты */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6">Способ оплаты</h2>
                
                <div className="space-y-3">
                  {/* Онлайн оплата */}
                  <label className={`block bg-gray-800 border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    paymentMethod === 'online' ? 'border-blue-500 bg-blue-500/5' : 'border-gray-700 hover:border-gray-600'
                  }`}>
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={paymentMethod === 'online'}
                        onChange={(e) => setPaymentMethod(e.target.value as 'online')}
                        className="w-5 h-5 text-blue-600"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-lg mb-1">💳 Онлайн оплата (BePaid)</div>
                        <div className="text-sm text-gray-400">
                          Оплата банковской картой через защищенный платежный шлюз
                        </div>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Visa</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Mastercard</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Белкарт</span>
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* Оплата наличными */}
                  <label className={`block bg-gray-800 border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    paymentMethod === 'cash' ? 'border-blue-500 bg-blue-500/5' : 'border-gray-700 hover:border-gray-600'
                  }`}>
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={(e) => setPaymentMethod(e.target.value as 'cash')}
                        className="w-5 h-5 text-blue-600"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-lg mb-1">💵 Оплата при получении</div>
                        <div className="text-sm text-gray-400">
                          Оплата наличными или картой при получении заказа
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Сводка заказа */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Ваш заказ</h2>

                {/* Список товаров */}
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 text-sm">
                      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-800 overflow-hidden">
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-lg">📦</div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium mb-1 truncate">{item.title}</div>
                        <div className="text-gray-400">
                          {item.price.toFixed(2)} BYN × {item.quantity}
                        </div>
                      </div>
                      <div className="font-semibold text-blue-400">
                        {(item.price * item.quantity).toFixed(2)} BYN
                      </div>
                    </div>
                  ))}
                </div>

                {/* Итого */}
                <div className="space-y-3 pt-6 border-t border-gray-800">
                  <div className="flex justify-between text-gray-400">
                    <span>Товары ({items.length}):</span>
                    <span className="font-semibold">{total.toFixed(2)} BYN</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Доставка:</span>
                    <span className="font-semibold">Уточнит менеджер</span>
                  </div>
                  <div className="h-px bg-gray-800"></div>
                  <div className="flex justify-between text-xl font-bold">
                    <span>Итого:</span>
                    <span className="text-blue-400">{total.toFixed(2)} BYN</span>
                  </div>
                </div>

                {/* Кнопка оформления */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl font-bold transition-all"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Обработка...
                    </span>
                  ) : paymentMethod === 'online' ? (
                    '💳 Перейти к оплате'
                  ) : (
                    '✓ Оформить заказ'
                  )}
                </button>

                {/* Информация */}
                <div className="mt-6 pt-6 border-t border-gray-800 space-y-3 text-sm text-gray-400">
                  <div className="flex items-start gap-2">
                    <span>🔒</span>
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Гарантия качества</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>📞</span>
                    <span>Поддержка 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

