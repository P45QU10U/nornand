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
      <div className=" bg-gradient-to-b from-orange-300 to-orange-600">
        <section className="p-6 h-screen grid grid-cols-1 md:gap-8 md:grid-cols-2 justify-items-center items-center max-w-4xl w-full mx-auto">
          <div className="">
   {/*        <h2 className="text-4xl mb-6">
            Établir votre communication numérique correctement est une épreuve. Ne surmontez pas cela seul&nbsp;-&nbsp;e.
          </h2> */}
          <h2 className="text-4xl mb-6">
            Bien établir votre communication numérique n'est pas chose aisée. Faites vous épauler.
          </h2>
          
          </div>
          <div className="">
            <h3 className="mb-4 text-3xl">Artisan, commerçant, TPE, PME, PMI</h3>

            <p>Faites réaliser votre communication sur l'Internet afin d'être plus visible, atteindre de nouveaux clients, pérenniser votre activité…</p>
            <p>Site web, réseaux sociaux, formations</p>
          </div>

        </section>
      </div>
      <section className="h-screen bg-gradient-to-b from-orange-600 to-red-400">

        <div className="p-5">
        
          <h2>Création de site web</h2>
          <p className="text-3xl">Pour présenter votre activité</p>

          <h2>Refonte de votre site web</h2>

          <p className="text-3xl">Votre site n'est plus adapté à vos besoins et/ou est trop lent</p>
        </div>
      </section>
      <div>
        <section>
          <h2>Pas de salade</h2>

          <p>La recette est simple:  performance, sécurité. Les deux sont liés ici.</p>

          <p>La performance d'un site web se définit par de nombreux aspects. J'ai opté pour une solution statique. Comprenez par statique que votre site ne sera pas figé dans le temps. Vous maitrisez son contenu. La différence se fait lorsque vous modifiez votre contenu via un système de gestion de contenus. Après validation, le site se construit à nouveau, en optimisant plusieurs paramètres.</p>

          <p>Une maintenance moins onéreuse. </p>
        </section>
      </div>
      <div>
        <section>
          <h2>Performance</h2>

          <p className="hover:bg-orange-400">Un visiteur sur trois qui met plus de 6 secondes à afficher votre site va le quitter.</p>
          <p>Google prend en compte en 2021 des critères de performance pour l'indexation.</p>
        </section>
      </div>
      <section>
      <div className="p-5">
      <figure>

          <div className="relative">

            <h3 className="bg-green-100 absolute inset-16 z-10 ">Alors, on travaille ensemble ?</h3>
            <Img className="filter-grayscale hover:filter-none" layout="responsive" width={500} height={350} src="/images/william-iven-gcsNOsPEXfs-unsplash.jpg" />

          </div>

          <figcaption><span>Photo by <a href="https://unsplash.com/@firmbee?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">William Iven</a> on <a href="https://unsplash.com/s/photos/web?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></figcaption>
        </figure>
        </div>
      </section>
      
      <div>{name}</div>
      <Typo />
        
      <input class="focus:ring-2 focus:ring-blue-600" />

    </Layout>
  )
}
