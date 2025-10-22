'use client';

import { useState } from 'react';
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
      {selectedPhoto && (
        <div className={styles.modal} onClick={() => setSelectedPhoto(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
            
            <div className={styles.modalGrid}>
              <div className={styles.modalImageWrapper}>
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className={styles.modalImage}
                />
              </div>
              
              <div className={styles.modalInfo}>
                <span className={styles.modalCategory}>{selectedPhoto.category}</span>
                <h2 className={styles.modalTitle}>{selectedPhoto.title}</h2>
                <p className={styles.modalDescription}>{selectedPhoto.description}</p>
                
                <div className={styles.modalDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Формат:</span>
                    <span className={styles.detailValue}>{selectedPhoto.format}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Качество:</span>
                    <span className={styles.detailValue}>Премиум</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Срок:</span>
                    <span className={styles.detailValue}>1-3 дня</span>
                  </div>
                </div>

                <button className={styles.orderButton}>
                  Заказать печать
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

