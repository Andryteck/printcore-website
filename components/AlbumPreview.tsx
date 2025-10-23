'use client';

import { useState } from 'react';
import styles from './AlbumPreview.module.css';

interface AlbumTemplate {
  id: string;
  name: string;
  thumbnail: string;
  pages: number;
  layout: 'grid' | 'masonry' | 'timeline';
  theme: 'classic' | 'modern' | 'vintage' | 'minimal';
}

interface Photo {
  id: string;
  file: File;
  preview: string;
  order: number;
}

interface AlbumPage {
  id: string;
  photos: Photo[];
  layout: string;
  template: string;
}

interface AlbumPreviewProps {
  title: string;
  description: string;
  template: AlbumTemplate;
  pages: AlbumPage[];
  onBack: () => void;
  onSave: () => void;
}

export default function AlbumPreview({ 
  title, 
  description, 
  template, 
  pages, 
  onBack, 
  onSave 
}: AlbumPreviewProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'spread'>('spread');

  const totalPhotos = pages.reduce((total, page) => total + page.photos.length, 0);
  const estimatedPrice = Math.max(35, Math.ceil(totalPhotos / 10) * 5 + 30);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPageContent = (page: AlbumPage) => {
    switch (template.layout) {
      case 'grid':
        return (
          <div className={styles.gridLayout}>
            {page.photos.map((photo, index) => (
              <div key={photo.id} className={styles.gridItem}>
                <img src={photo.preview} alt={`Фото ${index + 1}`} />
              </div>
            ))}
          </div>
        );
      
      case 'masonry':
        return (
          <div className={styles.masonryLayout}>
            {page.photos.map((photo, index) => (
              <div key={photo.id} className={styles.masonryItem}>
                <img src={photo.preview} alt={`Фото ${index + 1}`} />
              </div>
            ))}
          </div>
        );
      
      case 'timeline':
        return (
          <div className={styles.timelineLayout}>
            {page.photos.map((photo, index) => (
              <div key={photo.id} className={styles.timelineItem}>
                <img src={photo.preview} alt={`Фото ${index + 1}`} />
                {index < page.photos.length - 1 && <div className={styles.timelineLine} />}
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={styles.albumPreview}>
      <div className={styles.previewHeader}>
        <h3 className={styles.sectionTitle}>Предпросмотр альбома</h3>
        <div className={styles.albumInfo}>
          <h4 className={styles.albumTitle}>{title}</h4>
          {description && <p className={styles.albumDescription}>{description}</p>}
          <div className={styles.albumStats}>
            <span className={styles.stat}>
              <strong>{pages.length}</strong> страниц
            </span>
            <span className={styles.stat}>
              <strong>{totalPhotos}</strong> фотографий
            </span>
            <span className={styles.stat}>
              Шаблон: <strong>{template.name}</strong>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.previewControls}>
        <div className={styles.viewModeToggle}>
          <button 
            className={`${styles.viewModeButton} ${viewMode === 'spread' ? styles.active : ''}`}
            onClick={() => setViewMode('spread')}
          >
            Разворот
          </button>
          <button 
            className={`${styles.viewModeButton} ${viewMode === 'grid' ? styles.active : ''}`}
            onClick={() => setViewMode('grid')}
          >
            Сетка
          </button>
        </div>

        <div className={styles.pageNavigation}>
          <button 
            className={styles.navButton}
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            ←
          </button>
          <span className={styles.pageInfo}>
            {currentPage + 1} из {pages.length}
          </span>
          <button 
            className={styles.navButton}
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.previewContent}>
        {viewMode === 'spread' ? (
          <div className={styles.spreadView}>
            <div className={styles.albumPage}>
              <div className={styles.pageContent}>
                {renderPageContent(pages[currentPage])}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.gridView}>
            {pages.map((page, index) => (
              <div key={page.id} className={styles.pageThumbnail}>
                <div className={styles.thumbnailHeader}>
                  <span>Страница {index + 1}</span>
                  <span>{page.photos.length} фото</span>
                </div>
                <div className={styles.thumbnailContent}>
                  {renderPageContent(page)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.previewFooter}>
        <div className={styles.priceInfo}>
          <div className={styles.priceEstimate}>
            <span className={styles.priceLabel}>Примерная стоимость:</span>
            <span className={styles.priceValue}>{estimatedPrice} BYN</span>
          </div>
          <div className={styles.priceDetails}>
            <span>• Печать на качественной фотобумаге</span>
            <span>• Твердая обложка</span>
            <span>• Доставка по Минску</span>
          </div>
        </div>

        <div className={styles.previewActions}>
          <button className={styles.backButton} onClick={onBack}>
            Назад к редактированию
          </button>
          <button className={styles.saveButton} onClick={onSave}>
            Сохранить и заказать
          </button>
        </div>
      </div>
    </div>
  );
}
