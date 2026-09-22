import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col justify-between border border-line bg-card p-7 hover:border-pine">
      <div>
        <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase text-gold">{project.category}</p>
        <h3 style={{ fontFamily: "var(--font-display)" }} className="mt-3 text-2xl text-ink">{project.name}</h3>
        <p className="mt-3 text-sm text-ink-soft">{project.description}</p>
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-sm">
          <div><p className="text-xs text-muted">Role</p><p className="text-ink-soft">{project.role}</p></div>
          <div><p className="text-xs text-muted">Area</p><p className="text-ink-soft">{project.productArea}</p></div>
        </div>
      </div>
      <div className="mt-7">
        {project.status === "coming-soon" ? (
          <span className="text-xs uppercase text-muted">Coming soon</span>
        ) : (
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-pine">
            View case study <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}