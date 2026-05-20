import { useNavigate } from 'react-router-dom'
import iconFocus from '../../assets/icons/icon-focus.svg'
import iconBiosignal from '../../assets/icons/icon-biosignal.svg'
import iconIntegration from '../../assets/icons/icon-integration.svg'
import kairosLogo from '../../assets/icons/icon-kairos-logo.svg'
import Button from '../../components/Button'
import { FeatureCard } from '../../components/Card'
import TitleBar from '../../components/TitleBar'
import { typography } from '../../styles/typography'

const features = [
  {
    icon: iconFocus,
    text: 'Dynamic focus session cycles powered by mood and attention levels',
  },
  {
    icon: iconBiosignal,
    text: 'Learns and adapts to your patterns with real time biosignal tracking',
  },
  {
    icon: iconIntegration,
    text: 'Integrates with your favorite productivity tools to keep you on track',
  },
]

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div
      className="fixed inset-0 overflow-hidden flex flex-col"
      style={{ backgroundColor: '#FAFAFA' }}
    >
{/* Ambient blue blob background */}
      <div
        className="absolute pointer-events-none"
        style={{
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
      <TitleBar />

      {/* Main content */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center justify-center"
        style={{ paddingBottom: '6vh' }}
      >
        {/* Headline */}
        <div className="flex items-end mb-[43px]" style={{ gap: 14 }}>
          <span
            style={{
              ...typography.headlineLarge,
              color: '#000',
            }}
          >
            Welcome to
          </span>
          <img src={kairosLogo} alt="" style={{ width: 82, height: 55, marginBottom: 4 }} />
          <span
            style={{
              ...typography.headlineLarge,
              color: '#000',
            }}
          >
            Kairōs
          </span>
        </div>

        {/* Feature cards */}
        <div className="flex flex-col mb-[43px]" style={{ gap: 13 }}>
          {features.map((feature, i) => (
            <FeatureCard key={i} icon={feature.icon} text={feature.text} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center" style={{ gap: 13 }}>
          <Button variant="primary" onClick={() => navigate('/login')}>Sign in</Button>
          <Button variant="secondary" onClick={() => navigate('/create-account')}>Create account</Button>
        </div>
      </div>
    </div>
  )
}
