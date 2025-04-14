import { PAGE_SIZE } from "@/constans";
import { CategoriesType, News } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NewsState = {
  news: Array<News>;
  filters: {
    page_number: number;
    page_size: number;
    category: CategoriesType | null;
    keywords: string;
  };
  currentPage: number;
  selectedCategory: CategoriesType | null;
  keywords: string;
}

const initialState: NewsState = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null ,
    keywords: '',
  },
  currentPage: 1,
  selectedCategory: null,
  keywords: '',
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<News[]>) => {
      state.news = action.payload
    },
    setFilters: (state, action: PayloadAction<{key: string, value: string | number | null}>) => {
      const { key, value } = action.payload
      state.filters = {...state.filters, [key]: value}
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setSelectedCategory: (state, action: PayloadAction<CategoriesType | null> ) => {
      state.selectedCategory = action.payload
    },
    setKeywords: (state, action: PayloadAction<string>) => {
      state.keywords = action.payload
    }
  },
  selectors: {
    selectNews: state => state.news,
    selectFilters: state => state.filters,
    selectCurrentPage: state => state.currentPage,
    selectCategories: state => state.selectedCategory,
    selectKeywords: state => state.keywords,
  }
})

export const { setNews, setFilters, setCurrentPage, setSelectedCategory, setKeywords } = newsSlice.actions;
export const {selectNews, selectFilters, selectCurrentPage, selectCategories, selectKeywords} = newsSlice.selectors;
export const NewsReducer = newsSlice.reducer; 