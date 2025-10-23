'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PaymentFailedPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderId, setOrderId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const orderIdFromUrl = searchParams.get('order_id');
    const error = searchParams.get('error');
    
    if (orderIdFromUrl) {
      setOrderId(orderIdFromUrl);
    }

    if (error) {
      setErrorMessage(error);
    }
  }, [searchParams]);

  const handleRetry = () => {
    // Перенаправляем обратно на оформление заказа
    router.push('/checkout');
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Ошибка оплаты */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
              {/* Иконка ошибки */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-5xl">
                ✕
              </div>

              {/* Заголовок */}
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Оплата не прошла
              </h1>

              <p className="text-gray-400 mb-8 text-lg">
                К сожалению, платеж не был завершен. Попробуйте еще раз или выберите другой способ оплаты.
              </p>

              {/* Информация об ошибке */}
              {(orderId || errorMessage) && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8 text-left">
                  <h2 className="font-semibold mb-3 text-center text-red-400">Детали ошибки</h2>
                  <div className="space-y-2">
                    {orderId && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Номер заказа:</span>
                        <span className="font-mono font-semibold text-red-400">{orderId}</span>
                      </div>
                    )}
                    {errorMessage && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Причина:</span>
                        <span className="font-semibold text-red-400">{errorMessage}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-400">Статус:</span>
                      <span className="font-semibold text-red-400">Отклонен</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Возможные причины */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold mb-3 text-gray-300">🤔 Возможные причины:</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">•</span>
                    <span>Недостаточно средств на карте</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">•</span>
                    <span>Карта заблокирована или просрочена</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">•</span>
                    <span>Неверно введены данные карты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">•</span>
                    <span>Превышен лимит операций по карте</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">•</span>
                    <span>Технические проблемы на стороне банка</span>
                  </li>
                </ul>
              </div>

              {/* Что делать */}
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold mb-3 text-blue-400">💡 Что делать?</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">1.</span>
                    <span>Проверьте данные карты и попробуйте снова</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">2.</span>
                    <span>Используйте другую карту</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">3.</span>
                    <span>Свяжитесь с банком для уточнения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">4.</span>
                    <span>Выберите оплату при получении</span>
                  </li>
                </ul>
              </div>

              {/* Кнопки действий */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRetry}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all"
                >
                  Попробовать снова
                </button>
                <Link
                  href="/cart"
                  className="bg-transparent hover:bg-gray-800 border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all inline-block"
                >
                  Вернуться в корзину
                </Link>
              </div>

              {/* Альтернативы */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-400 text-sm mb-4">
                  Или выберите альтернативный способ оплаты:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      router.push('/checkout');
                    }}
                    className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-6 py-2 rounded-lg transition-all"
                  >
                    💵 Оплата при получении
                  </button>
                </div>
              </div>

              {/* Контактная информация */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-400 text-sm mb-3">
                  Нужна помощь? Свяжитесь с нами:
                </p>
                <div className="flex flex-wrap gap-4 justify-center text-sm">
                  <a
                    href="tel:+375291234567"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    📞 +375 29 123-45-67
                  </a>
                  <a
                    href="mailto:info@printcore.by"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    ✉️ info@printcore.by
                  </a>
                  <a
                    href="https://t.me/printcore_support"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    💬 Telegram
                  </a>
                </div>
              </div>
            </div>

            {/* Популярные услуги */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Пока вы здесь, посмотрите наши услуги</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/services/photo"
                  className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-4 transition-all group text-center"
                >
                  <div className="text-3xl mb-2">📸</div>
                  <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                    Фотопечать
                  </h3>
                </Link>
                
                <Link
                  href="/services/poligrafy"
                  className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-4 transition-all group text-center"
                >
                  <div className="text-3xl mb-2">📄</div>
                  <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                    Полиграфия
                  </h3>
                </Link>
                
                <Link
                  href="/services/wide-format"
                  className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-4 transition-all group text-center"
                >
                  <div className="text-3xl mb-2">📐</div>
                  <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                    Широкоформат
                  </h3>
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

