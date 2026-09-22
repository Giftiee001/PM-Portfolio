import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CTA from "@/components/CTA";
import { projects } from "@/lib/data";

export default function ConsentStartsWithUsCaseStudy() {
  const project = projects.find((p) => p.slug === "consent-starts-with-us")!;
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-14 md:px-10">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-ink-soft">
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <p style={{ fontFamily: "var(--font-mono)" }} className="mt-8 text-xs uppercase text-gold">{project.category}</p>
          <h1 style={{ fontFamily: "var(--font-display)" }} className="mt-3 text-4xl text-ink md:text-5xl">{project.name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">{project.description}</p>
        </div>
      </section>
      <section className="mx-auto max-w-wide px-6 py-16 md:px-10">
        <div className="max-w-content divide-y divide-line">
          {project.caseStudy?.map((s) => (
            <div key={s.id} className="py-8 first:pt-0">
              <div className="flex items-baseline gap-3">
                <span style={{ fontFamily: "var(--font-mono)" }} className="text-xs text-gold">{s.label}</span>
                <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl text-ink">{s.heading}</h2>
              </div>
              {s.body.map((p, i) => {
                const isPlaceholder = p.trim().startsWith("[ADD");
                return (
                  <p
                    key={i}
                    className={
                      isPlaceholder
                        ? "mt-4 rounded-sm border border-dashed border-line bg-paper-dim px-4 py-3 text-sm italic text-muted"
                        : "mt-4 text-sm text-ink-soft"
                    }
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}