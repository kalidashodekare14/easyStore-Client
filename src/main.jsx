import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CartProvider } from 'react-use-cart'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
const queryClient = new QueryClient()
const helmetContext = {}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <div className='font-quicksand'>
              <RouterProvider router={router} />
            </div>
          </CartProvider>
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
