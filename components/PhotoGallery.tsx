'use client';

import { useState } from 'react';
import PhotoGalleryModal from './Modals/PhotoGalleryModal';
import styles from '@/styles/components/PhotoGallery.module.css';

interface Photo {
  id: number;
  title: string;
  category: string;
  image: string;
  format: string;
  description: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (id: number) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={styles.photoCard}
            onClick={() => setSelectedPhoto(photo)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={styles.imageWrapper}>
              {!imageLoaded[photo.id] && (
                <div className={styles.skeleton}>
                  <div className={styles.skeletonLoader} />
                </div>
              )}
              <img
                src={photo.image}
                alt={photo.title}
                className={styles.image}
                loading="lazy"
                onLoad={() => handleImageLoad(photo.id)}
                style={{ opacity: imageLoaded[photo.id] ? 1 : 0 }}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.photoTitle}>{photo.title}</h3>
                  <p className={styles.photoFormat}>{photo.format}</p>
                  <button className={styles.viewButton}>
                    Подробнее →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      <PhotoGalleryModal
        selectedPhoto={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </>
  );
}

