export type News = {
  id: string
  title: string
  description: string
  url: string
  author: string
  image: string
  language: string
  category: string[]
  published: string
}

export type BaseResponse = {
  news: News[]
  page: number
  status: string
}