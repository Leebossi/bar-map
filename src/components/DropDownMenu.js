import React from 'react'
import * as barData from '../data/bars.json'

const DropDownMenu = () => {
  return (
    <div className="dropdown">
      {barData.features.map(bar => (
        <p key={bar.id} className="menu-item">{bar.properties.name}</p>
      ))}
    </div>
  )
}

export default DropDownMenu