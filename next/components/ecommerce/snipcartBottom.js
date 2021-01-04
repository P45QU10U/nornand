import React from 'react'
import { snipcartlib } from '../../../config'

export default function SnipcartBottom({ commerce = false }) {
  function createSnipcartScript() {
    const e = window.document.createElement('script')
    e.src = snipcartlib
    e.async = true
    window.document.body.append(e)
  }

  React.useEffect(() => {
    if (commerce) {
      createSnipcartScript()
    }
  }, [commerce])

  return <div hidden id="snipcart" data-api-key="YOUR_PUBLIC_API_KEY" />
}
