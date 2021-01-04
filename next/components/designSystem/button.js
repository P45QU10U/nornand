import Link from 'next/link'

import { ButtonType, ButtonSize } from './theme'

function Button({ size, type, children, onClick }) {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = `${ButtonType[type]} ${ButtonSize[size]}`

  return (
    <button type="button" className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

function LinkButton({ size, type, children }) {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = `${ButtonType[type]} ${ButtonSize[size]}`

  return <Link className={classNames}>{children}</Link>
}

export { Button, LinkButton }
