import type { ExperienceItem } from "@/lib/data";

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="border-b border-line py-8">
      <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase text-muted">{item.period}</p>
      <h3 style={{ fontFamily: "var(--font-display)" }} className="mt-2 text-xl text-ink">{item.title}</h3>
      <p className="mt-1 text-sm text-gold">{item.org}</p>
      <ul className="mt-4 space-y-2">
        {item.bullets.map((b) => (
          <li key={b} className="text-sm text-ink-soft">• {b}</li>
        ))}
      </ul>
    </div>
  );
}