import { useMemo, useState } from 'react'
import { OrderDataContext } from './OrderDataContext'
import type { CartType } from '../types'

const OrderDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [order, setOrder] = useState<CartType[][]>([])

  const addOrder = (order: CartType[]) => {
    setOrder((previousOrder) => [...previousOrder, order])
  }

  const contextValue = useMemo(() => ({ order, addOrder }), [order])
  return <OrderDataContext.Provider value={contextValue}>{children}</OrderDataContext.Provider>
}

export default OrderDataProvider
