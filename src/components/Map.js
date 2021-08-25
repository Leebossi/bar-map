import React from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as barData from '../data/bars.json'


const Map = ({ viewport, setViewport, selectedBar, setSelectedBar }) => {
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle={'mapbox://styles/sir-oswald/cksq7h9020wm117pg8tu8bd5i'}
      onViewportChange={viewport => setViewport(viewport)}
    >

      {barData.features.map(bar => (
        <Marker
          key={bar.id}
          latitude={bar.geometry.coordinates[1]}
          longitude={bar.geometry.coordinates[0]}
        >
          <button
            className="marker-btn"
            onClick={e => {
              e.preventDefault()
              setSelectedBar(bar)
            }}>
            <p>🍺</p>
          </button>
        </Marker>
      ))}

      {selectedBar &&
        <Popup
          latitude={selectedBar.geometry.coordinates[1]}
          longitude={selectedBar.geometry.coordinates[0]}
          onClose={() => {
            setSelectedBar(null)
          }}
        >
          <div>
            <p>
              {selectedBar.properties.name}
            </p>
          </div>
        </Popup>
      }
    </ReactMapGL>
  )
}

export default Map