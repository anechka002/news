import { useAppDispatch, useAppSelector } from '@/hooks'
import s from './Categories.module.css'
import { selectCategories, setSelectedCategory } from '@/model/newsSlice'
import { CategoriesApiResponse, CategoriesType } from '@/types'
import { ForwardedRef, forwardRef } from 'react'

type Props = {
  categories: CategoriesApiResponse 
}

export const Categories = forwardRef(({categories}: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const selectedCategory = useAppSelector(selectCategories)
  
  const dispatch = useAppDispatch()

  const handleSelectedCategory = (category: CategoriesType | null) => {
    dispatch(setSelectedCategory(category))
  }

  return (
    <div ref={ref} className={s.categories}>
      <button 
        className={!selectedCategory ? s.active : s.item} 
        onClick={() => handleSelectedCategory(null)}
      >
        All
      </button>
      {categories?.categories?.map(category => {
        return (
          <button 
            key={category}
            className={selectedCategory === category ? s.active : s.item} 
            onClick={() => handleSelectedCategory(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
})

Categories.displayName = 'Categories'
