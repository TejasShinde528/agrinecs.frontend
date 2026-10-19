import EnquiryForm from '../common/EnquiryForm'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { company } from '../../data/company'

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-soft-pink to-cream py-16 sm:py-20" aria-labelledby="contact-section-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Business Enquiries"
              title="Let’s Grow the Conversation."
              description="Share your business enquiry and it will be delivered directly to our team inbox. You can also reach us on WhatsApp or phone."
              as="h2"
            />
            <h2 id="contact-section-heading" className="sr-only">
              Contact and business enquiry
            </h2>

            <div className="mt-8 space-y-4 rounded-2xl border border-line bg-surface/80 p-5 text-sm text-ink-muted">
              <p>
                <span className="font-semibold text-ink">Email:</span>{' '}
                <a href={`mailto:${company.email}`} className="text-rose hover:underline">
                  {company.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-ink">Phone:</span>{' '}
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-rose hover:underline">
                  {company.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-ink">Address:</span>{' '}
                {company.address.line1}, {company.address.line2}, Dist. {company.address.city},{' '}
                {company.address.state}, {company.address.country}
              </p>
              <div>
                <p className="font-semibold text-ink">Business hours</p>
                <ul className="mt-1 space-y-1">
                  {company.hours.map((item) => (
                    <li key={item.days}>
                      {item.days}: {item.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <EnquiryForm />
        </div>
      </Container>
    </section>
  )
}
