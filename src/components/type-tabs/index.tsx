import { TransparencyTypes } from '@/types/transparency-types';

interface TypeTabsProps {
  types: TransparencyTypes[];
  activeType: string;
  onSelect: (name: string) => void;
}

export default function TypeTabs({
  types,
  activeType,
  onSelect,
}: TypeTabsProps) {
  return (
    <div className="bg-blue-h px-4 pb-6 pt-2">
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
        {types.map((dt) => (
          <button
            key={dt.id}
            onClick={() => onSelect(dt.id)}
            className={`px-5 py-2.5 cursor-pointer text-[11px] md:text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
              activeType === dt.name
                ? 'bg-white text-primary shadow-md'
                : 'bg-white/90 text-foreground hover:bg-white'
            }`}
          >
            {dt.name}
          </button>
        ))}
      </div>
    </div>
  );
}
