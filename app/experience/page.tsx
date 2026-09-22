import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
import CTA from "@/components/CTA";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <>
      <section className="mx-auto max-w-wide px-6 py-16 md:px-10">
        <SectionHeading index="Experience" title="Experience & Leadership" description="Where I'm applying product thinking outside of solo projects." />
        <div className="mt-8 max-w-content">
          {experience.map((e) => <ExperienceCard key={e.title} item={e} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}