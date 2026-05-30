import { useState, useEffect } from "react";
import { typography } from "../../styles/typography";
import Bar from "./bar";

interface DayData {
  day: string;
  height: number;
  label: string;
}

export default function ConsistencyCard() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [loadedBars, setLoadedBars] = useState<number[]>([]);


  const data: DayData[] = [
    { day: "SUN", height: 40, label: "40 min" },
    { day: "MON", height: 57, label: "57 min" },
    { day: "TUE", height: 32, label: "32 min" },
    { day: "WED", height: 75, label: "75 min" },
    { day: "THU", height: 48, label: "48 min" },
    { day: "FRI", height: 90, label: "90 min" },
    { day: "SAT", height: 22, label: "22 min" },
  ];

  // Sequential load animation
  useEffect(() => {
    data.forEach((_, i) => {
      setTimeout(() => {
        setLoadedBars((prev) => [...prev, i]);
      }, i * 120);
    });
  }, []);

  return (
    <div
      style={{
        background: "#f1f1f1",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "fit-content",
      }}
    >
      <h3 style={{ ...typography.bodySmall, fontSize: "12px", opacity: 0.6 }}>
        CONSISTENCY
      </h3>

      <div style={{ ...typography.bodyMedium }}>
        <span style={{ fontWeight: 600 , color: "#00000"}}>6/7 days this week</span>
        <div style={{ opacity: 0.6 }}>Nice work!</div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "14px",
          height: "200px",
          marginTop: "10px",
          width: "fit-content",
        }}
      >
        {data.map((bar, i) => (
          <Bar
            key={i}
            day={bar.day}
            height={bar.height}
            label={bar.label}
            isHovered={hoverIndex === i}
            isLoaded={loadedBars.includes(i)}
            onHover={() => setHoverIndex(i)}
            onLeave={() => setHoverIndex(null)}
          />
        ))}
      </div>
    </div>
  );
}
