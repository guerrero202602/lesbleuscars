/**
 * lesbleus-imgs.js
 * Catálogo de repuestos — Les Bleus S.A.
 * lesbleuscars.com | github.com/guerrero202602/lesbleuscars
 * Actualizado: mayo 2026 — 28 productos
 */

const BASE_URL = "https://raw.githubusercontent.com/guerrero202602/lesbleuscars/main/images/";

const CATEGORIAS = {
  MOTOR:      "Motor y Mantenimiento",
  FRENOS:     "Frenos",
  SUSPENSION: "Suspensión y Dirección",
  CARROCERIA: "Carrocería e Iluminación",
};

const productos = [
  { id:1,  nombre:"Correa de Accesorios",      referencia:"5PK 1230",                   descripcion:"Correa poli-V EPDM de alta resistencia para sistemas de accesorios del motor.",          categoria:CATEGORIAS.MOTOR,      imagen:BASE_URL+"correa-accesorios-5pk1230.png" },
  { id:2,  nombre:"Correa de Accesorios",      referencia:"6PK 1230",                   descripcion:"Correa poli-V EPDM de 6 nervios. Fabricada en Korea. Máxima durabilidad.",                categoria:CATEGORIAS.MOTOR,      imagen:BASE_URL+"correa-accesorios-6pk1230.png" },
  { id:3,  nombre:"Correa de Distribución",    referencia:"134Z",                        descripcion:"Correa dentada HNBR de alta precisión. Resistente a altas temperaturas.",                categoria:CATEGORIAS.MOTOR,      imagen:BASE_URL+"correa-distribucion-134z.png" },
  { id:4,  nombre:"Correa de Distribución",    referencia:"13568-16011",                 descripcion:"Correa de distribución HNBR. Compatible con motores Toyota/Lexus.",                      categoria:CATEGORIAS.MOTOR,      imagen:BASE_URL+"correa-distribucion-13568-16011.png" },
  { id:5,  nombre:"Filtro de Combustible",     referencia:"FG-2031",                     descripcion:"Filtro de combustible metálico en línea. Made in Korea.",                                categoria:CATEGORIAS.MOTOR,      imagen:BASE_URL+"filtro-combustible-fg2031.png" },
  { id:6,  nombre:"Filtro de Aire",            referencia:"Panel rectangular",            descripcion:"Filtro de aire tipo panel de alta eficiencia. Marco rígido negro.",                     categoria:CATEGORIAS.MOTOR,      imagen:BASE_URL+"filtro-aire.png" },
  { id:7,  nombre:"Filtro de Aceite",          referencia:"90915-YZZE1",                 descripcion:"Filtro de aceite tipo cartucho roscado. Made in Japan. Toyota, Lexus, Daihatsu.",       categoria:CATEGORIAS.MOTOR,      imagen:BASE_URL+"filtro-aceite-90915.png" },
  { id:8,  nombre:"Bujía NGK Iridium",         referencia:"NGK Iridium",                 descripcion:"Bujía de iridio de alta performance. Mayor eficiencia y vida útil.",                    categoria:CATEGORIAS.MOTOR,      imagen:BASE_URL+"bugia-ngk-iridium.png" },
  { id:9,  nombre:"Disco de Freno",            referencia:"Ventilado — 5 orificios",     descripcion:"Disco de freno ventilado de fundición gris. Alta disipación de calor.",                categoria:CATEGORIAS.FRENOS,     imagen:BASE_URL+"disco-freno.png" },
  { id:10, nombre:"Pastillas de Freno",        referencia:"Juego x4 semimetálicas",      descripcion:"Juego de 4 pastillas semimetálicas. Bajo ruido. Alta resistencia.",                    categoria:CATEGORIAS.FRENOS,     imagen:BASE_URL+"pastillas-freno.png" },
  { id:11, nombre:"Fluido de Freno",           referencia:"DOT 4 — 355 ml",              descripcion:"Fluido de freno DOT 4. Alto punto de ebullición. Disco y tambor.",                     categoria:CATEGORIAS.FRENOS,     imagen:BASE_URL+"fluido-freno-dot4.png" },
  { id:12, nombre:"Amortiguador Trasero",      referencia:"Monotubo con buje",            descripcion:"Amortiguador trasero a gas. Buje de goma inferior. Eje roscado.",                      categoria:CATEGORIAS.SUSPENSION, imagen:BASE_URL+"amortiguador-trasero.png" },
  { id:13, nombre:"Cubo de Rueda",             referencia:"Con rodamiento — 5 pernos",   descripcion:"Cubo de rueda con rodamiento integrado. 5 pernos. Eje delantero.",                     categoria:CATEGORIAS.SUSPENSION, imagen:BASE_URL+"cubo-rueda.png" },
  { id:14, nombre:"Rodamiento de Rueda",       referencia:"Cartucho doble fila",          descripcion:"Rodamiento tipo cartucho doble fila de bolas. Sellado. Sin mantenimiento.",            categoria:CATEGORIAS.SUSPENSION, imagen:BASE_URL+"rodamiento-rueda.png" },
  { id:15, nombre:"Buje de Suspensión",        referencia:"Goma-metal",                  descripcion:"Buje de brazo de control tipo goma-metal. Absorbe vibraciones.",                        categoria:CATEGORIAS.SUSPENSION, imagen:BASE_URL+"buje-suspension.png" },
  { id:16, nombre:"Brazo de Control",          referencia:"Con rótula y 2 bujes",        descripcion:"Brazo de control inferior con rótula y 2 bujes. Listo para montar.",                   categoria:CATEGORIAS.SUSPENSION, imagen:BASE_URL+"brazo-control.png" },
  { id:17, nombre:"Link Barra Estabilizadora", referencia:"Doble rótula esférica",        descripcion:"Link de barra estabilizadora. Doble rótula con tuercas autoblocantes.",                categoria:CATEGORIAS.SUSPENSION, imagen:BASE_URL+"link-barra-estabilizadora.png" },
  { id:18, nombre:"Terminal de Dirección",     referencia:"Extremo recto",                descripcion:"Terminal de barra de dirección recto. Con tuerca autoblocante.",                        categoria:CATEGORIAS.SUSPENSION, imagen:BASE_URL+"terminal-direccion-recto.png" },
  { id:19, nombre:"Terminal de Dirección",     referencia:"Extremo angulado",             descripcion:"Terminal de barra de dirección angulado. Cabeza esférica con boot.",                   categoria:CATEGORIAS.SUSPENSION, imagen:BASE_URL+"terminal-direccion-angulado.png" },
  { id:20, nombre:"Faro Delantero",            referencia:"Proyector doble — ángel eye", descripcion:"Óptica delantera proyector doble con aro de luz. Intermitente ámbar.",                 categoria:CATEGORIAS.CARROCERIA, imagen:BASE_URL+"faro-delantero.png" },
  { id:21, nombre:"Luz Trasera / Stop",        referencia:"Rojo-blanco con retroceso",   descripcion:"Conjunto de luz trasera. Stop, giro y retroceso.",                                      categoria:CATEGORIAS.CARROCERIA, imagen:BASE_URL+"luz-trasera-stop.png" },
  { id:22, nombre:"Espejo Retrovisor",         referencia:"Manual — ajuste mecánico",    descripcion:"Espejo retrovisor exterior de ajuste manual. Carcasa negra texturada.",                categoria:CATEGORIAS.CARROCERIA, imagen:BASE_URL+"espejo-retrovisor-manual.png" },
  { id:23, nombre:"Espejo Retrovisor",         referencia:"Eléctrico — conector 4 pines",descripcion:"Espejo retrovisor eléctrico. Conector 4 pines blanco. Ajuste motorizado.",             categoria:CATEGORIAS.CARROCERIA, imagen:BASE_URL+"espejo-retrovisor-electrico-4pin.png" },
  { id:24, nombre:"Espejo Retrovisor",         referencia:"Eléctrico — cable multipin",  descripcion:"Espejo retrovisor eléctrico con cable multipin. Cristal plano.",                       categoria:CATEGORIAS.CARROCERIA, imagen:BASE_URL+"espejo-retrovisor-electrico-multipin.png" },
  { id:25, nombre:"Manija Exterior",           referencia:"Con cilindro de llave",        descripcion:"Manija exterior de puerta con cilindro de llave integrado. Negro mate.",               categoria:CATEGORIAS.CARROCERIA, imagen:BASE_URL+"manija-exterior-con-llave.png" },
  { id:26, nombre:"Manija Exterior",           referencia:"Sin cilindro — perfil slim",   descripcion:"Manija exterior de puerta sin cilindro. Perfil delgado. Negro.",                      categoria:CATEGORIAS.CARROCERIA, imagen:BASE_URL+"manija-exterior-slim.png" },
  { id:27, nombre:"Manija Interior",           referencia:"Con seguro — indicador rojo",  descripcion:"Manija interior con seguro de traba. Indicador rojo. Negro texturado.",               categoria:CATEGORIAS.CARROCERIA, imagen:BASE_URL+"manija-interior.png" },
  { id:28, nombre:"Regulador de Ventanilla",   referencia:"Con motor eléctrico",          descripcion:"Regulador de ventanilla eléctrico completo con motor, guías y soporte.",              categoria:CATEGORIAS.CARROCERIA, imagen:BASE_URL+"regulador-ventanilla.png" },
];

function getTodosLosProductos()        { return productos; }
function getProductosPorCategoria(cat) { return productos.filter(p => p.categoria === cat); }
function getProductoPorId(id)          { return productos.find(p => p.id === id); }
function getCategorias()               { return [...new Set(productos.map(p => p.categoria))]; }
