import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Импортируем редюсеры
import servicesReducer from './features/services/servicesSlice';
import navigationReducer from './features/navigation/navigationSlice';
import cartReducer from './features/cart/cartSlice';
import authReducer from './features/auth/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      services: servicesReducer,
      navigation: navigationReducer,
      cart: cartReducer,
      auth: authReducer,
    },
  });
};

// Типы для store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Типизированные хуки
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

