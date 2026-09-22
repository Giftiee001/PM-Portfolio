import { Code2, Briefcase, Mail } from "lucide-react";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-wide px-6 py-12 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p style={{ fontFamily: "var(--font-display)" }} className="text-xl text-ink">{site.name}</p>
            <p className="mt-1 text-sm text-muted">{site.role}</p>
          </div>
          <div className="flex gap-5">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 className="h-5 w-5 text-ink-soft hover:text-pine" /></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase className="h-5 w-5 text-ink-soft hover:text-pine" /></a>
            <a href={`mailto:${site.email}`} aria-label="Email"><Mail className="h-5 w-5 text-ink-soft hover:text-pine" /></a>
          </div>
        </div>
        <p className="mt-8 border-t border-line pt-6 text-xs text-muted">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}