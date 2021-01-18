import Head from 'next/head'
import Link from 'next/link'
import Img from 'next/image'
import { groq } from 'next-sanity'
import { Button, LinkButton } from '../components/designSystem/Buttons'
import { Container, Section } from '../components/designSystem/layout'

import Layout, { appendSiteTitle } from '../components/skeleton'

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

/* 
// Pour faire sauter tout le JS
export const config = {
  unstable_runtimeJS: false
};
 */

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
        <title>Communication numérique {appendSiteTitle}</title>
      </Head>
      {/* <Container className="bg-gradient-to-b from-orange-300 to-orange-600"> */}
      <Container className="bg-gradient-to-b from-white to-gray-100 pb-8">
        <Section className="grid grid-cols-1 md:gap-24 md:grid-cols-2 justify-items-center items-center mx-auto">
          <div className="mb-16 md:mb-0 flex flex-col items-center">
            <h2 className="text-4xl my-6 ">Bien établir votre communication numérique n'est pas chose aisée. </h2>
            <p className="text-3xl text-amber-500 font-bold border-b-4 border-amber-500 leading-3 transform -rotate-2 p-4">
              Faites-vous épauler.
            </p>
            <Img
              width={500}
              height={400}
              alt="contenu adapté pour mobiles"
              src="/images/undraw_mobile_devices_k1ok.svg"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center min-h-full border-gray-900 border-4 rounded-lg puzzle p-6">
            <span
              className="text-6xl text-center inline-block items-center"
              role="img"
              aria-label="Idée, projet de site web"
            >
              💡
            </span>
            <q className="font-serif text-4xl text-amber-800 bg-gray-200 bg-opacity-60 p-4">
              Vous avez un projet de site web ?
            </q>
            <Button
              size="lg"
              type="button"
              purpose="primary"
              className="transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
            >
              Contactez-moi
            </Button>
          </div>
        </Section>
      </Container>

      <Container className="bg-gradient-to-b from-gray-100 to-white mb-14">
        {/* <section className="h-screen bg-gradient-to-b from-orange-600 to-red-400"> */}
        <Section className="">
          <div className="grid grid-cols-1 grid-rows-3 gap-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center bg-white rounded-xl shadow-lg">
              <div className="bg-amber-50 rounded-2xl rounded-b-none  md:rounded-r-none md:rounded-b-2xl  p-8 flex flex-col gap-2">
                <h3 className="">Site web vitrine</h3>
                <p className="text-3xl">Présentez votre activité</p>
                <p>Soyez plus visible, atteignez de nouveaux clients, pérennisez votre activité…</p>

                <p>Ne perdez plus de client. Votre site se charge en moins de 2 secondes.</p>
              </div>

              <div className="p-4">
                <Img
                  width="400"
                  height="300"
                  alt="Site vitrine sur mesure"
                  src="/images/undraw_building_websites_i78t.svg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center bg-white rounded-xl shadow-lg">
              <div className="w-full bg-amber-50 rounded-2xl rounded-b-none  md:rounded-r-none md:rounded-b-2xl  p-8 flex flex-col gap-2">
                <h3>Site e-commerce</h3>
                <p>Transformez votre site actuel en boutique, ou créons-en un de toutes pièces</p>

                <LinkButton href="/demo-ecommerce" size="lg" type="button" purpose="primary">
                  Voir démo e-commerce
                </LinkButton>
              </div>
              <div className="p-4">
                <Img width="400" height="300" alt="Projet e-commerce" src="/images/undraw_add_to_cart_vkjp.svg" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center bg-white rounded-xl shadow-lg">
              <div className="w-full bg-amber-50 rounded-2xl rounded-b-none  md:rounded-r-none md:rounded-b-2xl p-8 flex flex-col gap-2">
                <h3>Conseil en stratégie numérique</h3>

                <p>
                  Utilisés à bon escient les réseaux sociaux peuvent vous amener beaucoup&nbsp;: Vous êtes plus près de
                  vos clients. Et votre image est renforcée.
                </p>
              </div>
              <div className="p-4">
                <Img
                  width="400"
                  height="300"
                  alt="Mise en place réseaux sociaux"
                  src="/images/undraw_social_dashboard_k3pt.svg"
                />
              </div>
            </div>
          </div>
        </Section>
      </Container>
      <Container className="">
        <Section className="grid grid-cols-1 grid-rows-1">
          <div className="col-start-1 col-end-2 col-span-1 row-start-1 row-end-2 z-30 bg-amber-50 p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center">
              <div>
                <h2>
                  Performance{' '}
                  <span role="img" aria-label="fusée">
                    🚀
                  </span>
                </h2>

                <p>
                  Chez PerfPage, on table sur la performance. Le site doit se charger en moins de 2 secondes, même dans
                  des conditions dégradées
                </p>
              </div>
              <aside className="border-gray-600 border-l-4 p-4">
                <q className="font-serif text-2xl hover:bg-orange-400">
                  Pour 1 visiteur sur 3, s'il met <strong>plus de 6 secondes</strong> à afficher votre site, c'est un
                  visiteur perdu.
                </q>
                <p>Et, ne reviendra peut-être pas.</p>
              </aside>
            </div>
          </div>
          <div className="col-start-1 col-span-1 col-end-2 row-start-1 row-end-2 transform rotate-2 z-10 bg-amber-200 shadow-lg" />
          <div className="col-start-1 col-span-1 col-end-2 row-start-1 row-end-2 transform rotate-6 z-0 bg-amber-400 shadow-lg" />
        </Section>
      </Container>
      <Container>
        <Section className="" />
        <div>
          <section>
            <h2>Pas de salade</h2>

            <p>La recette est simple: performance, sécurité. Les deux sont liés ici.</p>

            <p>
              La performance d'un site web se définit par de nombreux aspects. J'ai opté pour une solution statique.
              Comprenez par statique que votre site ne sera pas figé dans le temps. Vous maitrisez son contenu. La
              différence se fait lorsque vous modifiez votre contenu via un système de gestion de contenus. Après
              validation, le site se construit à nouveau, en optimisant plusieurs paramètres.
            </p>

            <p>Une maintenance moins onéreuse. </p>
          </section>
        </div>
        <div>
          <section />
        </div>
        <section>
          <div className="p-5">
            <figure>
              <div className="grid grid-cols-1 grid-rows-1 items-center justify-center">
                <h3 className="text-lg row-span-full col-span-full bg-orange-300 rounded-md opacity-75 z-10 p-4 m-4">
                  Alors, on travaille ensemble ?
                </h3>
                <div className="row-span-full col-span-full">
                  <Img
                    className="filter-grayscale hover:filter-none"
                    layout="responsive"
                    width={500}
                    height={350}
                    src="/images/william-iven-gcsNOsPEXfs-unsplash.jpg"
                  />
                </div>
              </div>

              <figcaption>
                <span>
                  Photo by{' '}
                  <a href="https://unsplash.com/@firmbee?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                    William Iven
                  </a>{' '}
                  on{' '}
                  <a href="https://unsplash.com/s/photos/web?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                    Unsplash
                  </a>
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
      </Container>

      <div>{name}</div>
      <h3 className="mb-4 text-3xl text-pink-900">Artisan, commerçant, TPE, PME, PMI</h3>
      <Typo />

      <input className="focus:ring-2 focus:ring-blue-600" />
    </Layout>
  )
}
