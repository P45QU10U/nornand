import React from 'react'
import Link from 'next/link'
import MenuLi from './MenuLi'
import SvgMenuIcon from './SvgMenuIcon'

export const menu = [
  {
    title: 'Accueil',
    slug: '/',
  },
  {
    title: 'Offre',
    slug: '/offre',
  },
  {
    title: 'A propos',
    slug: '/a-propos',
  },
]

export default function Menu() {
  const [toggle, setToggle] = React.useState(false)
  const displayedMenu = !toggle ? 'hidden ' : ''

  function toggleMenu(e) {
    e.preventDefault()
    setToggle(!toggle)
  }

  return (
    <nav className="w-full">
      <div className="grid grid-cols-6 grid-rows-1 p-4 items-center">
        <h1 className="col-span-3 md:col-span-1 text-left text-4xl">
          <a href="/" className="grid grid-cols-2 no-underline">
            <img width="50" height="50" src="/images/perfpage.svg" alt="logo PerfPage" />
            <span className="items-start">PerfPage</span>
          </a>
        </h1>
        <button
          className="col-span-3 col-end-auto grid justify-items-end md:hidden text-orange-600"
          type="button"
          onClick={(e) => toggleMenu(e)}
          aria-expanded={toggle}
          aria-controls="menu"
        >
          <SvgMenuIcon />
        </button>
        <ul
          id="menu"
          className={`${displayedMenu} mt-4 col-start-2 text-center col-span-4 md:col-span-5 md:flex md:flex-wrap md:flex-row md:justify-end md:items-end md:mr-4 `}
        >
          {menu.map((entr, index) => (
            <MenuLi key={`menu-${index}`}>
              <Link href={entr.slug}>{entr.title}</Link>
            </MenuLi>
          ))}
        </ul>
      </div>
    </nav>
  )
}
