import type { EducationItem } from "@/lib/data";

export default function EducationCard({ item }: { item: EducationItem }) {
  return (
    <div className="border border-line bg-card p-6">
      <h3 style={{ fontFamily: "var(--font-display)" }} className="text-lg text-ink">{item.institution}</h3>
      <p className="mt-1 text-sm text-ink-soft">{item.program}</p>
      {item.detail && <p className="mt-1 text-xs text-muted">{item.detail}</p>}
    </div>
  );
}