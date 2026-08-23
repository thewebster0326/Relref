import { timeline } from "@/lib/content";

export default function Timeline() {
  return (
    <div className="relative ml-1.5 border-l border-line pl-7">
      {timeline.map((item, i) => (
        <div key={i} className="relative pb-8 last:pb-0">
          <span className="absolute -left-[34.5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-ice bg-deep" />
          <p className="font-mono text-sm text-ice">{item.year}</p>
          <p className="mt-1 text-frost">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
