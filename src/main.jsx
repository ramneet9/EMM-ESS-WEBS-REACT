import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ProductsPage from './pages/Products.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/products', element: <ProductsPage /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
