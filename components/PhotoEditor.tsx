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

// Предустановленные размеры для печати
const ASPECT_RATIOS: AspectRatio[] = [
  { label: 'Свободный', value: 0, description: 'Любой размер' },
  { label: '10x15 см', value: 10 / 15, description: 'Стандартное фото' },
  { label: '13x18 см', value: 13 / 18, description: 'Фото' },
  { label: '20x30 см', value: 20 / 30, description: 'Фото A4' },
  { label: '30x40 см', value: 30 / 40, description: 'Большое фото' },
  { label: 'Квадрат 1:1', value: 1, description: 'Instagram формат' },
  { label: 'A4 (21x29.7)', value: 21 / 29.7, description: 'Стандартный лист' },
  { label: 'Визитка (9x5)', value: 9 / 5, description: 'Визитная карточка' },
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

export default function PhotoEditor() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<AspectRatio>(
    ASPECT_RATIOS[0]
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Обработчик загрузки файла
  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImageSrc(reader.result as string);
        setCroppedImage(null);
      });
      reader.readAsDataURL(file);
    }
  }, []);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = useCallback(async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    try {
      const croppedImageUrl = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImageUrl);
    } catch (e) {
      console.error('Ошибка при обрезке:', e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const handleDownload = () => {
    if (!croppedImage) return;

    const link = document.createElement('a');
    link.download = `cropped-image-${Date.now()}.jpg`;
    link.href = croppedImage;
    link.click();
  };

  const handleReset = () => {
    setImageSrc(null);
    setCroppedImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Редактор фотографий
            </h1>
            <p className="text-gray-400 text-lg">
              Загрузите фото, выберите нужный размер и обрежьте его для печати
            </p>
          </div>

          {/* Загрузка файла */}
          {!imageSrc && (
            <div className="bg-gray-900 border-2 border-dashed border-gray-700 rounded-2xl p-12 text-center hover:border-blue-500 transition-all">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">Загрузите фотографию</h3>
              <p className="text-gray-400 mb-6">
                Поддерживаемые форматы: JPG, PNG, WEBP
              </p>
              <label className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold cursor-pointer transition-all shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80">
                <span>Выбрать файл</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {/* Редактор */}
          {imageSrc && !croppedImage && (
            <div className="space-y-6">
              {/* Выбор соотношения сторон */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Выберите размер для печати:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {ASPECT_RATIOS.map((ratio) => (
                    <button
                      key={ratio.label}
                      onClick={() => setSelectedAspectRatio(ratio)}
                      className={`p-3 rounded-lg border-2 transition-all text-left ${
                        selectedAspectRatio.label === ratio.label
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="font-semibold text-sm">{ratio.label}</div>
                      <div className="text-xs text-gray-400">{ratio.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Область кадрирования */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="relative w-full h-[500px] bg-black rounded-lg overflow-hidden">
                  <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    rotation={rotation}
                    aspect={selectedAspectRatio.value || undefined}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    onRotationChange={setRotation}
                  />
                </div>

                {/* Контроллы */}
                <div className="mt-6 space-y-4">
                  {/* Zoom */}
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

                  {/* Rotation */}
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

                {/* Кнопки действий */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={showCroppedImage}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    Обрезать фото
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all"
                  >
                    Загрузить другое фото
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Результат */}
          {croppedImage && (
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Результат:</h3>
                <div className="bg-black rounded-lg p-4 flex items-center justify-center">
                  <img
                    src={croppedImage}
                    alt="Обрезанное изображение"
                    className="max-w-full h-auto rounded"
                  />
                </div>

                {/* Кнопки действий */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={handleDownload}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <span>📥</span>
                    <span>Скачать фото</span>
                  </button>
                  <button
                    onClick={() => setCroppedImage(null)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
                  >
                    Редактировать снова
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all"
                  >
                    Загрузить новое фото
                  </button>
                </div>
              </div>

              {/* Информация */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <p className="text-blue-300 text-sm">
                  💡 <strong>Совет:</strong> Теперь вы можете скачать фото и использовать его для заказа печати!
                </p>
              </div>
            </div>
          )}

          {/* Информационный блок */}
          {!imageSrc && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-3">📐</div>
                <h4 className="font-semibold mb-2">Точные размеры</h4>
                <p className="text-gray-400 text-sm">
                  Выберите нужный формат печати и обрежьте фото идеально под размер
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="font-semibold mb-2">Поворот и масштаб</h4>
                <p className="text-gray-400 text-sm">
                  Настройте положение и размер изображения для лучшего результата
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-3">💾</div>
                <h4 className="font-semibold mb-2">Скачивание</h4>
                <p className="text-gray-400 text-sm">
                  Сохраните готовое фото в высоком качестве для печати
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

