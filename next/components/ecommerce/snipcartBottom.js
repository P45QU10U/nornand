import React from 'react'
import { snipcartlib } from '../../../config'
import useScript from '../../hooks/useScript'

const snipcartApiKey = process.env.NEXT_PUBLIC_SNIPCART_API_KEY

export default function SnipcartBottom({ commerce = false }) {
  const status = useScript(snipcartlib)

  return (
    (status === 'loading' || status === 'ready') &&
    commerce && <div hidden id="snipcart" data-api-key={snipcartApiKey} />
  )
}
