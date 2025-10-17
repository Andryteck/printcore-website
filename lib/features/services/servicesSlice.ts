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
      title: 'Цифровая печать',
      description: 'Оперативные тиражи, стабильный цвет, персонализация',
      category: 'digital',
      image: '/images/digital-print.jpg'
    },
    {
      id: '2',
      title: 'Широкоформатная печать',
      description: 'Баннеры, плакаты больших размеров, интерьерная печать',
      category: 'wide-format',
      image: '/images/wide-format.jpg'
    },
    {
      id: '3',
      title: 'Офсетная печать',
      description: 'Большие тиражи с высоким качеством и экономией',
      category: 'offset',
      image: '/images/offset.jpg'
    },
    {
      id: '4',
      title: 'УФ-печать',
      description: 'Печать на любых поверхностях с защитой от выцветания',
      category: 'uv',
      image: '/images/uv-print.jpg'
    },
    {
      id: '5',
      title: 'Визитки',
      description: 'От стандартных до премиальных с тиснением',
      category: 'business-cards',
      image: '/images/business-cards.jpg'
    },
    {
      id: '6',
      title: 'Дизайн и верстка',
      description: 'Профессиональная разработка макетов',
      category: 'design',
      image: '/images/design.jpg'
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

