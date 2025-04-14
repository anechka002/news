import { HTMLAttributes, useRef } from 'react'
import s from './Slider.module.css'
import React from 'react'

type Props = {
  children: React.ReactElement<HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLDivElement> }>;
  step?: number
}

export const Slider = ({children, step = 150}: Props) => {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step
  }

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step
  }

  return (
    <div className={s.slider}>
      <button onClick={scrollLeft} className={s.arrow}>{'<'}</button>
        {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={s.arrow}>{'>'}</button>
    </div>
  )
}

