type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto mb-10 max-w-2xl text-center md:mb-14" : "mb-10 max-w-2xl md:mb-14"}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-leaf">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight tracking-tight text-forest sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p>}
    </div>
  );
}
