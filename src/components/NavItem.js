import React from 'react'

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <button className="icon-btn" onClick={() => props.setOpen(!props.open)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>

      {props.open && props.children}
    </li>
  )
}

export default NavItem