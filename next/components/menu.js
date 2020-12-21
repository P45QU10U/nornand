import React from 'react'
import Link from 'next/link'
import MenuLi from './MenuLi'

export default function Menu() {

  const nomDeLaBoite = 'Nornand'

  // const [toggle, setToggle] = React.useState(false)
  const [toggle, setToggle] = React.useState(true)

  const toggleMenu = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }

  const displayMenu = toggle ? 'hidden' : ''

  return (
    <nav className="p-4 bg-blue-300  w-full">
      <div className="flex align-items justify-between mb-6">
        <h2 className="">
          <Link href="/">
            {nomDeLaBoite}
          </Link>
        </h2>
        <button className="block md:hidden px-4" type="button" onClick={toggleMenu} aria-expanded={toggle} aria-controls="menu">
          <svg className="h-8 w-8 fill-current" id="i-menu" aria-label="Menu" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
            <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path>
          </svg>
        </button>
      </div>
      <ul id="menu" className="bg-gray-400 flex flex-col align-items justify-center md:flex md:flex-wrap md:flex-row md:items-center md:justify-end" hidden={!toggle}>
        <MenuLi>
          <Link href="/">Home</Link>
        </MenuLi>
        <li className="">
          <a href="/benefits">Benefits</a>
        </li>
        <li className="">
          <a href="/pricing">Pricing</a>
        </li>
        <li className="">
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  )
}
