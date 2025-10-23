'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store';
import { toggleFavorite } from '@/lib/features/favorites/favoritesSlice';
import { Service } from '@/lib/features/services/servicesSlice';
import styles from '@/styles/components/FavoriteButton.module.css';

interface FavoriteButtonProps {
  service: Service;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function FavoriteButton({ service, className = '', size = 'medium' }: FavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);
  const isFavorite = favorites.some(item => item.id === service.id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращаем переход по ссылке, если кнопка внутри Link
    e.stopPropagation(); // Останавливаем всплытие события
    dispatch(toggleFavorite(service));
  };

  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${sizeClasses[size]} ${isFavorite ? styles.active : ''} ${className}`}
      aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isFavorite ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      {isFavorite && (
        <span className={styles.tooltip}>В избранном</span>
      )}
      {!isFavorite && (
        <span className={styles.tooltip}>Добавить в избранное</span>
      )}
    </button>
  );
}



