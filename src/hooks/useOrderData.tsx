import { useContext } from 'react'
import { OrderDataContext } from '../context/OrderDataContext'

export const useOrderData = () => {
  const context = useContext(OrderDataContext)

  if (!context) {
    throw new Error('useOrderData must be used within a OrderDataProvider')
  }

  return context
}
