import React, { useState } from 'react'
import DropDownMenu from './components/DropDownMenu'
import Map from './components/Map'
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'
import { CSSTransition } from 'react-transition-group'

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: 'calc(100vh - 50px)',
    latitude: 60.45175,
    longitude: 22.267052,
    zoom: 12,
  })
  const [selectedBar, setSelectedBar] = useState(null)
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Navbar>
        <NavItem icon="🍻" open={open} setOpen={setOpen}>
          <CSSTransition timeout={500}>
              <DropDownMenu setSelectedBar={setSelectedBar} setViewport={setViewport}/>
          </CSSTransition>
        </NavItem>
      </Navbar>
      <Map viewport={viewport} setViewport={setViewport} selectedBar={selectedBar} setSelectedBar={setSelectedBar} />
    </div>
  );
}

export default App;
