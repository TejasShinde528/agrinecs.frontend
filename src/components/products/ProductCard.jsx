import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ProductCard({ product }) {
  if (!product) return null

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-line bg-surface shadow-card transition-shadow duration-300 hover:shadow-soft">
      <Link to={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.imageAlt || product.name}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-agri-green backdrop-blur">
          {product.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        {product.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-soft-pink px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-agri-green"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <h3 className="font-display text-xl font-semibold text-brand-ink">
          <Link to={`/products/${product.slug}`} className="transition-colors hover:text-agri-green">
            {product.name}
          </Link>
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-ink-muted">{product.shortDescription}</p>
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-agri-green transition-colors hover:text-rose-hover"
        >
          View Product
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
