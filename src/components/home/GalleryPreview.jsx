import { useMemo, useState } from 'react'
import { galleryImages } from '../../data/gallery'
import Button from '../common/Button'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import GalleryGrid from '../gallery/GalleryGrid'
import GalleryLightbox from '../gallery/GalleryLightbox'

export default function GalleryPreview() {
  const preview = useMemo(() => galleryImages.slice(0, 8), [])
  const [activeIndex, setActiveIndex] = useState(null)

  const navigate = (next) => {
    if (!preview.length) return
    setActiveIndex(((next % preview.length) + preview.length) % preview.length)
  }

  return (
    <section className="bg-page py-16 sm:py-20" aria-labelledby="gallery-preview-heading">
      <Container>
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Photo Album"
            title="Moments From Field to Focus."
            description="Realistic grape and tomato farming scenes relevant to Nashik, Maharashtra — alongside our product range."
            as="h2"
          />
          <Button to="/gallery" variant="secondary" className="shrink-0 self-start">
            Explore Our Gallery
          </Button>
        </div>
        <h2 id="gallery-preview-heading" className="sr-only">
          Gallery preview
        </h2>

        <GalleryGrid images={preview} onSelect={setActiveIndex} />

        {activeIndex != null ? (
          <GalleryLightbox
            images={preview}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNavigate={navigate}
          />
        ) : null}
      </Container>
    </section>
  )
}
