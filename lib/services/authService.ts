import { User } from '../features/auth/authSlice';
import { apiClient } from '../api/apiClient';
import { AxiosError } from 'axios';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone?: string;
  password: string;
  userType?: 'individual' | 'legal';
  unp?: string; // УНП для юридических лиц
}

interface AuthResponse {
  user: User;
  token: string;
}

// Обработка ошибок API
const handleApiError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    // Сервер вернул ошибку
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
    
    // Ошибка сети
    if (error.code === 'ERR_NETWORK') {
      return 'Ошибка подключения к серверу. Проверьте, что backend запущен.';
    }
    
    // Другие ошибки
    return error.message || 'Произошла ошибка при выполнении запроса';
  }
  
  return 'Неизвестная ошибка';
};

export const authService = {
  // Регистрация
  async register(data: RegisterData): Promise<User> {
    try {
      const response = await apiClient.post<AuthResponse>('/auth/register', data);
      
      // Сохранение токена
      localStorage.setItem('auth_token', response.data.token);
      
      return response.data.user;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Вход
  async login(credentials: LoginCredentials): Promise<User> {
    try {
      const response = await apiClient.post<AuthResponse>('/auth/login', credentials);
      
      // Сохранение токена
      localStorage.setItem('auth_token', response.data.token);
      
      return response.data.user;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Выход
  async logout(): Promise<void> {
    try {
      // Можно добавить вызов API для инвалидации токена на сервере
      // await apiClient.post('/auth/logout');
      
      localStorage.removeItem('auth_token');
    } catch (error) {
      // Даже если запрос не удался, удаляем токен локально
      localStorage.removeItem('auth_token');
      throw new Error(handleApiError(error));
    }
  },

  // Проверка токена и получение текущего пользователя
  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      return null;
    }

    try {
      // Получаем полные актуальные данные пользователя с сервера
      // Используем /users/me для получения всех полей из БД
      const response = await apiClient.get<User>('/users/me');
      return response.data;
    } catch (error) {
      // Если токен невалиден или истек, удаляем его
      localStorage.removeItem('auth_token');
      return null;
    }
  },

  // Обновление профиля текущего пользователя
  async updateProfile(data: Partial<User>): Promise<User> {
    try {
      // Используем /users/me для обновления собственного профиля
      const response = await apiClient.patch<User>('/users/me', data);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },
};

