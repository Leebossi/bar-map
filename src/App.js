import React, { useState } from 'react'
import Map from './components/Map'
import Navbar from './components/Navbar'

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 60.45175,
    longitude: 22.267052,
    zoom: 12
  })
  const [selectedBar, setSelectedBar] = useState(null)

  return (
    <div className="App">
      <Navbar />
      <Map viewport={viewport} setViewport={setViewport} selectedBar={selectedBar} setSelectedBar={setSelectedBar} />
    </div>
  );
}

export default App;
