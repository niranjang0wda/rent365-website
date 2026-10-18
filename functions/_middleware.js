/**
 * Fills in the site address in canonical links, structured data, sitemap.xml, robots.txt and llms.txt.
 * Set SITE_URL (e.g. https://yourdomain.in) in Cloudflare Pages › Settings › Variables and Secrets,
 * so every address points to your main domain. Without it, the address the visitor used is filled in.
 */
export async function onRequest(context) {
  const response = await context.next();
  const type = response.headers.get("content-type") || "";
  if (!/text\/html|xml|text\/plain/.test(type) || response.status === 304) return response;
  const origin = (context.env.SITE_URL || new URL(context.request.url).origin).replace(/\/+$/, "");
  const text = await response.text();
  const headers = new Headers(response.headers);
  headers.delete("content-length");
  headers.delete("etag");
  return new Response(text.split("https://SITE_URL").join(origin), { status: response.status, headers });
}
