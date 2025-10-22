/**
 * Утилита для блокировки прокрутки с компенсацией скроллбара
 * Предотвращает смещение контента при открытии модальных окон
 */

let scrollbarWidth: number | null = null;
let lockedCount = 0;
let scrollY = 0;

/**
 * Вычисляет ширину скроллбара
 */
function getScrollbarWidth(): number {
  if (scrollbarWidth !== null) {
    return scrollbarWidth;
  }

  // Создаем временный элемент для измерения скроллбара
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.left = '-9999px';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '100px';
  outer.appendChild(inner);

  scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);

  return scrollbarWidth;
}

/**
 * Блокирует прокрутку страницы с компенсацией скроллбара
 */
export function lockScroll(): void {
  if (lockedCount === 0) {
    const scrollBarWidth = getScrollbarWidth();
    const hasScroll = document.body.scrollHeight > window.innerHeight;

    if (hasScroll && scrollBarWidth > 0) {
      // Устанавливаем CSS переменную для ширины скроллбара
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`);
      
      // Добавляем класс для применения стилей
      document.documentElement.classList.add('scroll-locked');
    }

    // Блокируем прокрутку на html элементе
    document.documentElement.style.overflow = 'hidden';
  }

  lockedCount++;
}

/**
 * Разблокирует прокрутку страницы
 */
export function unlockScroll(): void {
  lockedCount = Math.max(0, lockedCount - 1);

  if (lockedCount === 0) {
    document.documentElement.style.overflow = '';
    
    // Убираем класс и CSS переменную
    document.documentElement.classList.remove('scroll-locked');
    document.documentElement.style.removeProperty('--scrollbar-width');
  }
}

/**
 * Сбрасывает счетчик блокировок (использовать с осторожностью)
 */
export function resetScrollLock(): void {
  lockedCount = 0;
  document.documentElement.style.overflow = '';
  document.documentElement.classList.remove('scroll-locked');
  document.documentElement.style.removeProperty('--scrollbar-width');
}

/**
 * Проверяет, заблокирована ли прокрутка
 */
export function isScrollLocked(): boolean {
  return lockedCount > 0;
}

