import { NewsList } from '../NewsList/NewsList'
import s from './NewsByFilters.module.css'
import { NewsFilters, PaginationWrapper } from '..'
import { useAppSelector } from '@/hooks';
import { selectCategories, selectCurrentPage, selectKeywords } from '@/model/newsSlice';
import { PAGE_SIZE } from '@/constans';
import { useDebounce } from '@/hooks/useDebounce';
import { useGetNewsQuery } from '@/api/newsApi'

export const NewsByFilters = () => {

  const currentPage = useAppSelector(selectCurrentPage);
  const selectedCategory = useAppSelector(selectCategories)
  const keywords = useAppSelector(selectKeywords)

  const debouncedKeywords = useDebounce(keywords, 1500)

  const {data: news, isLoading, isFetching} = useGetNewsQuery(
    {
      page_number: currentPage,
      page_size: PAGE_SIZE, 
      category: selectedCategory,
      keywords: debouncedKeywords
    }
  )

  return (
    <section className={s.section}>
      <NewsFilters/>

      <PaginationWrapper top bottom>
        <NewsList news={news?.news || []} />
      </PaginationWrapper>

    </section>
  )
}
