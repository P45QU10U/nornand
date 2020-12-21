import React from 'react'
import Link from 'next/link'

export default function Menu() {

  const nomDeLaBoite = 'Nornand'

  const [toggle, setToggle] = React.useState(false)

  const toggleMenu = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }

  const displayMenu = toggle ? 'hidden' : ''

  return (
    <nav className="bg-blue-300  w-full ">
      <div className="flex align-items justify-between">
        <h2 className="">
          <Link href="/">
            {nomDeLaBoite}
          </Link>
        </h2>
        <button className="block md:hidden" type="button" onClick={toggleMenu} aria-expanded={toggle} aria-controls="menu">
          <svg className="h-6 w-6" id="i-menu" aria-label="Menu" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
            <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path>
          </svg>
        </button>
      </div>
      <ul id="menu" className="md:flex md:flex-wrap md:flex-row md:items-center justify-center md:justify-end " hidden={!toggle}>
        <li className="p-4">
          <a href="/">Home</a>
        </li>
        <li className="p-4">
          <a href="/benefits">Benefits</a>
        </li>
        <li className="p-4">
          <a href="/pricing">Pricing</a>
        </li>
        <li className="p-4">
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  )
}
