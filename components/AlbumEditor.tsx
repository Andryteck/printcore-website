'use client';

import { useState, useRef, useCallback } from 'react';
import styles from './AlbumEditor.module.css';

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

interface AlbumEditorProps {
  onSave: (albumData: any) => void;
  onClose: () => void;
}

export default function AlbumEditor({ onSave, onClose }: AlbumEditorProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [albumTitle, setAlbumTitle] = useState('Ваше название альбома');
  const [albumSubtitle, setAlbumSubtitle] = useState('20XX | Наш фотоальбом');
  const [showImageLibrary, setShowImageLibrary] = useState(false);
  const [showTextEditor, setShowTextEditor] = useState(false);
  const [showBackgrounds, setShowBackgrounds] = useState(false);
  const [zoom, setZoom] = useState(100);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Генерация страниц альбома
  const generatePages = (): AlbumPage[] => {
    const pages: AlbumPage[] = [];
    const photosPerPage = 4;
    
    for (let i = 0; i < photos.length; i += photosPerPage) {
      const pagePhotos = photos.slice(i, i + photosPerPage);
      pages.push({
        id: `page-${i / photosPerPage + 1}`,
        photos: pagePhotos,
        layout: 'grid',
        template: 'classic'
      });
    }
    
    return pages;
  };

  const pages = generatePages();
  const totalPages = Math.max(1, pages.length + 2); // +2 для обложки

  // Загрузка фотографий
  const handlePhotoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const newPhotos: Photo[] = files.map((file, index) => ({
        id: `photo-${Date.now()}-${index}`,
        file,
        preview: URL.createObjectURL(file),
        order: photos.length + index
      }));

      setPhotos(prev => [...prev, ...newPhotos]);
    }
  }, [photos.length]);

  // Выбор фотографий
  const togglePhotoSelection = (photoId: string) => {
    setSelectedPhotos(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  // Автозаполнение
  const handleAutoFill = () => {
    // Логика автозаполнения
    console.log('Автозаполнение альбома');
  };

  // Сохранение альбома
  const handleSave = () => {
    const albumData = {
      title: albumTitle,
      subtitle: albumSubtitle,
      pages: pages,
      photos: photos,
      totalPages: totalPages
    };
    onSave(albumData);
  };

  return (
    <div className={styles.albumEditor}>
      {/* Верхняя панель */}
      <div className={styles.topBar}>
        <div className={styles.brand}>
          <span className={styles.brandName}>PrintCore</span>
          <span className={styles.brandSubtitle}>печатный центр</span>
        </div>
        
        <div className={styles.topActions}>
          <button className={styles.actionButton}>Поделиться</button>
          <button className={styles.actionButton}>Изменить продукт</button>
          <button className={styles.actionButton}>Расширенный редактор</button>
          <button className={styles.actionButton}>Сохранить</button>
          <button className={styles.actionButton}>Предварительный просмотр</button>
          <select className={styles.languageSelect}>
            <option>Русский</option>
            <option>English</option>
          </select>
          <button className={styles.loginButton}>Вход</button>
          <div className={styles.price}>0.00 BYN</div>
          <button className={styles.orderButton}>
            🛒 Заказать
          </button>
        </div>
      </div>

      <div className={styles.editorContent}>
        {/* Левая панель */}
        <div className={styles.leftSidebar}>
          <div className={styles.sidebarSection}>
            <button 
              className={styles.imageButton}
              onClick={() => setShowImageLibrary(!showImageLibrary)}
            >
              <div className={styles.imageIcon}>📁</div>
              <span>Изображения</span>
            </button>
          </div>

          <div className={styles.toolsSection}>
            <button className={styles.toolButton} title="Свернуть панель">
              ⇄
            </button>
            <button 
              className={styles.toolButton}
              onClick={() => setShowTextEditor(!showTextEditor)}
              title="Текст"
            >
              T
            </button>
            <button 
              className={styles.toolButton}
              onClick={() => setShowBackgrounds(!showBackgrounds)}
              title="Фоны"
            >
              ⬜
            </button>
          </div>

          <div className={styles.autoFillSection}>
            <button className={styles.autoFillButton} onClick={handleAutoFill}>
              Автозаполнение
            </button>
          </div>

          <div className={styles.undoRedoSection}>
            <button className={styles.undoButton}>↶ Отменить</button>
            <button className={styles.redoButton} disabled>↷ Повторить</button>
          </div>

          {/* Библиотека изображений */}
          {showImageLibrary && (
            <div className={styles.imageLibrary}>
              <div className={styles.uploadArea}>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  className={styles.hiddenInput}
                />
                <button 
                  className={styles.uploadButton}
                  onClick={() => fileInputRef.current?.click()}
                >
                  + Добавить фото
                </button>
              </div>
              
              <div className={styles.photosGrid}>
                {photos.map((photo, index) => (
                  <div 
                    key={photo.id} 
                    className={`${styles.photoThumbnail} ${selectedPhotos.includes(photo.id) ? styles.selected : ''}`}
                    onClick={() => togglePhotoSelection(photo.id)}
                  >
                    <img src={photo.preview} alt={`Фото ${index + 1}`} />
                    <div className={styles.photoActions}>
                      <button className={styles.downloadButton}>⬇</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Основная область редактирования */}
        <div className={styles.mainEditor}>
          <div className={styles.editorCanvas}>
            {/* Навигация по страницам */}
            <button className={styles.pageNavButton} onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}>
              ←
            </button>
            
            <div className={styles.albumFrame}>
              <div className={styles.albumPage}>
                {currentPage === 0 ? (
                  // Обложка
                  <div className={styles.coverPage}>
                    <div className={styles.coverTitle}>
                      <input 
                        type="text" 
                        value={albumTitle}
                        onChange={(e) => setAlbumTitle(e.target.value)}
                        className={styles.titleInput}
                      />
                    </div>
                    <div className={styles.coverImage}>
                      {photos[0] && (
                        <img src={photos[0].preview} alt="Обложка" />
                      )}
                    </div>
                    <div className={styles.coverSubtitle}>
                      <input 
                        type="text" 
                        value={albumSubtitle}
                        onChange={(e) => setAlbumSubtitle(e.target.value)}
                        className={styles.subtitleInput}
                      />
                    </div>
                  </div>
                ) : (
                  // Обычная страница
                  <div className={styles.contentPage}>
                    <div className={styles.pagePhotos}>
                      {pages[currentPage - 1]?.photos.map((photo, index) => (
                        <div key={photo.id} className={styles.pagePhoto}>
                          <img src={photo.preview} alt={`Фото ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <button className={styles.pageNavButton} onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}>
              →
            </button>
          </div>

          <div className={styles.pageInfo}>
            <div className={styles.pageCounter}>
              📄 Всего страниц: {totalPages}
            </div>
            <button className={styles.zoomButton}>
              🔍+
            </button>
          </div>
        </div>
      </div>

      {/* Нижняя панель навигации */}
      <div className={styles.bottomNavigation}>
        <div className={styles.pageThumbnails}>
          <div className={`${styles.pageThumbnail} ${currentPage === 0 ? styles.active : ''}`}>
            <span className={styles.pageLabel}>Передняя</span>
          </div>
          {Array.from({ length: Math.ceil((totalPages - 2) / 2) }, (_, i) => (
            <div 
              key={i} 
              className={`${styles.pageThumbnail} ${currentPage === i + 1 ? styles.active : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              <span className={styles.pageLabel}>{i * 2 + 1}-{i * 2 + 2}</span>
            </div>
          ))}
          <div className={`${styles.pageThumbnail} ${currentPage === totalPages - 1 ? styles.active : ''}`}>
            <span className={styles.pageLabel}>Задняя</span>
          </div>
        </div>
      </div>

      {/* Кнопки действий */}
      <div className={styles.actionButtons}>
        <button className={styles.cancelButton} onClick={onClose}>
          Отмена
        </button>
        <button className={styles.saveButton} onClick={handleSave}>
          Сохранить альбом
        </button>
      </div>
    </div>
  );
}
