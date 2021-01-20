import { sanityClient } from '../../lib/sanity'

const request = `*[_type == 'product']{
  ...,
  'subcategory': subcategory[]->{name}
}`

export default async (req, res) => {
  const { _id } = JSON.parse(req.body)
  const data = await sanityClient.fetch(request)
  res.statusCode = 200
  res.json(data)
}
