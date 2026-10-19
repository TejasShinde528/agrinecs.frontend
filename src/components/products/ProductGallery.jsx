import { useState } from 'react'

export default function ProductGallery({ images = [], alt = 'Product image' }) {
  const gallery = images.length ? images : []
  const [active, setActive] = useState(0)
  const current = gallery[active] || gallery[0]

  if (!current) return null

  return (
    <div>
      <div className="overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-card">
        <img
          src={current}
          alt={alt}
          width={1000}
          height={800}
          className="aspect-[5/4] w-full object-cover"
        />
      </div>
      {gallery.length > 1 ? (
        <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {gallery.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={[
                'overflow-hidden rounded-xl border transition',
                index === active ? 'border-rose ring-2 ring-rose/30' : 'border-line hover:border-rose/40',
              ].join(' ')}
              aria-label={`Show product image ${index + 1}`}
              aria-pressed={index === active}
            >
              <img src={src} alt="" width={200} height={160} loading="lazy" className="aspect-[5/4] w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
