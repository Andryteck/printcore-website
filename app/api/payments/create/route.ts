import { NextRequest, NextResponse } from 'next/server';
import { bepaidClient, BePaidPaymentRequest } from '@/lib/api/bepaidClient';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Валидация данных
    if (!body.amount || !body.currency || !body.description || !body.customer) {
      return NextResponse.json(
        { error: 'Отсутствуют обязательные поля' },
        { status: 400 }
      );
    }

    // Генерируем уникальный ID заказа
    const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Формируем URL для возврата
    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:3000';
    
    const paymentData: BePaidPaymentRequest = {
      amount: Math.round(body.amount * 100), // Конвертируем в копейки
      currency: body.currency || 'BYN',
      description: body.description,
      order_id: orderId,
      customer: {
        email: body.customer.email,
        first_name: body.customer.first_name,
        last_name: body.customer.last_name,
        phone: body.customer.phone,
      },
      success_url: `${baseUrl}/payment/success?order_id=${orderId}`,
      fail_url: `${baseUrl}/payment/failed?order_id=${orderId}`,
      notification_url: `${baseUrl}/api/payments/webhook`,
      test: true, // Тестовый режим
    };

    // Создаем платеж через BePaid
    const paymentResponse = await bepaidClient.createPayment(paymentData);

    return NextResponse.json({
      success: true,
      orderId,
      checkoutUrl: paymentResponse.checkout.redirect_url,
      token: paymentResponse.checkout.token,
    });

  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { 
        error: 'Ошибка при создании платежа',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

