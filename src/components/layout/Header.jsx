import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { company } from '../../data/company'
import BrandLogo from '../common/BrandLogo'
import Button from '../common/Button'
import Container from '../common/Container'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={[
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-surface/92 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-4">
        <Link to="/" className="group transition-transform hover:scale-[1.01]" aria-label={`${company.name} home`}>
          <BrandLogo compact />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {company.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                [
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-soft-pink text-burgundy'
                    : 'text-ink-muted hover:bg-surface-muted hover:text-brand-ink',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button to="/products" size="sm" className="hidden md:inline-flex">
            Explore Products
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-agri-green lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
