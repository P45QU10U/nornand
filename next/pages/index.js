import Head from 'next/head'
import Link from 'next/link'
import Img from 'next/image'

import { groq } from 'next-sanity'
import Layout, { siteTitle } from '../components/layout'

import Typo from '../components/typography'

// import { getSortedPostsData } from '../lib/posts'

import { getClient, usePreviewSubscription, urlFor, PortableText } from '../lib/sanity'

const postQuery = groq`*[_type == 'storeSettings'][0]{
  name,
  address,
  openinghours,
  phonenumber,
  interventiondistance,
  geocoords,
  "socialnetworks": *[_type == "socialnetwork"]
}`

export async function getStaticProps({ preview = false }) {
  const donnees = await getClient(preview).fetch(postQuery)

  return {
    props: {
      preview,
      data: donnees,
    },
  }
}

export default function Home({ data, preview }) {
  const { data: paramsEnterprise } = usePreviewSubscription(postQuery, {
    initialData: data,
    enabled: preview,
  })

  const { address, name } = paramsEnterprise

  return (
    <Layout>
      <Head>
        <title>Communication numérique {siteTitle}</title>
      </Head>
      <section className="h-screen grid grid-cols-1 items-center bg-gradient-to-b from-orange-300 to-orange-600">
        <div className="p-5">
        <h2 className="text-4xl mb-6">
          Votre Communication numérique accessible
        </h2>
        <p>Site web, réseaux sociaux, formations</p>
        </div>
        <div className="p-5">
          <h3 className="mb-4 text-3xl">TPE, ETI, artisan, commerçant</h3>

          <p>Réalisez votre communication sur l'Internet afin d'être plus visible, atteindre de nouveaux clients, pérenniser votre activité…</p>
          
        </div>

      </section>
      <section className="h-screen bg-gradient-to-b from-orange-600 to-red-400">

        <div className="p-5">
        
          <h2>Création de site web</h2>
          <p className="text-3xl">Pour présenter votre activité</p>

          <h2>Refonte de votre site web</h2>

          <p className="text-3xl">Votre site n'est plus adapté à vos besoins et/ou est trop lent</p>
        </div>
      </section>
      <section >
      <div className="p-5">
      <figure>
          <Img layout="responsive" width={500} height={350} src="/images/william-iven-gcsNOsPEXfs-unsplash.jpg" />

          <figcaption><span>Photo by <a href="https://unsplash.com/@firmbee?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">William Iven</a> on <a href="https://unsplash.com/s/photos/web?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></figcaption>
        </figure>
        </div>
      </section>
      
      <div>{name}</div>
      <Typo />
    </Layout>
  )
}
