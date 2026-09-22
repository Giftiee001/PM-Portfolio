import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyThree() {
  return (
    <section className="mx-auto max-w-wide px-6 py-16 md:px-10">
      <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-ink-soft">
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>
      <h1 style={{ fontFamily: "var(--font-display)" }} className="mt-6 text-4xl text-ink">Product Strategy Case</h1>
      <p className="mt-6 max-w-content border border-dashed border-line bg-paper-dim p-6 text-ink-soft">Coming soon.</p>
    </section>
  );
}