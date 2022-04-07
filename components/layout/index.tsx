import Footer from '../footer'
import Navbar from '../navbar'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import TradeModal from '../modals/trade'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { route } = useRouter()
  if (route === '/') {
    return (
      <main>
        <div className="container">{children}</div>
      </main>
    )
  }
  return (
    <>
      <Navbar />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
      <TradeModal />
    </>
  )
}
