import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CartProvider } from 'react-use-cart'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <div className='font-quicksand'>
            <RouterProvider router={router} />
          </div>
        </CartProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
