import { Domino } from "@/utils/domino";

export default function DominoCard({ domino }: { domino: Domino }) {
  return (
    <div className="w-6 h-20 border border-gray-300 flex flex-col items-center justify-center rounded">
      <div className="text-sm font-medium">{domino[0]}</div>
      <div className="text-xs">—</div>
      <div className="text-sm font-medium">{domino[1]}</div>
    </div>
  );
}
