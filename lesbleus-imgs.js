// lesbleus-imgs.js v9 — Les Bleus Cars
const LB_BASE='https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/';
window.LB_CAT_IMGS={
  opticas:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/faro-delantero.png',
  espejos:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/espejo-retrovisor-manual.png',
  frenos:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/disco-freno.png',
  amortiguadores:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/amortiguador-trasero.png',
  rodamientos:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/rodamiento-rueda.png',
  bujias:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/bugia-ngk-iridium.png',
  filtros:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/filtro-aceite-90915.png',
  correas:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/correa-accesorios-5pk1230.png',
  levantacristales:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/regulador-ventanilla.png',
  manijas:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/manija-exterior-slim.png',
  bujes:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/buje-suspension.png',
  bieletas:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/link-barra-estabilizadora.png',
  fluidos:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/fluido-freno-dot4.png',
};

// Re-render al cargar
if(typeof lista !== 'undefined' && typeof renderGrid === 'function') renderGrid(lista);

// ===== MODAL DETALLE PRODUCTO =====
var LB_DESC = {
  Monroe: 'Amortiguador Monroe de gas presurizado fabricado en Argentina. Tecnolog\u00eda Reflex para m\u00e1ximo control y confort. Restaura la estabilidad original del veh\u00edculo.',
  SKF: 'Rodamiento SKF de origen sueco, sellado de por vida. Alta resistencia al desgaste y temperatura. Mayor durabilidad y precisi\u00f3n.',
  TYC: 'Óptica TYC con est\u00e1ndares OEM. M\u00e1xima transmisi\u00f3n lum\u00ednica, resistencia UV y sellado herm\u00e9tico. Compatible con m\u00faltiples versiones del modelo.',
  Giving: 'Espejo Giving con motor el\u00e9ctrico silencioso y resistencia a la corrosi\u00f3n. Referencia del mercado argentino.',
  Vespoli: 'Regulador Vespoli con mecanismo reforzado. Motor de bajo consumo y larga vida \u00fatil. Instalaci\u00f3n directa sin modificaciones.',
  Mahle: 'Filtro Mahle de ingenier\u00eda alemana. Alta eficiencia contra part\u00edculas y contaminantes. Recomendado por fabricantes OEM.',
  Champion: 'Buj\u00eda Champion con electrodo de n\u00edquel de alta pureza. Encendido preciso, bajo consumo, compatible con GNC.',
  Cobreq: 'Pastillas Cobreq con compuesto de fricci\u00f3n de alto rendimiento. Frenada progresiva y baja generaci\u00f3n de polvo.',
  Wildbrake: 'Pastillas Wildbrake semi-met\u00e1licas. Excelente rendimiento a alta temperatura. Mayor duraci\u00f3n.',
  Nakata: 'Bieleta Nakata con r\u00f3tula de acero templado. Elimina ruidos en suspensi\u00f3n. Fabricaci\u00f3n brasilera ISO.',
  Axios: 'Silent block Axios con caucho vulcanizado de alta densidad. Absorbe vibraciones y mejora la direcci\u00f3n.',
  Teknorot: 'Terminal Teknorot de acero forjado homologado. R\u00f3tula sellada de por vida. M\u00e1xima precisi\u00f3n.',
  VTH: 'Cubo de rueda VTH con rodamiento integrado. Alta resistencia y sellado de por vida.',
  'Wagner Lockheed': 'Pastillas Wagner ThermoQuiet. Frenada silenciosa, sin ruido, sin polvo.'
};

var LB_CAT_DESC = {
  opticas: 'Óptica de reemplazo OEM. Resistencia UV, sellado herm\u00e9tico y m\u00e1xima claridad.',
  espejos: 'Espejo retrovisor de reemplazo con ajuste exacto. Motor el\u00e9ctrico de alta durabilidad.',
  amortiguadores: 'Amortiguador que restaura el confort y estabilidad. Instalaci\u00f3n directa.',
  frenos: 'Repuesto de frenos certificado para frenada progresiva y duradera.',
  rodamientos: 'Rodamiento sellado de por vida. Alta precisi\u00f3n y resistencia.',
  bujias: 'Buj\u00eda de alta eficiencia. Encendido preciso y arranque confiable.',
  filtros: 'Filtro de alta eficiencia que protege los sistemas cr\u00edticos.',
  correas: 'Correa de caucho sint\u00e9tico reforzado. Alta resistencia t\u00e9rmica.',
  levantacristales: 'Regulador el\u00e9ctrico de reemplazo directo. Motor silencioso de alto torque.',
  manijas: 'Manija con ajuste exacto al original. Resistente a UV y desgaste diario.',
  bieletas: 'Bieleta con r\u00f3tula reforzada. Elimina ruidos y restituye la geometr\u00eda.',
  bujes: 'Buje con caucho de alta densidad. Absorbe vibraciones en curva.',
  fluidos: 'Fluido de alta prestaci\u00f3n certificado para sistemas cr\u00edticos.'
};

var LB_ORIGEN = {
  Monroe:'Argentina',SKF:'Suecia',TYC:'Taiwan',Giving:'Argentina',
  Mahle:'Alemania',Champion:'EEUU',Cobreq:'Brasil',Nakata:'Brasil',
  Axios:'Argentina',Teknorot:'Turqu\u00eda',VTH:'Brasil',Wildbrake:'Brasil',
  'Wagner Lockheed':'EEUU',Vespoli:'Argentina'
};

function getProdDescText(p) {
  var m = p.m || '', cat = p.cat || '';
  return LB_DESC[m] || LB_CAT_DESC[cat] || 'Repuesto de calidad con instalaci\u00f3n directa. Stock real en Villa Martelli, Bs.As.';
}
function getProdGar(p) {
  var m = p.m || '';
  if (['Monroe','SKF','Mahle','Champion'].indexOf(m) > -1) return '12 meses garant\u00eda de f\u00e1brica';
  if (['TYC','Giving','Vespoli','Cobreq'].indexOf(m) > -1) return '6 meses de garant\u00eda';
  return '3 meses garant\u00eda LesBleus';
}
function getProdOrigen(p) { return LB_ORIGEN[p.m || ''] || 'Importado'; }

function openPD(pid) {
  var p = (typeof PP !== 'undefined') && PP.find(function(x){ return x.id === pid; });
  if (!p) return;
  var disc = getDesc(p), pF = precioDesc(p), hD = disc > 0;
  var img = getProdImg(p.id) || (window.LB_CAT_IMGS && window.LB_CAT_IMGS[p.cat]) || '';
  var iStr = img ? ('<img src="' + img + '" style="max-height:150px;max-width:75%;object-fit:contain">') : '';
  var ph = (hD ? '<span class="pdPriceOld">$' + p.p.toLocaleString('es-AR') + '</span>' : '') +
           '<span class="pdPrice">$' + pF.toLocaleString('es-AR') + '</span>' +
           (hD ? '<span class="pdPriceBadge">-' + disc + '%</span>' : '');
  var sk = p.ok
    ? '<div style="font-size:12px;color:#059669;margin-bottom:10px">&#10003; En stock &middot; Villa Martelli</div>'
    : '<div style="font-size:12px;color:#dc2626;margin-bottom:10px">Sin stock disponible</div>';
  var pi = (p.m || 'LB').substring(0, 3).toUpperCase();
  var ba = p.ok ? '<button class="pdBtnAdd" onclick="addC(' + p.id + ');closePD()">&#128722; Agregar al carrito</button>' : '';
  var ml_url = 'https://www.mercadolibre.com.ar/p/' + p.ml;
  var bm = p.ml ? '<button class="pdBtnML" onclick="window.open(\'' + ml_url + '\',\'_blank\')">Ver en Mercado Libre &rarr;</button>' : '';
  var box = document.getElementById('pdBox');
  if (!box) return;
  box.innerHTML =
    '<button id="pdClose" onclick="closePD()">&#10005;</button>' +
    '<div class="pdImg">' + iStr + '</div>' +
    '<div class="pdBody">' +
      '<div class="pdCat">' + p.cat.toUpperCase() + '</div>' +
      '<div class="pdName">' + p.n + '</div>' +
      '<div class="pdCode">' + (p.ml || '') + '</div>' +
      '<div style="margin-bottom:10px">' + ph + '</div>' + sk +
      '<hr class="pdDivider">' +
      '<div class="pdLabel">Descripci&oacute;n</div>' +
      '<div class="pdDesc">' + getProdDescText(p) + '</div>' +
      '<div class="pdLabel">Proveedor / Marca</div>' +
      '<div class="pdProv">' +
        '<div style="width:34px;height:34px;background:#0D1B3E;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#C9A84C;font-size:9px;font-weight:700;flex-shrink:0">' + pi + '</div>' +
        '<div><div class="pdProvName">' + (p.m || 'LesBleus') + '</div>' +
        '<div class="pdProvSub">Origen: ' + getProdOrigen(p) + ' &middot; Distribuidor oficial</div></div>' +
      '</div>' +
      '<div class="pdGar">&#9989; ' + getProdGar(p) + '</div>' +
      ba + bm +
    '</div>';
  document.getElementById('pdModal').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closePD() {
  document.getElementById('pdModal').classList.remove('on');
  document.body.style.overflow = '';
}
