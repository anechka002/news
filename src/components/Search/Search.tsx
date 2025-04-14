import React, { ChangeEvent } from 'react'
import s from './Search.module.css'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { selectKeywords, setKeywords } from '@/model/newsSlice'

export const Search = () => {

  const keywords = useAppSelector(selectKeywords)

  const dispatch = useAppDispatch()

  const handleKeywords = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setKeywords(e.target.value))
    // setKeywords(e.target.value)
  }

  return (
    <div className={s.search}>
      <input 
        type="text" 
        value={keywords} 
        className={s.input} 
        onChange={handleKeywords}
        placeholder='Search'
      />
    </div>
  )
}
