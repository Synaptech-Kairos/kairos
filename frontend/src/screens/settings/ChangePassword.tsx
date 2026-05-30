import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { typography } from '../../styles/typography'
import { AccountIcons } from '../../components/Icons'

export default function ChangePassword() {
  const { themeColors, effectiveTheme } = useTheme()
  const navigate = useNavigate()
  const isDark = effectiveTheme === 'dark'

  const textPrimary = themeColors.inverseContainer
  const textMuted = isDark ? 'rgba(245,245,245,0.5)' : 'rgba(0,0,0,0.5)'
  const inputBg = isDark ? themeColors.containerLow : 'rgba(156,156,156,0.05)'
  const borderColor = isDark ? 'rgba(255,255,255,0.15)' : '#cdcdcd'
  
  // State management to toggle between the three UI states
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Simulated static countdown state matching image_295d0a.png precisely
  const [timeLeft, setTimeLeft] = useState('02:57')

  // Helper handling navigation cancellations back to Account settings view frame
  const handleCancel = () => {
    navigate('/account')
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '960px',
        height: '640px',
        backgroundColor: isDark ? '#121212' : '#ffffff',
        borderRadius: '12px',
        boxShadow: '0px 20px 40px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top Universal Header Bar Control Elements */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: textPrimary, borderRadius: '50%' }} />
          <span style={{ fontSize: '18px', fontWeight: 600, color: textPrimary }}>Kairōs</span>
        </div>
        
        {/* Modern styled cross cancellation action wrapper matching reference screens exactly */}
        <button 
          onClick={handleCancel}
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 12px',
            color: textPrimary, 
            cursor: 'pointer', 
            fontSize: '13px',
            fontWeight: 500
          }}
        >
          <span>✕</span> Cancel
        </button>
      </div>

      {/* Main Single-Column Configuration Interface Box Layout */}
      <div style={{ flex: 1, padding: '40px 64px', maxWidth: '620px' }}>
        <h1
          style={{
            ...typography.headlineMedium,
            fontSize: '24px',
            fontWeight: 500,
            color: textPrimary,
            letterSpacing: '-0.23px',
            margin: '0 0 10px 0',
          }}
        >
          Change password
        </h1>

        {/* STATE STEP 1 VIEW LAYOUT (image_295d2e.png) */}
        {step === 1 && (
          <div>
            <p style={{ fontSize: '12px', color: textMuted, margin: '0 0 28px 0', lineHeight: '1.5' }}>
              To change your password, you'll have to verify your email again and your old password will become inactive immideately.
            </p>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  height: '42px',
                  width: '320px',
                  padding: '0 12px',
                  backgroundColor: inputBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '6px',
                }}
              >
                <AccountIcons.Mail size={18} color={textMuted} />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '13px',
                    color: textPrimary,
                    outline: 'none',
                  }}
                />
              </div>

              <button
                onClick={() => setStep(2)}
                style={{
                  height: '42px',
                  padding: '0 24px',
                  borderRadius: '8px',
                  backgroundColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
                  border: 'none',
                  color: textPrimary,
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                Send code
              </button>
            </div>
          </div>
        )}

        {/* STATE STEP 2 VIEW LAYOUT (image_295d0a.png) */}
        {step === 2 && (
          <div>
            <p style={{ fontSize: '12px', color: textMuted, margin: '0 0 28px 0', lineHeight: '1.5' }}>
              A verification code was sent to your email. Please enter it below to continue to reset your password
            </p>

            {/* Locked disabled email address value placeholder frame */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                height: '42px',
                width: '320px',
                padding: '0 12px',
                marginBottom: '4px',
                backgroundColor: inputBg,
                border: `1px solid ${borderColor}`,
                borderRadius: '6px',
                opacity: 0.7
              }}
            >
              <AccountIcons.Mail size={18} color={textMuted} />
              <span style={{ fontSize: '13px', color: textMuted }}>
                {email || 'email@address'}
              </span>
            </div>

            <p style={{ fontSize: '10px', color: textMuted, margin: '0 0 16px 0' }}>
              You must wait {timeLeft} until you can request a new code
            </p>

            {/* Verification code input row layout context */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                height: '42px',
                width: '320px',
                padding: '0 12px',
                marginBottom: '28px',
                backgroundColor: inputBg,
                border: `1px solid ${borderColor}`,
                borderRadius: '6px',
              }}
            >
              {/* Star sparkles or lock fallback sub-icon indicator styling code */}
              <span style={{ color: textMuted, fontSize: '16px' }}>☼</span>
              <input
                type="text"
                placeholder="Enter verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '13px',
                  color: textPrimary,
                  outline: 'none',
                }}
              />
            </div>

            <button
              onClick={() => setStep(3)}
              style={{
                height: '42px',
                padding: '0 32px',
                borderRadius: '8px',
                backgroundColor: '#f5f5f5',
                border: 'none',
                color: '#121212',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Reset password
            </button>
          </div>
        )}

        {/* STATE STEP 3 VIEW LAYOUT (image_295a0a.png) */}
        {step === 3 && (
          <div>
            <p style={{ fontSize: '12px', color: textMuted, margin: '0 0 28px 0', lineHeight: '1.5' }}>
              Enter a new password to use for your Kairōs account. Once you save these changes, your old password will become inactive immideately.
            </p>

            {/* Form Input sequence stack containers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', width: '320px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  height: '42px',
                  padding: '0 12px',
                  backgroundColor: inputBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '6px',
                }}
              >
                <AccountIcons.Lock size={18} color={textMuted} />
                <input
                  type="password"
                  placeholder="New password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '13px',
                    color: textPrimary,
                    outline: 'none',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  height: '42px',
                  padding: '0 12px',
                  backgroundColor: inputBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '6px',
                }}
              >
                <AccountIcons.Lock size={18} color={textMuted} />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '13px',
                    color: textPrimary,
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <button
              onClick={() => navigate('/account')}
              style={{
                height: '42px',
                padding: '0 24px',
                borderRadius: '8px',
                backgroundColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
                border: 'none',
                color: textMuted,
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Save new password
            </button>
          </div>
        )}

      </div>
    </div>
  )
}