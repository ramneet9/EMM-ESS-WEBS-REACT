import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ProductsPage from './pages/Products.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const router = createHashRouter([
  { 
    path: '/', 
    element: <App />,
    errorElement: <ErrorBoundary><div>Page not found</div></ErrorBoundary>
  },
  { 
    path: '/products', 
    element: <ProductsPage />,
    errorElement: <ErrorBoundary><div>Products page not found</div></ErrorBoundary>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)
