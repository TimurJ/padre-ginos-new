interface PastOrdersType {
  order_id: string
  date: string
  time: string
}

export default async function getPastOrders(page: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(`/pastOrdersData-page${page}.json`)
  const data = await response.json()
  return data as PastOrdersType[]
}
