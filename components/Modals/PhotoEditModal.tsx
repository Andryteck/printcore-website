'use client';

import React, { useState, useCallback } from 'react';
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

interface PhotoEditModalProps {
  photo: Photo | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (photoId: string, croppedImage: string) => void;
}

export default function PhotoEditModal({ 
  photo, 
  isOpen, 
  onClose, 
  onSave 
}: PhotoEditModalProps) {
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
