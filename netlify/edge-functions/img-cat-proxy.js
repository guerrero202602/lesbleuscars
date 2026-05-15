// img-cat-proxy.js — Edge Function servidor (sin DOM APIs)
const IMGS = {
  opticas:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Headlamp.jpg/200px-Headlamp.jpg',
  espejos:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Wing_mirror.jpg/200px-Wing_mirror.jpg',
  'levanta-cristal':'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Fensterheber_vorne_links.jpg/200px-Fensterheber_vorne_links.jpg',
  manijas:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Car_door_handle.jpg/200px-Car_door_handle.jpg',
  amortiguadores:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Shock_absorber.jpg/200px-Shock_absorber.jpg',
  frenos:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Disc_brake_jvl1.jpg/200px-Disc_brake_jvl1.jpg',
  rodamientos:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ball_bearing.jpg/200px-Ball_bearing.jpg',
  bujias:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Spark_plug.jpg/200px-Spark_plug.jpg',
  filtros:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Oil_filter.JPG/200px-Oil_filter.JPG',
  correas:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Timing_belt.jpg/200px-Timing_belt.jpg',
  bieletas:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Swaybar_1.jpg/200px-Swaybar_1.jpg',
  bujes:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ball_bearing.jpg/200px-Ball_bearing.jpg',
  fluidos:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Brake_fluid.jpg/200px-Brake_fluid.jpg',
  cauchos:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Shock_absorber.jpg/200px-Shock_absorber.jpg',
};
export default async (request) => {
  const url = new URL(request.url);
  const cat = url.searchParams.get('c');
  if (!cat || !IMGS[cat]) return new Response('not found', { status: 404 });
  try {
    const resp = await fetch(IMGS[cat], {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://en.wikipedia.org/', 'Accept': 'image/*' }
    });
    if (!resp.ok) return new Response('upstream ' + resp.status, { status: 502 });
    const img = await resp.arrayBuffer();
    return new Response(img, { status: 200, headers: {
      'Content-Type': resp.headers.get('content-type') || 'image/jpeg',
      'Cache-Control': 'public, max-age=604800',
      'Access-Control-Allow-Origin': '*',
    }});
  } catch (e) { return new Response(e.message, { status: 500 }); }
};
export const config = { path: '/api/catimg' };
