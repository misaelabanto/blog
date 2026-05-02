export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Block admin or development paths
Disallow: /admin/
Disallow: /api/

# Block placeholder images from search results
Disallow: /blog-placeholder-*.jpg

Sitemap: https://misaelabanto.com/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}