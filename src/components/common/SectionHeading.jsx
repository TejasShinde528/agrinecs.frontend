export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div className={['flex flex-col gap-3 max-w-2xl', alignment, className].join(' ')}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-agri-green">{eyebrow}</p>
      ) : null}
      <Tag className="text-balance text-[clamp(1.75rem,3vw,2.75rem)] font-semibold text-brand-ink">
        {title}
      </Tag>
      {description ? <p className="prose-readable text-base sm:text-lg text-ink-muted">{description}</p> : null}
    </div>
  )
}
