import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Service } from '../services/servicesSlice';

export interface FavoritesState {
  items: Service[];
}

// Загрузка избранного из localStorage
const loadFavoritesFromStorage = (): Service[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading favorites from localStorage:', error);
    return [];
  }
};

// Сохранение избранного в localStorage
const saveFavoritesToStorage = (favorites: Service[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites to localStorage:', error);
  }
};

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // Инициализация избранного из localStorage
    initializeFavorites: (state) => {
      state.items = loadFavoritesFromStorage();
    },
    
    // Добавить в избранное
    addToFavorites: (state, action: PayloadAction<Service>) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        saveFavoritesToStorage(state.items);
      }
    },
    
    // Удалить из избранного
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveFavoritesToStorage(state.items);
    },
    
    // Переключить состояние избранного
    toggleFavorite: (state, action: PayloadAction<Service>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
      saveFavoritesToStorage(state.items);
    },
    
    // Очистить все избранное
    clearFavorites: (state) => {
      state.items = [];
      saveFavoritesToStorage([]);
    },
  },
});

export const {
  initializeFavorites,
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  clearFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;

