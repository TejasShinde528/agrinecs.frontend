import { Helmet } from 'react-helmet-async'
import { organizationJsonLd, websiteJsonLd } from '../../utils/seo'

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = 'website',
  noIndex = false,
  jsonLd = [],
  includeDefaults = true,
}) {
  const schemas = [
    ...(includeDefaults ? [organizationJsonLd(), websiteJsonLd()] : []),
    ...jsonLd.filter(Boolean),
  ]

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {image ? <meta property="og:image" content={image} /> : null}
      <meta property="og:site_name" content="AGRINECS BIOCHEMICALS" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
