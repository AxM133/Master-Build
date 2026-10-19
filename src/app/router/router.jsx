import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout'
import { ROUTES } from './routes'

export const router = createBrowserRouter([{ element: <RootLayout />, children: ROUTES }])
