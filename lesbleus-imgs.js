// lesbleus-imgs.js v8 — Les Bleus Cars
// 28 productos con fotos reales · Mayo 2026
// Base: https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/

const LESBLEUS_IMGS = [
  { id:'amortiguador-trasero',       nombre:'Amortiguador trasero',                    cat:'amortiguadores', marca:'Monroe',   img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/amortiguador-trasero.png' },
  { id:'brazo-control',              nombre:'Brazo de control con rótula',             cat:'suspension',     marca:'Axios',    img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/brazo-control.png' },
  { id:'bugia-ngk-iridium',          nombre:'Bujía NGK Iridium',                       cat:'bujias',         marca:'Champion', img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/bugia-ngk-iridium.png' },
  { id:'buje-suspension',            nombre:'Buje de suspensión (silent block)',        cat:'bujes',          marca:'Axios',    img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/buje-suspension.png' },
  { id:'correa-accesorios-5pk1230',  nombre:'Correa de accesorios 5PK 1230',           cat:'correas',        marca:'',         img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/correa-accesorios-5pk1230.png' },
  { id:'correa-accesorios-6pk1230',  nombre:'Correa de accesorios 6PK 1230',           cat:'correas',        marca:'',         img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/correa-accesorios-6pk1230.png' },
  { id:'correa-distribucion-134z',   nombre:'Correa de distribución 134Z',             cat:'correas',        marca:'',         img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/correa-distribucion-134z.png' },
  { id:'correa-distribucion-13568',  nombre:'Correa de distribución 13568-16011',      cat:'correas',        marca:'',         img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/correa-distribucion-13568-16011.png' },
  { id:'cubo-rueda',                 nombre:'Cubo de rueda con rodamiento',            cat:'suspension',     marca:'SKF',      img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/cubo-rueda.png' },
  { id:'disco-freno',                nombre:'Disco de freno ventilado',                cat:'frenos',         marca:'Cobreq',   img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/disco-freno.png' },
  { id:'espejo-electrico-4pin',      nombre:'Espejo retrovisor eléctrico 4 pines',     cat:'espejos',        marca:'Giving',   img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/espejo-retrovisor-electrico-4pin.png' },
  { id:'espejo-electrico-multipin',  nombre:'Espejo retrovisor eléctrico multipines',  cat:'espejos',        marca:'Giving',   img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/espejo-retrovisor-electrico-multipin.png' },
  { id:'espejo-manual',              nombre:'Espejo retrovisor manual',                cat:'espejos',        marca:'Giving',   img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/espejo-retrovisor-manual.png' },
  { id:'faro-delantero',             nombre:'Faro delantero',                          cat:'opticas',        marca:'TYC',      img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/faro-delantero.png' },
  { id:'filtro-aceite-90915',        nombre:'Filtro de aceite 90915-YZZE1',            cat:'filtros',        marca:'Mahle',    img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/filtro-aceite-90915.png' },
  { id:'filtro-aire',                nombre:'Filtro de aire panel',                    cat:'filtros',        marca:'Mahle',    img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/filtro-aire.png' },
  { id:'filtro-combustible-fg2031',  nombre:'Filtro de combustible FG-2031',           cat:'filtros',        marca:'Mahle',    img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/filtro-combustible-fg2031.png' },
  { id:'fluido-freno-dot4',          nombre:'Fluido de freno DOT 4',                   cat:'fluidos',        marca:'',         img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/fluido-freno-dot4.png' },
  { id:'link-barra-estabilizadora',  nombre:'Link barra estabilizadora',               cat:'suspension',     marca:'Nakata',   img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/link-barra-estabilizadora.png' },
  { id:'luz-trasera-stop',           nombre:'Luz trasera / stop',                      cat:'opticas',        marca:'TYC',      img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/luz-trasera-stop.png' },
  { id:'manija-exterior-con-llave',  nombre:'Manija exterior con llave',               cat:'manijas',        marca:'',         img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/manija-exterior-con-llave.png' },
  { id:'manija-exterior-slim',       nombre:'Manija exterior slim',                    cat:'manijas',        marca:'',         img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/manija-exterior-slim.png' },
  { id:'manija-interior',            nombre:'Manija interior de puerta',               cat:'manijas',        marca:'',         img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/manija-interior.png' },
  { id:'pastillas-freno',            nombre:'Pastillas de freno',                      cat:'frenos',         marca:'Wildbrake',img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/pastillas-freno.png' },
  { id:'regulador-ventanilla',       nombre:'Regulador de ventanilla eléctrico',       cat:'levantacristales',marca:'Vespoli', img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/regulador-ventanilla.png' },
  { id:'rodamiento-rueda',           nombre:'Rodamiento de rueda SKF',                 cat:'rodamientos',    marca:'SKF',      img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/rodamiento-rueda.png' },
  { id:'terminal-direccion-angulado',nombre:'Terminal de dirección angulado',          cat:'suspension',     marca:'Teknorot', img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/terminal-direccion-angulado.png' },
  { id:'terminal-direccion-recto',   nombre:'Terminal de dirección recto',             cat:'suspension',     marca:'Teknorot', img:'https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/terminal-direccion-recto.png' },
];

// Helper — imagen por ID
function getLBImg(id){ return (LESBLEUS_IMGS.find(p=>p.id===id)||{}).img||''; }
// Helper — todos por categoría
function getLBCat(cat){ return LESBLEUS_IMGS.filter(p=>p.cat===cat); }
