import { Link } from '@tanstack/react-router'
import { useOrderData } from './hooks/useOrderData'

const Header = () => {
  const { cart } = useOrderData()

  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Padre Gino's Pizza</h1>
      </Link>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  )
}

export default Header
