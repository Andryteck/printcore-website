'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderId, setOrderId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('online');

  useEffect(() => {
    const orderIdFromUrl = searchParams.get('order_id');
    const methodFromUrl = searchParams.get('method');
    
    if (orderIdFromUrl) {
      setOrderId(orderIdFromUrl);
    } else {
      // Пытаемся получить из localStorage
      const savedOrderId = localStorage.getItem('currentOrderId');
      if (savedOrderId) {
        setOrderId(savedOrderId);
        localStorage.removeItem('currentOrderId');
      }
    }

    if (methodFromUrl) {
      setPaymentMethod(methodFromUrl);
    }
  }, [searchParams]);

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Успешная оплата */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
              {/* Иконка успеха */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-5xl animate-bounce">
                ✓
              </div>

              {/* Заголовок */}
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                {paymentMethod === 'cash' ? 'Заказ оформлен!' : 'Оплата прошла успешно!'}
              </h1>

              <p className="text-gray-400 mb-8 text-lg">
                {paymentMethod === 'cash' 
                  ? 'Ваш заказ принят в обработку. Наш менеджер свяжется с вами в ближайшее время.'
                  : 'Ваш платеж обработан. Квитанция отправлена на указанный email.'
                }
              </p>

              {/* Информация о заказе */}
              {orderId && (
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-8 text-left">
                  <h2 className="font-semibold mb-3 text-center text-gray-400">Информация о заказе</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Номер заказа:</span>
                      <span className="font-mono font-semibold text-blue-400">{orderId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Способ оплаты:</span>
                      <span className="font-semibold">
                        {paymentMethod === 'cash' ? '💵 При получении' : '💳 Онлайн'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Статус:</span>
                      <span className="font-semibold text-green-400">
                        {paymentMethod === 'cash' ? 'Ожидает обработки' : 'Оплачен'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Что дальше */}
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold mb-3 text-blue-400">📋 Что дальше?</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">1.</span>
                    <span>Наш менеджер свяжется с вами для уточнения деталей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">2.</span>
                    <span>Мы приступим к выполнению вашего заказа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">3.</span>
                    <span>Вы получите уведомление о готовности заказа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">4.</span>
                    <span>Заберите заказ удобным для вас способом</span>
                  </li>
                </ul>
              </div>

              {/* Кнопки действий */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all inline-block"
                >
                  На главную
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent hover:bg-gray-800 border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all inline-block"
                >
                  К услугам
                </Link>
              </div>

              {/* Контактная информация */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-400 text-sm mb-3">
                  Возникли вопросы? Свяжитесь с нами:
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
                </div>
              </div>
            </div>

            {/* Рекомендации */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Может быть интересно</h2>
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

