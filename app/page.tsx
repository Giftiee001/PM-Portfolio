import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SkillCategory from "@/components/SkillCategory";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import { skillCategories, projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-wide px-6 py-16 md:px-10">
        <SectionHeading index="01" title="About" />
        <div className="mt-6 max-w-content space-y-4 text-ink-soft">
          <p>I&apos;m learning product management through formal training and hands-on projects, with a focus on discovery, user research, strategy, and execution.</p>
          <p>What draws me to the work is understanding why a problem exists, then thinking through how a product can solve it.</p>
          <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-medium text-pine">
            More about my approach <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-wide px-6 py-16 md:px-10">
          <SectionHeading index="02" title="Product toolkit" description="Frameworks and tools I've learned and practiced." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skillCategories.map((c) => <SkillCategory key={c.title} category={c} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-wide px-6 py-16 md:px-10">
        <SectionHeading index="03" title="Featured projects" description="Work that shows how I take a problem from framing to a built solution." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <CTA />
    </>
  );
}