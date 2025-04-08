import { News } from '@/types'
import s from './NewsItem.module.css'
import { formatTimeAgo } from '@/helpers'

type Props = {
  item: News
}

export const NewsItem = ({item}: Props) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper} style={{backgroundImage: `url(${item.image})`}}></div>
      <div className={s.info}>
        <h3 className={s.title}>{item.title}</h3>
        <p className={s.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
      </div>        
    </li>
  )
}
