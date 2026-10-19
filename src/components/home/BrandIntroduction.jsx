import { Leaf, HeartHandshake, Sprout, SunMedium } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const values = [
  {
    icon: Sprout,
    title: 'Organic farming focus',
    description: 'Products designed to support sustainable and organic crop nutrition programmes.',
  },
  {
    icon: Leaf,
    title: 'Low-cost, practical solutions',
    description: 'Formulations aimed at helping farmers pursue profitable produce with responsible inputs.',
  },
  {
    icon: HeartHandshake,
    title: 'Healthier food for people',
    description: 'A commitment to nutrient-rich harvests that benefit both growers and consumers.',
  },
]

export default function BrandIntroduction() {
  const reduced = useReducedMotion()

  return (
    <section id="brand-introduction" className="bg-elevated py-16 sm:py-20" aria-labelledby="brand-intro-heading">
      <Container>
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-soft-pink px-3 py-1 text-agri-green">
          <SunMedium className="h-4 w-4" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em]">Grown with purpose</span>
        </div>
        <SectionHeading
          eyebrow="Our Purpose"
          title="Rooted in Nature. Driven by Innovation."
          description="AGRINECS BIOCHEMICALS supports modern agriculture with organic-focused biostimulants and crop nutrition products — helping farmers grow sustainable, profitable produce and bringing nutrient-rich food to more tables across India."
          as="h2"
        />
        <span id="brand-intro-heading" className="sr-only">
          Brand introduction
        </span>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                className="rounded-[1.25rem] border border-line bg-surface p-6 shadow-card"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-pink text-agri-green ring-1 ring-agri-green/15">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
