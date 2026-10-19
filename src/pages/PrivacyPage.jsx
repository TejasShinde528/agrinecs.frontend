import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import { company } from '../data/company'
import { buildPageMeta } from '../utils/seo'

export default function PrivacyPage() {
  const meta = buildPageMeta({
    title: 'Privacy Policy',
    description: `Privacy information for the ${company.name} website.`,
    path: '/privacy',
  })

  return (
    <>
      <SEO {...meta} />
      <section className="bg-page py-12 sm:py-16">
        <Container narrow>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Privacy Policy</h1>
          <div className="mt-6 space-y-4 text-ink-muted">
            <p>
              When you submit the enquiry form, your name, email, phone number, organisation (if provided), product
              interest, and message are sent to {company.email} so we can respond to your business enquiry.
            </p>
            <p>
              Theme preference may be stored in your browser’s localStorage so the site can remember light or dark mode.
              We do not sell your enquiry details to third parties.
            </p>
            <p>
              Questions about privacy:{' '}
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
