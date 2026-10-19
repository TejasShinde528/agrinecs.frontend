import { company } from '../../data/company'
import Button from '../common/Button'
import Container from '../common/Container'

const blocks = [
  { title: 'Our Story', body: company.story[0] },
  { title: 'Our Mission', body: company.mission },
  { title: 'Our Vision', body: company.vision },
  { title: 'Our Values', body: company.values.map((v) => v.title).join(' · ') },
]

export default function AboutPreview() {
  return (
    <section className="bg-section py-16 sm:py-20" aria-labelledby="about-preview-heading">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <div className="organic-blob absolute -inset-3 bg-blush/70 blur-2xl" aria-hidden="true" />
            <img
              src="/images/about.jpg"
              alt="Tomato crop on the plant representing AGRINECS BIOCHEMICALS’ support for vegetable farming"
              width={1200}
              height={900}
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-agri-green">About Us</p>
            <h2
              id="about-preview-heading"
              className="mt-3 text-balance font-display text-[clamp(1.8rem,3vw,2.8rem)] font-semibold text-brand-ink"
            >
              Growing With Purpose.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {company.shortDescription}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {blocks.map((block) => (
                <article key={block.title} className="rounded-2xl border border-line bg-surface/80 p-4">
                  <h3 className="font-display text-lg font-semibold text-ink">{block.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{block.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Button to="/about">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
