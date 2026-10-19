import { useMemo, useState } from 'react'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import GalleryGrid from '../components/gallery/GalleryGrid'
import GalleryLightbox from '../components/gallery/GalleryLightbox'
import { galleryCategories, galleryImages } from '../data/gallery'
import { buildPageMeta } from '../utils/seo'

export default function GalleryPage() {
  const [category, setCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered = useMemo(() => {
    if (category === 'All') return galleryImages
    return galleryImages.filter((image) => image.category === category)
  }, [category])

  const navigate = (next) => {
    if (!filtered.length) return
    setActiveIndex(((next % filtered.length) + filtered.length) % filtered.length)
  }

  const meta = buildPageMeta({
    title: 'Photo Gallery',
    description:
      'Explore AGRINECS BIOCHEMICALS gallery imagery of Nashik grape farming, tomato cultivation, and our product range.',
    path: '/gallery',
  })

  return (
    <>
      <SEO {...meta} />
      <section className="bg-elevated py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="Farming Contexts We Support"
            description="A visual look at grape and tomato farming relevant to Nashik, Maharashtra — alongside our product range."
            as="h1"
          />

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Gallery categories">
            {galleryCategories.map((item) => {
              const active = category === item
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setCategory(item)
                    setActiveIndex(null)
                  }}
                  className={[
                    'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                    active ? 'bg-rose text-white' : 'bg-soft-pink text-agri-green hover:bg-blush',
                  ].join(' ')}
                  aria-pressed={active}
                >
                  {item}
                </button>
              )
            })}
          </div>

          <div className="mt-8">
            <GalleryGrid images={filtered} onSelect={setActiveIndex} />
          </div>

          {activeIndex != null ? (
            <GalleryLightbox
              images={filtered}
              index={activeIndex}
              onClose={() => setActiveIndex(null)}
              onNavigate={navigate}
            />
          ) : null}
        </Container>
      </section>
    </>
  )
}
