import React from 'react'

const EcommerceContext = React.createContext()
EcommerceContext.displayName = 'EcommerceContext'

export function EcommerceProvider({ children }) {
  const [commerce, setCommerce] = React.useState(false)

  // const value = React.memo(() => {commerce, setCommerce}, [commerce, setCommerce])
  const value = [commerce, setCommerce]

  return <EcommerceContext.Provider value={value}>{children}</EcommerceContext.Provider>
}

export function useContextEcommerce() {
  const context = React.useContext(EcommerceContext)
  if (!context) {
    throw new Error('Ecommerce context should be in a EcommerceContext provider')
  }

  return context
}
