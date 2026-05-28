import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import '../App.css'
export default function Home() {
  const navigate = useNavigate()
  
  // states


  // handlers
  const goToAccount = () => {
    // navigate to the Account page
    navigate('/Account')
  }

  // html
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={goToAccount} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Go to Account
      </button>
    </>
  );
}