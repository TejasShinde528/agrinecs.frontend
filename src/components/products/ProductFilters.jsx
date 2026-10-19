import { Search, X } from 'lucide-react'

export default function ProductFilters({
  categories = [],
  category,
  onCategoryChange,
  query,
  onQueryChange,
  sort,
  onSortChange,
  onReset,
  showSort = true,
  resultCount,
}) {
  const hasFilters = Boolean(query) || (category && category !== 'All') || (sort && sort !== 'name-asc')

  return (
    <div className="mb-8 space-y-4 rounded-2xl border border-line bg-surface p-4 shadow-card sm:p-5">
      <div className="grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-full border border-line bg-elevated py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition focus:border-rose"
          />
        </label>

        {showSort ? (
          <label className="flex items-center gap-2 text-sm text-ink-muted">
            <span className="whitespace-nowrap">Sort by</span>
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="rounded-full border border-line bg-elevated px-3 py-2.5 text-sm text-ink outline-none focus:border-rose"
            >
              <option value="name-asc">Name (A–Z)</option>
              <option value="name-desc">Name (Z–A)</option>
              <option value="category">Category</option>
            </select>
          </label>
        ) : null}

        {hasFilters ? (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-surface-muted"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Reset filters
          </button>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((item) => {
          const active = category === item
          return (
            <button
              key={item}
              type="button"
              onClick={() => onCategoryChange(item)}
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

      {typeof resultCount === 'number' ? (
        <p className="text-sm text-ink-muted">
          Showing{' '}
          <span className="font-semibold text-ink">{resultCount}</span>{' '}
          {resultCount === 1 ? 'product' : 'products'}
        </p>
      ) : null}
    </div>
  )
}
