import Head from 'next/head'

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import Menu from './menu'

export const siteTitle = ' - Nornand'

export default function Layout({ children }) {
  return (
    <>
      <SkipNavLink>passer au contenu</SkipNavLink>
      <div className="">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Créer votre site internet" />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className="flex align-items justify-between">
          <Menu />
        </header>
        <SkipNavContent>
          <main className="max-w-7xl mx-auto bg-blue-200 overflow-hidden md:max-w-7xl">{children}</main>
        </SkipNavContent>
      </div>
    </>
  )
}
