import { NextRequest, NextResponse } from 'next/server';
import { bepaidClient } from '@/lib/api/bepaidClient';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const signature = request.headers.get('x-bepaid-signature');

    // Проверяем подпись (в production это обязательно!)
    if (signature && !bepaidClient.verifyWebhookSignature(body, signature)) {
      console.error('Invalid webhook signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 403 }
      );
    }

    // Обрабатываем уведомление о платеже
    const transaction = body.transaction;
    
    console.log('Payment webhook received:', {
      uid: transaction.uid,
      status: transaction.status,
      amount: transaction.amount,
      tracking_id: transaction.tracking_id,
      test: transaction.test,
    });

    // Здесь должна быть логика обновления статуса заказа в вашей БД
    // Например:
    // await updateOrderStatus(transaction.tracking_id, transaction.status);

    switch (transaction.status) {
      case 'successful':
        console.log(`✓ Payment successful for order ${transaction.tracking_id}`);
        // Обновляем статус заказа на "оплачен"
        break;
      
      case 'failed':
        console.log(`✗ Payment failed for order ${transaction.tracking_id}`);
        // Обновляем статус заказа на "ошибка оплаты"
        break;
      
      case 'pending':
        console.log(`⏳ Payment pending for order ${transaction.tracking_id}`);
        // Обновляем статус заказа на "ожидает оплаты"
        break;
      
      default:
        console.log(`Unknown status ${transaction.status} for order ${transaction.tracking_id}`);
    }

    // Возвращаем 200 OK, чтобы BePaid знал, что уведомление обработано
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

