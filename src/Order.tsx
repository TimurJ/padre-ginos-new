import { useEffect, useState } from 'react'
import Pizza from './Pizza'
import { intl } from './utils'

interface PizzaType {
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

type PizzaSizesType = keyof PizzaType['sizes']

const Order = () => {
  const [pizzaTypes, setPizzaTypes] = useState<PizzaType[]>([])
  const [pizzaType, setPizzaType] = useState('pepperoni')
  const [pizzaSize, setPizzaSize] = useState<PizzaSizesType>('M')
  const [loading, setLoading] = useState(true)

  let price: string = '0'
  let selectedPizza: PizzaType | undefined

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizza.id === pizzaType)
    if (selectedPizza) {
      price = intl.format(selectedPizza.sizes[pizzaSize])
    }
  }

  async function fetchPizzaTypes() {
    const response = await fetch('/pizzaData.json')
    const data = await response.json()
    setPizzaTypes(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPizzaTypes()
  }, [])

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === 'S'}
                  onChange={() => setPizzaSize('S')}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === 'M'}
                  onChange={() => setPizzaSize('M')}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === 'L'}
                  onChange={() => setPizzaSize('L')}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        <div className="order-pizza">
          <Pizza
            name={selectedPizza?.name}
            description={selectedPizza?.description}
            image={selectedPizza?.image}
          />
          <p>{price}</p>
        </div>
      </form>
    </div>
  )
}

export default Order
