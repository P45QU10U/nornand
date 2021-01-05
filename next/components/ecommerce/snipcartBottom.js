import React from 'react'
import { snipcartlib } from '../../../config'
import useScript from '../../hooks/useScript'

const snipcartApiKey = 'YOUR_PUBLIC_API_KEY'

export default function SnipcartBottom({ commerce = false }) {
  const status = useScript(snipcartlib)

  return status === 'ready' && commerce && <div hidden id="snipcart" data-api-key={snipcartApiKey} />
}
