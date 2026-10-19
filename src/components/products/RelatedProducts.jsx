import SectionHeading from '../common/SectionHeading'
import ProductGrid from './ProductGrid'

export default function RelatedProducts({ products = [] }) {
  if (!products.length) return null

  return (
    <section className="mt-16 border-t border-line pt-12" aria-labelledby="related-products-heading">
      <SectionHeading
        title="Related Products"
        description="Explore other AGRINECS products that support complementary crop nutrition needs."
        as="h2"
      />
      <h2 id="related-products-heading" className="sr-only">
        Related products
      </h2>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </section>
  )
}
