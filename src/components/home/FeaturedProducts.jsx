import { useMemo, useState } from 'react'
import { getFeaturedProducts, productCategories } from '../../data/products'
import Button from '../common/Button'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import ProductFilters from '../products/ProductFilters'
import ProductGrid from '../products/ProductGrid'

export default function FeaturedProducts() {
  const featured = useMemo(() => getFeaturedProducts(6), [])
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(featured.map((p) => p.category)))],
    [featured],
  )
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return featured.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const haystack = `${product.name} ${product.shortDescription} ${product.category}`.toLowerCase()
      const matchesQuery = !query || haystack.includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [featured, category, query])

  return (
    <section className="bg-page py-16 sm:py-20" aria-labelledby="featured-products-heading">
      <Container>
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Products"
            title="Solutions That Help Agriculture Thrive."
            description="Explore Apical Maxx, High Rich, and Vertex — growth promoters and anti-stress support formulated for all crop types."
            as="h2"
          />
          <Button to="/products" variant="secondary" className="shrink-0 self-start lg:self-auto">
            View All Products
          </Button>
        </div>
        <h2 id="featured-products-heading" className="sr-only">
          Featured products
        </h2>

        <ProductFilters
          categories={categories.length ? categories : productCategories}
          category={category}
          onCategoryChange={setCategory}
          query={query}
          onQueryChange={setQuery}
          showSort={false}
          onReset={() => {
            setCategory('All')
            setQuery('')
          }}
          resultCount={filtered.length}
        />

        <ProductGrid products={filtered} emptyMessage="No featured products match these filters." />
      </Container>
    </section>
  )
}
