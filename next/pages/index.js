import Head from 'next/head'
import Link from 'next/link'
import Img from 'next/image'
import { groq } from 'next-sanity'
import { Button } from '../components/designSystem/Buttons'
import { Container, Section } from '../components/designSystem/layout'

import Layout, { appendSiteTitle } from '../components/skeleton'

import { useContextEcommerce } from '../context/ecommerceProv'

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

  const [commerce, setCommerce] = useContextEcommerce()

  return (
    <Layout>
      <Head>
        <title>Communication numérique {appendSiteTitle}</title>
      </Head>
      {/* <Container className="bg-gradient-to-b from-orange-300 to-orange-600"> */}
      <Container className="bg-gradient-to-b from-white to-gray-100 pb-8">
        <Section className="grid grid-cols-1 md:gap-24 md:grid-cols-2 justify-items-center items-center mx-auto">
          <div className="">
            <h2 className="text-4xl my-6 text-pink-800">
              Bien établir votre communication numérique n'est pas chose aisée.{' '}
              <span className="text-pink-900 font-bold">Faites vous épauler</span>.
            </h2>
            <Img
              width={500}
              height={400}
              alt="contenu adapté pour mobiles"
              src="/images/undraw_mobile_devices_k1ok.svg"
            />
          </div>
          <div className="flex flex-col gap-4 justify-center min-h-full border-gray-300 border-4 rounded p-6">
            <h3 className="mb-4 text-3xl text-orange-900">Artisan, commerçant, TPE, PME, PMI</h3>

            <q className="font-serif text-4xl">Si vous projetez de créer votre site web, c'est ici.</q>

            <div
              className="text-4xl text-center inline-block items-center"
              role="img"
              aria-label="Choix indécis sur l'outil"
            >
              🔧 🤷🏻
            </div>
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

      <Container className="bg-gradient-to-b from-gray-100 to-white">
        {/* <section className="h-screen bg-gradient-to-b from-orange-600 to-red-400"> */}
        <Section className="">
          <h2>Offre</h2>
          <div className="grid grid-cols-1 grid-rows-3 gap-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h3>Création de site web vitrine</h3>
                <p className="text-3xl">Pour présenter votre activité</p>
                <p>afin d'être plus visible, atteindre de nouveaux clients, pérenniser votre activité…</p>
              </div>
              <Img
                width="400"
                height="300"
                alt="Site vitrine sur mesure"
                src="/images/undraw_building_websites_i78t.svg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Img width="400" height="300" alt="Projet e-commerce" src="/images/undraw_add_to_cart_vkjp.svg" />

              <div>
                <h3>Site e-commerce</h3>
                <p>Transformez votre site actuel en boutique, ou créons un de toutes pièces</p>
                {!commerce ? (
                  <Button size="lg" type="button" purpose="primary" onClick={() => setCommerce(true)}>
                    Transformer en e-commerce
                  </Button>
                ) : null}
              </div>
            </div>
            <div>
              <h3>Conseil en stratégie numérique</h3>

              <p>Utilisez à bon escient </p>
            </div>
          </div>

          <div className="p-5">
            <div>
              <h4>Prestations</h4>
              <ul>
                <li>Site web vitrine</li>
                <li>Site web e-commerce</li>
                <li>Community management</li>
              </ul>
            </div>

            <h2>Refonte de votre site web</h2>

            <p className="text-3xl">Votre site n'est plus adapté à vos besoins et/ou est trop lent</p>
          </div>
        </Section>
        <Section>
          <h2>Performance</h2>
          <p className="hover:bg-orange-400">
            Un visiteur sur trois qui met plus de 6 secondes à afficher votre site va le quitter.
          </p>
          <p>Google prend en compte en 2021 des critères de performance pour l'indexation.</p>
          Ici, on table sur la performance.
        </Section>
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
      <Typo />

      <input className="focus:ring-2 focus:ring-blue-600" />
    </Layout>
  )
}
