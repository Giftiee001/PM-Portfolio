import { Mail, Briefcase, Code2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/data";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-wide px-6 py-16 md:px-10">
      <SectionHeading index="Contact" title="Let's build something useful." />
      <p className="mt-6 max-w-content text-ink-soft">
        I&apos;m currently open to Associate Product Manager, Product Associate, and entry-level Product Management opportunities.
      </p>
      <div className="mt-8 max-w-content space-y-4">
        <a href={`mailto:${site.email}`} className="flex items-center gap-3 border border-line bg-card p-5">
          <Mail className="h-5 w-5 text-pine" /> {site.email}
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-line bg-card p-5">
          <Briefcase className="h-5 w-5 text-pine" /> LinkedIn
        </a>
        <a href={site.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-line bg-card p-5">
          <Code2 className="h-5 w-5 text-pine" /> GitHub
        </a>
      </div>
    </section>
  );
}