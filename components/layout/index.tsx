import Footer from '../footer'
import Navbar from '../navbar'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import TradeModal from '../modals/trade'
import Breadcrumbs from '../breadcrumbs'
import { WalletProvider } from '../providers'

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
    <WalletProvider>
      <Navbar />
      <main>
        <div className="container"><Breadcrumbs /></div>
        <div className="container">{children}</div>
      </main>
      <Footer />
      <TradeModal />
    </WalletProvider>
  )
}
