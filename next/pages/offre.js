import Head from 'next/head'
import Skeleton, { appendSiteTitle } from '../components/skeleton'
import { Article } from '../components/designSystem/layout'

export default function Mentionslegales() {
  return (
    <Skeleton>
      <Head>
        <title>{`Offre ${appendSiteTitle}`}</title>
      </Head>
      <Article>
        <h2>Offre</h2>
      </Article>
    </Skeleton>
  )
}
