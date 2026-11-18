// ============================================================================
// DN SERVICIOS Y TECNOLOGÍAS - SISTEMA DE ÁNGEL VILLALBA (PIN SISTEMA: 000)
// BASE SUPABASE (SQL) + BÓVEDA INGRESOS (1212) + CARGA RÁPIDA RESTAURADA 100%
// ============================================================================

const PIN_ACCESO = "000";
const PIN_INGRESOS = "1212";
const TECNICO_NOMBRE = "ANGEL VILLALBA";
const AUTH_SESSION_KEY = "dn_servicios_autenticado_supa_v1";
const CACHE_LOCAL_KEY = "dn_angel_cache_supa_v1";

// CREDENCIALES DE SUPABASE
const SUPABASE_URL = "https://fnnfcjmpobzbcjzwkuow.supabase.co";
const SUPABASE_KEY = "sb_publishable_Yy8MvXnSvj1SqivYCs630w_ahx4zwKF";
const HEADERS_SUPA = {
  "apikey": SUPABASE_KEY,
  "Authorization": `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
  "Prefer": "return=representation,resolution=merge-duplicates"
};

const SVG_EDIT = `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>`;
const SVG_TRASH = `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`;

// BASE MAESTRA DE RESPALDO (SE SUBIRÁ A SUPABASE AL HACER CLIC EN MIGRAR)
const DATOS_MAESTROS = [
  { id: "SER-001", fecha: "10/03/2026", categoria: "Impresora", marca: "HP", modelo: "Impresora HP + PC", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Mantenimiento de impresora HP y revisión de PC", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-002", fecha: "10/03/2026", categoria: "PC Escritorio / Servidor", marca: "Genérico", modelo: "PC Diseño", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación de CorelDRAW 2025, Photoshop, AutoCAD y Canva", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "Suite gráfica completa" },
  { id: "SER-003", fecha: "10/03/2026", categoria: "Electrónica / Línea Blanca / Periférico", marca: "Silhouette", modelo: "Cameo + Sublimadoras", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Mantenimiento preventivo de plotter Cameo y máquinas de sublimación", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-004", fecha: "10/03/2026", categoria: "Audio / Consola / Portátil", marca: "JBL", modelo: "JBL GO", intervencion: "Microelectrónica / Reparación de Placa", trabajo: "Revisión y servicio técnico de parlante portátil JBL GO", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-005", fecha: "11/03/2026", categoria: "Impresora", marca: "Brother", modelo: "Serie HL", intervencion: "Reemplazo de Repuesto / Hardware + Mantenimiento Físico / Limpieza", trabajo: "Limpieza interna e instalación de unidad de imagen (Drum) y tóner", repuestos: "Drum y Tóner", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-006", fecha: "12/03/2026", categoria: "Smart TV / Monitor", marca: "Amazon", modelo: "Fire TV Stick (x3 unidades)", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación y configuración de aplicación Flujo en 3 TV Stick", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-007", fecha: "12/03/2026", categoria: "Notebook / Laptop", marca: "Genérico", modelo: "PC / Laptop", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación y activación de AutoCAD", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-008", fecha: "13/03/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3150", intervencion: "Mantenimiento Físico / Limpieza + Reset de Software / Contadores", trabajo: "Mantenimiento completo y reset de contador de almohadillas", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-009", fecha: "13/03/2026", categoria: "Impresora", marca: "Brother", modelo: "Impresora Brother", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Reparación de mecanismo de arrastre (no estiraba hojas)", repuestos: "Ninguno", precio: "40.000 Gs", estado: "Entregado", notas: "Francisco" },
  { id: "SER-010", fecha: "14/03/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3210", intervencion: "Instalación / Conectividad / Redes", trabajo: "Inicialización de impresora y descarga/instalación de drivers", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-011", fecha: "29/09/2026", categoria: "Impresora", marca: "Genérico", modelo: "Impresora de Oficina", intervencion: "Instalación / Conectividad / Redes", trabajo: "Entrega, instalación física de impresora y servicio técnico", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-012", fecha: "30/09/2026", categoria: "Smart TV / Monitor", marca: "Genérico", modelo: "Smart TV / Box", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación y configuración de aplicación Xuper TV", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-013", fecha: "01/10/2026", categoria: "Smartphone", marca: "Apple", modelo: "Samsung a iPhone 16 Pro Max", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Traspaso completo de fotografías de Samsung a iPhone", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "Anotado como iPhone 18" },
  { id: "SER-014", fecha: "06/10/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3110", intervencion: "Mantenimiento Físico / Limpieza + Reemplazo de Repuesto / Hardware + Reset de Software / Contadores", trabajo: "Reset de software, cambio de almohadillas y mantenimiento general", repuestos: "Almohadillas absorbentes", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-015", fecha: "07/10/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3110", intervencion: "Reemplazo de Repuesto / Hardware + Mantenimiento Físico / Limpieza", trabajo: "Mantenimiento completo y cambio de encoder circular", repuestos: "Encoder circular", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-016", fecha: "07/10/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Mantenimiento Físico / Limpieza + Software / Sistema Operativo / Backup", trabajo: "Mantenimiento completo preventivo de hardware y optimización de software", repuestos: "Pasta térmica", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-017", fecha: "07/10/2026", categoria: "Almacenamiento", marca: "Genérico", modelo: "Disco Óptico CD", intervencion: "Software / Sistema Operativo / Backup + Impresión / Corte Plotter / Trabajo Práctico", trabajo: "Extracción e impresión de estudios de radiografía desde CD", repuestos: "Papel / Impresión", precio: "", estado: "Entregado", notas: "Cliente Sr." },
  { id: "SER-018", fecha: "07/10/2026", categoria: "Notebook / Laptop", marca: "Asus", modelo: "Laptop Asus", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Ajuste estructural de pantalla y reconexión de flex de cámara web", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-019", fecha: "08/10/2026", categoria: "Impresora", marca: "Genérico", modelo: "Impresora Térmica", intervencion: "Microelectrónica / Reparación de Placa", trabajo: "Revisión técnica y diagnóstico de impresora térmica", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-020", fecha: "08/10/2026", categoria: "Smart TV / Monitor", marca: "Genérico", modelo: "TV Box", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación y configuración de plataforma Flujo en TV Box", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-021", fecha: "08/10/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP Negro", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho de tinta color negro", repuestos: "Tinta negra", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-022", fecha: "08/10/2026", categoria: "Impresora", marca: "Genérico", modelo: "Sistema Continuo", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de tanques de tinta de impresora", repuestos: "Tinta", precio: "", estado: "Entregado", notas: "Cliente: Troche" },
  { id: "SER-023", fecha: "09/10/2026", categoria: "Impresora", marca: "Genérico", modelo: "Impresora Sublimación", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Limpieza de cabezal desde software (sistema con tinta de sublimación)", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-024", fecha: "09/10/2026", categoria: "Almacenamiento", marca: "Genérico", modelo: "Disco Duro", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Extracción y recuperación de archivos de disco", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-025", fecha: "10/10/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3210", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Mantenimiento completo con purgado de dampers y limpieza de cabezal", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-026", fecha: "13/10/2026", categoria: "Notebook / Laptop", marca: "Acer", modelo: "Laptop Acer", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Reparación y reconstrucción de bisagra de pantalla", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-027", fecha: "14/10/2026", categoria: "Notebook / Laptop", marca: "Genérico", modelo: "Laptop #1", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación de programas de ofimática, drivers y configuración general", repuestos: "Ninguno", precio: "50.000 Gs", estado: "Entregado", notas: "Pack 2 laptops" },
  { id: "SER-028", fecha: "14/10/2026", categoria: "Notebook / Laptop", marca: "Genérico", modelo: "Laptop #2", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación de programas de ofimática, drivers y configuración general", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "Pack 2 laptops" },
  { id: "SER-029", fecha: "14/10/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP Negro", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho de tinta negra", repuestos: "Tinta negra", precio: "10.000 Gs", estado: "Entregado", notas: "" },
  { id: "SER-030", fecha: "15/10/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3250", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Mantenimiento completo con limpieza de cabezal por fallo de color negro", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-031", fecha: "16/10/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho de tinta", repuestos: "Tinta", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-032", fecha: "16/10/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Mantenimiento Físico / Limpieza + Software / Sistema Operativo / Backup", trabajo: "Mantenimiento completo y activación de licencia de Office", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-033", fecha: "16/10/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Reemplazo de Repuesto / Hardware + Software / Sistema Operativo / Backup", trabajo: "Instalación de unidad SSD, sistema operativo y programas de ofimática", repuestos: "Disco SSD", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-034", fecha: "17/10/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Reemplazo de Repuesto / Hardware + Software / Sistema Operativo / Backup", trabajo: "Ampliación de memoria RAM + SSD, sistema operativo y ofimática", repuestos: "Memoria RAM + SSD", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-035", fecha: "18/10/2026", categoria: "PC Escritorio / Servidor", marca: "Genérico", modelo: "PC de Oficina", intervencion: "Instalación / Conectividad / Redes", trabajo: "Servicio técnico y soporte en oficina de contaduría", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "Cliente: Contaduría" },
  { id: "SER-036", fecha: "24/10/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L380", intervencion: "Mantenimiento Físico / Limpieza + Reemplazo de Repuesto / Hardware", trabajo: "Mantenimiento completo con cambio de almohadillas", repuestos: "Almohadillas", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-037", fecha: "27/10/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho HP", repuestos: "Tinta", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-038", fecha: "28/10/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Reemplazo de Repuesto / Hardware + Software / Sistema Operativo / Backup", trabajo: "Instalación de disco SSD con sistema operativo nuevo", repuestos: "Disco SSD", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-039", fecha: "28/10/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP Negro", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho negro HP", repuestos: "Tinta negra", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-040", fecha: "29/10/2026", categoria: "Electrónica / Línea Blanca / Periférico", marca: "Genérico", modelo: "Jarra Térmica", intervencion: "Microelectrónica / Reparación de Placa", trabajo: "Revisión y reparación eléctrica de jarra térmica", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "Cliente: Fígaro" },
  { id: "SER-041", fecha: "29/10/2026", categoria: "Almacenamiento", marca: "Genérico", modelo: "Disco Duro HDD", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Revisión de estado y diagnóstico de disco HDD", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-042", fecha: "29/10/2026", categoria: "PC Escritorio / Servidor", marca: "Genérico", modelo: "PC Gamer / Escritorio", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Reensamblaje y corrección de cableado de PC mal armada", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-043", fecha: "29/10/2026", categoria: "Microelectrónica / Componente", marca: "Genérico", modelo: "Placa Madre Socket CPU", intervencion: "Microelectrónica / Reparación de Placa", trabajo: "Diagnóstico de placa que no encendía y enderezado de pines doblados en socket", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-044", fecha: "30/10/2026", categoria: "Audio / Consola / Portátil", marca: "Amazfit", modelo: "Smartwatch Amazfit", intervencion: "Instalación / Conectividad / Redes", trabajo: "Vinculación y configuración de reloj inteligente con smartphone", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-045", fecha: "30/10/2026", categoria: "Impresiones / Corte Plotter / Trabajos Prácticos", marca: "Genérico", modelo: "Servicio de Impresión", intervencion: "Impresión / Corte Plotter / Trabajo Práctico", trabajo: "Impresión de lote de 80 imágenes", repuestos: "Papel y Tinta", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-046", fecha: "31/10/2026", categoria: "Electrónica / Línea Blanca / Periférico", marca: "Genérico", modelo: "Rastreador GPS", intervencion: "Instalación / Conectividad / Redes", trabajo: "Configuración y puesta en marcha de dispositivo GPS", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-047", fecha: "02/11/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3250", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Limpieza de cabezal por falta de inyección en color amarillo", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-048", fecha: "02/11/2026", categoria: "Smartphone", marca: "Samsung", modelo: "Samsung a Samsung", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Transferencia completa de datos entre teléfonos Samsung", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-049", fecha: "02/11/2026", categoria: "Smartphone", marca: "Xiaomi", modelo: "Redmi a Redmi", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Transferencia completa de datos entre teléfonos Redmi", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-050", fecha: "02/11/2026", categoria: "Smartphone", marca: "Genérico", modelo: "Smartphone Android", intervencion: "Desbloqueo / FRP / Firmware", trabajo: "Configuración inicial de teléfono y recuperación de cuentas", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "Cliente Sr." },
  { id: "SER-051", fecha: "02/11/2026", categoria: "Smartphone", marca: "Honor", modelo: "Honor a Honor", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Transferencia completa de todos los datos de Honor a Honor", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-052", fecha: "02/11/2026", categoria: "PC Escritorio / Servidor", marca: "Dell", modelo: "PC Dell", intervencion: "Reemplazo de Repuesto / Hardware + Software / Sistema Operativo / Backup", trabajo: "Cambio de disco, instalación de sistema operativo y paquete Office", repuestos: "Disco SSD", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-053", fecha: "03/11/2026", categoria: "Audio / Consola / Portátil", marca: "JBL", modelo: "Parlante JBL", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Actualización de firmware de parlante JBL", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-054", fecha: "04/11/2026", categoria: "Almacenamiento", marca: "Genérico", modelo: "Disco Duro HDD", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Extracción y respaldo de datos de disco duro HDD", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-055", fecha: "05/11/2026", categoria: "Notebook / Laptop", marca: "Acer", modelo: "Laptop Acer", intervencion: "Microelectrónica / Reparación de Placa", trabajo: "Diagnóstico y reparación de laptop Acer que no encendía", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "Cliente: Adalberto" },
  { id: "SER-056", fecha: "06/11/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L380", intervencion: "Mantenimiento Físico / Limpieza + Reemplazo de Repuesto / Hardware + Reset de Software / Contadores", trabajo: "Limpieza completa, reset de contador y cambio de almohadillas", repuestos: "Almohadillas", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-057", fecha: "06/11/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3110", intervencion: "Reemplazo de Repuesto / Hardware + Mantenimiento Físico / Limpieza", trabajo: "Cambio de cabezal de impresión, cable flex y limpieza general", repuestos: "Cabezal y Flex", precio: "", estado: "Entregado", notas: "Cliente: Adalberto" },
  { id: "SER-058", fecha: "07/11/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Cambio de batería interna de laptop HP", repuestos: "Batería HP", precio: "", estado: "Entregado", notas: "" },
  { id: "SER-059", fecha: "09/11/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "HP 250 G5", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Cambio de Teclado", repuestos: "Teclado en Ingles para HP 250 G5", precio: "", estado: "Entregado", notas: "Laptop del Local" },
  { id: "SER-060", fecha: "10/11/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP 664", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho de tinta negra", repuestos: "Tinta color Negro", precio: "15.000 Gs", estado: "Entregado", notas: "" },
  { id: "SER-061", fecha: "10/11/2026", categoria: "Impresiones / Corte Plotter / Trabajos Prácticos", marca: "Genérico", modelo: "Documento Word", intervencion: "Impresión / Corte Plotter / Trabajo Práctico", trabajo: "Digitalización y escaneo de documentos a formato PDF / imagen", repuestos: "Ninguno", precio: "", estado: "Entregado", notas: "-" }
];

let servicios = [];
let ultimosFiltrados = [];
let loteTemporal = [];
let bovedaDesbloqueada = false;
let timerBusqueda = null;
let ultimoAnchoMovil = window.innerWidth < 768;

// ============================================================================
// FUNCIONES DE SUPABASE (SINCRONIZACIÓN Y GUARDADO REAL)
// ============================================================================
async function migrarBaseASupabase() {
  const btn = document.getElementById("btn-subir-drive");
  if(btn) {
    btn.innerHTML = `<i class="w-4 h-4 animate-spin border-2 border-white border-t-transparent rounded-full"></i> Subiendo...`;
    btn.disabled = true;
  }
  
  try {
    const payload = servicios.map(empaquetarParaSupabase);
    const res = await fetch(`${SUPABASE_URL}/rest/v1/servicios`, {
      method: "POST",
      headers: HEADERS_SUPA,
      body: JSON.stringify(payload)
    });
    
    if (res.ok) {
      alert(`¡Éxito! Se migraron ${servicios.length} servicios y todos tus precios a Supabase.`);
      document.getElementById("modal-drive").classList.add("hidden");
      document.getElementById("modal-drive").classList.remove("flex");
    } else {
      alert("Error al migrar a Supabase. Verifica tu conexión.");
    }
  } catch (error) {
    console.error(error);
  } finally {
    if(btn) {
      btn.innerHTML = `<i data-lucide="upload-cloud" class="w-4 h-4 text-teal-400"></i> Migrar Base Local a Supabase`;
      btn.disabled = false;
      inicializarIconos();
    }
  }
}

async function guardarServicioSupabase(reg) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/servicios`, {
      method: "POST",
      headers: HEADERS_SUPA,
      body: JSON.stringify(empaquetarParaSupabase(reg))
    });
  } catch (e) {
    console.error("Error guardando servicio en Supabase:", e);
  }
}

async function guardarLoteSupabase(loteCrudo) {
  try {
    const payload = loteCrudo.map(empaquetarParaSupabase);
    await fetch(`${SUPABASE_URL}/rest/v1/servicios`, {
      method: "POST",
      headers: HEADERS_SUPA,
      body: JSON.stringify(payload)
    });
  } catch (e) {
    console.error("Error guardando lote en Supabase:", e);
  }
}

async function eliminarServicioSupabase(id) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/servicios?id=eq.${id}`, {
      method: "DELETE",
      headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
    });
  } catch (e) {
    console.error("Error eliminando servicio:", e);
  }
}

function empaquetarParaSupabase(reg) {
  return {
    id: String(reg.id).toUpperCase(),
    fecha: normalizarFecha(reg.fecha),
    tecnico: reg.tecnico || TECNICO_NOMBRE,
    categoria: reg.categoria,
    marca: reg.marca,
    modelo: reg.modelo,
    intervencion: reg.intervencion,
    trabajo: reg.trabajo,
    repuestos: reg.repuestos || "Ninguno",
    precio: formatearGuaranies(reg.precio) || "",
    estado: reg.estado || "Entregado",
    notas: reg.notas || "-"
  };
}

async function cargarBaseDeDatos() {
  const cache = localStorage.getItem(CACHE_LOCAL_KEY);
  if (cache) {
    try {
      servicios = normalizarRegistros(JSON.parse(cache));
      poblarSelectores();
      aplicarFiltros();
    } catch(e) {}
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/servicios?select=*`, {
      headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
    });
    
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        const soloAngel = data.filter(r => String(r.id).toUpperCase().startsWith("SER-"));
        
        const mapa = new Map();
        DATOS_MAESTROS.forEach(m => mapa.set(m.id, m));
        soloAngel.forEach(d => mapa.set(d.id, d));
        
        servicios = normalizarRegistros(Array.from(mapa.values()));
      } else {
        servicios = normalizarRegistros([...DATOS_MAESTROS]);
      }
      
      servicios = ordenarPorFechaYNumero(servicios);
      localStorage.setItem(CACHE_LOCAL_KEY, JSON.stringify(servicios));
      
      poblarSelectores();
      aplicarFiltros();
      if (bovedaDesbloqueada) renderizarPanelIngresos();
      actualizarBadgeSupabase(true);
    }
  } catch (e) {
    console.warn("Usando caché local por falta de conexión a Supabase.");
    actualizarBadgeSupabase(false);
    if (servicios.length === 0) {
      servicios = normalizarRegistros([...DATOS_MAESTROS]);
      poblarSelectores();
      aplicarFiltros();
    }
  }
}

function actualizarBadgeSupabase(conectado) {
  const badge = document.getElementById("cloud-badge");
  if (!badge) return;
  if (conectado) {
    badge.textContent = "Supabase Conectado (SQL)";
    badge.className = "text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-600 font-bold tracking-wide";
  } else {
    badge.textContent = "Modo Local (Sin red)";
    badge.className = "text-[10px] px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-600 font-bold tracking-wide";
  }
}

// ============================================================================
// LÓGICA GENERAL DE LA INTERFAZ Y FECHAS
// ============================================================================

function limpiarParaBusqueda(valor) {
  return String(valor ?? "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function normalizarFecha(f) {
  if (!f) return "";
  const str = String(f).trim();
  if (str.includes("T")) {
    const partes = str.split("T")[0].split("-");
    if (partes.length === 3) return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
  const matchGuion = str.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (matchGuion) return `${matchGuion[3]}/${matchGuion[2]}/${matchGuion[1]}`;
  return str;
}

function convertirFechaAYYYYMMDD(fechaDDMMYYYY) {
  const partes = String(fechaDDMMYYYY || "").split("/");
  if (partes.length !== 3) return "";
  return `${partes[2]}-${partes[1].padStart(2, "0")}-${partes[0].padStart(2, "0")}`;
}

function convertirFechaATimestamp(fechaDDMMYYYY) {
  const partes = String(fechaDDMMYYYY ?? "").split("/");
  if (partes.length !== 3) return 0;
  return new Date(partes[2], partes[1] - 1, partes[0]).getTime() || 0;
}

function obtenerDiaSemana(fechaDDMMYYYY) {
  if (!fechaDDMMYYYY) return "";
  const partes = String(fechaDDMMYYYY).trim().split("/");
  if (partes.length !== 3) return "";
  const fechaObj = new Date(partes[2], partes[1] - 1, partes[0]);
  if (isNaN(fechaObj.getTime())) return "";
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return dias[fechaObj.getDay()];
}

function obtenerInfoMes(fechaDDMMYYYY) {
  const partes = String(fechaDDMMYYYY ?? "").split("/");
  if (partes.length !== 3) return { key: "", label: "" };
  const mm = parseInt(partes[1], 10);
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  return { key: `${partes[2]}-${String(mm).padStart(2, "0")}`, label: `${meses[mm - 1]} ${partes[2]}` };
}

function obtenerInfoSemana(fechaDDMMYYYY) {
  const partes = String(fechaDDMMYYYY ?? "").split("/");
  if (partes.length !== 3) return { key: "", label: "" };
  const [dd, mm, yyyy] = partes.map(Number);
  const fechaObj = new Date(yyyy, mm - 1, dd);
  const dia = fechaObj.getDay();
  const diffLunes = dia === 0 ? -6 : 1 - dia;
  const lunes = new Date(yyyy, mm - 1, dd + diffLunes);
  const domingo = new Date(lunes.getFullYear(), lunes.getMonth(), lunes.getDate() + 6);
  
  const lDD = String(lunes.getDate()).padStart(2, "0");
  const lMM = String(lunes.getMonth() + 1).padStart(2, "0");
  const dDD = String(domingo.getDate()).padStart(2, "0");
  const dMM = String(domingo.getMonth() + 1).padStart(2, "0");
  
  return {
    key: `${lunes.getFullYear()}-${lMM}-${lDD}`,
    label: `Semana del ${lDD}/${lMM} al ${dDD}/${dMM}/${domingo.getFullYear()}`
  };
}

function formatearGuaranies(valor) {
  if (!valor && valor !== 0) return "";
  const limpio = String(valor).replace(/\D/g, "");
  if (!limpio) return "";
  return parseInt(limpio, 10).toLocaleString("es-PY") + " Gs";
}

function obtenerMontoNumerico(precioStr) {
  if (!precioStr) return 0;
  return parseInt(String(precioStr).replace(/\D/g, ""), 10) || 0;
}

function extraerPrecioDeTexto(textoCrudo) {
  let texto = String(textoCrudo || "").trim();
  let precioFormateado = "";

  const regexParentesisGs = /\(\s*(\d{1,3}(?:[.,]\d{3})+|\d{4,9})\s*(?:gs\.?|guaran[ií]es)\s*\)/i;
  const regexExplicito = /(?:\s+[-–:]?\s*|\b)(\d{1,3}(?:[.,]\d{3})+|\d{4,9})\s*(?:gs\.?|guaran[ií]es)\b\.?/i;
  const regexMil = /(?:\s+[-–:]?\s*|\b)(\d{1,4})\s*mil\s*(?:gs\.?)?\s*$/i;
  const regexMilesFinal = /\s+[-–:]?\s*(\d{1,3}(?:[.,]\d{3})+|\d{4,8})\s*$/;

  let match = texto.match(regexParentesisGs);
  if (match) {
    precioFormateado = formatearGuaranies(match[1]);
    texto = texto.replace(match[0], " ").trim();
  } else {
    match = texto.match(regexExplicito);
    if (match) {
      precioFormateado = formatearGuaranies(match[1]);
      texto = texto.replace(match[0], " ").trim();
    } else {
      match = texto.match(regexMil);
      if (match) {
        precioFormateado = formatearGuaranies(parseInt(match[1], 10) * 1000);
        texto = texto.replace(match[0], " ").trim();
      } else {
        match = texto.match(regexMilesFinal);
        if (match) {
          precioFormateado = formatearGuaranies(match[1]);
          texto = texto.replace(match[0], " ").trim();
        }
      }
    }
  }
  return { textoSinPrecio: texto.replace(/[-–:,\s]+$/, "").trim(), precio: precioFormateado };
}

function deducirIntervencion(trabajo) {
  const t = (trabajo || "").toLowerCase();
  const lista = [];
  if (t.includes("limpieza") || t.includes("mantenimiento") || t.includes("recarga") || t.includes("purgado") || t.includes("humedad")) lista.push("Mantenimiento Físico / Limpieza");
  if (t.includes("cambio") || t.includes("reemplazo") || t.includes("teclado") || t.includes("batería") || t.includes("pantalla") || t.includes("bisagra") || t.includes("ssd") || t.includes("ram") || t.includes("cabezal") || t.includes("almohadilla") || t.includes("flex") || t.includes("pin")) lista.push("Reemplazo de Repuesto / Hardware");
  if (t.includes("reset") || t.includes("contador")) lista.push("Reset de Software / Contadores");
  if (t.includes("software") || t.includes("sistema") || t.includes("office") || t.includes("traspaso") || t.includes("datos") || t.includes("actualizar") || t.includes("firmware")) lista.push("Software / Sistema Operativo / Backup");
  if (t.includes("placa") || t.includes("microelectrónica") || t.includes("no encendía") || t.includes("resoldado") || t.includes("fpc")) lista.push("Microelectrónica / Reparación de Placa");
  if (t.includes("instalación") || t.includes("redes") || t.includes("wifi") || t.includes("gps")) lista.push("Instalación / Conectividad / Redes");
  if (t.includes("desbloqueo") || t.includes("frp") || t.includes("cuenta")) lista.push("Desbloqueo / FRP / Firmware");
  if (t.includes("impresión") || t.includes("escaneo") || t.includes("plotter") || t.includes("trabajo práctico")) lista.push("Impresión / Corte Plotter / Trabajo Práctico");
  return lista.length > 0 ? lista.join(" + ") : "Mantenimiento Físico / Limpieza";
}

function deducirRepuestos(trabajo) {
  const t = (trabajo || "").toLowerCase();
  const rep = [];
  if (t.includes("ssd") || t.includes("disco")) rep.push("Disco SSD");
  if (t.includes("ram")) rep.push("Memoria RAM");
  if (t.includes("teclado")) rep.push("Teclado");
  if (t.includes("batería") || t.includes("bateria")) rep.push("Batería");
  if (t.includes("almohadilla")) rep.push("Almohadillas");
  if (t.includes("cabezal")) rep.push("Cabezal");
  if (t.includes("flex")) rep.push("Cable Flex");
  if (t.includes("placa de carga")) rep.push("Placa de Carga");
  if (t.includes("pin de carga")) rep.push("Pin de Carga");
  if (t.includes("pantalla")) rep.push("Módulo de Pantalla");
  if (t.includes("tinta") || t.includes("recarga")) rep.push("Tinta");
  return rep.length > 0 ? rep.join(" + ") : "Ninguno";
}

function limpiarTextoComparacion(str) {
  return String(str || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
}

function ordenarPorFechaYNumero(lista) {
  return [...lista].sort((a, b) => {
    const tA = a._timestamp || convertirFechaATimestamp(a.fecha);
    const tB = b._timestamp || convertirFechaATimestamp(b.fecha);
    if (tA !== tB) return tA - tB;
    const numA = parseInt(String(a.id).replace(/\D/g, "")) || 0;
    const numB = parseInt(String(b.id).replace(/\D/g, "")) || 0;
    return numA - numB;
  });
}

function normalizarRegistros(lista) {
  return lista.map((item) => {
    const idLimpio = String(item.id || "").trim().toUpperCase();
    let inter = item.intervencion || deducirIntervencion(item.trabajo || "");
    inter = inter.replace(/Mantenimiento Físico \/ Limpieza \/ Reflux/gi, "Mantenimiento Físico / Limpieza").replace(/\/ Reflux/gi, "").trim();

    let notasRaw = String(item.notas || "").trim();
    const extTrabajo = extraerPrecioDeTexto(item.trabajo || "");
    const extNotas = extraerPrecioDeTexto(notasRaw);

    const precioFinal = item.precio ? formatearGuaranies(item.precio) : (extTrabajo.precio || extNotas.precio || "");
    const trabajoLimpio = (extTrabajo.precio ? extTrabajo.textoSinPrecio : (item.trabajo || "")).trim();
    const notasLimpias = (extNotas.precio ? extNotas.textoSinPrecio : notasRaw).trim();

    const fechaNorm = normalizarFecha(item.fecha);
    const catLimpia = String(item.categoria || "Notebook / Laptop").trim();
    const marcaLimpia = String(item.marca || "Genérico").trim();
    const modeloLimpio = String(item.modelo || "-").trim();
    const repuestosLimpio = String(item.repuestos || deducirRepuestos(trabajoLimpio)).trim();

    const diaSemana = obtenerDiaSemana(fechaNorm);
    const infoMes = obtenerInfoMes(fechaNorm);
    const infoSem = obtenerInfoSemana(fechaNorm);
    const timestamp = convertirFechaATimestamp(fechaNorm);
    const montoNum = obtenerMontoNumerico(precioFinal);

    const claveGemelo = `${fechaNorm}|${limpiarTextoComparacion(marcaLimpia)}|${limpiarTextoComparacion(modeloLimpio)}|${limpiarTextoComparacion(trabajoLimpio)}`;
    const indiceBusqueda = limpiarParaBusqueda(
      `${idLimpio} ${fechaNorm} ${diaSemana} ${infoMes.label} ${catLimpia} ${marcaLimpia} ${modeloLimpio} ${inter} ${trabajoLimpio} ${repuestosLimpio} ${precioFinal} ${notasLimpias}`
    );

    return {
      id: idLimpio,
      fecha: fechaNorm,
      categoria: catLimpia,
      marca: marcaLimpia,
      modelo: modeloLimpio,
      intervencion: inter,
      trabajo: trabajoLimpio,
      repuestos: repuestosLimpio,
      precio: precioFinal,
      estado: item.estado || "Entregado",
      notas: notasLimpias,
      tecnico: TECNICO_NOMBRE,
      _dia: diaSemana,
      _mesKey: infoMes.key,
      _mesLabel: infoMes.label,
      _semanaKey: infoSem.key,
      _semanaLabel: infoSem.label,
      _timestamp: timestamp,
      _monto: montoNum,
      _claveGemelo: claveGemelo,
      _busqueda: indiceBusqueda
    };
  });
}

function inicializarIconos() {
  if (window.lucide && typeof lucide.createIcons === "function") {
    try { lucide.createIcons(); } catch (e) { }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarIconos();
  configurarSeguridad();
  configurarEventos();
});

function configurarSeguridad() {
  const pantallaLogin = document.getElementById("pantalla-login");
  const appContenido = document.getElementById("app-contenido");
  const formLogin = document.getElementById("form-login");
  const inpPass = document.getElementById("inp-password");

  const desbloquear = () => {
    pantallaLogin.style.display = "none";
    appContenido.classList.remove("hidden");
    appContenido.style.display = "flex";
    cargarBaseDeDatos();
    inicializarIconos();
  };

  if (sessionStorage.getItem(AUTH_SESSION_KEY) === "true") {
    desbloquear();
  }

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inpPass.value.trim() === PIN_ACCESO) {
      sessionStorage.setItem(AUTH_SESSION_KEY, "true");
      document.getElementById("error-login").classList.add("hidden");
      inpPass.value = "";
      desbloquear();
    } else {
      document.getElementById("error-login").classList.remove("hidden");
      inpPass.value = "";
      inpPass.focus();
    }
  });

  const bloquearSistema = () => {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    bovedaDesbloqueada = false;
    appContenido.classList.add("hidden");
    appContenido.style.display = "none";
    pantallaLogin.style.display = "flex";
    inpPass.focus();
  };

  document.getElementById("btn-bloquear")?.addEventListener("click", bloquearSistema);
  document.getElementById("btn-bloquear-movil")?.addEventListener("click", bloquearSistema);
}

function poblarSelectores() {
  const selCat = document.getElementById("filtro-categoria");
  const selMarca = document.getElementById("filtro-marca");
  const selInt = document.getElementById("filtro-intervencion");
  const selFecha = document.getElementById("filtro-fecha");

  if (!selCat) return;

  const valCat = selCat.value;
  const valMarca = selMarca.value;
  const valInt = selInt.value;
  const valFecha = selFecha.value;

  const conteoCat = {}; const conteoMarca = {}; const conteoFecha = {};
  const intervenciones = new Set();

  servicios.forEach((s) => {
    conteoCat[s.categoria] = (conteoCat[s.categoria] || 0) + 1;
    conteoMarca[s.marca] = (conteoMarca[s.marca] || 0) + 1;
    conteoFecha[s.fecha] = (conteoFecha[s.fecha] || 0) + 1;
    s.intervencion.split("+").forEach(i => intervenciones.add(i.trim()));
  });

  selCat.innerHTML = '<option value="">Todas las categorías</option>' + Object.keys(conteoCat).sort().map(c => `<option value="${c}">${c} (${conteoCat[c]})</option>`).join("");
  selMarca.innerHTML = '<option value="">Todas las marcas</option>' + Object.keys(conteoMarca).sort().map(m => `<option value="${m}">${m} (${conteoMarca[m]})</option>`).join("");
  selInt.innerHTML = '<option value="">Todas las intervenciones</option>' + [...intervenciones].filter(Boolean).sort().map(i => `<option value="${i}">${i}</option>`).join("");
  selFecha.innerHTML = '<option value="">Todas las fechas</option>' + Object.keys(conteoFecha).sort((a, b) => convertirFechaATimestamp(b) - convertirFechaATimestamp(a)).map(f => `<option value="${f}">${f} (${obtenerDiaSemana(f)} · ${conteoFecha[f]} serv.)</option>`).join("");

  selCat.value = valCat; selMarca.value = valMarca; selInt.value = valInt; selFecha.value = valFecha;
}

function aplicarFiltros() {
  const inpTexto = document.getElementById("filtro-texto");
  if(!inpTexto) return;
  
  const textoQuery = limpiarParaBusqueda(inpTexto.value);
  const palabras = textoQuery ? textoQuery.split(/\s+/).filter(Boolean) : [];
  
  const cat = document.getElementById("filtro-categoria").value;
  const marca = document.getElementById("filtro-marca").value;
  const intervencion = document.getElementById("filtro-intervencion").value;
  const fecha = document.getElementById("filtro-fecha").value;

  document.querySelectorAll(".chip-cat").forEach(b => b.className = (b.getAttribute("data-cat") === cat) ? "chip-cat px-3 py-1 rounded-xl text-xs font-extrabold bg-teal-600 text-white shadow-xs transition cursor-pointer" : "chip-cat px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition cursor-pointer");
  document.querySelectorAll(".chip-marca").forEach(b => b.className = (b.getAttribute("data-marca") === marca) ? "chip-marca px-3 py-1 rounded-xl text-xs font-extrabold bg-indigo-600 text-white shadow-xs transition cursor-pointer" : "chip-marca px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition cursor-pointer");

  ultimosFiltrados = servicios.filter(item => {
    if (cat && item.categoria !== cat) return false;
    if (marca && item.marca !== marca) return false;
    if (intervencion && !item.intervencion.includes(intervencion)) return false;
    if (fecha && item.fecha !== fecha) return false;
    if (palabras.length > 0 && !palabras.every(p => item._busqueda.includes(p))) return false;
    return true;
  });

  renderizarVista(ultimosFiltrados);
  actualizarKPIs(ultimosFiltrados);
}

function obtenerColorBadge(categoria) {
  if (categoria.includes("Impresora")) return "bg-emerald-100 text-emerald-800 border-emerald-200";
  if (categoria.includes("Notebook") || categoria.includes("PC")) return "bg-amber-100 text-amber-800 border-amber-200";
  if (categoria.includes("Smartphone")) return "bg-teal-100 text-teal-800 border-teal-200";
  if (categoria.includes("Microelectrónica")) return "bg-purple-100 text-purple-800 border-purple-200";
  if (categoria.includes("Impresiones") || categoria.includes("Plotter")) return "bg-sky-100 text-sky-800 border-sky-200";
  return "bg-slate-100 text-slate-700 border-slate-200";
}

function renderizarVista(lista) {
  const tbody = document.getElementById("tabla-body");
  const listaMovil = document.getElementById("lista-movil");
  if (document.getElementById("contador-tabla")) document.getElementById("contador-tabla").textContent = `Mostrando ${lista.length} registros`;

  if (lista.length === 0) {
    const vacio = `<div class="py-10 text-center text-slate-500 text-sm">No se encontraron servicios.</div>`;
    if (tbody) tbody.innerHTML = `<tr><td colspan="10">${vacio}</td></tr>`;
    if (listaMovil) listaMovil.innerHTML = vacio;
    return;
  }

  const conteoGemelos = {};
  lista.forEach(i => conteoGemelos[i._claveGemelo] = (conteoGemelos[i._claveGemelo] || 0) + 1);

  if (window.innerWidth < 768 && listaMovil) {
    listaMovil.innerHTML = [...lista].reverse().map(item => {
      const esGemelo = conteoGemelos[item._claveGemelo] > 1;
      return `
        <div class="p-4 space-y-2 ${esGemelo ? "bg-amber-50/40" : "hover:bg-slate-50"}">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="font-bold text-teal-700 text-sm">${item.id}</span>
              <span class="text-xs font-semibold text-slate-700">· ${item.fecha}</span>
              <span class="text-[11px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">${item._dia}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button onclick="abrirEditarServicio('${item.id}')" class="text-xs font-extrabold px-2.5 py-1 rounded-md ${item.precio ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-slate-100 text-slate-600 border border-slate-300"}">${item.precio || "+ Gs"}</button>
              <button onclick="eliminarServicio('${item.id}')" class="text-slate-400 hover:text-rose-600 p-1">${SVG_TRASH}</button>
            </div>
          </div>
          <p class="font-bold text-slate-900 text-sm">${item.marca} <span class="font-normal text-slate-500">· ${item.modelo}</span></p>
          <p class="text-xs font-medium text-teal-800">${item.intervencion}</p>
          <p class="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">${item.trabajo}</p>
        </div>`;
    }).join("");
  } else if (tbody) {
    tbody.innerHTML = [...lista].reverse().map(item => {
      const esGemelo = conteoGemelos[item._claveGemelo] > 1;
      return `
        <tr class="${esGemelo ? "bg-amber-50/40" : "hover:bg-slate-50"} transition">
          <td class="py-3 px-4 font-bold text-teal-700">${item.id}</td>
          <td class="py-3 px-4"><div class="font-semibold text-slate-800">${item.fecha}</div><div class="text-[11px] font-bold text-indigo-600 uppercase">${item._dia}</div></td>
          <td class="py-3 px-4"><span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-md border ${obtenerColorBadge(item.categoria)}">${item.categoria}</span></td>
          <td class="py-3 px-4"><div class="font-bold text-slate-900">${item.marca}</div><div class="text-xs text-slate-500">${item.modelo}</div></td>
          <td class="py-3 px-4 text-xs font-medium text-slate-700 max-w-xs">${item.intervencion}</td>
          <td class="py-3 px-4 text-slate-800 max-w-xs">${item.trabajo}</td>
          <td class="py-3 px-4 text-xs text-slate-600">${item.repuestos}</td>
          <td class="py-3 px-4 text-right"><button onclick="abrirEditarServicio('${item.id}')" class="cursor-pointer transition ${item.precio ? "inline-block text-xs font-extrabold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200" : "inline-block text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 border border-slate-200"}">${item.precio || "+ Cargar Gs"}</button></td>
          <td class="py-3 px-4 text-xs font-semibold text-teal-800">${item.notas || "-"}</td>
          <td class="py-3 px-4 text-center whitespace-nowrap"><button onclick="abrirEditarServicio('${item.id}')" class="text-slate-400 hover:text-teal-600 p-1">${SVG_EDIT}</button><button onclick="eliminarServicio('${item.id}')" class="text-slate-400 hover:text-rose-600 p-1">${SVG_TRASH}</button></td>
        </tr>`;
    }).join("");
  }
}

function calcularModa(arr) {
  if (!arr.length) return "-";
  const conteo = {}; let maxVal = arr[0]; let maxCount = 0;
  arr.forEach(v => { conteo[v] = (conteo[v] || 0) + 1; if (conteo[v] > maxCount) { maxCount = conteo[v]; maxVal = v; } });
  return `${maxVal} (${maxCount})`;
}

function actualizarKPIs(filtrados) {
  const kTotal = document.getElementById("kpi-total");
  const kSubTotal = document.getElementById("kpi-sub-total");
  const kCat = document.getElementById("kpi-categoria");
  const kMarca = document.getElementById("kpi-marca");
  const kInt = document.getElementById("kpi-intervencion");

  const todasInt = [];
  filtrados.forEach((s) => s.intervencion.split("+").forEach((p) => todasInt.push(p.trim())));

  if (kTotal) kTotal.textContent = filtrados.length;
  if (kSubTotal) kSubTotal.textContent = `De ${servicios.length} registrados en total`;
  if (kCat) kCat.textContent = calcularModa(filtrados.map((s) => s.categoria));
  if (kMarca) kMarca.textContent = calcularModa(filtrados.map((s) => s.marca));
  if (kInt) kInt.textContent = calcularModa(todasInt.filter(Boolean));
}

function renderizarPanelIngresos() {
  let totalGs = 0; let totalConPrecio = 0;
  const pSem = {}; const pMes = {}; const pDia = {}; const pCat = {};

  servicios.forEach((s) => {
    const monto = s._monto;
    if (!pSem[s._semanaKey]) pSem[s._semanaKey] = { key: s._semanaKey, label: s._semanaLabel, totalGs: 0, totalServicios: 0, cobrados: 0 };
    if (!pMes[s._mesKey]) pMes[s._mesKey] = { key: s._mesKey, label: s._mesLabel, totalGs: 0, totalServicios: 0, cobrados: 0 };
    if (!pDia[s.fecha]) pDia[s.fecha] = { fecha: s.fecha, dia: s._dia, timestamp: s._timestamp, totalGs: 0, totalServicios: 0, cobrados: 0 };
    if (!pCat[s.categoria]) pCat[s.categoria] = { categoria: s.categoria, totalGs: 0, totalServicios: 0, cobrados: 0 };

    pSem[s._semanaKey].totalServicios++; pMes[s._mesKey].totalServicios++; pDia[s.fecha].totalServicios++; pCat[s.categoria].totalServicios++;
    
    if (monto > 0) {
      totalGs += monto; totalConPrecio++;
      pSem[s._semanaKey].totalGs += monto; pSem[s._semanaKey].cobrados++;
      pMes[s._mesKey].totalGs += monto; pMes[s._mesKey].cobrados++;
      pDia[s.fecha].totalGs += monto; pDia[s.fecha].cobrados++;
      pCat[s.categoria].totalGs += monto; pCat[s.categoria].cobrados++;
    }
  });

  const lSem = Object.values(pSem).sort((a, b) => b.key.localeCompare(a.key));
  const lMes = Object.values(pMes).sort((a, b) => b.key.localeCompare(a.key));
  const lDia = Object.values(pDia).sort((a, b) => b.timestamp - a.timestamp);
  const lCat = Object.values(pCat).sort((a, b) => b.totalGs - a.totalGs);

  const mSem = [...lSem].sort((a, b) => b.totalGs - a.totalGs || b.totalServicios - a.totalServicios)[0] || null;
  const mMes = [...lMes].sort((a, b) => b.totalGs - a.totalGs || b.totalServicios - a.totalServicios)[0] || null;
  const mDia = [...lDia].sort((a, b) => b.totalGs - a.totalGs || b.totalServicios - a.totalServicios)[0] || null;

  if (document.getElementById("fin-ingreso-total")) document.getElementById("fin-ingreso-total").textContent = formatearGuaranies(totalGs) || "0 Gs";
  if (document.getElementById("fin-ingreso-total-sub")) document.getElementById("fin-ingreso-total-sub").textContent = `${totalConPrecio} servicio(s) con monto de ${servicios.length} registrados`;
  if (document.getElementById("fin-promedio-ticket")) document.getElementById("fin-promedio-ticket").textContent = totalConPrecio > 0 ? formatearGuaranies(Math.round(totalGs / totalConPrecio)) : "0 Gs";

  const sSem = document.getElementById("fin-select-semana");
  if (sSem) {
    const prev = sSem.value;
    sSem.innerHTML = lSem.map(s => `<option value="${s.key}">${s.label} (${s.totalServicios} serv. · ${formatearGuaranies(s.totalGs) || "0 Gs"})</option>`).join("");
    sSem.value = prev && lSem.some(x => x.key === prev) ? prev : (lSem[0]?.key || "");
    const obj = lSem.find(x => x.key === sSem.value) || lSem[0];
    if (obj) {
      document.getElementById("fin-ingreso-semanal").textContent = formatearGuaranies(obj.totalGs) || "0 Gs";
      document.getElementById("fin-ingreso-semanal-sub").textContent = `${obj.cobrados} cobrado(s) de ${obj.totalServicios} servicio(s) en esa semana`;
    }
  }

  const sMes = document.getElementById("fin-select-mes");
  if (sMes) {
    const prev = sMes.value;
    sMes.innerHTML = lMes.map(m => `<option value="${m.key}">${m.label} (${m.totalServicios} serv. · ${formatearGuaranies(m.totalGs) || "0 Gs"})</option>`).join("");
    sMes.value = prev && lMes.some(x => x.key === prev) ? prev : (lMes[0]?.key || "");
    const obj = lMes.find(x => x.key === sMes.value) || lMes[0];
    if (obj) {
      document.getElementById("fin-ingreso-mensual").textContent = formatearGuaranies(obj.totalGs) || "0 Gs";
      document.getElementById("fin-ingreso-mensual-sub").textContent = `${obj.cobrados} cobrado(s) de ${obj.totalServicios} servicio(s) en ese mes`;
    }
  }

  if (mSem) { document.getElementById("fin-mejor-semana-monto").textContent = formatearGuaranies(mSem.totalGs) || "0 Gs"; document.getElementById("fin-mejor-semana-nombre").textContent = `${mSem.label} · ${mSem.totalServicios} serv.`; }
  if (mMes) { document.getElementById("fin-mejor-mes-monto").textContent = formatearGuaranies(mMes.totalGs) || "0 Gs"; document.getElementById("fin-mejor-mes-nombre").textContent = `${mMes.label} · ${mMes.totalServicios} serv.`; }
  if (mDia) { document.getElementById("fin-mejor-dia-monto").textContent = formatearGuaranies(mDia.totalGs) || "0 Gs"; document.getElementById("fin-mejor-dia-nombre").textContent = `${mDia.fecha} (${mDia.dia}) · ${mDia.totalServicios} serv.`; }

  const cSem = document.getElementById("fin-lista-semanas");
  if (cSem) cSem.innerHTML = lSem.map(s => {
    const rec = mSem && mSem.key === s.key && s.totalGs > 0;
    return `<div class="p-3 rounded-xl border ${rec ? "bg-amber-50/70 border-amber-300" : "bg-slate-50 border-slate-200"} space-y-1.5"><div class="flex justify-between text-xs"><div class="flex items-center gap-1.5"><span class="font-extrabold text-slate-900">${s.label}</span>${rec ? `<span class="px-2 py-0.5 rounded-full bg-amber-400/30 text-amber-900 border border-amber-400 font-black text-[10px] uppercase">🏆 Mejor Semana</span>` : ""}</div><span class="font-black text-sm ${s.totalGs > 0 ? "text-emerald-700" : "text-slate-400"}">${formatearGuaranies(s.totalGs) || "0 Gs"}</span></div><div class="w-full h-2 bg-slate-200 rounded-full overflow-hidden"><div class="h-full ${rec ? "bg-amber-500" : "bg-emerald-600"}" style="width: ${s.totalGs > 0 ? Math.max(6, Math.round((s.totalGs / (mSem.totalGs || 1)) * 100)) : 0}%"></div></div><div class="flex justify-between text-[11px] text-slate-500"><span>Servicios: <strong>${s.totalServicios}</strong></span><span>Con monto: <strong>${s.cobrados}</strong></span></div></div>`;
  }).join("");

  const cMes = document.getElementById("fin-lista-meses");
  if (cMes) cMes.innerHTML = lMes.map(m => {
    const rec = mMes && mMes.key === m.key && m.totalGs > 0;
    return `<div class="p-3 rounded-xl border ${rec ? "bg-emerald-50/70 border-emerald-300" : "bg-slate-50 border-slate-200"} space-y-1.5"><div class="flex justify-between text-xs"><div class="flex items-center gap-1.5"><span class="font-extrabold text-slate-900">${m.label}</span>${rec ? `<span class="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 border border-emerald-400 font-black text-[10px] uppercase">🏆 Mejor Mes</span>` : ""}</div><span class="font-black text-sm ${m.totalGs > 0 ? "text-emerald-700" : "text-slate-400"}">${formatearGuaranies(m.totalGs) || "0 Gs"}</span></div><div class="w-full h-2 bg-slate-200 rounded-full overflow-hidden"><div class="h-full ${rec ? "bg-emerald-600" : "bg-teal-600"}" style="width: ${m.totalGs > 0 ? Math.max(8, Math.round((m.totalGs / (mMes.totalGs || 1)) * 100)) : 0}%"></div></div><div class="flex justify-between text-[11px] text-slate-500"><span>Servicios: <strong>${m.totalServicios}</strong></span><span>Con monto: <strong>${m.cobrados}</strong></span></div></div>`;
  }).join("");

  const cCats = document.getElementById("fin-lista-categorias");
  if (cCats) cCats.innerHTML = lCat.map(c => `<div class="flex justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs"><div><span class="font-bold text-slate-800 block">${c.categoria}</span><span class="text-[11px] text-slate-500">${c.totalServicios} serv. (${c.cobrados} con monto)</span></div><span class="font-extrabold text-emerald-700">${formatearGuaranies(c.totalGs) || "0 Gs"}</span></div>`).join("");
}

// ============================================================================
// FUNCIONES COMPLETAS DE CARGA RÁPIDA (TEXTO)
// ============================================================================
function detectarEquipoEnTexto(texto) {
  const tLow = texto.toLowerCase();
  let marca = "";
  if (tLow.includes("epson") || /\bl3\d{2,3}\b/i.test(texto)) marca = "Epson";
  else if (tLow.includes("hp")) marca = "HP";
  else if (tLow.includes("brother")) marca = "Brother";
  else if (tLow.includes("canon")) marca = "Canon";
  else if (tLow.includes("acer")) marca = "Acer";
  else if (tLow.includes("asus")) marca = "Asus";
  else if (tLow.includes("dell")) marca = "Dell";
  else if (tLow.includes("lenovo")) marca = "Lenovo";
  else if (tLow.includes("samsung") || /\b(galaxy|a\d{2}[s]?|j\d|s2\d|m\d{2})\b/i.test(texto)) marca = "Samsung";
  else if (tLow.includes("xiaomi") || tLow.includes("redmi") || tLow.includes("poco")) marca = "Xiaomi";
  else if (tLow.includes("iphone") || tLow.includes("apple")) marca = "Apple";
  else if (tLow.includes("motorola") || tLow.includes("moto ")) marca = "Motorola";
  else if (tLow.includes("honor")) marca = "Honor";
  else if (tLow.includes("jbl")) marca = "JBL";
  
  let categoria = "Notebook / Laptop";
  if (tLow.includes("impresora") || tLow.includes("epson") || tLow.includes("cabezal") || tLow.includes("cartucho")) categoria = "Impresora";
  else if (tLow.includes("pc ") || tLow.includes("escritorio")) categoria = "PC Escritorio / Servidor";
  else if (tLow.includes("teléfono") || tLow.includes("celular") || tLow.includes("samsung") || tLow.includes("xiaomi") || tLow.includes("iphone")) categoria = "Smartphone";
  else if (tLow.includes("tv") || tLow.includes("monitor")) categoria = "Smart TV / Monitor";
  else if (tLow.includes("jbl") || tLow.includes("parlante")) categoria = "Audio / Consola / Portátil";
  else if (tLow.includes("disco") || tLow.includes("hdd")) categoria = "Almacenamiento";
  
  let modelo = "";
  const matchEpson = texto.match(/\b(L\d{3,4})\b/i);
  const matchIphone = texto.match(/\b(iPhone\s*\d+\s*(?:Pro\s*Max|Pro|Plus|Mini|XR|XS)?)\b/i);
  const matchGalaxy = texto.match(/\b(Galaxy\s+[A-Z0-9]+|A\d{2}[a-z]?|S\d{2})\b/i);
  
  if (matchEpson) modelo = `EcoTank ${matchEpson[1].toUpperCase()}`;
  else if (matchIphone) modelo = matchIphone[1];
  else if (matchGalaxy) modelo = matchGalaxy[1].toLowerCase().startsWith("galaxy") ? matchGalaxy[1] : `Galaxy ${matchGalaxy[1].toUpperCase()}`;
  
  return { tieneMarcaOModelo: Boolean(marca || modelo), categoria, marca: marca || "Genérico", modelo };
}

function evaluarDuplicadosEnLote(listaLote) {
  return listaLote.map((item, idx) => {
    const fItem = item.fecha;
    const marcaItem = limpiarTextoComparacion(item.marca);
    const modeloItem = limpiarTextoComparacion(item.modelo);
    const trabajoItem = limpiarTextoComparacion(item.trabajo);
    const intItem = limpiarTextoComparacion(item.intervencion);

    const alertas = [];

    const enBD = servicios.filter((s) => {
      if (s.fecha !== fItem) return false;
      const mMarca = limpiarTextoComparacion(s.marca) === marcaItem;
      const mModelo = limpiarTextoComparacion(s.modelo) === modeloItem;
      const mTrabajo = limpiarTextoComparacion(s.trabajo) === trabajoItem;
      return mMarca && mModelo && mTrabajo;
    });

    if (enBD.length > 0) {
      alertas.push({ nivel: "rojo", mensaje: `Ya guardado (${enBD.map(x => x.id).join(", ")})` });
    }

    const repetidosEnNota = [];
    listaLote.forEach((otro, otroIdx) => {
      if (otroIdx === idx) return;
      if (otro.fecha !== fItem) return;
      const mMarca = limpiarTextoComparacion(otro.marca) === marcaItem;
      const mModelo = limpiarTextoComparacion(otro.modelo) === modeloItem;
      const mTrabajo = limpiarTextoComparacion(otro.trabajo) === trabajoItem;
      const mInt = limpiarTextoComparacion(otro.intervencion) === intItem;

      if (mMarca && mModelo && mTrabajo) {
        repetidosEnNota.push(`Fila #${otroIdx + 1} (Equipo y servicio exacto)`);
      } else if (mMarca && mModelo && mInt) {
        repetidosEnNota.push(`Fila #${otroIdx + 1} (Mismo equipo e intervención)`);
      }
    });

    if (repetidosEnNota.length > 0) {
      alertas.push({ nivel: "ambar", mensaje: `Cuidado: ${repetidosEnNota.join(", ")}` });
    }

    return { ...item, alertasDuplicado: alertas };
  });
}

function procesarTextoLote(textoCompleto, fechaLunes) {
  const lineas = textoCompleto.split(/\r?\n/);
  const anioBase = fechaLunes.split("-")[0];
  let fCurso = normalizarFecha(fechaLunes);
  let ctxEquipo = null;
  const resultados = [];

  const mapaDias = [
    { regex: /^lunes\b/i, offset: 0 }, { regex: /^martes\b/i, offset: 1 }, { regex: /^mi[eé]rcoles\b/i, offset: 2 },
    { regex: /^jueves\b/i, offset: 3 }, { regex: /^viernes\b/i, offset: 4 }, { regex: /^s[aá]bado\b/i, offset: 5 }, { regex: /^domingo\b/i, offset: 6 }
  ];

  for (let l of lineas) {
    l = l.trim();
    if (!l) continue;

    let cambioDia = false;
    for (const d of mapaDias) {
      if (d.regex.test(l)) {
        const [y, m, day] = fechaLunes.split("-").map(Number);
        const f = new Date(y, m - 1, day + d.offset);
        fCurso = `${String(f.getDate()).padStart(2, "0")}/${String(f.getMonth() + 1).padStart(2, "0")}/${f.getFullYear()}`;
        l = l.replace(d.regex, "").replace(/^[\s:–-]+/, "").trim();
        ctxEquipo = null;
        cambioDia = true;
        break;
      }
    }
    if (cambioDia && !l) continue;

    const matchFecha = l.match(/^(\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?)\s*[-:–]\s*(.+)$/);
    if (matchFecha) {
      fCurso = normalizarFecha(matchFecha[1]);
      l = matchFecha[2].trim();
    }

    const { textoSinPrecio, precio } = extraerPrecioDeTexto(l.replace(/^[-*•\d.)\s]+/, ""));
    const eqInfo = detectarEquipoEnTexto(textoSinPrecio);
    
    const palabras = ["cambio", "reparación", "mantenimiento", "desbloqueo", "pasar", "limpieza", "instalación", "actualizar"];
    const tieneTrabajo = palabras.some(p => textoSinPrecio.toLowerCase().includes(p));

    if (eqInfo.tieneMarcaOModelo && !tieneTrabajo && !precio) {
      ctxEquipo = { categoria: eqInfo.categoria, marca: eqInfo.marca, modelo: eqInfo.modelo || eqInfo.marca, notas: "" };
      continue;
    }

    let tFinal = textoSinPrecio;
    let marcaF = eqInfo.marca; let modF = eqInfo.modelo; let catF = eqInfo.categoria; let notF = "";
    
    if (!eqInfo.tieneMarcaOModelo && ctxEquipo) {
      catF = ctxEquipo.categoria; marcaF = ctxEquipo.marca; modF = ctxEquipo.modelo; notF = ctxEquipo.notas;
    } else {
      if (!modF) modF = marcaF;
    }

    resultados.push({
      fecha: fCurso,
      diaSemana: obtenerDiaSemana(fCurso),
      categoria: catF,
      marca: marcaF,
      modelo: modF,
      intervencion: deducirIntervencion(tFinal),
      trabajo: tFinal.charAt(0).toUpperCase() + tFinal.slice(1),
      repuestos: deducirRepuestos(tFinal),
      precio: precio || "",
      estado: "Entregado",
      notas: notF,
      tecnico: TECNICO_NOMBRE
    });
    
    if (eqInfo.tieneMarcaOModelo) ctxEquipo = { categoria: catF, marca: marcaF, modelo: modF, notas: notF };
  }
  
  return evaluarDuplicadosEnLote(resultados);
}

function renderizarPreviewLote() {
  const tbody = document.getElementById("tbody-preview-lote");
  const gridDias = document.getElementById("grid-resumen-dias");
  const btn = document.getElementById("btn-guardar-lote");
  if (!tbody || !btn) return;
  
  if (loteTemporal.length === 0) {
    document.getElementById("contenedor-preview-lote")?.classList.add("hidden");
    document.getElementById("contenedor-resumen-dias")?.classList.add("hidden");
    btn.disabled = true;
    return;
  }

  // AGRUPACIÓN POR DÍAS (COMO EN VERSIÓN 8)
  const grupos = {};
  let totalGsLote = 0;
  let itemsConAlerta = [];

  loteTemporal.forEach((item, idx) => {
    const m = obtenerMontoNumerico(item.precio);
    totalGsLote += m;
    if (!grupos[item.fecha]) grupos[item.fecha] = { dia: item.diaSemana, fecha: item.fecha, subtotal: 0, items: [] };
    grupos[item.fecha].subtotal += m;
    grupos[item.fecha].items.push({ ...item, idx });

    if (item.alertasDuplicado && item.alertasDuplicado.length > 0) itemsConAlerta.push({ ...item, idx: idx + 1 });
  });

  const cajaAlerta = document.getElementById("alerta-duplicados-lote");
  if (cajaAlerta) {
    if (itemsConAlerta.length > 0) {
      cajaAlerta.className = "bg-amber-50 border-2 border-amber-400 rounded-xl p-4 space-y-2 mb-4";
      cajaAlerta.innerHTML = `<h4 class="text-xs font-black text-amber-900 uppercase">⚠️ Hay ${itemsConAlerta.length} servicio(s) repetidos</h4><ul class="text-xs space-y-1">${itemsConAlerta.map(a => `<li class="p-1 bg-white border border-amber-300 rounded">Fila #${a.idx} (${a.fecha}): ${a.marca} - ${a.alertasDuplicado.map(x=>x.mensaje).join(" | ")}</li>`).join("")}</ul>`;
    } else {
      cajaAlerta.className = "hidden";
    }
  }

  if (gridDias) {
    gridDias.innerHTML = Object.values(grupos).map(g => `
      <div class="bg-indigo-50/60 border border-indigo-200 rounded-xl p-3 space-y-2">
        <div class="flex justify-between border-b border-indigo-200 pb-1">
          <div class="flex gap-2 items-center"><span class="px-2 py-0.5 bg-indigo-600 text-white rounded text-xs font-bold uppercase">${g.dia}</span><span class="font-bold text-xs">${g.fecha}</span></div>
          <span class="text-xs font-bold text-emerald-700">${formatearGuaranies(g.subtotal) || ""}</span>
        </div>
        <ul class="space-y-1">${g.items.map(it => `<li class="flex justify-between text-[11px] p-1.5 bg-white rounded border ${it.alertasDuplicado?.length ? 'border-amber-400 bg-amber-50' : 'border-slate-200'}"><span><strong>#${it.idx+1}</strong> ${it.marca} - ${it.trabajo}</span><span class="font-bold text-emerald-700">${it.precio}</span></li>`).join("")}</ul>
      </div>
    `).join("");
    document.getElementById("contenedor-resumen-dias")?.classList.remove("hidden");
  }

  tbody.innerHTML = loteTemporal.map((item, idx) => `
    <tr class="${item.alertasDuplicado?.length ? 'bg-amber-50' : 'hover:bg-slate-50'}">
      <td class="py-2 px-3 whitespace-nowrap"><div class="font-bold text-teal-700">#${idx + 1} · ${item.fecha}</div><div class="text-[10px] font-extrabold uppercase text-indigo-600">${item.diaSemana}</div></td>
      <td class="py-2 px-3 font-medium">${item.categoria}</td>
      <td class="py-2 px-3"><strong>${item.marca}</strong> · ${item.modelo}</td>
      <td class="py-2 px-3 text-indigo-700 font-semibold">${item.intervencion}</td>
      <td class="py-2 px-3 text-slate-800">${item.trabajo}</td>
      <td class="py-2 px-3 text-right font-extrabold text-emerald-700 whitespace-nowrap">${item.precio || "-"}</td>
      <td class="py-2 px-3"><button type="button" onclick="quitarFilaDeLote(${idx})" class="text-[11px] px-2 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200 font-bold">Quitar</button></td>
    </tr>
  `).join("");
  
  document.getElementById("resumen-lote").textContent = `${loteTemporal.length} servicios listos (${formatearGuaranies(totalGsLote)}).`;
  document.getElementById("contenedor-preview-lote")?.classList.remove("hidden");
  btn.disabled = false;
}

window.quitarFilaDeLote = function (idx) {
  loteTemporal.splice(idx, 1);
  loteTemporal = evaluarDuplicadosEnLote(loteTemporal); // Reevalúa los repetidos al quitar uno
  renderizarPreviewLote();
};

window.abrirModalCargaLote = function() {
  try {
    const hoy = new Date();
    const dia = hoy.getDay();
    const diff = hoy.getDate() - dia + (dia === 0 ? -6 : 1);
    const lunes = new Date(hoy.setDate(diff));
    
    document.getElementById("inp-lunes-lote").value = lunes.toISOString().split("T")[0];
    document.getElementById("inp-texto-lote").value = "";
    document.getElementById("contenedor-preview-lote")?.classList.add("hidden");
    document.getElementById("contenedor-resumen-dias")?.classList.add("hidden");
    const alerta = document.getElementById("alerta-duplicados-lote");
    if(alerta) alerta.className = "hidden";
    document.getElementById("resumen-lote").textContent = "";
    document.getElementById("btn-guardar-lote").disabled = true;
    loteTemporal = [];
    
    const mod = document.getElementById("modal-lote");
    mod.classList.replace("hidden", "flex");
    mod.classList.remove("hidden");
  } catch(e) {
    alert("Error al abrir Carga Rápida.");
  }
};

window.abrirModalNuevoRegistro = function() {
  document.getElementById("form-servicio")?.reset();
  document.getElementById("inp-edit-id").value = "";
  document.getElementById("titulo-modal-registro").textContent = "Registrar Nuevo Servicio Técnico";
  document.getElementById("inp-fecha").valueAsDate = new Date();
  document.getElementById("error-intervencion").classList.add("hidden");
  const mod = document.getElementById("modal-registro");
  mod.classList.replace("hidden", "flex");
  mod.classList.remove("hidden");
};

function configurarEventos() {
  document.getElementById("filtro-texto")?.addEventListener("input", () => {
    if (timerBusqueda) clearTimeout(timerBusqueda);
    timerBusqueda = setTimeout(aplicarFiltros, 75);
  });

  ["filtro-categoria", "filtro-marca", "filtro-intervencion", "filtro-fecha"].forEach((id) => {
    document.getElementById(id)?.addEventListener("change", aplicarFiltros);
  });

  document.querySelectorAll(".chip-cat").forEach(b => b.addEventListener("click", () => {
    const sel = document.getElementById("filtro-categoria");
    if (sel) { sel.value = sel.value === b.getAttribute("data-cat") ? "" : b.getAttribute("data-cat"); aplicarFiltros(); }
  }));

  document.querySelectorAll(".chip-marca").forEach(b => b.addEventListener("click", () => {
    const sel = document.getElementById("filtro-marca");
    if (sel) { sel.value = sel.value === b.getAttribute("data-marca") ? "" : b.getAttribute("data-marca"); aplicarFiltros(); }
  }));

  window.addEventListener("resize", () => {
    if ((window.innerWidth < 768) !== ultimoAnchoMovil) {
      ultimoAnchoMovil = window.innerWidth < 768;
      renderizarVista(ultimosFiltrados);
    }
  });

  document.getElementById("btn-limpiar")?.addEventListener("click", () => {
    ["filtro-texto", "filtro-categoria", "filtro-marca", "filtro-intervencion", "filtro-fecha"].forEach(id => document.getElementById(id).value = "");
    aplicarFiltros();
  });

  // BÓVEDA INGRESOS
  document.getElementById("btn-abrir-boveda")?.addEventListener("click", () => {
    if (bovedaDesbloqueada) {
      renderizarPanelIngresos();
      document.getElementById("modal-ingresos").classList.replace("hidden", "flex");
    } else {
      document.getElementById("inp-pin-ingresos").value = "";
      document.getElementById("error-pin-ingresos").classList.add("hidden");
      document.getElementById("modal-pin-ingresos").classList.replace("hidden", "flex");
      setTimeout(() => document.getElementById("inp-pin-ingresos").focus(), 60);
    }
  });

  document.getElementById("btn-cerrar-pin-ingresos")?.addEventListener("click", () => document.getElementById("modal-pin-ingresos").classList.replace("flex", "hidden"));
  
  document.getElementById("form-pin-ingresos")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.getElementById("inp-pin-ingresos").value.trim() === PIN_INGRESOS) {
      bovedaDesbloqueada = true;
      document.getElementById("modal-pin-ingresos").classList.replace("flex", "hidden");
      renderizarPanelIngresos();
      document.getElementById("modal-ingresos").classList.replace("hidden", "flex");
    } else {
      document.getElementById("error-pin-ingresos").classList.remove("hidden");
      document.getElementById("inp-pin-ingresos").value = "";
      document.getElementById("inp-pin-ingresos").focus();
    }
  });

  document.getElementById("btn-cerrar-ingresos")?.addEventListener("click", () => document.getElementById("modal-ingresos").classList.replace("flex", "hidden"));
  document.getElementById("btn-bloquear-boveda")?.addEventListener("click", () => { bovedaDesbloqueada = false; document.getElementById("modal-ingresos").classList.replace("flex", "hidden"); });
  document.getElementById("fin-select-semana")?.addEventListener("change", renderizarPanelIngresos);
  document.getElementById("fin-select-mes")?.addEventListener("change", renderizarPanelIngresos);

  // NUEVO/EDITAR
  const cerrarModal = () => document.getElementById("modal-registro")?.classList.replace("flex", "hidden");
  document.getElementById("btn-cerrar-modal")?.addEventListener("click", cerrarModal);
  document.getElementById("btn-cancelar")?.addEventListener("click", cerrarModal);

  document.getElementById("form-servicio")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const checks = Array.from(document.querySelectorAll('input[name="intervencion-check"]:checked')).map((c) => c.value);
    if (checks.length === 0) return document.getElementById("error-intervencion").classList.remove("hidden");
    
    const editId = document.getElementById("inp-edit-id").value.trim().toUpperCase();
    const trabajoRaw = document.getElementById("inp-trabajo").value.trim();
    const ext = extraerPrecioDeTexto(trabajoRaw);
    const pInput = document.getElementById("inp-precio")?.value.trim();
    const precioFinal = pInput ? formatearGuaranies(pInput) : ext.precio;
    const trabajoTxt = ext.precio ? ext.textoSinPrecio : trabajoRaw;

    const datosBase = {
      id: editId || generarNuevoID(1),
      fecha: formatearFechaInput(document.getElementById("inp-fecha").value),
      categoria: document.getElementById("inp-categoria").value,
      marca: document.getElementById("inp-marca").value.trim(),
      modelo: document.getElementById("inp-modelo").value.trim(),
      intervencion: checks.join(" + "),
      trabajo: trabajoTxt,
      repuestos: document.getElementById("inp-repuestos").value.trim() || deducirRepuestos(trabajoTxt),
      precio: precioFinal,
      estado: "Entregado",
      notas: document.getElementById("inp-notas").value.trim(),
      tecnico: TECNICO_NOMBRE
    };

    if (!editId) {
      const dups = verificarDuplicadoIndividual(datosBase);
      if (dups.length > 0) {
        const str = dups.map((d) => `• ${d.id} (${d.fecha}): ${d.marca} ${d.modelo} - ${d.trabajo}`).join("\n");
        if (!confirm(`⚠️ ALERTA DE SERVICIO REPETIDO EN LA MISMA FECHA (${datosBase.fecha}):\n\n${str}\n\n¿Confirmas que es otro equipo distinto (Aceptar) o cancelar?`)) return;
      }
    }

    const [regNorm] = normalizarRegistros([datosBase]);
    
    if (editId) {
      const idx = servicios.findIndex((s) => s.id === editId);
      if (idx !== -1) servicios[idx] = regNorm;
    } else {
      servicios.push(regNorm);
    }

    servicios = ordenarPorFechaYNumero(servicios);
    localStorage.setItem(CACHE_LOCAL_KEY, JSON.stringify(servicios));
    poblarSelectores(); aplicarFiltros(); if (bovedaDesbloqueada) renderizarPanelIngresos();
    e.target.reset(); cerrarModal();

    // Guardado REAL directo en Supabase
    await guardarServicioSupabase(regNorm);
  });

  // CARGA RÁPIDA (TEXTO)
  const cerrarModalLote = () => document.getElementById("modal-lote")?.classList.replace("flex", "hidden");
  document.getElementById("btn-cerrar-lote")?.addEventListener("click", cerrarModalLote);
  document.getElementById("btn-cancelar-lote")?.addEventListener("click", cerrarModalLote);

  document.getElementById("btn-analizar-lote")?.addEventListener("click", () => {
    const texto = document.getElementById("inp-texto-lote").value.trim();
    if (!texto) return alert("Pega primero la lista de servicios.");
    loteTemporal = procesarTextoLote(texto, document.getElementById("inp-lunes-lote").value);
    if (loteTemporal.length === 0) return alert("No se detectaron líneas válidas.");
    renderizarPreviewLote();
  });

  document.getElementById("btn-guardar-lote")?.addEventListener("click", async () => {
    if (!loteTemporal.length) return;
    const reps = loteTemporal.filter((it) => it.alertasDuplicado && it.alertasDuplicado.length > 0);
    if (reps.length > 0) {
      if (!confirm(`⚠️ Estás por guardar ${reps.length} repetido(s) en la misma fecha:\n\n${reps.map(r => `• ${r.fecha}: ${r.marca} ${r.modelo}`).join("\n")}\n\n¿Confirmas?`)) return;
    }

    const nuevos = loteTemporal.map((item, idx) => {
      const c = { ...item }; delete c.diaSemana; delete c.alertasDuplicado;
      return { id: generarNuevoID(idx + 1), ...c };
    });

    const nuevosNorm = normalizarRegistros(nuevos);
    servicios.push(...nuevosNorm);
    servicios = ordenarPorFechaYNumero(servicios);
    localStorage.setItem(CACHE_LOCAL_KEY, JSON.stringify(servicios));
    poblarSelectores(); aplicarFiltros(); if (bovedaDesbloqueada) renderizarPanelIngresos();
    cerrarModalLote();

    // Enviar lote completo a Supabase
    document.body.style.cursor = "wait";
    await guardarLoteSupabase(nuevosNorm);
    document.body.style.cursor = "default";
    alert(`¡Se guardaron y respaldaron en Supabase ${nuevosNorm.length} servicios!`);
  });

  // BOTÓN DE MIGRAR A SUPABASE (DESDE EL MODAL DEL DRIVE VIEJO)
  document.getElementById("btn-config-drive")?.addEventListener("click", () => document.getElementById("modal-drive").classList.replace("hidden", "flex"));
  document.getElementById("btn-cerrar-drive")?.addEventListener("click", () => document.getElementById("modal-drive").classList.replace("flex", "hidden"));
  document.getElementById("btn-subir-drive")?.addEventListener("click", migrarBaseASupabase);
  
  // EXPORTAR
  document.getElementById("btn-exportar")?.addEventListener("click", () => {
    const enc = ["ID", "Fecha", "Categoría", "Marca", "Modelo", "Intervención", "Trabajo Realizado", "Repuestos", "Precio (Gs)", "Notas"];
    const fil = ultimosFiltrados.map((s) => [s.id, s.fecha, s.categoria, s.marca, s.modelo, `"${s.intervencion}"`, `"${s.trabajo.replace(/"/g, '""')}"`, s.repuestos, s.precio || "", `"${s.notas.replace(/"/g, '""')}"`]);
    const blob = new Blob(["\uFEFF" + [enc.join(";"), ...fil.map((f) => f.join(";"))].join("\n")], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "BD_Angel_Villalba_Supabase.csv"; a.click();
  });
}