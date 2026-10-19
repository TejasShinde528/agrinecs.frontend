import Button from '../components/common/Button'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import { buildPageMeta } from '../utils/seo'

export default function NotFoundPage() {
  const meta = buildPageMeta({
    title: 'Page Not Found',
    description: 'The page you requested could not be found on the AGRINECS BIOCHEMICALS website.',
    path: '/404',
    noIndex: true,
  })

  return (
    <>
      <SEO {...meta} />
      <section className="bg-elevated py-20 sm:py-28">
        <Container narrow className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">404</p>
          <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-ink">
            This field looks empty.
          </h1>
          <p className="mt-4 text-ink-muted">
            The page you are looking for may have been moved, renamed, or never existed. Try one of the links below.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/">Back to Home</Button>
            <Button to="/products" variant="secondary">
              Browse Products
            </Button>
            <Button to="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
