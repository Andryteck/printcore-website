'use client';

import styles from '@/styles/components/PhotoGallery.module.css';

interface Photo {
  id: number;
  title: string;
  category: string;
  image: string;
  format: string;
  description: string;
}

interface PhotoGalleryModalProps {
  selectedPhoto: Photo | null;
  onClose: () => void;
}

export default function PhotoGalleryModal({ selectedPhoto, onClose }: PhotoGalleryModalProps) {
  if (!selectedPhoto) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button 
          className={styles.closeButton}
          onClick={onClose}
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
  );
}
