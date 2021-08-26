import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h3>Eeppinen musuiluappro</h3>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}

export default Navbar