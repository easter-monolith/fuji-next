import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <section>
      <div className="has-text-centered">
        <p className="mt-6">
          <Image
            className="logo"
            src="/images/fuji-logo-128.png"
            alt="fuji logo"
            width="430"
            height="128"
          />
        </p>
        <p className="links-intro">Choose any link below to access the decentralized web app</p>
        <div className="links-wrapper">
          <p>
            <Link href="/dashboard">
              <a>https://fuji.money</a>
            </Link>
          </p>
          <p>
            <a href="https://mirrorprotocol.is">
              https://mirrorprotocol.is
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .links-intro {
          color: #2c024d;
          display: inline-block;
          font-size: 24px;
          font-weight: 400;
          margin: auto;
          max-width: 500px;
        }
        .logo {
          display: block;
          margin: 80px auto;
        }
        .navbar {
          visibility: hidden;
        }
        .section {
          background: linear-gradient(180deg, #fffbf8 0%, #ffeae5 100%);
          min-height: 100vh;
        }
      `}</style>
    </section>
  )
}

export default Home
