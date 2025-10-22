'use client';

import { useAppDispatch } from '@/lib/store';
import { addToCart, openCart } from '@/lib/features/cart/cartSlice';
import { CartItem } from '@/lib/features/cart/cartSlice';
import { useState } from 'react';
import styles from '@/styles/components/AddToCartButton.module.css';

interface AddToCartButtonProps {
  item: Omit<CartItem, 'quantity'>;
  quantity?: number;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  showIcon?: boolean;
  openCartAfterAdd?: boolean;
}

export default function AddToCartButton({
  item,
  quantity = 1,
  className = '',
  size = 'medium',
  variant = 'primary',
  showIcon = true,
  openCartAfterAdd = true,
}: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const cartItem: CartItem = {
      ...item,
      quantity,
    };

    dispatch(addToCart(cartItem));

    // Показываем анимацию успешного добавления
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);

    // Открываем корзину если нужно
    if (openCartAfterAdd) {
      setTimeout(() => {
        dispatch(openCart());
      }, 300);
    }
  };

  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`${styles.button} ${sizeClasses[size]} ${variantClasses[variant]} ${
        isAdded ? styles.added : ''
      } ${className}`}
      disabled={isAdded}
      aria-label="Добавить в корзину"
    >
      {showIcon && (
        <span className={styles.icon}>
          {isAdded ? '✓' : '🛒'}
        </span>
      )}
      <span className={styles.text}>
        {isAdded ? 'Добавлено!' : 'В корзину'}
      </span>
      {isAdded && (
        <span className={styles.animation}>
          <span className={styles.checkmark}>✓</span>
        </span>
      )}
    </button>
  );
}

