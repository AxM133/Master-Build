import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom'
import { CartDrawer } from '@/features/cart'
import { CallbackModal } from '@/features/request-callback'
import { ScrollToTop, Toaster, TopProgressBar } from '@/shared/ui'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export function RootLayout() {
  const navigation = useNavigation()

  return (
    <>
      <TopProgressBar active={navigation.state !== 'idle'} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Перейти к содержимому
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>

      <CartDrawer />
      <CallbackModal />
      <ScrollToTop />
      <Toaster />
      <ScrollRestoration />
    </>
  )
}
