import { motion } from "framer-motion";

export default function SquigglyLine() {
  return (
    <svg viewBox="0 0 600 40" width="600" height="50">
      <motion.path
        d="
        M 0 25
        Q 30 10 60 25
        T 120 25
        T 180 25
        T 240 25
        T 300 25
        T 360 25
        T 420 25
        T 480 25
        T 540 25
        T 600 25
        "
        fill="none"
        stroke="#000000"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          opacity: { duration: 2 }
        }}
      />
    </svg>
  );
}
