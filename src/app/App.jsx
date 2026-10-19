import { HomePage } from '@/pages/home'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { QueryProvider } from './providers'
import './styles/index.css'

export function App() {
  return (
    <QueryProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HomePage />
        </main>
        <Footer />
      </div>
    </QueryProvider>
  )
}
