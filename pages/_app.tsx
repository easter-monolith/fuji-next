import '../styles/globals.scss'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { detectProvider, MarinaProvider } from 'marina-provider';

function MyApp({ Component, pageProps }: AppProps) {
  const [wallet, setWallet] = useState(false)
  pageProps = { ...pageProps, wallet } // to cause re-render

  useEffect(() => {
    (async () => {
      const marina = await detectProvider('marina')
      if (wallet) await marina.enable()
      else await marina.disable()
    })()
  }, [wallet])

  return (
    <Layout wallet={wallet} setWallet={setWallet}>
      <Head>
        <title>Fuji Money</title>
        <meta name="description" content="Fuji Money" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
