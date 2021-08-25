import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h2>Eeppinen musuiluappro</h2>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}

export default Navbar