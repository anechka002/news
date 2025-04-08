import { BaseResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getNews: builder.query<BaseResponse, void>({
      query: () => `/latest-news?apiKey=${API_KEY}`,
      providesTags: ["News"],
    }),
    
  })
})

export const { useGetNewsQuery } = newsApi;