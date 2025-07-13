import { useEffect, useState } from 'react'
import type { PizzaType } from '../types'

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState<PizzaType | undefined>()

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch('/pizzaData.json')
      const data: PizzaType[] = await response.json()
      const num = Math.round(Math.random() * data.length)
      setPizzaOfTheDay(data[num])
    }

    fetchPizzaOfTheDay()
  }, [])

  return pizzaOfTheDay
}
