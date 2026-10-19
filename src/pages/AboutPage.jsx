import { company } from '../data/company'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import { buildPageMeta } from '../utils/seo'

export default function AboutPage() {
  const meta = buildPageMeta({
    title: 'About Us',
    description:
      'Learn about AGRINECS BIOCHEMICALS — organic-focused crop nutrition from Nashik, Maharashtra, supporting sustainable and profitable farming.',
    path: '/about',
    image: '/images/about.jpg',
  })

  return (
    <>
      <SEO {...meta} />
      <section className="relative overflow-hidden bg-section py-14 sm:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={`About ${company.shortName}`}
                title="Growing With Purpose."
                description={company.shortDescription}
                as="h1"
              />
              <div className="mt-6 space-y-4 text-ink-muted">
                {company.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <img
              src="/images/about.jpg"
              alt="Tomato farming scene representing AGRINECS BIOCHEMICALS crop nutrition support"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </Container>
      </section>

      <section className="bg-page py-14 sm:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-ink">Our Mission</h2>
              <p className="mt-3 text-ink-muted">{company.mission}</p>
            </article>
            <article className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-ink">Our Vision</h2>
              <p className="mt-3 text-ink-muted">{company.vision}</p>
            </article>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Our Values</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {company.values.map((value) => (
                <article key={value.title} className="rounded-2xl border border-line bg-elevated p-5">
                  <h3 className="font-display text-xl font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted sm:text-base">{value.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-line bg-surface p-5">
              <h2 className="font-display text-xl font-semibold text-ink">Agricultural Philosophy</h2>
              <p className="mt-3 text-sm text-ink-muted sm:text-base">{company.philosophy}</p>
            </article>
            <article className="rounded-2xl border border-line bg-surface p-5">
              <h2 className="font-display text-xl font-semibold text-ink">Product Quality Approach</h2>
              <p className="mt-3 text-sm text-ink-muted sm:text-base">{company.qualityApproach}</p>
            </article>
            <article className="rounded-2xl border border-line bg-surface p-5">
              <h2 className="font-display text-xl font-semibold text-ink">Sustainability Commitment</h2>
              <p className="mt-3 text-sm text-ink-muted sm:text-base">{company.sustainability}</p>
            </article>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button to="/products">Explore Products</Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
