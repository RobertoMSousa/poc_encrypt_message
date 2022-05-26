import { AppProps } from 'next/app'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link
          rel="shortcut icon"
          href="/img/icon-192.png"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="A simple boilerplate for next.js" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

Sentry.init({
  dsn: 'https://608d384bed1e4ae281c172087d82b5f2@o1260429.ingest.sentry.io/6436566',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
})

export default App
