import { formatDate } from "@/helpers"
import { useEffect, useState } from "react"
import s from './Header.module.css'

export const Header = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  useEffect(() => {

    const updateDate = () => {
      const newDate = new Date()
      setCurrentDate(prev => {
        // Обновляем только если изменилась дата
        return prev.toDateString() === newDate.toDateString() ? prev : newDate
      })
    }

    // Функция для вычисления времени до следующей полуночи
    const setNextMidnight = () => {
      const now = new Date();
      const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const timeUntilMidnight = nextMidnight.getTime() - now.getTime();
      return timeUntilMidnight;
    };

    // Устанавливаем таймер на следующую полночь
    const timeoutId = setTimeout(() => {
      updateDate();
      setNextMidnight(); // Устанавливаем следующий таймер
    }, setNextMidnight());

    updateDate()

    return () => clearInterval(timeoutId)
  }, [])

  return (
    <header className={s.header}>
      <h1 className={s.title}>NEWS</h1>
      <p className={s.date}>{formatDate(currentDate)}</p>
    </header>
  )
}
