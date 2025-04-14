import { useAppDispatch, useAppSelector } from '@/hooks'
import s from './Pagination.module.css'
import { selectCurrentPage, setCurrentPage } from '@/model/newsSlice'
import { TOTAL_PAGES } from '@/constans'

export const Pagination = () => {

  console.log('Pagination', Pagination)

  const currentPage = useAppSelector(selectCurrentPage)

  const dispatch = useAppDispatch()

  const handleNextPage = () => {
    if(currentPage < TOTAL_PAGES) {
      dispatch(setCurrentPage(currentPage + 1))
    }
  }

  const handlePreviousPage = () => {
    if(currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1))
    }
  }

  const handlePageClick = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber))
  }

  return (
    <div className={s.pagination}>
      <button disabled={currentPage <= 1} onClick={handlePreviousPage} className={s.arrow}>{'<'}</button>
      <div className={s.list}>
        {[...Array(TOTAL_PAGES)].map((_, index) => {
          return <button
                    onClick={() => handlePageClick(index + 1)} 
                    className={s.pageNumber} 
                    key={index}
                    disabled={index + 1 === currentPage}
                  >
                    {index + 1}
                  </button>
        })}
      </div>
      <button disabled={currentPage >= TOTAL_PAGES} onClick={handleNextPage} className={s.arrow}>{'>'}</button>
    </div>
  )
}
