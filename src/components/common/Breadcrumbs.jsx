import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1">
              {index > 0 ? <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" /> : null}
              {isLast || !item.path ? (
                <span aria-current="page" className="font-medium text-ink">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="transition-colors hover:text-rose">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
