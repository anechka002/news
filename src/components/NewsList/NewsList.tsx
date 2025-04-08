import { News } from '@/types'
import s from './NewsList.module.css'
import { NewsItem } from '../NewsItem/NewsItem'

type Props = {
  news: News[]
}

export const NewsList = ({news}: Props) => {
  return (
    <ul className={s.list}>
      {news.map(el => {
        return <NewsItem key={el.id} item={el} />
      })}
    </ul>
  )
}
