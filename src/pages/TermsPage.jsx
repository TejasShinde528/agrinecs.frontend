import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import { company } from '../data/company'
import { buildPageMeta } from '../utils/seo'

export default function TermsPage() {
  const meta = buildPageMeta({
    title: 'Terms and Conditions',
    description: `Terms and conditions for the ${company.name} website.`,
    path: '/terms',
  })

  return (
    <>
      <SEO {...meta} />
      <section className="bg-page py-12 sm:py-16">
        <Container narrow>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Terms and Conditions</h1>
          <div className="mt-6 space-y-4 text-ink-muted">
            <p>
              Content on this website describes AGRINECS BIOCHEMICALS products and company information for business
              visitors, farmers, and distributors. Always follow the official product label for dosage, application, and
              safety instructions.
            </p>
            <p>
              Product pages summarise composition and intended use based on our labelling. They are not a substitute for
              on-pack directions or professional agronomy advice for your specific crop and field conditions.
            </p>
            <p>
              Contact:{' '}
              <a className="text-rose hover:underline" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
