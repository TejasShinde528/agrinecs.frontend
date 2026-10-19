import ProductCard from './ProductCard'

export default function ProductGrid({ products = [], emptyMessage = 'No products match your filters.' }) {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-surface-muted px-6 py-14 text-center">
        <p className="text-ink-muted">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
