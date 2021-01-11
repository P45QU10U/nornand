import Head from 'next/head'

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import Header from './Header'
import Footer from './Footer'
import { fonts } from './designSystem/theme'

export const appendSiteTitle = ' - PerfCrea'

export default function Skeleton({ children }) {
  return (
    <>
      <SkipNavLink>passer au contenu</SkipNavLink>
      <div className={`relative ${fonts}`}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Création de site web vitrine et e-commerce sur mesure" />

          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css" />
        </Head>
        <Header />
        <SkipNavContent style={{ scrollMarginTop: '12rem' }}>
          <main>{children}</main>
        </SkipNavContent>
        <Footer />
      </div>
    </>
  )
}
