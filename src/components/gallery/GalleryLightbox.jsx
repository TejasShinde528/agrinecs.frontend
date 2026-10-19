import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function GalleryLightbox({ images, index, onClose, onNavigate }) {
  const closeRef = useRef(null)
  const current = images[index]

  useEffect(() => {
    closeRef.current?.focus()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onNavigate(index - 1)
      if (event.key === 'ArrowRight') onNavigate(index + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [index, onClose, onNavigate])

  if (!current) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[color:var(--color-overlay)] p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-surface shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <p className="text-sm text-ink-muted">
            {index + 1} / {images.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative bg-black/5">
          <img
            src={current.src}
            alt={current.alt}
            className="mx-auto max-h-[70vh] w-full object-contain"
          />
          <button
            type="button"
            onClick={() => onNavigate(index - 1)}
            className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-ink shadow"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate(index + 1)}
            className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-ink shadow"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-5 py-4">
          <p className="text-sm text-ink-muted sm:text-base">{current.caption}</p>
        </div>
      </div>
    </div>
  )
}
