import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { carouselImages } from '../../data/gallery'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

export default function ImageCarousel() {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()
  const total = carouselImages.length
  const current = carouselImages[index]

  const goTo = useCallback(
    (next) => {
      setIndex(((next % total) + total) % total)
    },
    [total],
  )

  const previous = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'ArrowLeft') previous()
      if (event.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [previous, next])

  const [touchStart, setTouchStart] = useState(null)

  const onTouchStart = (event) => setTouchStart(event.changedTouches[0].clientX)
  const onTouchEnd = (event) => {
    if (touchStart == null) return
    const delta = event.changedTouches[0].clientX - touchStart
    if (Math.abs(delta) > 40) {
      if (delta > 0) previous()
      else next()
    }
    setTouchStart(null)
  }

  return (
    <section className="bg-elevated py-16 sm:py-20" aria-labelledby="visual-story-heading">
      <Container>
        <SectionHeading
          eyebrow="Visual Story"
          title="Agriculture Through a Thoughtful Lens."
          description="A visual story of Nashik grape and tomato farming — the crops our nutrition products are built to support."
          as="h2"
        />
        <h2 id="visual-story-heading" className="sr-only">
          Visual story carousel
        </h2>

        <div
          className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-soft"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative aspect-[16/10] sm:aspect-[21/9]">
            {carouselImages.map((image, i) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                width={1600}
                height={900}
                loading={i === 0 ? 'eager' : 'lazy'}
                className={[
                  'absolute inset-0 h-full w-full object-cover transition-opacity',
                  reduced ? 'duration-150' : 'duration-500',
                  i === index ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 sm:p-7">
              <p className="max-w-2xl text-sm text-white sm:text-base">{current.caption}</p>
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center p-2 sm:p-4">
            <button
              type="button"
              onClick={previous}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur transition hover:bg-black/50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center p-2 sm:p-4">
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur transition hover:bg-black/50"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Carousel slides">
          {carouselImages.map((image, i) => (
            <button
              key={image.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={[
                'h-2.5 rounded-full transition-all',
                i === index ? 'w-8 bg-rose' : 'w-2.5 bg-line hover:bg-burgundy/40',
              ].join(' ')}
            />
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          Slide {index + 1} of {total}
        </p>
      </Container>
    </section>
  )
}
