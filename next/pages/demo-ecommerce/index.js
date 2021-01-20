import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import useSWR from 'swr'
import { Section } from '../../components/designSystem/layout'
import Skeleton, { appendSiteTitle } from '../../components/skeleton'
import { sanityClient } from '../../lib/sanity'

const request = `*[_type == 'product']{
  ...,
  'subcategory': subcategory[]->{name}
}`

function arrayEquals(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index])
}

// const fetcher = (...args) => sanityClient.fetch(...args)

export default function Product({ products }) {
  /* 
    // Aussi formidable que SWR l'est, tout comme react query, je laisse ça un temps.
    const { data, error } = useSWR('request', fetcher(request), {
    initialData: products,
    revalidateOnFocus: false,
    dedupingInterval: 15000,
  }) */

  const router = useRouter()

  const filteringBefore = router.query
  // console.log(filteringBefore.filter)

  const [data, setData] = useState(products)
  const [filteredData, setFilteredData] = useState(products)

  const [filtersInPlace, setFiltersInPlace] = useState(filteringBefore?.filter?.length ? [filteringBefore.filter] : [])

  // Need debugger
  // Filtres selon noms de la prop du produit
  function possibleFilters(dataForFilters, propname) {
    return dataForFilters.reduce((prev, curr, index) => {
      const category = curr[propname].map((e) => e.name)
      return Array.from(new Set([...prev, ...category]))
    }, [])
  }

  const availableFilters = possibleFilters(data, 'subcategory')

  function filtering(e) {
    if (e.target.checked) {
      setFiltersInPlace([...filtersInPlace, e.target.value])
    } else {
      setFiltersInPlace(filtersInPlace.filter((d) => d !== e.target.value))
    }
  }

  /* useEffect(() => {
    // if (router.isReady) {
    router.push({
      pathname: '/demo-ecommerce',
      query: { filter: filtersInPlace },
    })
    // }
  }, [filtersInPlace]) */

  /* useEffect(() => {
    if (filtersInPlace && filtersInPlace.length) {
      const isIncluded = (value) => filtersInPlace.includes(value)
      const filters = data.filter((item) => item?.subcategory.map((i) => i.name).every(isIncluded))

      setFilteredData(filters)
    } else {
      setFilteredData(data)
    }
  }, [data, filtersInPlace]) */

  return (
    <Skeleton>
      <Head>
        <title>{`Demo e-commerce ${appendSiteTitle}`}</title>
      </Head>
      <Section>
        <h2>Bienvenue</h2>
        {availableFilters.map((filter, i) => (
          <label key={`fil${i}`} htmlFor={`filter${i}`}>
            <input
              type="checkbox"
              id={`filter${i}`}
              value={filter}
              onChange={filtering}
              checked={filtersInPlace && filtersInPlace.length ? filtersInPlace.includes(filter) : false}
            />
            {filter}
          </label>
        ))}
        <ul>
          {filteredData.map((prod, index) => (
            <li key={`product${index}`}>
              <Link href={`/demo-ecommerce/${prod.slug.current}`}>{prod.name}</Link>
            </li>
          ))}
        </ul>
        <h3>PRODUCTS</h3>
        <pre>{JSON.stringify(filteredData, null, 2)}</pre>
        <p>
          Cette page présente des produits tel que vous pourriez les vendre. Une adaptation pour chacun d'entre vous est
          possible. C'est en ayant l'outil adapté que l'on travaille le mieux.
        </p>
      </Section>
    </Skeleton>
  )
}

export async function getStaticProps() {
  const products = await sanityClient.fetch(request)

  return {
    props: {
      products,
    },
  }
}
