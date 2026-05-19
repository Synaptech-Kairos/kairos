// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'


import './App.css'

function App() {

  return (
    <Routes>
      {/* add screens/pages here */}
      <Route path="/" element={<Home />} />
    </Routes>

  )
}

export default App
