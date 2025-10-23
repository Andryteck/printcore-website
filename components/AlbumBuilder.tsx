'use client';

import { useState, useRef, useCallback } from 'react';
import AlbumPreview from './AlbumPreview';
import styles from './AlbumBuilder.module.css';

interface Photo {
  id: string;
  file: File;
  preview: string;
  order: number;
}

interface AlbumTemplate {
  id: string;
  name: string;
  thumbnail: string;
  pages: number;
  layout: 'grid' | 'masonry' | 'timeline';
  theme: 'classic' | 'modern' | 'vintage' | 'minimal';
}

interface AlbumPage {
  id: string;
  photos: Photo[];
  layout: string;
  template: string;
}

const defaultTemplates: AlbumTemplate[] = [
  {
    id: 'classic-grid',
    name: 'Классическая сетка',
    thumbnail: '/images/templates/classic-grid.jpg',
    pages: 20,
    layout: 'grid',
    theme: 'classic'
  },
  {
    id: 'modern-masonry',
    name: 'Современная кладка',
    thumbnail: '/images/templates/modern-masonry.jpg',
    pages: 25,
    layout: 'masonry',
    theme: 'modern'
  },
  {
    id: 'vintage-timeline',
    name: 'Винтажная хронология',
    thumbnail: '/images/templates/vintage-timeline.jpg',
    pages: 30,
    layout: 'timeline',
    theme: 'vintage'
  },
  {
    id: 'minimal-grid',
    name: 'Минималистичная сетка',
    thumbnail: '/images/templates/minimal-grid.jpg',
    pages: 15,
    layout: 'grid',
    theme: 'minimal'
  }
];

interface AlbumBuilderProps {
  onOpenEditor?: () => void;
}

export default function AlbumBuilder({ onOpenEditor }: AlbumBuilderProps = {}) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<AlbumTemplate | null>(null);
  const [albumPages, setAlbumPages] = useState<AlbumPage[]>([]);
  const [currentStep, setCurrentStep] = useState<'upload' | 'template' | 'edit' | 'preview'>('upload');
  const [albumTitle, setAlbumTitle] = useState('');
  const [albumDescription, setAlbumDescription] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  // Удаление фотографии
  const removePhoto = (photoId: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
  };

  // Переупорядочивание фотографий
  const reorderPhotos = (startIndex: number, endIndex: number) => {
    const result = Array.from(photos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    
    setPhotos(result.map((photo, index) => ({ ...photo, order: index })));
  };

  // Выбор шаблона
  const handleTemplateSelect = (template: AlbumTemplate) => {
    setSelectedTemplate(template);
    setCurrentStep('edit');
    generateAlbumPages(template);
  };

  // Генерация страниц альбома
  const generateAlbumPages = (template: AlbumTemplate) => {
    const pages: AlbumPage[] = [];
    const photosPerPage = template.layout === 'grid' ? 4 : template.layout === 'masonry' ? 6 : 2;
    
    for (let i = 0; i < photos.length; i += photosPerPage) {
      const pagePhotos = photos.slice(i, i + photosPerPage);
      pages.push({
        id: `page-${i / photosPerPage + 1}`,
        photos: pagePhotos,
        layout: template.layout,
        template: template.id
      });
    }
    
    setAlbumPages(pages);
  };

  // Сохранение альбома
  const saveAlbum = async () => {
    const albumData = {
      title: albumTitle,
      description: albumDescription,
      template: selectedTemplate,
      pages: albumPages,
      photos: photos.map(photo => ({
        id: photo.id,
        order: photo.order
      }))
    };

    console.log('Сохранение альбома:', albumData);
    // Здесь будет API вызов для сохранения альбома
  };

  return (
    <div className={styles.albumBuilder}>
      {/* Шаги */}
      <div className={styles.steps}>
        <div className={`${styles.step} ${currentStep === 'upload' ? styles.stepActive : ''}`}>
          <span className={styles.stepNumber}>1</span>
          <span className={styles.stepLabel}>Загрузка фото</span>
        </div>
        <div className={`${styles.step} ${currentStep === 'template' ? styles.stepActive : ''}`}>
          <span className={styles.stepNumber}>2</span>
          <span className={styles.stepLabel}>Выбор шаблона</span>
        </div>
        <div className={`${styles.step} ${currentStep === 'edit' ? styles.stepActive : ''}`}>
          <span className={styles.stepNumber}>3</span>
          <span className={styles.stepLabel}>Редактирование</span>
        </div>
        <div className={`${styles.step} ${currentStep === 'preview' ? styles.stepActive : ''}`}>
          <span className={styles.stepNumber}>4</span>
          <span className={styles.stepLabel}>Предпросмотр</span>
        </div>
      </div>

      {/* Шаг 1: Загрузка фотографий */}
      {currentStep === 'upload' && (
        <div className={styles.stepContent}>
          <div className={styles.uploadSection}>
            <h3 className={styles.sectionTitle}>Загрузите ваши фотографии</h3>
            <p className={styles.sectionDescription}>
              Выберите фотографии для создания альбома. Поддерживаются форматы JPG, PNG, WEBP
            </p>
            
            <div className={styles.uploadArea}>
              <div className={styles.uploadBox}>
                <div className={styles.uploadIcon}>📸</div>
                <h4>Перетащите файлы сюда или</h4>
                <button 
                  className={styles.uploadButton}
                  onClick={() => fileInputRef.current?.click()}
                >
                  Выбрать файлы
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  className={styles.hiddenInput}
                />
              </div>
            </div>

            {/* Загруженные фотографии */}
            {photos.length > 0 && (
              <div className={styles.photosGrid}>
                <h4 className={styles.photosTitle}>Загруженные фотографии ({photos.length})</h4>
                <div className={styles.photosList}>
                  {photos.map((photo, index) => (
                    <div key={photo.id} className={styles.photoItem}>
                      <img src={photo.preview} alt={`Фото ${index + 1}`} className={styles.photoImage} />
                      <button 
                        className={styles.removePhotoButton}
                        onClick={() => removePhoto(photo.id)}
                      >
                        ✕
                      </button>
                      <div className={styles.photoOrder}>{index + 1}</div>
                    </div>
                  ))}
                </div>
                <button 
                  className={styles.nextButton}
                  onClick={() => setCurrentStep('template')}
                  disabled={photos.length === 0}
                >
                  Продолжить к выбору шаблона
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Шаг 2: Выбор шаблона */}
      {currentStep === 'template' && (
        <div className={styles.stepContent}>
          <div className={styles.templateSection}>
            <h3 className={styles.sectionTitle}>Выберите шаблон альбома</h3>
            <p className={styles.sectionDescription}>
              Выберите подходящий шаблон для вашего альбома
            </p>
            
            <div className={styles.templatesGrid}>
              {defaultTemplates.map((template) => (
                <div 
                  key={template.id} 
                  className={styles.templateCard}
                  onClick={() => handleTemplateSelect(template)}
                >
                  <div className={styles.templateThumbnail}>
                    <img src={template.thumbnail} alt={template.name} />
                    <div className={styles.templateOverlay}>
                      <span className={styles.templatePages}>{template.pages} страниц</span>
                    </div>
                  </div>
                  <div className={styles.templateInfo}>
                    <h4 className={styles.templateName}>{template.name}</h4>
                    <div className={styles.templateMeta}>
                      <span className={styles.templateLayout}>{template.layout}</span>
                      <span className={styles.templateTheme}>{template.theme}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Шаг 3: Редактирование */}
      {currentStep === 'edit' && selectedTemplate && (
        <div className={styles.stepContent}>
          <div className={styles.editSection}>
            <div className={styles.editHeader}>
              <h3 className={styles.sectionTitle}>Настройте ваш альбом</h3>
              <div className={styles.albumInfo}>
                <input
                  type="text"
                  placeholder="Название альбома"
                  value={albumTitle}
                  onChange={(e) => setAlbumTitle(e.target.value)}
                  className={styles.albumTitleInput}
                />
                <textarea
                  placeholder="Описание альбома (необязательно)"
                  value={albumDescription}
                  onChange={(e) => setAlbumDescription(e.target.value)}
                  className={styles.albumDescriptionInput}
                />
              </div>
            </div>

            <div className={styles.pagesEditor}>
              <h4>Страницы альбома</h4>
              <div className={styles.pagesList}>
                {albumPages.map((page, index) => (
                  <div key={page.id} className={styles.pageItem}>
                    <div className={styles.pageHeader}>
                      <span className={styles.pageNumber}>Страница {index + 1}</span>
                      <span className={styles.pagePhotos}>{page.photos.length} фото</span>
                    </div>
                    <div className={styles.pagePhotos}>
                      {page.photos.map((photo) => (
                        <img 
                          key={photo.id} 
                          src={photo.preview} 
                          alt="Фото" 
                          className={styles.pagePhoto}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.editActions}>
              <button 
                className={styles.backButton}
                onClick={() => setCurrentStep('template')}
              >
                Назад к шаблонам
              </button>
              <button 
                className={styles.nextButton}
                onClick={() => setCurrentStep('preview')}
                disabled={!albumTitle.trim()}
              >
                Предпросмотр альбома
              </button>
              {onOpenEditor && (
                <button 
                  className={styles.editorButton}
                  onClick={onOpenEditor}
                  disabled={!albumTitle.trim()}
                >
                  🎨 Открыть редактор
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Шаг 4: Предпросмотр */}
      {currentStep === 'preview' && selectedTemplate && (
        <div className={styles.stepContent}>
          <AlbumPreview
            title={albumTitle}
            description={albumDescription}
            template={selectedTemplate}
            pages={albumPages}
            onBack={() => setCurrentStep('edit')}
            onSave={saveAlbum}
          />
        </div>
      )}
    </div>
  );
}
