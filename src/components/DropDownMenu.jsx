import React from 'react'
import * as barData from '../data/bars.json'

const DropDownMenu = (props) => {
  const handleBarClick = (bar) => {
    props.setViewport({
      width: '100vw',
      height: '100vh',
      latitude: bar.geometry.coordinates[1],
      longitude: bar.geometry.coordinates[0],
      zoom: 14
    })
    props.setSelectedBar(bar)
    props.setOpen(!props.open)
  }

  return (
    <div className="dropdown">
      {barData.features.map(bar => (
        <p
          key={bar.id}
          className="menu-item"
          onClick={e => {
            e.preventDefault()
            handleBarClick(bar)}
          }
        >
          {bar.properties.name}
        </p>
      ))}
    </div>
  )
}

export default DropDownMenu