'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store';
import { closeCart, removeFromCart, updateQuantity, clearCart } from '@/lib/features/cart/cartSlice';
import { lockScroll, unlockScroll } from '@/lib/utils/scrollLock';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Cart.module.css';

export default function Cart() {
  const dispatch = useAppDispatch();
  const { items, total, isOpen } = useAppSelector((state) => state.cart);

  // Блокировка прокрутки при открытой корзине
  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Оверлей */}
      <div className={styles.overlay} onClick={() => dispatch(closeCart())} />
      
      {/* Боковая панель корзины */}
      <div className={`${styles.cart} ${isOpen ? styles.cartOpen : ''}`}>
        {/* Заголовок корзины */}
        <div className={styles.cartHeader}>
          <h2 className={styles.cartTitle}>
            <span className={styles.cartIcon}>🛒</span>
            Корзина
            {items.length > 0 && (
              <span className={styles.cartCount}>({items.length})</span>
            )}
          </h2>
          <button
            className={styles.closeButton}
            onClick={() => dispatch(closeCart())}
            aria-label="Закрыть корзину"
          >
            ✕
          </button>
        </div>

        {/* Содержимое корзины */}
        <div className={styles.cartBody}>
          {items.length === 0 ? (
            <div className={styles.emptyCart}>
              <div className={styles.emptyCartIcon}>🛒</div>
              <p className={styles.emptyCartText}>Ваша корзина пуста</p>
              <p className={styles.emptyCartSubtext}>
                Добавьте товары из каталога
              </p>
              <Link
                href="/services"
                className={styles.continueShoppingButton}
                onClick={() => dispatch(closeCart())}
              >
                Перейти к услугам
              </Link>
            </div>
          ) : (
            <>
              {/* Список товаров */}
              <div className={styles.cartItems}>
                {items.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.itemContent}>
                      {/* Изображение товара */}
                      {item.image ? (
                        <div className={styles.itemImage}>
                          <img src={item.image} alt={item.title} />
                        </div>
                      ) : (
                        <div className={styles.itemImagePlaceholder}>
                          📦
                        </div>
                      )}

                      <div className={styles.itemInfo}>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        {item.options && Object.keys(item.options).length > 0 && (
                          <div className={styles.itemOptions}>
                            {Object.entries(item.options).map(([key, value]) => (
                              <span key={key} className={styles.itemOption}>
                                {key}: {String(value)}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className={styles.itemPrice}>
                          {item.price.toFixed(2)} BYN × {item.quantity}
                        </div>
                      </div>
                    </div>

                    <div className={styles.itemActions}>
                      {/* Управление количеством */}
                      <div className={styles.quantityControls}>
                        <button
                          className={styles.quantityButton}
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          aria-label="Уменьшить количество"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          className={styles.quantityInput}
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          min="1"
                        />
                        <button
                          className={styles.quantityButton}
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          aria-label="Увеличить количество"
                        >
                          +
                        </button>
                      </div>

                      {/* Итоговая цена за товар */}
                      <div className={styles.itemTotal}>
                        {(item.price * item.quantity).toFixed(2)} руб.
                      </div>

                      {/* Кнопка удаления */}
                      <button
                        className={styles.removeButton}
                        onClick={() => dispatch(removeFromCart(item.id))}
                        aria-label="Удалить товар"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Очистить корзину */}
              <button
                className={styles.clearCartButton}
                onClick={() => {
                  if (confirm('Очистить всю корзину?')) {
                    dispatch(clearCart());
                  }
                }}
              >
                Очистить корзину
              </button>
            </>
          )}
        </div>

        {/* Итого и оформление заказа */}
        {items.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.totalSection}>
              <span className={styles.totalLabel}>Итого:</span>
              <span className={styles.totalAmount}>{total.toFixed(2)} BYN</span>
            </div>
            <Link
              href="/cart"
              className={styles.checkoutButton}
              onClick={() => dispatch(closeCart())}
            >
              Перейти в корзину
            </Link>
            <button
              className={styles.continueButton}
              onClick={() => dispatch(closeCart())}
            >
              Продолжить покупки
            </button>
          </div>
        )}
      </div>
    </>
  );
}

