// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Welcome from './screens/onboarding/Welcome'
import Login from './screens/onboarding/Login'
import CreateAccount from './screens/onboarding/CreateAccount'

import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
