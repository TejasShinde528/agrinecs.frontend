# SEO Verification Checklist

Use this after deploying the production build with your real domain configured in `src/data/company.js`.

## Before submit

- [ ] Production domain set in `company.domain`
- [ ] Unique titles and meta descriptions reviewed on every public page
- [ ] Product pages contain original, accurate content (no keyword stuffing)
- [ ] Image alt text reviewed
- [ ] `robots.txt` points to the live sitemap URL
- [ ] `sitemap.xml` lists only published routes
- [ ] JSON-LD matches visible page content (no fake ratings/prices)
- [ ] Direct visits to nested routes work on the host (SPA fallback verified)

## Google Search Console

1. Create a property for your domain.
2. Verify ownership (DNS TXT or HTML file upload).
3. Submit `https://your-domain/sitemap.xml`.
4. Inspect important URLs: `/`, `/products`, key product pages, `/about`, `/gallery`, `/contact`.
5. Request indexing where appropriate after launch.
6. Monitor Coverage / Pages reports for errors.
7. Review Performance reports for queries, impressions, and CTR.

## Performance

1. Test key URLs in PageSpeed Insights (mobile + desktop).
2. Review LCP, INP, and CLS.
3. Compress oversized images if LCP is weak.
4. Re-test after content/image updates.

## Ongoing

- Keep product and company content accurate.
- Update the sitemap whenever routes or products change (`npm run sitemap` or `npm run build`).
- Do not expect rankings solely from technical SEO; content quality and relevance remain essential.
