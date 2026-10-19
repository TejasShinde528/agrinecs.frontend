import { company } from '../data/company'

export function absoluteUrl(path = '/') {
  const base = company.domain.replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized === '/' ? '/' : normalized}`
}

export function buildPageMeta({
  title,
  description,
  path = '/',
  image = '/images/og-default.jpg',
  type = 'website',
  noIndex = false,
}) {
  const fullTitle = title.includes(company.name) ? title : `${title} | ${company.name}`
  return {
    title: fullTitle,
    description,
    canonical: absoluteUrl(path),
    image: absoluteUrl(image),
    type,
    noIndex,
    siteName: company.name,
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    legalName: company.legalName,
    url: company.domain,
    email: company.email,
    telephone: company.phone,
    description: company.shortDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      ...(company.address.postalCode ? { postalCode: company.address.postalCode } : {}),
      addressCountry: company.address.country,
    },
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: company.name,
    url: company.domain,
    description: company.shortDescription,
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function productJsonLd(product) {
  if (!product) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: absoluteUrl(product.image),
    brand: {
      '@type': 'Brand',
      name: company.name,
    },
    category: product.category,
    url: absoluteUrl(`/products/${product.slug}`),
  }
}
