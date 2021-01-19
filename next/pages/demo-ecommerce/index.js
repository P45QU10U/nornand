import Head from 'next/head'
import Link from 'next/link'
import { Section } from '../../components/designSystem/layout'
import Skeleton, { appendSiteTitle } from '../../components/skeleton'
import { sanityClient } from '../../lib/sanity'

export default function Product({ products }) {
  return (
    <Skeleton>
      <Head>
        <title>{`Demo e-commerce ${appendSiteTitle}`}</title>
      </Head>
      <Section>
        <h2>Bienvenue</h2>

        <ul>
          {products.map((prod, index) => (
            <li key={`product${index}`}>
              <Link href={`/demo-ecommerce/${prod.slug.current}`}>{prod.name}</Link>
            </li>
          ))}
        </ul>

        <pre>{JSON.stringify(products, null, 2)}</pre>
        <p>
          Cette page présente des produits tel que vous pourriez les vendre. Une adaptation pour chacun d'entre vous est
          possible. C'est en ayant l'outil adapté que l'on travaille le mieux.
        </p>
      </Section>
    </Skeleton>
  )
}

export async function getStaticProps({ preview = false }) {
  const products = await sanityClient.fetch(`   
  *[_type == 'product']{
    ...,
    'subcategory': subcategory[]->{name}
  }
  `)

  return {
    props: {
      preview,
      products,
    },
  }
}
