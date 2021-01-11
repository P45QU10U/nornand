import React from 'react'
import classnames from 'classnames'
import Menu from './menu/menu'
import { Container } from './designSystem/layout'
import { maxWidthSections } from './designSystem/theme'

export default function Header() {
  return (
    <Container className="shadow-md ">
      <header className={classnames(maxWidthSections, `flex align-items justify-between`)}>
        <Menu />
      </header>
    </Container>
  )
}
