import SectionHeading from "@/components/SectionHeading";
import { writing } from "@/lib/data";

export default function WritingPage() {
  return (
    <section className="mx-auto max-w-wide px-6 py-16 md:px-10">
      <SectionHeading index="Writing" title="Writing & public artifacts" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {writing.map((item) => (
          <div key={item.title} className="border border-line bg-card p-6">
            <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase text-gold">{item.type}</p>
            <h3 style={{ fontFamily: "var(--font-display)" }} className="mt-2 text-lg text-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}