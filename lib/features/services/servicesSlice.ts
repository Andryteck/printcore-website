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
      description: 'Профессиональная печать фотографий в отличном качестве',
      category: 'photo',
      price: 1.2,
      image: '/images/gallery/IMG_4678.JPG'
    },
    {
      id: '2',
      title: 'Полиграфия',
      description: 'Визитки, листовки, буклеты и каталоги. Широкий выбор материалов и форматов',
      category: 'poligrafy',
      price: 0.5,
      image: '/images/gallery/IMG_4758.JPG'
    },
    {
      id: '3',
      title: 'Широкоформатная печать',
      description: 'Баннеры, плакаты больших размеров для наружной и внутренней рекламы',
      category: 'wide-format',
      price: 2,
      image: '/images/gallery/IMG_4689.JPG'
    },
    {
      id: '4',
      title: 'Переплетные работы',
      description: 'Брошюрование, переплет документов, твердый и мягкий переплет',
      category: 'binding',
      price: 7,
      image: '/images/gallery/IMG_4698.JPG'
    },
    {
      id: '5',
      title: 'Дизайн полиграфии',
      description: 'Профессиональная разработка макетов любой сложности',
      category: 'design',
      price: 17,
      image: '/images/gallery/IMG_4685.JPG'
    },
    {
      id: '6',
      title: 'Печать документов',
      description: 'Быстрая печать документов любых форматов в черно-белом и цветном исполнении',
      category: 'documents',
      price: 0.3,
      image: '/images/gallery/IMG_4690.JPG'
    },
    {
      id: '7',
      title: 'Наклейки, этикетки',
      description: 'Изготовление наклеек и этикеток любых размеров и форм',
      category: 'stickers',
      price: 0.4,
      image: '/images/gallery/IMG_4696.JPG'
    },
    {
      id: '8',
      title: 'Сувениры и брендирование',
      description: 'Брендирование сувенирной продукции: кружки, ручки, футболки и многое другое',
      category: 'souvenirs',
      price: 25,
      image: '/images/gallery/IMG_4706.JPG'
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

