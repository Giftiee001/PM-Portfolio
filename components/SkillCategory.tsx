import type { SkillCategory as SkillCategoryType } from "@/lib/data";

export default function SkillCategory({ category }: { category: SkillCategoryType }) {
  return (
    <div className="border border-line bg-card p-7">
      <h3 style={{ fontFamily: "var(--font-display)" }} className="text-xl text-ink">{category.title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{category.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((s) => (
          <li key={s} className="rounded-sm border border-line bg-paper px-2.5 py-1 text-xs text-ink-soft">{s}</li>
        ))}
      </ul>
    </div>
  );
}