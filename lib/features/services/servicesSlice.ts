import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price?: number;
  image?: string;
}

export interface ServicesState {
  services: Service[];
  selectedCategory: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  services: [
    {
      id: '1',
      title: 'Фотопечать',
      description: 'Профессиональная печать фотографий',
      category: 'photo',
      price: 1.2,
      image: 'https://static.printcore.by/content/IMG_4678.JPG'
    },
    {
      id: '2',
      title: 'Полиграфия',
      description: 'Визитки, листовки, буклеты и каталоги',
      category: 'poligrafy',
      price: 0.5,
      image: 'https://static.printcore.by/content/IMG_4758.JPG'
    },
    {
      id: '3',
      title: 'Широкоформатная печать',
      description: 'Баннеры, плакаты больших размеров',
      category: 'wide-format',
      price: 2,
      image: 'https://static.printcore.by/content/IMG_4689.JPG'
    },
    {
      id: '4',
      title: 'Переплетные работы',
      description: 'Брошюрование, переплет документов',
      category: 'binding',
      price: 7,
      image: 'https://static.printcore.by/content/IMG_4698.JPG'
    },
    {
      id: '5',
      title: 'Дизайн полиграфии',
      description: 'Профессиональная разработка макетов',
      category: 'design',
      price: 17,
      image: 'https://static.printcore.by/content/IMG_4685.JPG'
    },
    {
      id: '6',
      title: 'Печать документов',
      description: 'Быстрая печать документов любых форматов',
      category: 'documents',
      price: 0.3,
      image: 'https://static.printcore.by/content/IMG_4690.JPG'
    }
  ],
  selectedCategory: null,
  isLoading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSelectedCategory, setLoading, setError } = servicesSlice.actions;
export default servicesSlice.reducer;

