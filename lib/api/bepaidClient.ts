import axios from 'axios';

// Интерфейсы для работы с BePaid API
export interface BePaidCustomer {
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
}

export interface BePaidOrderItem {
  name: string;
  quantity: number;
  unit_price: number;
}

export interface BePaidPaymentRequest {
  amount: number; // в копейках
  currency: string; // BYN, RUB, USD, EUR
  description: string;
  order_id: string;
  customer: BePaidCustomer;
  success_url: string;
  fail_url: string;
  notification_url?: string;
  test?: boolean;
}

export interface BePaidPaymentResponse {
  checkout: {
    token: string;
    redirect_url: string;
  };
}

export interface BePaidWebhookData {
  transaction: {
    uid: string;
    status: string;
    amount: number;
    currency: string;
    description: string;
    type: string;
    payment_method_type: string;
    tracking_id: string;
    message: string;
    test: boolean;
    created_at: string;
    updated_at: string;
    paid_at?: string;
  };
}

// Клиент для работы с BePaid API
class BePaidClient {
  private shopId: string;
  private secretKey: string;
  private checkoutUrl: string;

  constructor() {
    // В production это должны быть переменные окружения
    this.shopId = process.env.BEPAID_SHOP_ID || '361'; // Тестовый ID
    this.secretKey = process.env.BEPAID_SECRET_KEY || 'b8647b68898b084b836474ed8d61ffe117c9a01168d867f24953b776ddcb134d'; // Тестовый ключ
    this.checkoutUrl = process.env.NEXT_PUBLIC_BEPAID_CHECKOUT_URL || 'https://checkout.bepaid.by';
  }

  /**
   * Создает платежную сессию
   */
  async createPayment(paymentData: BePaidPaymentRequest): Promise<BePaidPaymentResponse> {
    const authToken = Buffer.from(`${this.shopId}:${this.secretKey}`).toString('base64');

    const requestBody = {
      request: {
        amount: paymentData.amount,
        currency: paymentData.currency,
        description: paymentData.description,
        tracking_id: paymentData.order_id,
        language: 'ru',
        customer: {
          email: paymentData.customer.email,
          first_name: paymentData.customer.first_name || '',
          last_name: paymentData.customer.last_name || '',
          phone: paymentData.customer.phone || '',
        },
        notification_url: paymentData.notification_url,
        success_url: paymentData.success_url,
        decline_url: paymentData.fail_url,
        fail_url: paymentData.fail_url,
        cancel_url: paymentData.fail_url,
        test: paymentData.test !== false, // По умолчанию тестовый режим
      },
    };

    try {
      const response = await axios.post(
        `${this.checkoutUrl}/ctp/api/checkouts`,
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authToken}`,
            'Accept': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('BePaid API Error:', error.response?.data);
        throw new Error(
          error.response?.data?.message || 'Ошибка при создании платежа'
        );
      }
      throw error;
    }
  }

  /**
   * Проверяет статус платежа
   */
  async getPaymentStatus(uid: string): Promise<any> {
    const authToken = Buffer.from(`${this.shopId}:${this.secretKey}`).toString('base64');

    try {
      const response = await axios.get(
        `${this.checkoutUrl}/ctp/api/payments/${uid}`,
        {
          headers: {
            'Authorization': `Basic ${authToken}`,
            'Accept': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('BePaid Status Check Error:', error.response?.data);
        throw new Error('Ошибка при проверке статуса платежа');
      }
      throw error;
    }
  }

  /**
   * Проверяет подпись webhook-уведомления
   */
  verifyWebhookSignature(data: any, signature: string): boolean {
    const crypto = require('crypto');
    const hmac = crypto.createHmac('sha256', this.secretKey);
    hmac.update(JSON.stringify(data));
    const calculatedSignature = hmac.digest('hex');
    return calculatedSignature === signature;
  }

  /**
   * Возвращает URL для редиректа на страницу оплаты
   */
  getCheckoutUrl(token: string): string {
    return `${this.checkoutUrl}/checkout?token=${token}`;
  }
}

// Экспортируем синглтон
export const bepaidClient = new BePaidClient();

