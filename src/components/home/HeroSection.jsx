import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { company } from '../../data/company'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Button from '../common/Button'
import Container from '../common/Container'

export default function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden grain" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Grape vineyard scene representing Nashik farming supported by AGRINECS BIOCHEMICALS"
          width={1800}
          height={1200}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-soft-pink/30" />
      </div>

      {!reduced ? (
        <>
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-[8%] top-[22%] h-24 w-24 rounded-full bg-rose/20 blur-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute right-[12%] top-[35%] h-16 w-16 rounded-full bg-agri-green/20 blur-xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          />
        </>
      ) : null}

      <Container className="relative flex min-h-[min(88vh,46rem)] flex-col justify-center py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 font-display text-xl font-semibold tracking-tight text-agri-green sm:text-2xl">
            {company.name}
          </p>
          <motion.h1
            id="hero-heading"
            className="text-balance text-[clamp(2.4rem,6vw,4.4rem)] font-semibold text-brand-ink"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            Growing a Better Future, Naturally.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-base text-ink-muted sm:text-lg"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
          >
            Innovative agricultural solutions designed to nurture crops, empower growers, and cultivate a more
            sustainable future.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
          >
            <Button to="/products" size="lg">
              Explore Our Products
            </Button>
            <Button to="/about" variant="secondary" size="lg">
              Discover Our Story
            </Button>
          </motion.div>
        </div>

        <a
          href="#brand-introduction"
          className="mt-12 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-rose"
        >
          Scroll to explore
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </a>
      </Container>
    </section>
  )
}
