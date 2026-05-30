import timer from "../../../public/timer.svg"
import { typography } from "../../styles/typography"
import { useState } from "react"

type QuickStartButtonProps = {
  label: string
}

export default function QuickStartButton({ label }: QuickStartButtonProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      style={{
        padding: "8px 16px",
        borderRadius: "8px",
        background: hovered ? "#64748B" : "#f1f1f1",
        color: hovered ? "white" : "black",
        fontWeight: 500,
        fontSize: "1.5rem",
        border: "1px solid #D8D8D8",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        cursor: "pointer",
        transition: "background-color 0.25s ease, color 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={timer}
        alt="timer"
        style={{
          width: "1rem",
          height: "1rem",
          opacity: "65%",   // ← added here
        }}
      />

      <span
        style={{
          opacity: "65%",   // ← corrected here
          ...typography.titleMedium,
        }}
      >
        {label}
      </span>
    </button>

  )
}
