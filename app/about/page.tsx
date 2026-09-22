import SectionHeading from "@/components/SectionHeading";
import EducationCard from "@/components/EducationCard";
import CTA from "@/components/CTA";
import { education } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-wide px-6 py-16 md:px-10">
        <SectionHeading index="About" title="Building my foundation, deliberately" />
        <div className="mt-8 max-w-content space-y-4 text-ink-soft">
          <p>I&apos;m an early-career Product Manager building my foundation in product discovery, user research, product strategy, and execution.</p>
          <p>Through my Product Management training and hands-on projects, I&apos;ve developed experience creating PRDs, defining user stories, prioritizing features, mapping user journeys, and thinking about how product decisions can be measured.</p>
          <p>I&apos;m particularly interested in products that solve meaningful everyday problems and improve people&apos;s access to opportunities, safety, and essential services.</p>
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-wide px-6 py-16 md:px-10">
          <SectionHeading index="Philosophy" title="How I approach product work" />
          <blockquote className="mt-6 max-w-content border-l-2 border-gold pl-6 text-xl text-ink" style={{ fontFamily: "var(--font-display)" }}>
            &ldquo;Good products start with understanding the problem before building the solution.&rdquo;
          </blockquote>
          <p className="mt-4 max-w-content text-ink-soft">
            A strong product decision should consider the user&apos;s needs, the business objective, and what is technically feasible. I approach product work by asking questions, testing assumptions, prioritizing intentionally, and learning from outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-wide px-6 py-16 md:px-10">
        <SectionHeading index="Credentials" title="Education & credentials" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((e) => <EducationCard key={e.institution + e.program} item={e} />)}
        </div>
      </section>

      <CTA />
    </>
  );
}