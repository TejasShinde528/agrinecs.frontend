import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import ProductFilters from '../components/products/ProductFilters'
import ProductGrid from '../components/products/ProductGrid'
import { productCategories, products } from '../data/products'
import { buildPageMeta } from '../utils/seo'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(
    productCategories.includes(initialCategory) ? initialCategory : 'All',
  )
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [sort, setSort] = useState('name-asc')

  const filtered = useMemo(() => {
    let list = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const haystack = `${product.name} ${product.shortDescription} ${product.category} ${product.tags?.join(' ') || ''}`.toLowerCase()
      const matchesQuery = !query || haystack.includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })

    list = [...list].sort((a, b) => {
      if (sort === 'name-desc') return b.name.localeCompare(a.name)
      if (sort === 'category') {
        const byCategory = a.category.localeCompare(b.category)
        return byCategory !== 0 ? byCategory : a.name.localeCompare(b.name)
      }
      return a.name.localeCompare(b.name)
    })

    return list
  }, [category, query, sort])

  const updateCategory = (value) => {
    setCategory(value)
    const next = new URLSearchParams(searchParams)
    if (value === 'All') next.delete('category')
    else next.set('category', value)
    setSearchParams(next, { replace: true })
  }

  const updateQuery = (value) => {
    setQuery(value)
    const next = new URLSearchParams(searchParams)
    if (!value) next.delete('q')
    else next.set('q', value)
    setSearchParams(next, { replace: true })
  }

  const meta = buildPageMeta({
    title: 'Agricultural Products',
    description:
      'Browse AGRINECS BIOCHEMICALS products — Apical Maxx, High Rich, and Vertex — growth promoters and anti-stress support for all crops.',
    path: '/products',
  })

  return (
    <>
      <SEO {...meta} />
      <section className="bg-elevated py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Product Catalogue"
            title="Organic-Focused Crop Solutions"
            description="Growth promoters and anti-stress support formulated for all crop types — built for sustainable and profitable farming."
            as="h1"
          />
          <div className="mt-8">
            <ProductFilters
              categories={productCategories}
              category={category}
              onCategoryChange={updateCategory}
              query={query}
              onQueryChange={updateQuery}
              sort={sort}
              onSortChange={setSort}
              onReset={() => {
                setCategory('All')
                setQuery('')
                setSort('name-asc')
                setSearchParams({}, { replace: true })
              }}
              resultCount={filtered.length}
            />
            <ProductGrid products={filtered} />
          </div>
        </Container>
      </section>
    </>
  )
}
