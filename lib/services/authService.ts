import { User } from '../features/auth/authSlice';

// Mock API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock database (в реальном проекте это будет API)
const mockUsers: Array<User & { password: string }> = [];

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export const authService = {
  // Регистрация
  async register(data: RegisterData): Promise<User> {
    await delay(1000); // Имитация сетевой задержки

    // Проверка существующего пользователя
    const existingUser = mockUsers.find((u) => u.email === data.email);
    if (existingUser) {
      throw new Error('Пользователь с таким email уже существует');
    }

    // Создание нового пользователя
    const newUser: User & { password: string } = {
      id: Date.now().toString(),
      email: data.email,
      name: data.name,
      phone: data.phone,
      password: data.password, // В реальном проекте хешировать!
    };

    mockUsers.push(newUser);

    // Сохранение в localStorage (имитация токена)
    const token = btoa(JSON.stringify({ userId: newUser.id }));
    localStorage.setItem('auth_token', token);

    // Возвращаем пользователя без пароля
    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  },

  // Вход
  async login(credentials: LoginCredentials): Promise<User> {
    await delay(800); // Имитация сетевой задержки

    // Поиск пользователя
    const user = mockUsers.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error('Неверный email или пароль');
    }

    // Сохранение токена
    const token = btoa(JSON.stringify({ userId: user.id }));
    localStorage.setItem('auth_token', token);

    // Возвращаем пользователя без пароля
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  // Выход
  async logout(): Promise<void> {
    await delay(300);
    localStorage.removeItem('auth_token');
  },

  // Проверка токена и получение пользователя
  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      return null;
    }

    try {
      const decoded = JSON.parse(atob(token));
      const user = mockUsers.find((u) => u.id === decoded.userId);
      
      if (!user) {
        localStorage.removeItem('auth_token');
        return null;
      }

      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      localStorage.removeItem('auth_token');
      return null;
    }
  },

  // Обновление профиля
  async updateProfile(userId: string, data: Partial<User>): Promise<User> {
    await delay(500);

    const userIndex = mockUsers.findIndex((u) => u.id === userId);
    
    if (userIndex === -1) {
      throw new Error('Пользователь не найден');
    }

    // Обновление данных
    mockUsers[userIndex] = {
      ...mockUsers[userIndex],
      ...data,
    };

    const { password, ...userWithoutPassword } = mockUsers[userIndex];
    return userWithoutPassword;
  },
};

// Для тестирования - добавим тестового пользователя
mockUsers.push({
  id: '1',
  email: 'test@printcore.by',
  name: 'Тестовый Пользователь',
  phone: '+375 33 336 5678',
  password: 'test123',
});

