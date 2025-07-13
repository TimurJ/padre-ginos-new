import { PIZZAS } from './constants'
import Pizza from './Pizza'

function App() {
  return (
    <div>
      {PIZZAS.map((pizza) => {
        return <Pizza name={pizza.name} description={pizza.description} image={pizza.image} />
      })}
    </div>
  )
}

export default App
