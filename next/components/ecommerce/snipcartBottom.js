import React from 'react'
import { snipcartlib } from '../../../config'
import useScript from '../../hooks/useScript'

export default function SnipcartBottom() {
  const status = useScript(snipcartlib)

  return null
}
