import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="rgba(0, 0, 0, 1)"></meta>
        <meta content="Software Developer" name="description"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="Zimuzo Obi"></meta>
        <meta property="og:description" content="Software Developer"/>
        <meta property="og:url" content="https://obizimuzo.com/" />
        <meta property="og:title" content="Zimuzo Obi - Software Developer" />
        <meta name="twitter:title" content="Zimuzo Obi - Software Developer"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <title>Zimuzo Obi - Software Developer</title>
      </Head>
  <Component {...pageProps} />
  </>
}
