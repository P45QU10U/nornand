import Link from 'next/link'

import { buttonpurposes, buttonsizes } from './theme'

function Button({ size, type, purpose, children, onClick }) {
  const classNames = `${buttonpurposes[purpose]} ${buttonsizes[size]}`

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

function LinkButton({ size, type, children }) {
  const classNames = `${buttonpurposes[type]} ${buttonsizes[size]}`

  return <Link className={classNames}>{children}</Link>
}

export { Button, LinkButton }
