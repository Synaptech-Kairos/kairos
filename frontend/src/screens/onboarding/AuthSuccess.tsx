import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import kairosLogo from '../../assets/icons/icon-kairos-logo.svg'
import TitleBar from '../../components/TitleBar'
import { typography } from '../../styles/typography'

export default function AuthSuccess() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/customize'), 3000)
    return () => clearTimeout(timer)
  }, [navigate])
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
      }}
    >
      {/* Ambient blue blob background */}
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          width: '85vw',
          height: '80vh',
          bottom: '-10vh',
          left: '4vw',
          background: 'rgba(122, 180, 255, 0.6)',
          filter: 'blur(500px)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      {/* Title bar */}
      <TitleBar showTitle />

      {/* Card container */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          maxWidth: 'calc(100% - 40px)',
          backdropFilter: 'blur(500px)',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '15px',
          boxShadow: '0px 0px 15px 2px rgba(0,0,0,0.05)',
          padding: '200px 90px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <img src={kairosLogo} alt="Kairōs" style={{ width: 82, height: 55, marginBottom: 24 }} />
        <div style={{ ...typography.headlineLarge, color: '#000' }}>Welcome</div>
      </div>
    </div>
  )
}
