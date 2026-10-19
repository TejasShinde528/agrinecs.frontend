import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { company } from '../../data/company'
import BrandLogo from '../common/BrandLogo'
import Button from '../common/Button'
import ThemeToggle from './ThemeToggle'

export default function MobileMenu({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button
        type="button"
        className="absolute inset-0 bg-[color:var(--color-overlay)]"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-surface shadow-soft">
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-4">
          <BrandLogo compact />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-agri-green"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3 py-4" aria-label="Mobile primary">
          {company.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  isActive ? 'bg-soft-pink text-burgundy' : 'text-brand-ink hover:bg-surface-muted',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3 border-t border-line px-4 py-4">
          <ThemeToggle />
          <Button to="/contact" onClick={onClose} className="flex-1">
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  )
}
