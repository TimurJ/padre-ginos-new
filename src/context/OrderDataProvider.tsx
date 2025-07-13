import { useMemo, useState } from 'react'
import { OrderDataContext } from './OrderDataContext'
import type { CartType } from '../types'

const OrderDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartType[]>([])

  console.log(cart)

  const contextValue = useMemo(() => ({ cart, setCart }), [cart])
  return <OrderDataContext.Provider value={contextValue}>{children}</OrderDataContext.Provider>
}

export default OrderDataProvider
