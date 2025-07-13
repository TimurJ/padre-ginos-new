import { useMemo, useState } from 'react'
import { OrderDataContext } from './OrderDataContext'
import type { CartType } from '../types'

const OrderDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartType[]>([])
  const [pastOrders, setPastOrders] = useState<CartType[][]>([])

  const addOrder = (order: CartType[]) => {
    setPastOrders((previousOrder) => [...previousOrder, order])
  }

  const contextValue = useMemo(() => ({ pastOrders, cart, addOrder, setCart }), [pastOrders, cart])
  return <OrderDataContext.Provider value={contextValue}>{children}</OrderDataContext.Provider>
}

export default OrderDataProvider
