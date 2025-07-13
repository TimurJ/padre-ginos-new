import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OrderDataProvider from './context/OrderDataProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OrderDataProvider>
      <App />
    </OrderDataProvider>
  </StrictMode>
)
