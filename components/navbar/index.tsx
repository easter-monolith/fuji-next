import Image from 'next/image'
import Link from 'next/link'
import { openModal } from '../../lib/utils'

export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="is-flex is-justify-content-space-between">
        <div>
          <Link href="/">
            <a className="logo">
              <Image alt="fuji logo" height="40" src="/images/fuji-logo-128.png" width="134.375" />
            </a>
          </Link>
        </div>
        <div className="is-flex is-align-content-center">
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
          <a onClick={() => openModal('trade-modal')}>Trade</a>
          <Link href="/borrow">
            <a>Borrow</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        a {
          color: #6b1d9c;
          display: inline-block;
          font-weight: 700;
          margin: auto;
          padding: 20px;
          text-decoration: none;
          transition: color 300ms ease;
        }
        .container {
          margin-bottom: 60px;
          max-height: 40px;
        }
        a.logo {
          max-height: 40px;
          margin-left: -20px;
        }
      `}</style>
    </nav>
  )
}
