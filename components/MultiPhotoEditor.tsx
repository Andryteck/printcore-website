'use client';

import React, { useState, useCallback, useRef } from 'react';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop';

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

// Функция для создания изображения из canvas
const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

// Функция для получения обрезанного изображения
async function getCroppedImg(
  imageSrc: string,
  pixelCrop: Area,
  rotation = 0
): Promise<string> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Не удалось создать canvas context');
  }

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  canvas.width = safeArea;
  canvas.height = safeArea;

  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.translate(-safeArea / 2, -safeArea / 2);

  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  );

  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  );

  return canvas.toDataURL('image/jpeg', 0.95);
}

// Компонент для редактирования отдельной фотографии
function PhotoEditModal({ 
  photo, 
  isOpen, 
  onClose, 
  onSave 
}: { 
  photo: Photo | null; 
  isOpen: boolean; 
  onClose: () => void; 
  onSave: (photoId: string, croppedImage: string) => void;
}) {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleSave = useCallback(async () => {
    if (!photo || !croppedAreaPixels) return;

    try {
      const croppedImageUrl = await getCroppedImg(
        photo.preview,
        croppedAreaPixels,
        rotation
      );
      onSave(photo.id, croppedImageUrl);
      onClose();
    } catch (e) {
      console.error('Ошибка при обрезке:', e);
    }
  }, [photo, croppedAreaPixels, rotation, onSave, onClose]);

  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Заголовок */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Редактирование фото</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Область редактирования */}
        <div className="p-6">
          <div className="relative w-full h-[400px] bg-black rounded-lg overflow-hidden mb-6">
            <Cropper
              image={photo.preview}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={photo.printSize.value}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              onRotationChange={setRotation}
            />
          </div>

          {/* Контроллы */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Масштаб: {zoom.toFixed(1)}x
              </label>
              <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Поворот: {rotation}°
              </label>
              <input
                type="range"
                value={rotation}
                min={0}
                max={360}
                step={1}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>

          {/* Кнопки */}
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Сохранить изменения
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all"
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
