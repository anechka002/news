import s from './BannersList.module.css'
import { News } from '@/types'
import { NewsBanner } from '../NewsBanner/NewsBanner'

type Props = {
  banners: News[]
}

export const BannersList = ({banners}: Props) => {

  return (
    <ul className={s.banners}>
      {banners?.map(banner => {
        return (
          <NewsBanner key={banner.id} item={banner} />
        )
      })}
    </ul>
  )
}

// MasteR!123
