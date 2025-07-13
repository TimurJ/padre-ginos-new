interface OrderItemsType {
  pizzaTypeId: string
  name: string
  category: string
  description: string
  quantity: number
  price: number
  total: number
  size: string
  image: string
}

interface PastOrderType {
  total: number
  order_id: number
  date: string
  time: string
  orderItems: OrderItemsType[]
}

export const getPastOrder = async (order: string | undefined) => {
  const response = await fetch(`/past-orders/${order}.json`)
  const data = await response.json()
  return data as PastOrderType
}
