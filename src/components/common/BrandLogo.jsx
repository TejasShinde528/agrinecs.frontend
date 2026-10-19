import { company } from '../../data/company'

export default function BrandLogo({
  className = '',
  showText = true,
  compact = false,
  inverted = false,
}) {
  return (
    <span className={['inline-flex items-center gap-2.5', className].join(' ')}>
      <img
        src="/images/logo-agrinecs.jpg"
        alt=""
        width={compact ? 40 : 48}
        height={compact ? 40 : 48}
        className={[
          'rounded-xl object-cover shadow-sm ring-1 ring-line/60',
          compact ? 'h-10 w-10' : 'h-11 w-11 sm:h-12 sm:w-12',
        ].join(' ')}
      />
      {showText ? (
        <span className="min-w-0">
          <span
            className={[
              'block font-display font-semibold tracking-tight leading-tight',
              compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg',
              inverted ? 'text-footer-text' : 'text-brand-ink',
            ].join(' ')}
          >
            <span className="sm:hidden">{company.shortName}</span>
            <span className="hidden sm:inline">{company.name}</span>
          </span>
          {!compact ? (
            <span
              className={[
                'mt-0.5 hidden text-[11px] font-medium tracking-[0.04em] sm:block',
                inverted ? 'text-footer-muted' : 'text-agri-green',
              ].join(' ')}
            >
              Organic Crop Nutrition
            </span>
          ) : null}
        </span>
      ) : (
        <span className="sr-only">{company.name}</span>
      )}
    </span>
  )
}
