import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { company } from '../../data/company'
import BrandLogo from '../common/BrandLogo'
import Container from '../common/Container'

export default function Footer() {
  const year = new Date().getFullYear()
  const socialEntries = Object.entries(company.social).filter(([, url]) => Boolean(url))

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-auto bg-footer text-footer-text">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <BrandLogo inverted />
            <p className="text-sm leading-relaxed text-footer-muted">{company.shortDescription}</p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-sm text-footer-muted">
              {company.navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="transition-colors hover:text-footer-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-display text-lg font-semibold">Product Categories</h2>
            <ul className="space-y-2 text-sm text-footer-muted">
              {company.productCategories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="transition-colors hover:text-footer-text"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-display text-lg font-semibold">Contact</h2>
            <address className="not-italic space-y-2 text-sm text-footer-muted">
              <p>
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                Dist. {company.address.city}, {company.address.state}
                <br />
                {company.address.country}
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="hover:text-footer-text">
                  {company.email}
                </a>
              </p>
              <p>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-footer-text">
                  {company.phone}
                </a>
              </p>
            </address>
            {socialEntries.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-3 text-sm">
                {socialEntries.map(([network, url]) => (
                  <li key={network}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-footer-text">
                      {network}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4 text-sm text-footer-muted">
            <Link to="/privacy" className="hover:text-footer-text">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-footer-text">
              Terms and Conditions
            </Link>
            <p>© {year} {company.name}. All rights reserved.</p>
          </div>
          <button
            type="button"
            onClick={scrollTop}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 sm:self-auto"
          >
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  )
}
