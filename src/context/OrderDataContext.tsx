import { createContext } from 'react'
import type { CartType } from '../types'

interface OrderDataStateType {
  order: CartType[][]
  addOrder: (value: CartType[]) => void
}

export const OrderDataContext = createContext<OrderDataStateType | undefined>(undefined)
