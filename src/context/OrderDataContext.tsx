import { createContext } from 'react'
import type { CartType } from '../types'

interface OrderDataStateType {
  cart: CartType[]
  setCart: (value: CartType[]) => void
}

export const OrderDataContext = createContext<OrderDataStateType | undefined>(undefined)
