import { NewsBanner, NewsList } from '@/components'
import s from './Main.module.css'
import { useGetNewsQuery } from '@/api/newsApi'

export const Main = () => {
  const {data: news, error, isLoading} = useGetNewsQuery()

  if(isLoading) return <div>Loading...</div>
  // if(error) return <div>Error: {error.message}</div>

  return (
    <main className={s.main}>
      {news && news.news && news.news.length > 0 ? <NewsBanner item={news.news[0]} /> : null} 

      <NewsList news={news?.news || []} />
    </main>
  )
}
