import React from 'react'

export default function MenuLi({ children }) {
  return <li className="m-2 md:mr-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm">{children}</li>
}
