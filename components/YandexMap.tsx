'use client';

import { useEffect, useRef } from 'react';

interface YandexMapProps {
  apiKey: string;
  center?: [number, number];
  zoom?: number;
  address?: string;
}

export default function YandexMap({ 
  apiKey, 
  center = [53.891614, 27.527435], // Координаты PrintCore
  zoom = 16,
  address = 'Пр. Дзержинского 3Б, Минск'
}: YandexMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Проверяем, загружен ли уже скрипт
    if (window.ymaps) {
      initMap();
      return;
    }

    // Загружаем скрипт Яндекс.Карт
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;
    script.onload = () => {
      window.ymaps.ready(initMap);
    };
    document.head.appendChild(script);

    return () => {
      // Очистка при размонтировании
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current || mapInstanceRef.current) return;

    try {
      // Создаем карту
      const map = new window.ymaps.Map(mapRef.current, {
        center: center,
        zoom: zoom,
        controls: ['zoomControl', 'fullscreenControl'],
      });

      // Добавляем метку
      const placemark = new window.ymaps.Placemark(
        center,
        {
          balloonContent: `<strong>PrintCore</strong><br/>${address}`,
          hintContent: 'PrintCore - Типография',
        },
        {
          preset: 'islands#blueCircleDotIcon',
          iconColor: '#3b82f6',
        }
      );

      map.geoObjects.add(placemark);
      mapInstanceRef.current = map;

      // Открываем балун при загрузке
      placemark.balloon.open();
    } catch (error) {
      console.error('Ошибка инициализации карты:', error);
    }
  };

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  );
}

// Типы для TypeScript
declare global {
  interface Window {
    ymaps: any;
  }
}

