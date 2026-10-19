import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-rose text-white hover:bg-rose-hover shadow-sm border border-transparent',
  secondary:
    'bg-transparent text-ink border border-line hover:bg-surface-muted',
  soft: 'bg-soft-pink text-burgundy border border-transparent hover:bg-blush',
  ghost: 'bg-transparent text-ink hover:bg-surface-muted',
  footer: 'bg-rose text-white hover:opacity-90',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-base',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  disabled = false,
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose disabled:opacity-50 disabled:pointer-events-none',
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  ].join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
