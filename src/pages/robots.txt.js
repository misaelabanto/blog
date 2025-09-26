export async function GET() {
  const robotsTxt = `User-agent: *

# Allow crawling of main pages
Allow: /
Allow: /blog/
Allow: /about/
Allow: /projects/
Allow: /experience/
Allow: /skills/

# Allow Spanish language pages
Allow: /es/
Allow: /es/blog/
Allow: /es/about/
Allow: /es/projects/
Allow: /es/experience/
Allow: /es/skills/

# Block admin or development files
Disallow: /admin/
Disallow: /_astro/
Disallow: /node_modules/
Disallow: /dist/
Disallow: /src/

# Block common file types that shouldn't be indexed as pages
Disallow: /*.json$
Disallow: /*.js$
Disallow: /*.css$
Disallow: /*.ts$
Disallow: /*.mjs$

# Block RSS and sitemap from being indexed as pages
Disallow: /rss.xml
Disallow: /sitemap*.xml

# Block API routes (if you add any in the future)
Disallow: /api/

# Block search engines from indexing individual blog post images
Disallow: /blog-placeholder-*.jpg

# Specify location of sitemap
Sitemap: https://misaelabanto.com/sitemap-index.xml

# Crawl delay (optional - helps prevent server overload)
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}