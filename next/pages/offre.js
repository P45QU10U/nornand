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

        <div>
          <h4>Prestations</h4>
          <ul>
            <li>Site web vitrine</li>
            <li>Site web e-commerce</li>
            <li>Community management</li>
          </ul>

          <div className="p-5">
            <h2>Refonte de votre site web</h2>

            <p className="text-3xl">Votre site n'est plus adapté à vos besoins et/ou est trop lent</p>
          </div>
        </div>
      </Article>
    </Skeleton>
  )
}
