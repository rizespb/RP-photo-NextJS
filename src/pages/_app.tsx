import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Катерина Петрова Фотограф</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
