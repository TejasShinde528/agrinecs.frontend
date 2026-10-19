import { useSearchParams } from 'react-router-dom'
import Container from '../components/common/Container'
import EnquiryForm from '../components/common/EnquiryForm'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import { company } from '../data/company'
import { buildPageMeta } from '../utils/seo'

export default function ContactPage() {
  const [params] = useSearchParams()
  const defaultProduct = params.get('product') || ''

  const meta = buildPageMeta({
    title: 'Contact Us',
    description:
      'Contact AGRINECS BIOCHEMICALS for product enquiries. Send a message to agrinecsbiochemicals@gmail.com or reach us by phone and WhatsApp.',
    path: '/contact',
  })

  return (
    <>
      <SEO {...meta} />
      <section className="bg-gradient-to-b from-soft-pink via-cream to-page py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Business Enquiries Welcome"
                description="Send your enquiry through the form and it will be delivered to our business email. You can also call or message us on WhatsApp."
                as="h1"
              />

              <div className="mt-8 space-y-5 rounded-2xl border border-line bg-surface/85 p-5 text-sm text-ink-muted shadow-card">
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink">Contact information</h2>
                  <p className="mt-2">
                    Email:{' '}
                    <a className="text-rose hover:underline" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </p>
                  <p>
                    Phone:{' '}
                    <a className="text-rose hover:underline" href={`tel:${company.phone.replace(/\s/g, '')}`}>
                      {company.phone}
                    </a>
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink">Address</h2>
                  <p className="mt-2">
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                    <br />
                    Dist. {company.address.city}, {company.address.state}
                    <br />
                    {company.address.country}
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink">Business hours</h2>
                  <ul className="mt-2 space-y-1">
                    {company.hours.map((item) => (
                      <li key={item.days}>
                        {item.days}: {item.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <EnquiryForm defaultProduct={defaultProduct} />
          </div>
        </Container>
      </section>
    </>
  )
}
