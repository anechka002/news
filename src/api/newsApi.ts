import { baseApi } from "@/app/baseApi";
import { CategoriesApiResponse, NewsApiResponse, ParamsType } from "@/types";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, ParamsType>({
      query: (params) => {
        const {
          page_number = 1,
          page_size = 10,
          category,
          keywords,
        } = params || {};
        return {
          url: `/search?apiKey=${API_KEY}`,
          params: {
            page_number,
            page_size,
            category,
            keywords,
          },
        }
      },
      // providesTags: ["News"],
    }),
    getLatestNews: builder.query<NewsApiResponse, void>({
      query: () => `/latest-news?apiKey=${API_KEY}`,
      // providesTags: ["News"],
    }),
    getCategories: builder.query<CategoriesApiResponse, void>({
      query: () => `/available/categories?apiKey=${API_KEY}`,
      // providesTags: ["News"],
    }), 
  })
})

export const { useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery} = newsApi;  // eslint-disable-line @typescript-eslint/no-unused