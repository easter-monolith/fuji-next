import 'styles/globals.scss'
import Layout from 'components/layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
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
