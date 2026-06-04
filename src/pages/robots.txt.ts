import type { APIRoute } from "astro";

/**
 * Dynamiczny robots.txt - odsyła do sitemap pod aktualną domeną (`site`).
 * Dzięki temu po zmianie domeny nic nie trzeba poprawiać ręcznie.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site).href;
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
