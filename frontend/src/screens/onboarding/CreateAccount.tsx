import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { typography } from '../../styles/typography'
import FormField from '../../components/FormField'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import Checkbox from '../../components/Checkbox'
import TitleBar from '../../components/TitleBar'
import iconEmail from '../../assets/icons/icon-email.svg'
import iconLock from '../../assets/icons/icon-lock.svg'
import iconPerson from '../../assets/icons/icon-person.svg'

export default function CreateAccount() {
  const navigate = useNavigate()
  const [agreed, setAgreed] = useState(false)

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
          padding: '50px 90px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <BackButton onClick={() => navigate('/')} />

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ ...typography.headlineMedium, color: '#000', marginBottom: '16px' }}>
            Create a Kairōs Account
          </div>
          <div style={{ ...typography.bodyMedium, color: '#000', opacity: 0.7 }}>
            Tell us a bit about yourself to set up your account
          </div>
        </div>

        {/* Form */}
        <div style={{ width: '345px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '42px' }}>
          <FormField
            icon={<img src={iconPerson} alt="person" style={{ width: 24, height: 24 }} />}
            type="text"
            placeholder="Full name"
            style={{ color: 'rgba(0,0,0,0.5)' }}
          />
          <FormField
            icon={<img src={iconEmail} alt="email" style={{ width: 24, height: 24 }} />}
            type="email"
            placeholder="Email address"
            style={{ color: 'rgba(0,0,0,0.5)' }}
          />
          <FormField
            icon={<img src={iconLock} alt="lock" style={{ width: 24, height: 24 }} />}
            type="password"
            placeholder="Password"
            style={{ color: 'rgba(0,0,0,0.5)' }}
          />
          <FormField
            icon={<img src={iconLock} alt="lock" style={{ width: 24, height: 24 }} />}
            type="password"
            placeholder="Confirm password"
            style={{ color: 'rgba(0,0,0,0.5)' }}
          />
        </div>

        {/* Terms checkbox */}
        <div style={{ width: '345px', marginBottom: '42px' }}>
          <Checkbox
            checked={agreed}
            onChange={setAgreed}
            label="I agree to the Kairōs Terms & Conditions and Privacy Policy"
          />
        </div>

        {/* Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Button variant="primary" onClick={() => navigate('/auth-success')}>
            Create account
          </Button>
        </div>
      </div>
    </div>
  )
}
