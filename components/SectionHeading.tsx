type Props = { index?: string; title: string; description?: string };

export default function SectionHeading({ index, title, description }: Props) {
  return (
    <div>
      <div className="flex items-baseline gap-4">
        {index && <span style={{ fontFamily: "var(--font-mono)" }} className="text-xs text-gold">{index}</span>}
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl text-ink md:text-4xl">{title}</h2>
      </div>
      {description && <p className="mt-3 max-w-xl text-ink-soft">{description}</p>}
    </div>
  );
}