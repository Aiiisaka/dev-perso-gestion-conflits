import '@/styles/globals.css'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import theme from '@/config/theme'

const Header = dynamic(() => import('@/components/layouts/Header'))
const Footer = dynamic(() => import('@/components/layouts/Footer'))

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gestion des conflits</title>
        <meta name="description" content="Gestion des conflits - Comment résoudre des conflits ?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ThemeProvider theme={theme}>
        <Header />
        <CssBaseline />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}
