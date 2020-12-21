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
      <section className="">
      <h2 className="">
        Un développeur qui vient à vous !
      </h2>
  

      </section>
      <section>Prestations</section>
      
      
      <div>{name}</div>
      <Typo />
    </Layout>
  )
}
