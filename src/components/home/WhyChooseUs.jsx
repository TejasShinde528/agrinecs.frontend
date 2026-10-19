import { Leaf, Recycle, ShieldCheck, Users, TreeDeciduous } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const points = [
  {
    icon: Leaf,
    title: 'Organic-focused crop nutrition',
    description: 'Biostimulants and growth promoters designed for sustainable farming systems and healthier produce.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear product composition',
    description: 'Transparent labelling around seaweed extracts, humic substances, amino acids, and related nutrition.',
  },
  {
    icon: Users,
    title: 'Built around grower needs',
    description: 'Practical products for all crop types — from grapes and vegetables to wider field farming.',
  },
  {
    icon: Recycle,
    title: 'Sustainable & profitable farming',
    description: 'Helping farmers pursue low-cost, sustainable production that remains commercially viable.',
  },
]

export default function WhyChooseUs() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-section py-16 sm:py-20" aria-labelledby="why-choose-heading">
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-blush/70 blur-3xl" aria-hidden="true" />
      <Container>
        <div className="mb-3 inline-flex items-center gap-2 text-agri-green">
          <TreeDeciduous className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.16em]">Why growers choose us</span>
        </div>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted Partners for Organic Growth."
          description="From our base in Sinnar, Nashik, we support farmers and agribusinesses with responsible crop nutrition."
          as="h2"
        />
        <h2 id="why-choose-heading" className="sr-only">
          Why choose us
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {points.map((point, index) => {
            const Icon = point.icon
            const offset = index % 2 === 1 ? 'md:mt-8' : ''
            return (
              <motion.article
                key={point.title}
                className={[
                  'rounded-[1.5rem] border border-line bg-surface/90 p-6 shadow-card backdrop-blur-sm sm:p-7',
                  offset,
                ].join(' ')}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-soft-pink text-agri-green ring-1 ring-agri-green/15">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-brand-ink">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">{point.description}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
