import Head from 'next/head'
import Skeleton, { appendSiteTitle } from '../components/skeleton'

import { Container, Section, Article } from '../components/designSystem/layout'

export default function Apropos() {
  return (
    <Skeleton>
      <Head>
        <title>{`À propos ${appendSiteTitle}`}</title>
      </Head>
      <Container className="bg-gradient-to-b from-transparent to-orange-200">
        <Article>
          <Section>
            <h2>A propos</h2>

            <p>
              En dehors du développement web, je m'intéresse à la cuisine. Tout ce qui se fait avec de la farine&nbsp;:
              Pizzas, pâtes, brioches, tartes.
            </p>
            <p>
              J'aime aussi apprendre à faire pousser des choses dans mon jardin. Les conseils de{' '}
              <a href="josephchauffrey.fr">Joseph Chauffrey</a> pour l'entretenir sont précieux.
            </p>
            <p>
              Et pour partager quelques moments en famille, je m'adonne aux jeux de société, tels que Takenoko,
              Agricola, Dixit, Unlock…
            </p>
          </Section>
        </Article>
      </Container>
    </Skeleton>
  )
}
