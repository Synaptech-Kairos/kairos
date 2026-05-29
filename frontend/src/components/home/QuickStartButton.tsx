import timer from "../../../public/timer.svg"
import { typography } from '../../styles/typography'

type QuickStartButtonProps = {
  label: string
}

export default function QuickStartButton({label} : QuickStartButtonProps) {
  return (
    <button
      className="px-4 py-2 rounded-lg bg-gray-200  hover:bg-slate-500 hover:text-white text-2xl! hover:cursor-pointer font-medium border-gray-400 border flex items-center gap-1"
      // onClick={() => onClick()}
    >
      <img
        src={timer}
        alt="timer"
        className="w-4 h-4"
      />
      <span
        style={typography.titleMedium}
      >
        {label}
      </span>
    </button>
  );
}
