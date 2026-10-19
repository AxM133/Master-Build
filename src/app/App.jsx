import { RouterProvider } from 'react-router-dom'
import { QueryProvider } from './providers'
import { router } from './router/router'
import './styles/index.css'

export function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  )
}
