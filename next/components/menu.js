import React from 'react'

export default function Menu() {

  const [toggle, setToggle] = React.useState(false)

  const toggleMenu = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }

  return (
    <nav className="">
      <button type="button" onClick={toggleMenu} aria-expanded={!toggle} aria-controls="menu">
        Menu
        <svg id="i-menu" aria-label="Menu" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
      <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path>
    </svg>
      </button>
      <ul id="menu" hidden={toggle}>
        <li>
          <a href="/">Home</a>
        </li>

        
        <li>
          <a href="/benefits">Benefits</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  )
}
