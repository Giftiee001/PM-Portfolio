import Link from "next/link";
import { ArrowRight, ArrowDownToLine } from "lucide-react";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-wide px-6 py-16 md:px-10 md:py-24">
        <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase text-gold">{site.role}</p>
        <h1 style={{ fontFamily: "var(--font-display)" }} className="mt-4 max-w-2xl text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">{site.name}</h1>
        <p className="mt-6 max-w-lg text-lg text-ink-soft">
          I&apos;m an early-career Product Manager passionate about understanding users, solving meaningful problems, and turning ideas into products that create real value.
        </p>
        <p className="mt-4 max-w-lg text-sm text-muted">
          Exploring product discovery, user-centered problem solving, product strategy, and thoughtful execution.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm text-paper hover:bg-pine">
            View my work <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={site.cvPath} download className="inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-3 text-sm text-ink hover:border-pine hover:text-pine">
            <ArrowDownToLine className="h-4 w-4" /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}