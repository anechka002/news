import { useGetCategoriesQuery } from '@/api/newsApi'
import { Categories, Search, Slider } from '..'
import s from './NewsFilters.module.css'

export const NewsFilters = () => {

  const {data: categories} = useGetCategoriesQuery()

  return (
    <div className={s.filters}>
        {categories ? (
          <Slider>
              <Categories categories={categories} />
          </Slider>
        ) : null}
      <Search/>
    </div>
  )
}
