import { useEffect, useState } from 'react'
import Pizza from './Pizza'
import { intl } from './utils'
import type { CartType, PizzaSizesType, PizzaType } from './types'
import Cart from './Cart'
import { useOrderData } from './hooks/useOrderData'

const Order = () => {
  const [pizzaTypes, setPizzaTypes] = useState<PizzaType[]>([])
  const [pizzaType, setPizzaType] = useState('pepperoni')
  const [pizzaSize, setPizzaSize] = useState<PizzaSizesType>('M')
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState<CartType[]>([])
  const { addOrder } = useOrderData()

  function checkout() {
    setLoading(true)
    addOrder(cart)
    setCart([])
    setLoading(false)
  }

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
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }])
          }}
        >
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
                    onChange={() => setPizzaSize('S')}
                    checked={pizzaSize === 'S'}
                    type="radio"
                    name="pizza-size"
                    value="S"
                    id="pizza-s"
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    onChange={() => setPizzaSize('M')}
                    checked={pizzaSize === 'M'}
                    type="radio"
                    name="pizza-size"
                    value="M"
                    id="pizza-m"
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    onChange={() => setPizzaSize('L')}
                    checked={pizzaSize === 'L'}
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
          {loading ? (
            <h3>LOADING …</h3>
          ) : (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza?.name}
                description={selectedPizza?.description}
                image={selectedPizza?.image}
              />
              <p>{price}</p>
            </div>
          )}
        </form>
      </div>
      {loading ? <h2>LOADING …</h2> : <Cart checkout={checkout} cart={cart} />}
    </div>
  )
}

export default Order
