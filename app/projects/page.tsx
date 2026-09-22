import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-wide px-6 py-16 md:px-10">
        <SectionHeading index="Projects" title="Case studies" description="Each project below walks through how I moved from problem to a built solution." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}