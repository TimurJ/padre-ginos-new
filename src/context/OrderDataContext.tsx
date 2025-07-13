import { createContext } from 'react'
import type { CartType } from '../types'

interface OrderDataStateType {
  pastOrders: CartType[][]
  cart: CartType[]
  addOrder: (value: CartType[]) => void
  setCart: (value: CartType[]) => void
}

export const OrderDataContext = createContext<OrderDataStateType | undefined>(undefined)
