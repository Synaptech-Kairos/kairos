import { typography } from '../../styles/typography';

export interface BarProps {
  day: string;
  height: number;
  label: string;
  isHovered: boolean;
  isLoaded: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function Bar({
  day,
  height,
  label,
  isHovered,
  isLoaded,
  onHover,
  onLeave,
}: BarProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        style={{
          position: "absolute",
          top: -30,
          minWidth: "3rem",
          padding: "4px 8px",
          background: "#474747",
          color: "white",
          borderRadius: "6px",
          whiteSpace: "nowrap",
          opacity: isHovered ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity 0.1s ease",
          ...typography.bodySmall,
        }}
      >
        {label}
      </div>



      {/* Bar */}
      <div
        style={{
          width: "3rem",
          height: isLoaded ? `${height}px` : "0px",
          background: isHovered ? "#474747" : "#c0c0c0",
          transition: "height 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease",
          ...typography.bodyLarge,
        }}
      />

      {/* Horizontal Line */}
      <div
        style={{
          width: "100%",
          height: "2px",
          opacity: 0.3,
          background: "#000000",
          marginTop: "5px",
          marginBottom: "5px",
          borderRadius: "2px",
        }}
      />

      {/* Day */}
      <span
        style={{
          marginTop: "6px",
          opacity: 0.6,
          ...typography.bodySmall,
        }}
      >
        {day}
      </span>
    </div>
  );
}
