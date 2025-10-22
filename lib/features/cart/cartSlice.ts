import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  serviceId: string;
  title: string;
  quantity: number;
  price: number;
  options?: Record<string, any>;
  image?: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
  isOpen: boolean;
}

// Загрузка корзины из localStorage
const loadCartFromStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

// Сохранение корзины в localStorage
const saveCartToStorage = (items: CartItem[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('cart', JSON.stringify(items));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

// Вычисление итоговой суммы
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const initialState: CartState = {
  items: [],
  total: 0,
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Инициализация корзины из localStorage
    initializeCart: (state) => {
      state.items = loadCartFromStorage();
      state.total = calculateTotal(state.items);
    },
    
    // Добавить товар в корзину
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      
      state.total = calculateTotal(state.items);
      saveCartToStorage(state.items);
    },
    
    // Удалить товар из корзины
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = calculateTotal(state.items);
      saveCartToStorage(state.items);
    },
    
    // Обновить количество товара
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        state.total = calculateTotal(state.items);
        saveCartToStorage(state.items);
      }
    },
    
    // Очистить корзину
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      saveCartToStorage([]);
    },
    
    // Переключить видимость корзины
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    
    // Открыть корзину
    openCart: (state) => {
      state.isOpen = true;
    },
    
    // Закрыть корзину
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  initializeCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = cartSlice.actions;

export default cartSlice.reducer;

