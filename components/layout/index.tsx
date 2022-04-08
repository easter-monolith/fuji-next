import Footer from '../footer'
import Navbar from '../navbar'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import TradeModal from '../modals/trade'
import Breadcrumbs from '../breadcrumbs'

interface LayoutProps {
  children: ReactNode
  setWallet: any
  wallet: boolean
}

export default function Layout({ children, setWallet, wallet }: LayoutProps) {
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
      <Navbar wallet={wallet} setWallet={setWallet} />
      <main>
        <div className="container"><Breadcrumbs /></div>
        <div className="container">{children}</div>
      </main>
      <Footer />
      <TradeModal />
    </>
  )
}
