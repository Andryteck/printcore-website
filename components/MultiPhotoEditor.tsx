'use client';

import React, { useState, useCallback, useRef } from 'react';
import PhotoEditModal from './Modals/PhotoEditModal';

// Типы для размеров
type AspectRatio = {
  label: string;
  value: number;
  description: string;
};

// Типы для фотографий
type Photo = {
  id: string;
  file: File;
  preview: string;
  croppedImage?: string;
  printSize: AspectRatio;
  quantity: number;
  paperType: string;
  isSelected: boolean;
  hasLowResolution?: boolean;
};

// Предустановленные размеры для печати
const ASPECT_RATIOS: AspectRatio[] = [
  { label: '10x15 см', value: 10 / 15, description: 'Стандартное фото' },
  { label: '13x18 см', value: 13 / 18, description: 'Фото' },
  { label: '20x30 см', value: 20 / 30, description: 'Фото A4' },
  { label: '30x40 см', value: 30 / 40, description: 'Большое фото' },
  { label: 'Квадрат 1:1', value: 1, description: 'Instagram формат' },
  { label: 'A4 (21x29.7)', value: 21 / 29.7, description: 'Стандартный лист' },
  { label: 'Визитка (9x5)', value: 9 / 5, description: 'Визитная карточка' },
];

// Типы бумаги
const PAPER_TYPES = [
  'Полуглянцевая бумага',
  'Глянцевая бумага',
  'Матовая бумага',
  'Фотобумага',
  'Обычная бумага'
];


export default function MultiPhotoEditor() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [editingPhoto, setEditingPhoto] = useState<Photo | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Обработчик загрузки файлов
  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const newPhotos: Photo[] = files.map((file, index) => ({
        id: `photo-${Date.now()}-${index}`,
        file,
        preview: URL.createObjectURL(file),
        printSize: ASPECT_RATIOS[0], // По умолчанию 10x15
        quantity: 1,
        paperType: PAPER_TYPES[0], // По умолчанию полуглянцевая
        isSelected: false,
        hasLowResolution: file.size < 500000 // Предполагаем низкое разрешение для файлов < 500KB
      }));

      setPhotos(prev => [...prev, ...newPhotos]);
    }
  }, []);

  // Выбор/снятие выбора фотографии
  const togglePhotoSelection = (photoId: string) => {
    setSelectedPhotos(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  // Выбор всех фотографий
  const selectAllPhotos = () => {
    setSelectedPhotos(photos.map(photo => photo.id));
  };

  // Снятие выбора всех фотографий
  const deselectAllPhotos = () => {
    setSelectedPhotos([]);
  };

  // Удаление выбранных фотографий
  const deleteSelectedPhotos = () => {
    setPhotos(prev => prev.filter(photo => !selectedPhotos.includes(photo.id)));
    setSelectedPhotos([]);
  };

  // Удаление одной фотографии
  const deletePhoto = (photoId: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
    setSelectedPhotos(prev => prev.filter(id => id !== photoId));
  };

  // Открытие редактора для фотографии
  const openPhotoEditor = (photo: Photo) => {
    setEditingPhoto(photo);
    setIsEditModalOpen(true);
  };

  // Сохранение отредактированной фотографии
  const saveEditedPhoto = (photoId: string, croppedImage: string) => {
    setPhotos(prev => prev.map(photo => 
      photo.id === photoId 
        ? { ...photo, croppedImage }
        : photo
    ));
  };

  // Изменение настроек печати
  const updatePhotoSettings = (photoId: string, field: keyof Photo, value: any) => {
    setPhotos(prev => prev.map(photo => 
      photo.id === photoId 
        ? { ...photo, [field]: value }
        : photo
    ));
  };

  // Скачивание всех фотографий (отредактированных или оригинальных)
  const downloadAllPhotos = () => {
    photos.forEach((photo, index) => {
      const imageToDownload = photo.croppedImage || photo.preview;
      const link = document.createElement('a');
      link.download = `photo-${index + 1}-${Date.now()}.jpg`;
      link.href = imageToDownload;
      link.click();
    });
  };

  // Скачивание выбранных фотографий
  const downloadSelectedPhotos = () => {
    const selectedPhotosList = photos.filter(photo => selectedPhotos.includes(photo.id));
    selectedPhotosList.forEach((photo, index) => {
      const imageToDownload = photo.croppedImage || photo.preview;
      const link = document.createElement('a');
      link.download = `selected-photo-${index + 1}-${Date.now()}.jpg`;
      link.href = imageToDownload;
      link.click();
    });
  };

  // Отправка в заказ (имитация)
  const sendToOrder = () => {
    const orderPhotos = photos.map(photo => ({
      id: photo.id,
      image: photo.croppedImage || photo.preview,
      printSize: photo.printSize.label,
      paperType: photo.paperType,
      quantity: photo.quantity,
      isEdited: !!photo.croppedImage
    }));

    // Здесь можно отправить данные на сервер или в корзину
    console.log('Отправка в заказ:', orderPhotos);
    alert(`Готово! ${orderPhotos.length} фотографий добавлено в заказ.\n\nОтредактированных: ${orderPhotos.filter(p => p.isEdited).length}\nОригинальных: ${orderPhotos.filter(p => !p.isEdited).length}`);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Редактор фотографий
            </h1>
            <p className="text-gray-400 text-lg">
              Загрузите фотографии, настройте параметры печати и отредактируйте каждую отдельно
            </p>
          </div>

          {/* Предупреждение о низком разрешении */}
          {photos.some(photo => photo.hasLowResolution) && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
              <p className="text-yellow-300 text-sm">
                ⚠️ Файлы некоторых ваших фотографий имеют разрешение ниже, чем рекомендовано, это может привести к снижению качества печати.
              </p>
            </div>
          )}

          {/* Панель управления */}
          {photos.length > 0 && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Выбор:</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedPhotos.length === photos.length}
                      onChange={selectedPhotos.length === photos.length ? deselectAllPhotos : selectAllPhotos}
                      className="rounded"
                    />
                    <span className="text-sm">Все</span>
                  </label>
                </div>
                
                <button
                  onClick={deleteSelectedPhotos}
                  disabled={selectedPhotos.length === 0}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium transition-all"
                >
                  Удалить выбранные ({selectedPhotos.length})
                </button>

                <button
                  onClick={downloadAllPhotos}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-all"
                >
                  📥 Скачать все ({photos.length})
                </button>

                {selectedPhotos.length > 0 && (
                  <button
                    onClick={downloadSelectedPhotos}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all"
                  >
                    📥 Скачать выбранные ({selectedPhotos.length})
                  </button>
                )}

                <button
                  onClick={sendToOrder}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-lg text-sm font-medium transition-all shadow-lg"
                >
                  🛒 Отправить в заказ ({photos.length})
                </button>
              </div>

              {/* Статистика */}
              <div className="text-xs text-gray-400">
                Отредактированных: {photos.filter(p => p.croppedImage).length} | 
                Оригинальных: {photos.filter(p => !p.croppedImage).length} | 
                Всего: {photos.length}
              </div>
            </div>
          )}

          {/* Сетка фотографий */}
          {photos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className={`bg-gray-900 border-2 rounded-xl overflow-hidden transition-all ${
                    selectedPhotos.includes(photo.id) 
                      ? 'border-blue-500' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  {/* Миниатюра */}
                  <div 
                    className="relative aspect-square cursor-pointer"
                    onClick={() => openPhotoEditor(photo)}
                  >
                    <img
                      src={photo.croppedImage || photo.preview}
                      alt="Фото"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Иконки управления */}
                    <div className="absolute top-2 left-2 flex gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const imageToDownload = photo.croppedImage || photo.preview;
                          const link = document.createElement('a');
                          link.download = `photo-${photo.id}-${Date.now()}.jpg`;
                          link.href = imageToDownload;
                          link.click();
                        }}
                        className="w-8 h-8 bg-green-600/80 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-sm transition-all backdrop-blur-sm"
                        title="Скачать"
                      >
                        📥
                      </button>
                    </div>
                    
                    
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deletePhoto(photo.id);
                        }}
                        className="w-8 h-8 bg-red-600/80 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-sm transition-all backdrop-blur-sm"
                        title="Удалить"
                      >
                        🗑️
                      </button>
                    </div>

                    {/* Чекбокс для выбора */}
                    <div 
                      className="absolute top-2 right-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePhotoSelection(photo.id);
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedPhotos.includes(photo.id)}
                        onChange={() => {}} // Обработчик пустой, так как используем onClick на div
                        className="w-5 h-5 rounded bg-white/80 backdrop-blur-sm cursor-pointer"
                      />
                    </div>

                    {/* Предупреждение о низком разрешении */}
                    {photo.hasLowResolution && (
                      <div className="absolute bottom-2 right-2 bg-yellow-500/90 text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold backdrop-blur-sm">
                        !
                      </div>
                    )}
                  </div>

                  {/* Настройки печати */}
                  <div className="p-3 space-y-2">
                    <div className="text-sm font-medium">
                      {photo.printSize.label}
                    </div>
                    
                    <div className="text-xs text-gray-400">
                      {photo.paperType}
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={photo.printSize.label}
                        onChange={(e) => {
                          const newSize = ASPECT_RATIOS.find(r => r.label === e.target.value);
                          if (newSize) {
                            updatePhotoSettings(photo.id, 'printSize', newSize);
                          }
                        }}
                        className="flex-1 text-xs bg-gray-800 border border-gray-700 rounded px-2 py-1"
                      >
                        {ASPECT_RATIOS.map(ratio => (
                          <option key={ratio.label} value={ratio.label}>
                            {ratio.label}
                          </option>
                        ))}
                      </select>
                      
                      <input
                        type="number"
                        value={photo.quantity}
                        onChange={(e) => updatePhotoSettings(photo.id, 'quantity', parseInt(e.target.value) || 1)}
                        min="1"
                        max="100"
                        className="w-12 text-xs bg-gray-800 border border-gray-700 rounded px-1 py-1 text-center"
                      />
                    </div>

                    <select
                      value={photo.paperType}
                      onChange={(e) => updatePhotoSettings(photo.id, 'paperType', e.target.value)}
                      className="w-full text-xs bg-gray-800 border border-gray-700 rounded px-2 py-1"
                    >
                      {PAPER_TYPES.map(type => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Загрузка файлов */
            <div className="bg-gray-900 border-2 border-dashed border-gray-700 rounded-2xl p-12 text-center hover:border-blue-500 transition-all">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">Загрузите фотографии</h3>
              <p className="text-gray-400 mb-6">
                Поддерживаемые форматы: JPG, PNG, WEBP<br />
                Можно выбрать несколько файлов одновременно
              </p>
              <label className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold cursor-pointer transition-all shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80">
                <span>Выбрать файлы</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={onFileChange}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {/* Плавающая кнопка добавления */}
          {photos.length > 0 && (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-all z-40"
              title="Добавить еще фото"
            >
              +
            </button>
          )}

          {/* Скрытый input для добавления файлов */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={onFileChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Модальное окно редактирования */}
      <PhotoEditModal
        photo={editingPhoto}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingPhoto(null);
        }}
        onSave={saveEditedPhoto}
      />
    </div>
  );
}
