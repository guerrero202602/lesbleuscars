// lesbleus-imgs.js v12 â Les Bleus Cars
// Rutas corregidas + getProdImg + botones WhatsApp en productos

window.LB_CAT_IMGS={
  opticas:'/faro-delantero.png',
  espejos:'/espejo-retrovisor-manual.png',
  frenos:'/disco-freno.png',
  amortiguadores:'/amortiguador-trasero.png',
  rodamientos:'/rodamiento-rueda.png',
  bujias:'/bugia-ngk-iridium.png',
  filtros:'/filtro-aire.png',
  correas:'/correa-accesorios-5pk1230.png',
  levantacristales:'/regulador-ventanilla.png',
  'levanta-cristal':'/regulador-ventanilla.png',
  manijas:'/manija-exterior-con-llave.png',
  bujes:'/buje-suspension.png',
  bieletas:'/link-barra-estabilizadora.png',
  fluidos:'/fluido-freno-dot4.png',
  cauchos:'/bridgestone_turanza_t005m.png',
  baterias:'/moura.png'
};

var LB_KW=[
  [/faro|optica|headl/i,'/faro-delantero.png'],
  [/luz.?trasera|stop.?light|tail/i,'/luz-trasera-stop.png'],
  [/espejo.*electr.*4.?pin/i,'/espejo-retrovisor-electrico-4pin.png'],
  [/espejo.*electr.*multi/i,'/espejo-retrovisor-electrico-multipin.png'],
  [/espejo.*electr/i,'/espejo-retrovisor-electrico-multipin.png'],
  [/espejo.*manual/i,'/espejo-retrovisor-manual.png'],
  [/disco.*fren/i,'/disco-freno.png'],
  [/pastilla/i,'/pastillas-freno.png'],
  [/amortiguador/i,'/amortiguador-trasero.png'],
  [/brazo.*control/i,'/brazo-control.png'],
  [/terminal.*direcc/i,'/terminal-direccion-recto.png'],
  [/buje/i,'/buje-suspension.png'],
  [/bieleta|link.*estab/i,'/link-barra-estabilizadora.png'],
  [/bujia|spark/i,'/bugia-ngk-iridium.png'],
  [/filtro.*aceite/i,'/filtro-aceite-90915.png'],
  [/filtro.*aire/i,'/filtro-aire.png'],
  [/filtro.*combust/i,'/filtro-combustible-fg2031.png'],
  [/correa.*acces/i,'/correa-accesorios-5pk1230.png'],
  [/correa.*distrib/i,'/correa-distribucion-134z.png'],
  [/fluido|dot.?4/i,'/fluido-freno-dot4.png'],
  [/manija.*ext/i,'/manija-exterior-con-llave.png'],
  [/manija.*int/i,'/manija-interior.png'],
  [/regulador.*vent|levanta.*crist/i,'/regulador-ventanilla.png'],
  [/rodamiento/i,'/rodamiento-rueda.png'],
  [/cubo.*rueda/i,'/cubo-rueda.png'],
  [/bridgestone/i,'/bridgestone_turanza_t005m.png'],
  [/pirelli/i,'/pirelli_1.png'],
  [/michelin/i,'/michelin_pilot_spport_4_detallado.png'],
  [/dunlop/i,'/dunlop.png'],
  [/goodyear/i,'/goodyear.png'],
  [/fate/i,'/fate.png'],
  [/continental/i,'/continental.png'],
  [/yokohama/i,'/yokohama.png'],
  [/uniroyal/i,'/uniroyal.png'],
  [/moura/i,'/moura.png'],
  [/bosch/i,'/bosch.png'],
  [/heliar/i,'/heliar.png'],
  [/acdelco/i,'/acdelco.png'],
  [/diehard/i,'/diehard.png'],
  [/elite/i,'/elite.png'],
  [/willard|willar/i,'/willar.png'],
  [/goodrich/i,'/goodrish.png'],
  [/millard/i,'/millard%201.png']
];

function getProdImg(p){
  if(p.img) return p.img;
  var n=(p.n||'').toLowerCase();
  for(var i=0;i<LB_KW.length;i++){
    if(LB_KW[i][0].test(n)) return LB_KW[i][1];
  }
  var c=(p.cat||p.c||'').toLowerCase().replace(/\s/g,'-');
  if(window.LB_CAT_IMGS[c]) return window.LB_CAT_IMGS[c];
  return '/faro-delantero.png';
}
window.getProdImg=getProdImg;

// === WHATSAPP BUTTONS ===
var LB_WA='541123221233';

function lbAddWAButtons(){
  if(typeof PP==='undefined') return;
  var style=document.createElement('style');
  style.textContent='.wa-btn{display:inline-flex;align-items:center;gap:4px;padding:8px 12px;background:#25d366;color:#fff;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;cursor:pointer;border:none;transition:background .2s}.wa-btn:hover{background:#1da851}';
  document.head.appendChild(style);

  var btns=document.querySelectorAll('button.ba');
  btns.forEach(function(btn){
    var txt=btn.textContent;
    if(txt.indexOf('Carrito')<0&&txt.indexOf('Agregar')<0) return;
    var onclick=btn.getAttribute('onclick')||'';
    var match=onclick.match(/addC\((\d+)\)/);
    if(!match) return;
    var pid=parseInt(match[1]);
    var prod=PP.find(function(p){return p.id===pid;});
    if(!prod) return;
    if(btn.parentElement.querySelector('.wa-btn')) return;

    var msg='Hola! Me interesa: '+prod.n+' ($'+prod.p.toLocaleString('es-AR')+'). Cod: '+(prod.ml||prod.id);
    var a=document.createElement('a');
    a.href='https://wa.me/'+LB_WA+'?text='+encodeURIComponent(msg);
    a.target='_blank';
    a.className='wa-btn';
    a.innerHTML='ð¬ Comprar';
    a.onclick=function(e){e.stopPropagation();};
    btn.parentElement.appendChild(a);
  });
}

// Run after page loads and products render
if(document.readyState==='complete'){
  setTimeout(lbAddWAButtons,500);
}else{
  window.addEventListener('load',function(){setTimeout(lbAddWAButtons,500);});
}

// Re-run when filters change (MutationObserver on grid)
var _lbObs=new MutationObserver(function(){setTimeout(lbAddWAButtons,200);});
document.addEventListener('DOMContentLoaded',function(){
  var grid=document.querySelector('[class*="grid"]')||document.body;
  _lbObs.observe(grid,{childList:true,subtree:true});
});

// Auto-render if store already loaded
if(typeof renderGrid==='function') renderGrid();
