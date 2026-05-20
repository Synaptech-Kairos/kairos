import IconButton from './IconButton'
import iconBack from '../assets/icons/icon-back.svg'

interface BackButtonProps {
  onClick: () => void
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <IconButton
      variant="icon-only"
      icon={<img src={iconBack} alt="back" style={{ width: 24, height: 24 }} />}
      onClick={onClick}
      style={{ position: 'absolute', top: 30, left: 30 }}
    />
  )
}
