import { NewsBanner, NewsList } from '@/components'
import s from './Main.module.css'
import { useGetNewsQuery } from '@/api/newsApi'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

export const Main = () => {
  const {data: news, isLoading} = useGetNewsQuery()

  if(isLoading) {
    return (
      <main>
        <Skeleton count={1} height={300} style={{marginBottom: '1rem'}} /> {/* Скелет для NewsBanner */}
        <Skeleton count={10} height={50} style={{marginTop: '1rem'}} /> {/* Скелет для NewsList */}
      </main>
    )
  }

  return (
    <main className={s.main}>
      {news && news.news && news.news.length > 0 ? <NewsBanner item={news.news[0]} /> : null} 

      <NewsList news={news?.news || []} />
    </main>
  )
}
