import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="border-t border-line bg-pine text-paper">
      <div className="mx-auto max-w-wide px-6 py-16 md:px-10">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl">Let&apos;s build something useful.</h2>
        <p className="mt-3 max-w-md text-paper/80">
          I&apos;m currently open to Associate Product Manager, Product Associate, and entry-level Product Management opportunities.
        </p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-medium text-ink">
          Get in touch <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}