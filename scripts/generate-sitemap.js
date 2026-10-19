import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const companyModule = await import(pathToFileURL(join(root, 'src/data/company.js')).href)
const productsModule = await import(pathToFileURL(join(root, 'src/data/products.js')).href)

const domain = companyModule.company.domain.replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/products', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
]

const productRoutes = productsModule.products.map((product) => ({
  path: `/products/${product.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}))

const urls = [...staticRoutes, ...productRoutes]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (route) => `  <url>
    <loc>${domain}${route.path === '/' ? '/' : route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const outDir = join(root, 'public')
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'sitemap.xml'), `${xml}\n`, 'utf8')
console.log(`Generated sitemap with ${urls.length} URLs for ${domain}`)
