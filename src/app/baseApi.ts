import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ["News"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({})
})