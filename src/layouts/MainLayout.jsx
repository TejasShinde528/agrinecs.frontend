import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-rose focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
