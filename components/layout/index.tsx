import Footer from 'components/footer'
import Navbar from 'components/navbar'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import TradeModal from 'components/modals/trade'
import Breadcrumbs from 'components/breadcrumbs'
import { WalletProvider } from 'components/providers'

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
        <div className="container">
          <Breadcrumbs />
        </div>
        <div className="container">{children}</div>
      </main>
      <Footer />
      <TradeModal />
    </WalletProvider>
  )
}
