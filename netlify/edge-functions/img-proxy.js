export default async (request) => {
    const url = new URL(request.url);
    const mlId = url.searchParams.get('id');
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

    if (!mlId || !mlId.startsWith('MLA')) {
          return new Response(JSON.stringify({ error: 'ID invalido' }), { status: 400, headers });
    }

    try {
          const resp = await fetch(`https://api.mercadolibre.com/items/${mlId}`, {
                  headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' }
          });
          const body = await resp.text();
          if (!resp.ok) {
                  return new Response(JSON.stringify({ error: 'ML_ERROR', mlStatus: resp.status, mlBody: body.slice(0,300), mlId }), { status: 200, headers });
          }
          const data = JSON.parse(body);
          const img = data.thumbnail || (data.pictures && data.pictures[0]?.secure_url) || null;
          return new Response(JSON.stringify({ img: img ? img.replace('http:','https:') : null }), { status: 200, headers: { ...headers, 'Cache-Control': 'public, max-age=86400' } });
    } catch (e) {
          return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
    }
};

export const config = { path: '/api/img' };
