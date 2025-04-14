import { BannersList } from '../BannersList/BannersList'
import s from './LatestNews.module.css'
import { useGetLatestNewsQuery } from '@/api/newsApi'


export const LatestNews = () => {

  const {data: banners} = useGetLatestNewsQuery()

  return (
    <section className={s.section}>
      <BannersList banners={banners?.news || []} />
    </section>
  )
}
