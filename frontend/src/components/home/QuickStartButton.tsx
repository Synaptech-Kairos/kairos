type QuickStartButtonProps = {
  label: string
}

export default function QuickStartButton({label} : QuickStartButtonProps) {
  return (
    <button
      className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-slate-700 text-sm font-medium"
      // onClick={() => onClick()}
    >
      {label}
    </button>
  );
}
