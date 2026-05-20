import iconBack from '../assets/icons/icon-back.svg'

interface BackButtonProps {
  onClick: () => void
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="hover:brightness-95 transition-[filter]"
      style={{
        position: 'absolute',
        top: '30px',
        left: '30px',
        width: '40px',
        height: '40px',
        background: '#f1f1f1',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={iconBack} alt="back" style={{ width: 24, height: 24 }} />
    </button>
  )
}
