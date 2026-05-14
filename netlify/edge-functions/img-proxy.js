// img-proxy - reservado para futuro uso
export default async (request) => {
  return new Response(JSON.stringify({ img: null }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
};
export const config = { path: '/api/img' };
