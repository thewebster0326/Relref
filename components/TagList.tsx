export default function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-line px-4 py-2 font-mono text-xs text-mist"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
