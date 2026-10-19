export default function GalleryGrid({ images = [], onSelect }) {
  if (!images.length) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-surface-muted px-6 py-14 text-center">
        <p className="text-ink-muted">No images match this category.</p>
      </div>
    )
  }

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {images.map((image, index) => {
        const tall = image.span === 'tall'
        const wide = image.span === 'wide'
        return (
          <button
            key={image.id}
            type="button"
            onClick={() => onSelect(index)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-card transition hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={wide ? 1200 : 800}
              height={tall ? 1100 : 700}
              loading="lazy"
              className={[
                'w-full object-cover transition-transform duration-500 hover:scale-[1.03]',
                tall ? 'aspect-[3/4]' : wide ? 'aspect-[16/10]' : 'aspect-[4/3]',
              ].join(' ')}
            />
            <div className="px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose">{image.category}</p>
              <p className="mt-1 text-sm text-ink-muted">{image.caption}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}
