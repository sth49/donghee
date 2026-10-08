import { ChevronDown } from "lucide-react";

type Props = {
  expanded: boolean;
  onClick: () => void;
  className?: string;
};

export default function ShowMoreButton({ expanded, onClick, className = "" }: Props) {
  return (
    <button
      onClick={onClick}
      aria-expanded={expanded}
      className={`group inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/[0.06] px-4 py-1.5 text-sm font-medium text-primary transition-all hover:border-primary/45 hover:bg-primary/[0.12] active:scale-[0.97] ${className}`}
    >
      {expanded ? "Show less" : "Show more"}
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : "group-hover:translate-y-0.5"}`}
      />
    </button>
  );
}
