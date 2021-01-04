import React, { useCallback, useState } from 'react'
import _ from 'lodash'

export const useDebounce = (obj = null, wait = 1000) => {
  const [state, setState] = useState(obj)

  const debounce = useCallback(
    _.debounce((_prop) => {
      setState(_prop)
    }, wait),
    []
  )

  const setDebouncedState = (_val) => {
    debounce(_val)
  }

  return [state, setDebouncedState]
}
