// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Welcome from './screens/onboarding/Welcome'
import Login from './screens/onboarding/Login'
import CreateAccount from './screens/onboarding/CreateAccount'
import AuthSuccess from './screens/onboarding/AuthSuccess'
import Customize from './screens/onboarding/Customize'
import { OnboardingProvider } from './context/OnboardingContext'
import { ThemeProvider } from './context/ThemeContext'

import './App.css'

function App() {
  return (
    <OnboardingProvider>
      <ThemeProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/auth-success" element={<AuthSuccess />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </ThemeProvider>
    </OnboardingProvider>
  )
}

export default App
