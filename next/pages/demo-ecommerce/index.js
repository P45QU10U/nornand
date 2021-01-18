import Head from 'next/head'

import { groq } from 'next-sanity'
import { getClient, usePreviewSubscription, urlFor, PortableText } from '../../lib/sanity'
import Skeleton, { appendSiteTitle } from '../../components/skeleton'
import { Section } from '../../components/designSystem/layout'

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

export default function Demoecommerce() {
  return (
    <Skeleton>
      <Head>
        <title>{`Demo e-commerce ${appendSiteTitle}`}</title>
      </Head>
      <Section>
        <h2>Bienvenue</h2>

        <p>
          Cette page présente des produits tel que vous pourriez les vendre. Une adaptation pour chacun d'entre vous est
          possible. C'est en ayant l'outil adapté que l'on travaille le mieux.
        </p>
      </Section>
    </Skeleton>
  )
}
