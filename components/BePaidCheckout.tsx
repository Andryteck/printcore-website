'use client';

import { useState } from 'react';
import axios from 'axios';

interface BePaidCheckoutProps {
  amount: number;
  currency?: string;
  description: string;
  customer: {
    email: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
  };
  items?: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  onSuccess?: (orderId: string) => void;
  onError?: (error: string) => void;
  className?: string;
  buttonText?: string;
}

/**
 * Компонент для оплаты через BePaid
 * Создает платеж и перенаправляет пользователя на страницу оплаты
 */
export default function BePaidCheckout({
  amount,
  currency = 'BYN',
  description,
  customer,
  items,
  onSuccess,
  onError,
  className = '',
  buttonText = 'Оплатить',
}: BePaidCheckoutProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      // Валидация
      if (!customer.email) {
        throw new Error('Email обязателен для оплаты');
      }

      if (amount <= 0) {
        throw new Error('Сумма должна быть больше нуля');
      }

      // Создаем платеж
      const response = await axios.post('/api/payments/create', {
        amount,
        currency,
        description,
        customer,
        items,
      });

      if (response.data.success) {
        const { orderId, checkoutUrl } = response.data;
        
        // Сохраняем ID заказа
        localStorage.setItem('currentOrderId', orderId);
        
        // Вызываем колбэк успеха
        if (onSuccess) {
          onSuccess(orderId);
        }

        // Перенаправляем на страницу оплаты
        window.location.href = checkoutUrl;
      } else {
        throw new Error('Не удалось создать платеж');
      }
    } catch (error) {
      console.error('Payment error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Ошибка при создании платежа';
      
      if (onError) {
        onError(errorMessage);
      } else {
        alert(errorMessage);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isProcessing}
      className={className || 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold transition-all'}
    >
      {isProcessing ? (
        <span className="flex items-center justify-center gap-2">
          <span className="animate-spin">⏳</span>
          Обработка...
        </span>
      ) : (
        buttonText
      )}
    </button>
  );
}

