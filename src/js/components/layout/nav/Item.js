import React from 'react'
import { Link } from "react-router"

export default ({to, children}) => {
  return (
    <Link to={to} className="mdl-navigation__link">
      {children}
    </Link>
  )
}
