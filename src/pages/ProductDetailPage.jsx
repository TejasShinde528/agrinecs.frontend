import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/common/Breadcrumbs'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import ProductGallery from '../components/products/ProductGallery'
import RelatedProducts from '../components/products/RelatedProducts'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import { breadcrumbJsonLd, buildPageMeta, productJsonLd } from '../utils/seo'
import NotFoundPage from './NotFoundPage'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug])

  if (!product) {
    return <NotFoundPage />
  }

  const related = getRelatedProducts(product, 3)
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: product.name, path: `/products/${product.slug}` },
  ]

  const meta = buildPageMeta({
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.shortDescription,
    path: `/products/${product.slug}`,
    image: product.image,
    type: 'product',
  })

  return (
    <>
      <SEO
        {...meta}
        includeDefaults={false}
        jsonLd={[breadcrumbJsonLd(crumbs), productJsonLd(product)]}
      />
      <section id="product-top" className="bg-page py-10 sm:py-14 scroll-mt-[var(--header-height)]">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <ProductGallery images={product.gallery || [product.image]} alt={product.imageAlt || product.name} />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-agri-green">{product.category}</p>
              <h1 className="mt-2 font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-brand-ink">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{product.description}</p>

              {product.tags?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-soft-pink px-3 py-1 text-xs font-semibold text-agri-green">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button to={`/contact?product=${encodeURIComponent(product.name)}`}>Enquire About This Product</Button>
                <Button to={`/products?category=${encodeURIComponent(product.category)}`} variant="secondary">
                  More in {product.category}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {product.benefits?.length ? (
              <InfoCard title="Key Benefits">
                <ul className="list-disc space-y-2 pl-5">
                  {product.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </InfoCard>
            ) : null}

            {product.specifications?.length ? (
              <InfoCard title="Specifications">
                <dl className="space-y-3">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-[8rem_1fr] gap-3 sm:grid-cols-[10rem_1fr]">
                      <dt className="font-semibold text-ink">{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </InfoCard>
            ) : null}

            {product.applications?.length ? (
              <InfoCard title="Intended Applications">
                <ul className="list-disc space-y-2 pl-5">
                  {product.applications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </InfoCard>
            ) : null}

            {product.usage ? (
              <InfoCard title="Usage Instructions">
                <p>{product.usage}</p>
              </InfoCard>
            ) : null}

            {product.safety ? (
              <InfoCard title="Safety and Handling" className="lg:col-span-2">
                <p>{product.safety}</p>
              </InfoCard>
            ) : null}
          </div>

          {product.faq?.length ? (
            <section className="mt-12" aria-labelledby="product-faq-heading">
              <h2 id="product-faq-heading" className="font-display text-2xl font-semibold text-ink">
                Frequently Asked Questions
              </h2>
              <div className="mt-5 space-y-3">
                {product.faq.map((item) => (
                  <details key={item.question} className="rounded-2xl border border-line bg-surface p-4 open:shadow-card">
                    <summary className="cursor-pointer font-semibold text-ink">{item.question}</summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <RelatedProducts products={related} />

          <p className="mt-10 text-sm text-ink-muted">
            Looking for something else?{' '}
            <Link to="/products" className="font-semibold text-rose hover:underline">
              Browse all products
            </Link>{' '}
            or{' '}
            <Link to="/contact" className="font-semibold text-rose hover:underline">
              contact our team
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  )
}

function InfoCard({ title, children, className = '' }) {
  return (
    <article className={['rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-6', className].join(' ')}>
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{children}</div>
    </article>
  )
}
