import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../Header'
import PizzaOfTheDay from '../PizzaOfTheDay'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <PizzaOfTheDay />
      </div>
      <TanStackRouterDevtools />
    </>
  )
}
