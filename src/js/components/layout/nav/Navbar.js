import React from 'react'
import { Link } from "react-router"

export default ({children}) => (
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Title</span>
    <nav className="mdl-navigation">
      {children}
    </nav>
  </div>
)
