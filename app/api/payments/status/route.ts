import { NextRequest, NextResponse } from 'next/server';
import { bepaidClient } from '@/lib/api/bepaidClient';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const uid = searchParams.get('uid');

    if (!uid) {
      return NextResponse.json(
        { error: 'Отсутствует UID платежа' },
        { status: 400 }
      );
    }

    // Получаем статус платежа из BePaid
    const paymentStatus = await bepaidClient.getPaymentStatus(uid);

    return NextResponse.json({
      success: true,
      status: paymentStatus.transaction.status,
      amount: paymentStatus.transaction.amount,
      currency: paymentStatus.transaction.currency,
      tracking_id: paymentStatus.transaction.tracking_id,
      test: paymentStatus.transaction.test,
    });

  } catch (error) {
    console.error('Payment status check error:', error);
    return NextResponse.json(
      { 
        error: 'Ошибка при проверке статуса платежа',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

