import Head from 'next/head'

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import dynamic from 'next/dynamic'
import Header from './Header'

import { useContextEcommerce } from '../context/ecommerceProv'
// import SnipcartBottom from './ecommerce/snipcartBottom'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/ecommerce/snipcartBottom')
  // { ssr: false }
)

export const siteTitle = ' - Nornand'

export default function Layout({ children }) {
  const [commerce] = useContextEcommerce()

  return (
    <>
      <SkipNavLink>passer au contenu</SkipNavLink>
      <div className="relative">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Création de site sur mesure" />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />

          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css" />
        </Head>
        <Header />
        <SkipNavContent>
          <main>{children}</main>
        </SkipNavContent>

        {commerce ? <DynamicComponentWithNoSSR commerce={commerce} /> : null}
      </div>
    </>
  )
}
