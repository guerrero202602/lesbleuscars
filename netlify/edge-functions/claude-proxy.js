export default async (request) => {
  const url = new URL(request.url);
  const mlId = url.searchParams.get('id');

  if (!mlId || !mlId.startsWith('MLA')) {
    return new Response(JSON.stringify({ error: 'ID inválido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  try {
    const resp = await fetch(`https://api.mercadolibre.com/items/${mlId}`);
    if (!resp.ok) return new Response(JSON.stringify({ error: 'No encontrado' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });

    const data = await resp.json();
    const img = data.thumbnail || (data.pictures && data.pictures[0]?.secure_url) || null;

    return new Response(JSON.stringify({ img: img ? img.replace('http:', 'https:') : null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'public, max-age=86400' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
};

export const config = { path: '/api/img' };
