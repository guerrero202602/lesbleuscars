export default async (request) => {
      const url = new URL(request.url);
      const mlId = url.searchParams.get('id');
      const h = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
      if (!mlId || !mlId.startsWith('MLA')) {
              return new Response(JSON.stringify({ error: 'ID invalido' }), { status: 400, headers: h });
      }
      try {
              const num = mlId.replace('MLA', '');
              const pageUrl = 'https://articulo.mercadolibre.com.ar/MLA-' + num;
              const resp = await fetch(pageUrl, {
                        headers: {
                                    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)',
                                    'Accept': 'text/html'
                        }
              });
              if (!resp.ok) {
                        return new Response(JSON.stringify({ error: 'page_error', status: resp.status }), { status: 200, headers: h });
              }
              const html = await resp.text();
              const m1 = html.match(/property="og:image"\s+content="([^"]+)"/);
              const m2 = html.match(/content="([^"]+)"\s+property="og:image"/);
              const img = (m1 || m2) ? (m1 ? m1[1] : m2[1]).replace('http:', 'https:') : null;
              return new Response(JSON.stringify({ img }), {
                        status: 200,
                        headers: { ...h, 'Cache-Control': 'public, max-age=86400' }
              });
      } catch (e) {
              return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: h });
      }
};
export const config = { path: '/api/img' };
