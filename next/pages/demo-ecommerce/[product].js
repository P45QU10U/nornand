import Head from 'next/head'
import Link from 'next/link'
import { Section } from '../../components/designSystem/layout'
import Skeleton, { appendSiteTitle } from '../../components/skeleton'
import { sanityClient } from '../../lib/sanity'

export default function Product({ product }) {
  return (
    <Skeleton>
      <Head>
        <title>{`Demo e-commerce ${appendSiteTitle}`}</title>
      </Head>
      <Section>
        <h2>Bienvenue</h2>

        <pre>{JSON.stringify(product, null, 2)}</pre>
        <p>
          Cette page présente des produits tel que vous pourriez les vendre. Une adaptation pour chacun d'entre vous est
          possible. C'est en ayant l'outil adapté que l'on travaille le mieux.
        </p>
      </Section>
    </Skeleton>
  )
}

export async function getStaticProps({ params }) {
  const product = await sanityClient.fetch(`
    *[_type == "product" && slug.current == '${params.product}']
  `)

  return {
    props: {
      product,
    },
  }
}

export async function getStaticPaths() {
  const products = await sanityClient.fetch(`
    *[_type == 'product']{
      'slug': slug.current
    }
  `)

  return {
    paths: products.map((url) => `/demo-ecommerce/${url.slug}`),
    fallback: true,
  }
}
