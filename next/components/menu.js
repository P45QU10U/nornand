import React from 'react'
import Link from 'next/link'
import MenuLi from './MenuLi'

export default function Menu() {
  const LogoNameEnt = 'Nornand'

  const [toggle, setToggle] = React.useState(false)
  // Pour tests sur menu
  // const [toggle, setToggle] = React.useState(true)

  function toggleMenu(e) {
    e.preventDefault()
    setToggle(!toggle)
  }

  const displayedMenu = !toggle ? 'hidden ' : ''

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between p-4 mb-4">
        <h1 className="">
          <Link href="/">{LogoNameEnt}</Link>
        </h1>
        <button
          className="block md:hidden px-4 text-indigo-400"
          type="button"
          onClick={(e) => toggleMenu(e)}
          aria-expanded={toggle}
          aria-controls="menu"
        >
          <svg
            className="h-8 w-8 fill-current"
            id="i-menu"
            aria-label="Menu"
            viewBox="0 0 32 32"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.25%"
          >
            <path d="M4 8h24M4 16h24M4 24h24" />
          </svg>
        </button>
      </div>
      <ul
        id="menu"
        className={`${displayedMenu} flex flex-col items-center justify-center md:flex md:flex-wrap md:flex-row md:justify-end md:mr-4 `}
      >
        <MenuLi>
          <Link href="/">Accueil</Link>
        </MenuLi>
        <MenuLi>
          <Link href="/offre">Offre</Link>
        </MenuLi>
        <MenuLi>
          <Link href="/a-propos">A propos</Link>
        </MenuLi>
        <MenuLi>
          <Link href="/blog">Blog</Link>
        </MenuLi>
      </ul>
    </nav>
  )
}
