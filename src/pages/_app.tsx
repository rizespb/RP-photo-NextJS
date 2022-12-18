import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import { progressBarColor } from '@constants'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Катерина Петрова Фотограф</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NextNProgress color={progressBarColor} startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
