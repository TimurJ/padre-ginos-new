export interface PizzaType {
  id: string
  name: string
  category: string
  description: string
  image: string
  sizes: {
    S: number
    M: number
    L: number
  }
}

export interface CartType {
  pizza: PizzaType | undefined
  size: PizzaSizesType
  price: string
}

export type PizzaSizesType = keyof PizzaType['sizes']
