// ============================================================================
// DN SERVICIOS Y TECNOLOGÍAS - SISTEMA DE ÁNGEL VILLALBA (PIN: 000)
// CON COLUMNA PRECIO (GS), CARGA RÁPIDA SEMANAL Y DETECTOR DE REPETIDOS
// ============================================================================

const PIN_ACCESO = "000";
const TECNICO_NOMBRE = "ANGEL VILLALBA";
const AUTH_SESSION_KEY = "dn_servicios_autenticado_v5";
const STORAGE_KEY = "dn_servicios_db_v5";
const DRIVE_URL_KEY = "dn_servicios_drive_url";

const DEFAULT_DRIVE_URL = "https://script.google.com/macros/s/AKfycbxezjx2ilDKOrdGQXrE3bHUO3cnMnMFDoDl3FJ7SX1xGTU-HmLXqWHrNB3h2IzcIrPF-g/exec";

// 61 REGISTROS HISTÓRICOS DE ÁNGEL VILLALBA
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
let loteTemporal = [];
let driveUrl = localStorage.getItem(DRIVE_URL_KEY) || DEFAULT_DRIVE_URL;

function obtenerDiaSemana(fechaDDMMYYYY) {
  if (!fechaDDMMYYYY) return "";
  const partes = String(fechaDDMMYYYY).trim().split("/");
  if (partes.length !== 3) return "";
  const [dd, mm, yyyy] = partes.map(Number);
  if (!dd || !mm || !yyyy) return "";
  const fechaObj = new Date(yyyy, mm - 1, dd);
  if (isNaN(fechaObj.getTime())) return "";
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return dias[fechaObj.getDay()];
}

function formatearGuaranies(valor) {
  if (!valor) return "";
  const limpio = String(valor).replace(/\D/g, "");
  if (!limpio) return "";
  const num = parseInt(limpio, 10);
  if (isNaN(num) || num <= 0) return "";
  return num.toLocaleString("es-PY") + " Gs";
}

function obtenerMontoNumerico(precioStr) {
  if (!precioStr) return 0;
  const limpio = String(precioStr).replace(/\D/g, "");
  return parseInt(limpio, 10) || 0;
}

function extraerPrecioDeTexto(linea) {
  let texto = String(linea || "").trim();
  let precioFormateado = "";

  const regexParentesisGs = /\(\s*(\d{1,3}(?:[.,]\d{3})+|\d{4,9})\s*(?:gs\.?|guaran[ií]es)\s*\)/i;
  const regexExplicito = /(?:\s+[-–:]?\s*|\b)(\d{1,3}(?:[.,]\d{3})+|\d{4,9})\s*(?:gs\.?|guaran[ií]es)\b\.?/i;
  const regexMil = /(?:\s+[-–:]?\s*|\b)(\d{1,4})\s*mil\s*(?:gs\.?)?\s*$/i;
  const regexMilesFinal = /\s+[-–:]?\s*(\d{1,3}(?:\.\d{3})+)\s*$/;

  const mParen = texto.match(regexParentesisGs);
  if (mParen) {
    precioFormateado = formatearGuaranies(mParen[1]);
    texto = texto.replace(mParen[0], " ").trim();
  } else {
    const mExplicito = texto.match(regexExplicito);
    if (mExplicito) {
      precioFormateado = formatearGuaranies(mExplicito[1]);
      texto = texto.replace(mExplicito[0], " ").trim();
    } else {
      const mMil = texto.match(regexMil);
      if (mMil) {
        const monto = parseInt(mMil[1], 10) * 1000;
        precioFormateado = formatearGuaranies(monto);
        texto = texto.replace(mMil[0], " ").trim();
      } else {
        const mMiles = texto.match(regexMilesFinal);
        if (mMiles) {
          precioFormateado = formatearGuaranies(mMiles[1]);
          texto = texto.replace(mMiles[0], " ").trim();
        }
      }
    }
  }

  texto = texto.replace(/[-–:,\s]+$/, "").trim();
  return { textoSinPrecio: texto, precio: precioFormateado };
}

function deducirIntervencion(trabajo) {
  const t = (trabajo || "").toLowerCase();
  const lista = [];
  if (t.includes("limpieza") || t.includes("mantenimiento") || t.includes("recarga") || t.includes("purgado") || t.includes("humedad")) {
    lista.push("Mantenimiento Físico / Limpieza");
  }
  if (
    t.includes("cambio") || t.includes("cambiar") || t.includes("reemplazo") || t.includes("teclado") ||
    t.includes("batería") || t.includes("bateria") || t.includes("pantalla") || t.includes("bisagra") ||
    t.includes("ssd") || t.includes("ram") || t.includes("cabezal") || t.includes("almohadilla") ||
    t.includes("drum") || t.includes("tóner") || t.includes("toner") || t.includes("encoder") ||
    t.includes("arrastre") || t.includes("placa de carga") || t.includes("flex") || t.includes("pin")
  ) {
    lista.push("Reemplazo de Repuesto / Hardware");
  }
  if (t.includes("reset") || t.includes("contador")) {
    lista.push("Reset de Software / Contadores");
  }
  if (
    t.includes("software") || t.includes("sistema") || t.includes("office") || t.includes("corel") ||
    t.includes("photoshop") || t.includes("autocad") || t.includes("canva") || t.includes("flujo") ||
    t.includes("xuper") || t.includes("pasar datos") || t.includes("transferencia") || t.includes("traspaso") ||
    t.includes("sacar datos") || t.includes("extracción") || t.includes("recuperación") || t.includes("respaldo") ||
    t.includes("actualizar") || t.includes("actualización") || t.includes("firmware")
  ) {
    lista.push("Software / Sistema Operativo / Backup");
  }
  if (
    t.includes("placa") || t.includes("microelectrónica") || t.includes("socket") || t.includes("pines") ||
    t.includes("no encendía") || t.includes("no encendia") || t.includes("jarra") || t.includes("eléctrica") ||
    t.includes("fpc") || t.includes("resoldado")
  ) {
    lista.push("Microelectrónica / Reparación de Placa");
  }
  if (t.includes("instalación física") || t.includes("redes") || t.includes("wifi") || t.includes("gps") || t.includes("vinculación") || t.includes("drivers") || t.includes("inicialización")) {
    lista.push("Instalación / Conectividad / Redes");
  }
  if (t.includes("desbloqueo") || t.includes("frp") || t.includes("cuentas") || t.includes("iniciar teléfono")) {
    lista.push("Desbloqueo / FRP / Firmware");
  }
  if (t.includes("impresión") || t.includes("impresion") || t.includes("digitalización") || t.includes("escaneo") || t.includes("plotter") || t.includes("cameo") || t.includes("trabajo práctico")) {
    lista.push("Impresión / Corte Plotter / Trabajo Práctico");
  }
  return lista.length > 0 ? lista.join(" + ") : "Mantenimiento Físico / Limpieza";
}

function deducirRepuestos(trabajo) {
  const t = (trabajo || "").toLowerCase();
  const rep = [];
  if (t.includes("ssd") || t.includes("cambiar disco") || t.includes("cambio de disco")) rep.push("Disco SSD");
  if (t.includes("ram")) rep.push("Memoria RAM");
  if (t.includes("teclado")) rep.push("Teclado");
  if (t.includes("batería") || t.includes("bateria")) rep.push("Batería");
  if (t.includes("almohadilla")) rep.push("Almohadillas");
  if (t.includes("cabezal") && t.includes("cambio")) rep.push("Cabezal");
  if (t.includes("flex")) rep.push("Cable Flex");
  if (t.includes("placa de carga")) rep.push("Placa de Carga");
  if (t.includes("pin de carga")) rep.push("Pin de Carga");
  if (t.includes("pantalla")) rep.push("Módulo de Pantalla");
  if (t.includes("recarga") || t.includes("tinta")) rep.push("Tinta");
  if (t.includes("pasta térmica")) rep.push("Pasta térmica");
  return rep.length > 0 ? rep.join(" + ") : "Ninguno";
}

// ============================================================================
// DETECTOR DE DUPLICADOS Y SERVICIOS REPETIDOS EN LA MISMA FECHA
// ============================================================================
function limpiarTextoComparacion(str) {
  return String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function verificarDuplicadoIndividual(nuevoItem) {
  const fNueva = normalizarFecha(nuevoItem.fecha);
  const marcaNueva = limpiarTextoComparacion(nuevoItem.marca);
  const modeloNuevo = limpiarTextoComparacion(nuevoItem.modelo);
  const trabajoNuevo = limpiarTextoComparacion(nuevoItem.trabajo);
  const intNueva = limpiarTextoComparacion(nuevoItem.intervencion);

  return servicios.filter((s) => {
    if (normalizarFecha(s.fecha) !== fNueva) return false;
    const mMarca = limpiarTextoComparacion(s.marca) === marcaNueva;
    const mModelo = limpiarTextoComparacion(s.modelo) === modeloNuevo;
    const mTrabajo = limpiarTextoComparacion(s.trabajo) === trabajoNuevo;
    const mInt = limpiarTextoComparacion(s.intervencion) === intNueva;
    return (mMarca && mModelo && (mTrabajo || mInt)) || (mModelo && mTrabajo);
  });
}

function evaluarDuplicadosEnLote(listaLote) {
  return listaLote.map((item, idx) => {
    const fItem = normalizarFecha(item.fecha);
    const marcaItem = limpiarTextoComparacion(item.marca);
    const modeloItem = limpiarTextoComparacion(item.modelo);
    const trabajoItem = limpiarTextoComparacion(item.trabajo);
    const intItem = limpiarTextoComparacion(item.intervencion);

    const alertas = [];

    const enBD = servicios.filter((s) => {
      if (normalizarFecha(s.fecha) !== fItem) return false;
      const mMarca = limpiarTextoComparacion(s.marca) === marcaItem;
      const mModelo = limpiarTextoComparacion(s.modelo) === modeloItem;
      const mTrabajo = limpiarTextoComparacion(s.trabajo) === trabajoItem;
      return mMarca && mModelo && mTrabajo;
    });

    if (enBD.length > 0) {
      alertas.push({
        nivel: "rojo",
        mensaje: `Ya registrado el ${fItem} en la base (${enBD.map((x) => x.id).join(", ")})`
      });
    }

    const repetidosEnNota = [];
    listaLote.forEach((otro, otroIdx) => {
      if (otroIdx === idx) return;
      if (normalizarFecha(otro.fecha) !== fItem) return;

      const mMarca = limpiarTextoComparacion(otro.marca) === marcaItem;
      const mModelo = limpiarTextoComparacion(otro.modelo) === modeloItem;
      const mTrabajo = limpiarTextoComparacion(otro.trabajo) === trabajoItem;
      const mInt = limpiarTextoComparacion(otro.intervencion) === intItem;

      if (mMarca && mModelo && mTrabajo) {
        repetidosEnNota.push(`Fila #${otroIdx + 1} (Mismo equipo y servicio el ${fItem})`);
      } else if (mMarca && mModelo && mInt) {
        repetidosEnNota.push(`Fila #${otroIdx + 1} (Mismo equipo e intervención el ${fItem})`);
      } else if (mTrabajo && trabajoItem.length > 5) {
        repetidosEnNota.push(`Fila #${otroIdx + 1} (Mismo servicio "${otro.trabajo}" el ${fItem})`);
      }
    });

    if (repetidosEnNota.length > 0) {
      alertas.push({
        nivel: "ambar",
        mensaje: `Repetido en esta misma fecha con: ${repetidosEnNota.join(", ")}`
      });
    }

    return {
      ...item,
      alertasDuplicado: alertas
    };
  });
}

function normalizarFecha(f) {
  if (!f) return "";
  const str = String(f).trim();
  if (str.includes("T")) {
    const soloFecha = str.split("T")[0];
    const partes = soloFecha.split("-");
    if (partes.length === 3) return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
  const matchGuion = str.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (matchGuion) return `${matchGuion[3]}/${matchGuion[2]}/${matchGuion[1]}`;
  return str;
}

function inicializarIconos() {
  if (window.lucide && typeof lucide.createIcons === "function") {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn("Lucide:", e);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarIconos();
  configurarSeguridad();
  configurarEventos();
});

function normalizarRegistros(lista) {
  return lista.map((item) => {
    let inter = item.intervencion || deducirIntervencion(item.trabajo || "");
    inter = inter.replace(/Mantenimiento Físico \/ Limpieza \/ Reflux/gi, "Mantenimiento Físico / Limpieza");
    inter = inter.replace(/\/ Reflux/gi, "").trim();

    let notasRaw = (item.notas || "")
      .replace(/\(Téc:\s*ANGEL VILLALBA\)/gi, "")
      .replace(/Téc:\s*ANGEL VILLALBA/gi, "")
      .trim();

    const extTrabajo = extraerPrecioDeTexto(item.trabajo || "");
    const extNotas = extraerPrecioDeTexto(notasRaw);
    const precioFinal = item.precio ? formatearGuaranies(item.precio) : (extTrabajo.precio || extNotas.precio || "");
    const trabajoLimpio = extTrabajo.precio ? extTrabajo.textoSinPrecio : (item.trabajo || "");
    const notasLimpias = (extNotas.precio && !item.precio) ? extNotas.textoSinPrecio : notasRaw;

    return {
      id: item.id,
      fecha: normalizarFecha(item.fecha),
      categoria: item.categoria || "Notebook / Laptop",
      marca: item.marca || "Genérico",
      modelo: item.modelo || "-",
      intervencion: inter,
      trabajo: trabajoLimpio,
      repuestos: item.repuestos || deducirRepuestos(trabajoLimpio),
      precio: precioFinal,
      estado: item.estado || "Entregado",
      notas: notasLimpias,
      tecnico: TECNICO_NOMBRE
    };
  });
}

function configurarSeguridad() {
  const pantallaLogin = document.getElementById("pantalla-login");
  const appContenido = document.getElementById("app-contenido");
  const formLogin = document.getElementById("form-login");
  const inpPass = document.getElementById("inp-password");
  const errorLogin = document.getElementById("error-login");

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
      errorLogin.classList.add("hidden");
      inpPass.value = "";
      desbloquear();
    } else {
      errorLogin.classList.remove("hidden");
      inpPass.value = "";
      inpPass.focus();
    }
  });

  const bloquearSistema = () => {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    appContenido.classList.add("hidden");
    appContenido.style.display = "none";
    pantallaLogin.style.display = "flex";
    inpPass.focus();
  };

  const btnBloquear = document.getElementById("btn-bloquear");
  const btnBloquearMovil = document.getElementById("btn-bloquear-movil");
  if (btnBloquear) btnBloquear.addEventListener("click", bloquearSistema);
  if (btnBloquearMovil) btnBloquearMovil.addEventListener("click", bloquearSistema);
}

function cargarBaseDeDatos() {
  const guardados = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("dn_servicios_db_v4");
  if (guardados) {
    try {
      const parsed = JSON.parse(guardados);
      servicios = normalizarRegistros(fusionarConMaestros(parsed));
    } catch (e) {
      servicios = normalizarRegistros([...DATOS_MAESTROS]);
    }
  } else {
    servicios = normalizarRegistros([...DATOS_MAESTROS]);
  }
  guardarLocal();

  if (driveUrl) {
    localStorage.setItem(DRIVE_URL_KEY, driveUrl);
    actualizarBadgeDrive(true);
    sincronizarDesdeDrive();
  }

  poblarSelectores();
  aplicarFiltros();
}

// Filtra y fusiona únicamente registros de Ángel (SER-...)
function fusionarConMaestros(listaEntrante) {
  const mapa = new Map();
  DATOS_MAESTROS.forEach((m) => mapa.set(m.id, m));
  listaEntrante.forEach((item) => {
    const idStr = String(item.id || "").toUpperCase();
    if (idStr.startsWith("SER-")) {
      mapa.set(idStr, item);
    }
  });
  return Array.from(mapa.values()).sort((a, b) => {
    const numA = parseInt(String(a.id).replace(/\D/g, "")) || 0;
    const numB = parseInt(String(b.id).replace(/\D/g, "")) || 0;
    return numA - numB;
  });
}

function guardarLocal() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(servicios));
}

function obtenerIntervencionesUnicas() {
  const conjunto = new Set();
  servicios.forEach((s) => {
    String(s.intervencion || "")
      .split("+")
      .map((x) => x.trim())
      .filter(Boolean)
      .forEach((p) => conjunto.add(p));
  });
  return [...conjunto].sort();
}

function poblarSelectores() {
  const selCat = document.getElementById("filtro-categoria");
  const selMarca = document.getElementById("filtro-marca");
  const selInt = document.getElementById("filtro-intervencion");
  const selFecha = document.getElementById("filtro-fecha");

  if (!selCat || !selMarca || !selInt || !selFecha) return;

  const valCat = selCat.value;
  const valMarca = selMarca.value;
  const valInt = selInt.value;
  const valFecha = selFecha.value;

  const categorias = [...new Set(servicios.map((s) => s.categoria))].sort();
  const marcas = [...new Set(servicios.map((s) => s.marca))].sort();
  const intervenciones = obtenerIntervencionesUnicas();
  const fechas = [...new Set(servicios.map((s) => s.fecha))];

  selCat.innerHTML = '<option value="">Todas las categorías</option>' + categorias.map((c) => `<option value="${c}">${c}</option>`).join("");
  selMarca.innerHTML = '<option value="">Todas las marcas</option>' + marcas.map((m) => `<option value="${m}">${m}</option>`).join("");
  selInt.innerHTML = '<option value="">Todas las intervenciones</option>' + intervenciones.map((i) => `<option value="${i}">${i}</option>`).join("");
  selFecha.innerHTML =
    '<option value="">Todas las fechas</option>' +
    fechas
      .map((f) => {
        const dia = obtenerDiaSemana(f);
        const cant = servicios.filter((s) => s.fecha === f).length;
        return `<option value="${f}">${f} (${dia} · ${cant} serv.)</option>`;
      })
      .join("");

  selCat.value = valCat;
  selMarca.value = valMarca;
  selInt.value = valInt;
  selFecha.value = valFecha;
}

function aplicarFiltros() {
  const inpTexto = document.getElementById("filtro-texto");
  const selCat = document.getElementById("filtro-categoria");
  const selMarca = document.getElementById("filtro-marca");
  const selInt = document.getElementById("filtro-intervencion");
  const selFecha = document.getElementById("filtro-fecha");

  if (!inpTexto || !selCat || !selMarca || !selInt || !selFecha) return;

  const texto = inpTexto.value.toLowerCase().trim();
  const cat = selCat.value;
  const marca = selMarca.value;
  const intervencion = selInt.value;
  const fecha = selFecha.value;

  const filtrados = servicios.filter((item) => {
    const diaNombre = obtenerDiaSemana(item.fecha).toLowerCase();
    const coincideTexto =
      !texto ||
      item.id.toLowerCase().includes(texto) ||
      item.modelo.toLowerCase().includes(texto) ||
      item.trabajo.toLowerCase().includes(texto) ||
      (item.notas || "").toLowerCase().includes(texto) ||
      (item.precio || "").toLowerCase().includes(texto) ||
      item.marca.toLowerCase().includes(texto) ||
      item.fecha.toLowerCase().includes(texto) ||
      diaNombre.includes(texto);

    const coincideCat = !cat || item.categoria === cat;
    const coincideMarca = !marca || item.marca === marca;
    const coincideInt = !intervencion || item.intervencion.includes(intervencion);
    const coincideFecha = !fecha || item.fecha === fecha;

    return coincideTexto && coincideCat && coincideMarca && coincideInt && coincideFecha;
  });

  renderizarVista(filtrados);
  actualizarKPIs(filtrados);
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
  const contador = document.getElementById("contador-tabla");

  if (contador) contador.textContent = `Mostrando ${lista.length} registros`;

  if (lista.length === 0) {
    const vacioHTML = `<div class="py-10 text-center text-slate-500 text-sm">No se encontraron servicios con los filtros seleccionados.</div>`;
    if (tbody) tbody.innerHTML = `<tr><td colspan="10">${vacioHTML}</td></tr>`;
    if (listaMovil) listaMovil.innerHTML = vacioHTML;
    return;
  }

  const conteoGemelos = {};
  lista.forEach((it) => {
    const clave = `${it.fecha}|${limpiarTextoComparacion(it.marca)}|${limpiarTextoComparacion(it.modelo)}|${limpiarTextoComparacion(it.trabajo)}`;
    conteoGemelos[clave] = (conteoGemelos[clave] || 0) + 1;
  });

  const invertidos = [...lista].reverse();

  if (listaMovil) {
    listaMovil.innerHTML = invertidos
      .map((item) => {
        const dia = obtenerDiaSemana(item.fecha);
        const clave = `${item.fecha}|${limpiarTextoComparacion(item.marca)}|${limpiarTextoComparacion(item.modelo)}|${limpiarTextoComparacion(item.trabajo)}`;
        const esGemelo = conteoGemelos[clave] > 1;

        return `
        <div class="p-4 space-y-2 ${esGemelo ? "bg-amber-50/40" : "hover:bg-slate-50"}">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="font-bold text-teal-700 text-sm">${item.id}</span>
              <span class="text-xs font-semibold text-slate-700">· ${item.fecha}</span>
              <span class="text-[11px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">${dia}</span>
              ${
                esGemelo
                  ? `<span class="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold border border-amber-300">⚠️ Repetido en fecha (${conteoGemelos[clave]}x)</span>`
                  : ""
              }
            </div>
            <div class="flex items-center gap-2">
              ${
                item.precio
                  ? `<span class="text-xs font-extrabold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">${item.precio}</span>`
                  : ""
              }
              <button onclick="eliminarServicio('${item.id}')" class="text-slate-400 hover:text-rose-600 p-1">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <p class="font-bold text-slate-900 text-sm">${item.marca} <span class="font-normal text-slate-500">· ${item.modelo}</span></p>
            <span class="text-[11px] font-semibold px-2 py-0.5 rounded-md border ${obtenerColorBadge(item.categoria)}">
              ${item.categoria}
            </span>
          </div>
          <p class="text-xs font-medium text-teal-800">${item.intervencion}</p>
          <p class="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">${item.trabajo}</p>
          <div class="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 gap-2">
            <span><strong>Insumos:</strong> ${item.repuestos || "Ninguno"}</span>
            <span class="text-teal-800 font-semibold">${item.notas || "-"}</span>
          </div>
        </div>
      `;
      })
      .join("");
  }

  if (tbody) {
    tbody.innerHTML = invertidos
      .map((item) => {
        const dia = obtenerDiaSemana(item.fecha);
        const clave = `${item.fecha}|${limpiarTextoComparacion(item.marca)}|${limpiarTextoComparacion(item.modelo)}|${limpiarTextoComparacion(item.trabajo)}`;
        const esGemelo = conteoGemelos[clave] > 1;

        return `
        <tr class="${esGemelo ? "bg-amber-50/40 hover:bg-amber-50/80" : "hover:bg-slate-50"} transition">
          <td class="py-3 px-4 font-bold text-teal-700 whitespace-nowrap">${item.id}</td>
          <td class="py-3 px-4 whitespace-nowrap">
            <div class="font-semibold text-slate-800">${item.fecha}</div>
            <div class="text-[11px] font-bold text-indigo-600 uppercase tracking-wide">${dia}</div>
          </td>
          <td class="py-3 px-4">
            <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-md border ${obtenerColorBadge(item.categoria)}">
              ${item.categoria}
            </span>
          </td>
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${item.marca}</div>
            <div class="text-xs text-slate-500">${item.modelo}</div>
          </td>
          <td class="py-3 px-4 text-xs font-medium text-slate-700 max-w-xs">${item.intervencion}</td>
          <td class="py-3 px-4 text-slate-800 max-w-xs">
            <div>${item.trabajo}</div>
            ${
              esGemelo
                ? `<span class="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">⚠️ Mismo equipo y servicio en esta fecha (${conteoGemelos[clave]} disp.)</span>`
                : ""
            }
          </td>
          <td class="py-3 px-4 text-xs text-slate-600">${item.repuestos || "Ninguno"}</td>
          <td class="py-3 px-4 text-right whitespace-nowrap">
            ${
              item.precio
                ? `<span class="inline-block text-xs font-extrabold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">${item.precio}</span>`
                : `<span class="text-xs text-slate-400">-</span>`
            }
          </td>
          <td class="py-3 px-4 text-xs font-semibold text-teal-800">${item.notas || "-"}</td>
          <td class="py-3 px-4 text-center">
            <button onclick="eliminarServicio('${item.id}')" class="text-slate-400 hover:text-rose-600 transition p-1" title="Eliminar registro">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </td>
        </tr>
      `;
      })
      .join("");
  }

  inicializarIconos();
}

function calcularModa(arr) {
  if (!arr.length) return "-";
  const conteo = {};
  let maxVal = arr[0];
  let maxCount = 0;
  for (const v of arr) {
    conteo[v] = (conteo[v] || 0) + 1;
    if (conteo[v] > maxCount) {
      maxCount = conteo[v];
      maxVal = v;
    }
  }
  return `${maxVal} (${maxCount})`;
}

function actualizarKPIs(filtrados) {
  const kTotal = document.getElementById("kpi-total");
  const kSubTotal = document.getElementById("kpi-sub-total");
  const kCat = document.getElementById("kpi-categoria");
  const kMarca = document.getElementById("kpi-marca");
  const kInt = document.getElementById("kpi-intervencion");

  const todasLasIntervenciones = [];
  filtrados.forEach((s) => {
    String(s.intervencion || "")
      .split("+")
      .map((x) => x.trim())
      .filter(Boolean)
      .forEach((p) => todasLasIntervenciones.push(p));
  });

  if (kTotal) kTotal.textContent = filtrados.length;
  if (kSubTotal) kSubTotal.textContent = `De ${servicios.length} registrados en total`;
  if (kCat) kCat.textContent = calcularModa(filtrados.map((s) => s.categoria));
  if (kMarca) kMarca.textContent = calcularModa(filtrados.map((s) => s.marca));
  if (kInt) kInt.textContent = calcularModa(todasLasIntervenciones);
}

window.eliminarServicio = function (id) {
  if (!confirm(`¿Seguro que deseas eliminar el registro ${id}?`)) return;
  servicios = servicios.filter((s) => s.id !== id);
  guardarLocal();
  poblarSelectores();
  aplicarFiltros();
};

window.quitarFilaDeLote = function (idx) {
  loteTemporal.splice(idx, 1);
  loteTemporal = evaluarDuplicadosEnLote(loteTemporal);
  renderizarPreviewLote();
};

function formatearFechaInput(yyyy_mm_dd) {
  const [y, m, d] = yyyy_mm_dd.split("-");
  return `${d}/${m}/${y}`;
}

function generarNuevoID(offset = 1) {
  const maxNum = servicios.reduce((acc, s) => {
    const n = parseInt(String(s.id).replace(/\D/g, "")) || 0;
    return n > acc ? n : acc;
  }, 0);
  return `SER-${String(maxNum + offset).padStart(3, "0")}`;
}

// ============================================================================
// MOTOR INTELIGENTE DE PROCESAMIENTO DE TEXTO SEMANAL, EQUIPOS Y PRECIOS (GS)
// ============================================================================
function obtenerLunesActualYYYYMMDD() {
  const hoy = new Date();
  const dia = hoy.getDay();
  const diff = hoy.getDate() - dia + (dia === 0 ? -6 : 1);
  const lunes = new Date(hoy.setDate(diff));
  return lunes.toISOString().split("T")[0];
}

function sumarDiasAFecha(yyyy_mm_dd, dias) {
  const [y, m, d] = yyyy_mm_dd.split("-").map(Number);
  const fecha = new Date(y, m - 1, d);
  fecha.setDate(fecha.getDate() + dias);
  const dd = String(fecha.getDate()).padStart(2, "0");
  const mm = String(fecha.getMonth() + 1).padStart(2, "0");
  const yyyy = fecha.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function normalizarFechaNumericaCorta(strFecha, anioBase) {
  const partes = strFecha.replace(/-/g, "/").split("/");
  const dd = String(partes[0]).padStart(2, "0");
  const mm = String(partes[1]).padStart(2, "0");
  let yyyy = partes[2] ? String(partes[2]) : String(anioBase);
  if (yyyy.length === 2) yyyy = "20" + yyyy;
  return `${dd}/${mm}/${yyyy}`;
}

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
  else if (tLow.includes("realme")) marca = "Realme";
  else if (tLow.includes("huawei")) marca = "Huawei";
  else if (tLow.includes("jbl")) marca = "JBL";
  else if (tLow.includes("silhouette") || tLow.includes("cameo")) marca = "Silhouette";
  else if (tLow.includes("amazon") || tLow.includes("fire tv")) marca = "Amazon";
  else if (tLow.includes("amazfit")) marca = "Amazfit";

  let categoria = "Notebook / Laptop";
  if (tLow.includes("impresora") || tLow.includes("epson") || tLow.includes("cabezal") || tLow.includes("almohadilla") || tLow.includes("cartucho") || tLow.includes("brother")) {
    categoria = "Impresora";
  } else if (tLow.includes("digitalización") || tLow.includes("escaneo") || tLow.includes("impresión") || tLow.includes("corte plotter") || tLow.includes("trabajo práctico")) {
    categoria = "Impresiones / Corte Plotter / Trabajos Prácticos";
  } else if (tLow.includes("pc ") || tLow.includes("escritorio") || tLow.includes("servidor") || tLow.includes("gamer")) {
    categoria = "PC Escritorio / Servidor";
  } else if (tLow.includes("laptop") || tLow.includes("notebook") || tLow.includes("acer") || tLow.includes("asus") || tLow.includes("hp 250")) {
    categoria = "Notebook / Laptop";
  } else if (
    tLow.includes("teléfono") || tLow.includes("telefono") || tLow.includes("celular") ||
    tLow.includes("samsung") || tLow.includes("xiaomi") || tLow.includes("redmi") ||
    tLow.includes("poco") || tLow.includes("iphone") || tLow.includes("honor") || tLow.includes("motorola")
  ) {
    categoria = "Smartphone";
  } else if (tLow.includes("tv") || tLow.includes("monitor") || tLow.includes("stick") || tLow.includes("flujo") || tLow.includes("xuper")) {
    categoria = "Smart TV / Monitor";
  } else if (tLow.includes("jbl") || tLow.includes("parlante") || tLow.includes("consola") || tLow.includes("smartwatch") || tLow.includes("amazfit")) {
    categoria = "Audio / Consola / Portátil";
  } else if (tLow.includes("disco") || tLow.includes("hdd") || tLow.includes("cd") || tLow.includes("pendrive")) {
    categoria = "Almacenamiento";
  } else if (tLow.includes("socket") || tLow.includes("placa madre")) {
    categoria = "Microelectrónica / Componente";
  } else if (tLow.includes("cameo") || tLow.includes("sublimadora") || tLow.includes("jarra") || tLow.includes("gps")) {
    categoria = "Electrónica / Línea Blanca / Periférico";
  }

  let modelo = "";
  const matchTraspaso = texto.match(/([a-zA-Z0-9]+\s+a\s+[a-zA-Z0-9]+)/i);
  const matchEpson = texto.match(/\b(L\d{3,4})\b/i);
  const matchHPModel = texto.match(/\b(HP\s*\d{3}\s*G\d+|Cartucho\s*HP\s*\d*)\b/i);
  const matchGalaxy = texto.match(/\b(Galaxy\s+[A-Z0-9]+(?:\s+(?:Core|Plus|Ultra|FE|5G|4G))*|A\d{2}[a-z]?(?:\s+5G)?|S\d{2}\s*(?:FE|Plus|Ultra)?|J\d\s*(?:Neo|Pro)?|M\d{2})\b/i);
  const matchRedmiPoco = texto.match(/\b((?:Redmi|Poco)\s+[A-Za-z0-9]+(?:\s+(?:Note|Pro|Plus|Max|Ultra|5G|4G|S|C|\d+[A-Za-z+]*))*)\b/i);
  const matchIphone = texto.match(/\b(iPhone\s*\d+\s*(?:Pro\s*Max|Pro|Plus|Mini|XR|XS)?)\b/i);
  const matchMoto = texto.match(/\b(Moto\s*[A-Z0-9]+\s*(?:Power|Plus|Play)?)\b/i);

  if (tLow.includes("a samsung") || tLow.includes("a redmi") || tLow.includes("a honor") || tLow.includes("a iphone")) {
    if (tLow.includes("samsung a samsung")) modelo = "Samsung a Samsung";
    else if (tLow.includes("redmi a redmi")) modelo = "Redmi a Redmi";
    else if (tLow.includes("honor a honor")) modelo = "Honor a Honor";
    else if (matchTraspaso) modelo = matchTraspaso[1];
  } else if (matchEpson) {
    modelo = `EcoTank ${matchEpson[1].toUpperCase()}`;
  } else if (matchHPModel) {
    modelo = matchHPModel[1];
  } else if (matchIphone) {
    modelo = matchIphone[1];
  } else if (matchRedmiPoco) {
    modelo = matchRedmiPoco[1].replace(/\b(redmi|poco|note|pro|plus|max|ultra|5g|4g)\b/gi, (m) =>
      m.length <= 2 ? m.toUpperCase() : m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()
    );
  } else if (matchGalaxy) {
    const g = matchGalaxy[1];
    modelo = g.toLowerCase().startsWith("galaxy") ? g : `Galaxy ${g.toUpperCase()}`;
  } else if (matchMoto) {
    modelo = matchMoto[1];
  }

  return { tieneMarcaOModelo: Boolean(marca || modelo), categoria, marca: marca || "Genérico", modelo };
}

function contienePalabrasDeTrabajo(texto) {
  const t = texto.toLowerCase();
  const palabrasTrabajo = [
    "placa de carga", "flex de carga", "flex carga", "pin de carga", "puerto de carga",
    "cambio", "cambiar", "reparación", "reparacion", "reparar", "ajuste", "limpieza",
    "mantenimiento", "desbloqueo", "frp", "flasheo", "pasar", "traspaso", "sacar",
    "recuperar", "recuperación", "iniciar", "actualizar", "instalar", "instalación",
    "configuración", "reset", "placa", "flex", "pin", "pantalla", "módulo", "modulo",
    "batería", "bateria", "tapa", "housing", "botón", "boton", "cámara", "camara",
    "cabezal", "almohadilla", "cartucho", "disco", "ssd", "hdd", "sistema", "office",
    "no encendía", "no encendia", "humedad", "resoldado", "fpc", "ic", "micrófono",
    "microfono", "auricular", "parlante", "software", "firmware", "recarga", "teclado",
    "digitalización", "escaneo", "impresión"
  ];
  return palabrasTrabajo.some((p) => t.includes(p));
}

function construirRegistroDesdeLinea(lineaTrabajoRaw, fechaActual, contextoEquipo) {
  let textoLimpio = lineaTrabajoRaw.replace(/^[-*•\d.)\s]+/, "").trim();
  if (!textoLimpio) return null;

  const { textoSinPrecio, precio } = extraerPrecioDeTexto(textoLimpio);
  let texto = textoSinPrecio || textoLimpio;

  let notas = "";
  const matchDeCliente = texto.match(/\s+(?:de|cliente:?)\s+([A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,25})$/i);
  if (matchDeCliente) {
    const posibleCliente = matchDeCliente[1].trim();
    const palabrasTecnicas = [
      "pantalla", "bateria", "batería", "carga", "pin", "cabezal", "almohadilla",
      "almohadillas", "flex", "disco", "sistema", "office", "amarillo", "negro",
      "color", "software", "telefono", "teléfono", "placa", "camara", "cámara", "datos", "tinta"
    ];
    if (!palabrasTecnicas.includes(posibleCliente.toLowerCase())) {
      notas = posibleCliente.charAt(0).toUpperCase() + posibleCliente.slice(1);
    }
  }

  const eqDetectado = detectarEquipoEnTexto(texto);
  let categoria = eqDetectado.categoria;
  let marca = eqDetectado.marca;
  let modelo = eqDetectado.modelo;

  if (!eqDetectado.tieneMarcaOModelo && contextoEquipo) {
    categoria = contextoEquipo.categoria;
    marca = contextoEquipo.marca;
    modelo = contextoEquipo.modelo;
    if (!notas && contextoEquipo.notas) notas = contextoEquipo.notas;
  } else {
    if (!modelo) {
      if (categoria === "Almacenamiento") modelo = "Disco Duro HDD";
      else if (categoria === "Notebook / Laptop") modelo = `Laptop ${marca}`;
      else if (categoria === "PC Escritorio / Servidor") modelo = `PC ${marca}`;
      else if (categoria === "Impresora") modelo = `Impresora ${marca}`;
      else if (marca === "JBL") modelo = "Parlante JBL";
      else if (categoria === "Smartphone" && marca === "Genérico") modelo = "Smartphone Android";
      else modelo = marca;
    }
  }

  const trabajoFinal = texto.charAt(0).toUpperCase() + texto.slice(1);
  const intervencion = deducirIntervencion(trabajoFinal);
  const repuestos = deducirRepuestos(trabajoFinal);

  return {
    fecha: fechaActual,
    diaSemana: obtenerDiaSemana(fechaActual),
    categoria,
    marca,
    modelo,
    intervencion,
    trabajo: trabajoFinal,
    repuestos,
    precio: precio || "",
    estado: "Entregado",
    notas,
    tecnico: TECNICO_NOMBRE
  };
}

function procesarTextoLote(textoCompleto, fechaLunesYYYYMMDD) {
  const lineas = textoCompleto.split(/\r?\n/);
  const anioBase = fechaLunesYYYYMMDD.split("-")[0] || "2026";
  let fechaCurso = sumarDiasAFecha(fechaLunesYYYYMMDD, 0);
  let contextoEquipoActual = null;
  const resultados = [];

  const mapaDias = [
    { regex: /^lunes\b/i, offset: 0 },
    { regex: /^martes\b/i, offset: 1 },
    { regex: /^mi[eé]rcoles\b/i, offset: 2 },
    { regex: /^jueves\b/i, offset: 3 },
    { regex: /^viernes\b/i, offset: 4 },
    { regex: /^s[aá]bado\b/i, offset: 5 },
    { regex: /^domingo\b/i, offset: 6 }
  ];

  for (let raw of lineas) {
    let l = raw.trim();
    if (!l) continue;

    const matchHeaderFecha = l.match(/^(\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?)\s*:?$/);
    if (matchHeaderFecha) {
      fechaCurso = normalizarFechaNumericaCorta(matchHeaderFecha[1], anioBase);
      contextoEquipoActual = null;
      continue;
    }

    let cambioDia = false;
    for (const d of mapaDias) {
      if (d.regex.test(l)) {
        const restoDespuesDeDia = l.replace(d.regex, "").replace(/^[\s:–-]+/, "").trim();
        const matchFechaJuntoADia = restoDespuesDeDia.match(/^(\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?)\s*:?\s*(.*)$/);

        if (matchFechaJuntoADia) {
          fechaCurso = normalizarFechaNumericaCorta(matchFechaJuntoADia[1], anioBase);
          l = matchFechaJuntoADia[2].trim();
        } else {
          fechaCurso = sumarDiasAFecha(fechaLunesYYYYMMDD, d.offset);
          l = restoDespuesDeDia;
        }
        contextoEquipoActual = null;
        cambioDia = true;
        break;
      }
    }
    if (cambioDia && !l) continue;

    const matchFechaEnLinea = l.match(/^(\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?)\s*[-:–]\s*(.+)$/);
    if (matchFechaEnLinea) {
      fechaCurso = normalizarFechaNumericaCorta(matchFechaEnLinea[1], anioBase);
      l = matchFechaEnLinea[2].trim();
    }

    const { textoSinPrecio, precio } = extraerPrecioDeTexto(l);
    const eqInfo = detectarEquipoEnTexto(textoSinPrecio);
    const tieneTrabajo = contienePalabrasDeTrabajo(textoSinPrecio);

    if (eqInfo.tieneMarcaOModelo && !tieneTrabajo && !precio) {
      contextoEquipoActual = {
        categoria: eqInfo.categoria,
        marca: eqInfo.marca,
        modelo: eqInfo.modelo || eqInfo.marca,
        notas: ""
      };
      continue;
    }

    const item = construirRegistroDesdeLinea(l, fechaCurso, contextoEquipoActual);
    if (item) {
      if (eqInfo.tieneMarcaOModelo) {
        contextoEquipoActual = {
          categoria: item.categoria,
          marca: item.marca,
          modelo: item.modelo,
          notas: item.notas
        };
      }
      resultados.push(item);
    }
  }

  return evaluarDuplicadosEnLote(resultados);
}

function renderizarPreviewLote() {
  const tbodyPreview = document.getElementById("tbody-preview-lote");
  const contPreview = document.getElementById("contenedor-preview-lote");
  const contResumenDias = document.getElementById("contenedor-resumen-dias");
  const gridResumenDias = document.getElementById("grid-resumen-dias");
  const resumen = document.getElementById("resumen-lote");
  const btnGuardarLote = document.getElementById("btn-guardar-lote");

  let cajaAlertaDup = document.getElementById("alerta-duplicados-lote");
  if (!cajaAlertaDup && contResumenDias) {
    cajaAlertaDup = document.createElement("div");
    cajaAlertaDup.id = "alerta-duplicados-lote";
    contResumenDias.parentNode.insertBefore(cajaAlertaDup, contResumenDias);
  }

  if (loteTemporal.length === 0) {
    if (contResumenDias) contResumenDias.classList.add("hidden");
    if (contPreview) contPreview.classList.add("hidden");
    if (cajaAlertaDup) cajaAlertaDup.className = "hidden";
    if (resumen) resumen.textContent = "Sin servicios en lista.";
    if (btnGuardarLote) btnGuardarLote.disabled = true;
    return;
  }

  const gruposPorFecha = {};
  let sumaTotalLote = 0;
  const itemsConAlerta = [];

  loteTemporal.forEach((item, idx) => {
    const monto = obtenerMontoNumerico(item.precio);
    sumaTotalLote += monto;
    if (!gruposPorFecha[item.fecha]) {
      gruposPorFecha[item.fecha] = {
        dia: item.diaSemana || obtenerDiaSemana(item.fecha),
        fecha: item.fecha,
        subtotalGs: 0,
        items: []
      };
    }
    gruposPorFecha[item.fecha].subtotalGs += monto;
    gruposPorFecha[item.fecha].items.push({ ...item, idx });

    if (item.alertasDuplicado && item.alertasDuplicado.length > 0) {
      itemsConAlerta.push({ idx: idx + 1, ...item });
    }
  });

  if (cajaAlertaDup) {
    if (itemsConAlerta.length > 0) {
      cajaAlertaDup.className = "bg-amber-50 border-2 border-amber-400 rounded-xl p-4 space-y-2 shadow-sm";
      cajaAlertaDup.innerHTML = `
        <div class="flex items-start gap-2.5">
          <i data-lucide="alert-triangle" class="w-5 h-5 text-amber-600 shrink-0 mt-0.5"></i>
          <div class="space-y-1 flex-1">
            <h4 class="text-xs sm:text-sm font-extrabold text-amber-900 uppercase tracking-wide">
              ⚠️ Alerta: Se detectaron ${itemsConAlerta.length} servicio(s) repetido(s) en la misma fecha
            </h4>
            <p class="text-xs text-amber-800">
              Verifica si se cargó dos veces por error o si realmente se realizó el mismo servicio a dos equipos distintos en esa fecha. Puedes quitar una fila con el botón <strong>"Quitar"</strong> o continuar:
            </p>
            <ul class="text-xs text-amber-950 space-y-1 pt-1">
              ${itemsConAlerta
                .map(
                  (al) => `
                  <li class="bg-white/90 px-2.5 py-1.5 rounded border border-amber-300 flex flex-wrap items-center justify-between gap-2">
                    <span>
                      <strong>Fila #${al.idx} (${al.fecha} · ${al.diaSemana}):</strong>
                      ${al.marca} ${al.modelo} — <em>${al.trabajo}</em>
                    </span>
                    <span class="text-[11px] font-bold text-rose-700">
                      ${al.alertasDuplicado.map((a) => a.mensaje).join(" | ")}
                    </span>
                  </li>
                `
                )
                .join("")}
            </ul>
          </div>
        </div>
      `;
    } else {
      cajaAlertaDup.className = "hidden";
      cajaAlertaDup.innerHTML = "";
    }
  }

  gridResumenDias.innerHTML = Object.values(gruposPorFecha)
    .map(
      (g) => `
      <div class="bg-indigo-50/60 border border-indigo-200 rounded-xl p-3.5 space-y-2">
        <div class="flex items-center justify-between border-b border-indigo-200/70 pb-1.5">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-indigo-600 text-white font-extrabold text-xs uppercase">${g.dia}</span>
            <span class="font-bold text-slate-800 text-xs">${g.fecha}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold text-indigo-700">${g.items.length} serv.</span>
            ${
              g.subtotalGs > 0
                ? `<span class="text-xs font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">Total: ${formatearGuaranies(g.subtotalGs)}</span>`
                : ""
            }
          </div>
        </div>
        <ul class="space-y-1.5 text-xs text-slate-700">
          ${g.items
            .map((it) => {
              const tieneDup = it.alertasDuplicado && it.alertasDuplicado.length > 0;
              return `
              <li class="flex items-start justify-between gap-2 ${tieneDup ? "bg-amber-100/90 border-amber-400" : "bg-white/80 border-indigo-100"} p-2 rounded-lg border">
                <div>
                  <strong class="text-slate-900">#${it.idx + 1} · ${it.marca} · ${it.modelo}</strong>
                  <span class="block text-slate-700">${it.trabajo}</span>
                  <span class="text-[10px] text-indigo-700 font-semibold block">${it.intervencion}</span>
                  ${
                    tieneDup
                      ? `<span class="text-[10px] font-extrabold text-rose-700 block mt-0.5">⚠️ ${it.alertasDuplicado.map((a) => a.mensaje).join(" | ")}</span>`
                      : ""
                  }
                </div>
                <div class="flex flex-col items-end gap-1">
                  <span class="font-extrabold text-emerald-700 whitespace-nowrap">${it.precio || "-"}</span>
                  <button type="button" onclick="quitarFilaDeLote(${it.idx})" class="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 hover:bg-rose-200 text-rose-700 font-bold">
                    Quitar
                  </button>
                </div>
              </li>
            `;
            })
            .join("")}
        </ul>
      </div>
    `
    )
    .join("");

  const textoTotalGs = sumaTotalLote > 0 ? ` · Total: ${formatearGuaranies(sumaTotalLote)}` : "";
  resumen.textContent = `¡${loteTemporal.length} servicio(s) en vista previa${textoTotalGs}!`;

  tbodyPreview.innerHTML = loteTemporal
    .map((item, idx) => {
      const tieneDup = item.alertasDuplicado && item.alertasDuplicado.length > 0;
      return `
      <tr class="${tieneDup ? "bg-amber-50 hover:bg-amber-100/70" : "hover:bg-slate-50"}">
        <td class="py-2 px-3 whitespace-nowrap">
          <div class="font-bold text-teal-700">#${idx + 1} · ${item.fecha}</div>
          <div class="text-[10px] font-extrabold uppercase text-indigo-600">${item.diaSemana}</div>
        </td>
        <td class="py-2 px-3 font-medium">${item.categoria}</td>
        <td class="py-2 px-3"><strong>${item.marca}</strong> · ${item.modelo}</td>
        <td class="py-2 px-3 text-indigo-700 font-semibold">${item.intervencion}</td>
        <td class="py-2 px-3 text-slate-800">
          <div>${item.trabajo}</div>
          ${
            tieneDup
              ? `<span class="inline-block mt-1 px-1.5 py-0.5 rounded bg-amber-200 text-amber-950 text-[10px] font-extrabold">⚠️ ${item.alertasDuplicado.map((a) => a.mensaje).join(" | ")}</span>`
              : ""
          }
        </td>
        <td class="py-2 px-3 text-right font-extrabold text-emerald-700 whitespace-nowrap">${item.precio || "-"}</td>
        <td class="py-2 px-3">
          <div class="flex items-center justify-between gap-2">
            <span class="font-semibold text-teal-800">${item.notas || "-"}</span>
            <button type="button" onclick="quitarFilaDeLote(${idx})" class="text-[11px] px-2 py-0.5 rounded bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-bold">
              Quitar
            </button>
          </div>
        </td>
      </tr>
    `;
    })
    .join("");

  contResumenDias.classList.remove("hidden");
  contPreview.classList.remove("hidden");
  btnGuardarLote.disabled = false;
  inicializarIconos();
}

function configurarEventos() {
  ["filtro-texto", "filtro-categoria", "filtro-marca", "filtro-intervencion", "filtro-fecha"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", aplicarFiltros);
  });

  const btnLimpiar = document.getElementById("btn-limpiar");
  if (btnLimpiar) {
    btnLimpiar.addEventListener("click", () => {
      document.getElementById("filtro-texto").value = "";
      document.getElementById("filtro-categoria").value = "";
      document.getElementById("filtro-marca").value = "";
      document.getElementById("filtro-intervencion").value = "";
      document.getElementById("filtro-fecha").value = "";
      aplicarFiltros();
    });
  }

  const modal = document.getElementById("modal-registro");
  const abrirModalNuevo = () => {
    document.getElementById("inp-fecha").valueAsDate = new Date();
    document.getElementById("error-intervencion").classList.add("hidden");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  };

  const btnNuevo = document.getElementById("btn-nuevo");
  const btnNuevoFlotante = document.getElementById("btn-nuevo-flotante");
  if (btnNuevo) btnNuevo.addEventListener("click", abrirModalNuevo);
  if (btnNuevoFlotante) btnNuevoFlotante.addEventListener("click", abrirModalNuevo);

  const cerrarModal = () => {
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };
  const btnCerrarModal = document.getElementById("btn-cerrar-modal");
  const btnCancelar = document.getElementById("btn-cancelar");
  if (btnCerrarModal) btnCerrarModal.addEventListener("click", cerrarModal);
  if (btnCancelar) btnCancelar.addEventListener("click", cerrarModal);

  const formServicio = document.getElementById("form-servicio");
  if (formServicio) {
    formServicio.addEventListener("submit", async (e) => {
      e.preventDefault();

      const checks = Array.from(document.querySelectorAll('input[name="intervencion-check"]:checked')).map((c) => c.value);
      const errorInt = document.getElementById("error-intervencion");
      if (checks.length === 0) {
        errorInt.classList.remove("hidden");
        return;
      }
      errorInt.classList.add("hidden");

      const trabajoRaw = document.getElementById("inp-trabajo").value.trim();
      const ext = extraerPrecioDeTexto(trabajoRaw);
      const inpPrecioEl = document.getElementById("inp-precio");
      const precioInput = inpPrecioEl ? inpPrecioEl.value.trim() : "";
      const precioFinal = precioInput ? formatearGuaranies(precioInput) : ext.precio;
      const trabajoTxt = ext.precio ? ext.textoSinPrecio : trabajoRaw;

      const nuevo = {
        id: generarNuevoID(1),
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

      const duplicadosPrevios = verificarDuplicadoIndividual(nuevo);
      if (duplicadosPrevios.length > 0) {
        const detalleExistentes = duplicadosPrevios
          .map((d) => `• ${d.id} (${d.fecha}): ${d.marca} ${d.modelo} - ${d.trabajo} ${d.precio ? `[${d.precio}]` : ""}`)
          .join("\n");

        const confirmar = confirm(
          `⚠️ ALERTA DE SERVICIO REPETIDO EN LA MISMA FECHA (${nuevo.fecha}):\n\n` +
            `Ya existe(n) registro(s) muy similar(es) en ese mismo día:\n${detalleExistentes}\n\n` +
            `¿Confirmas que se realizó el mismo servicio a otro equipo distinto (Aceptar) o deseas cancelar por si fue un error (Cancelar)?`
        );
        if (!confirmar) return;
      }

      servicios.push(nuevo);
      guardarLocal();
      poblarSelectores();
      aplicarFiltros();
      e.target.reset();
      cerrarModal();

      if (driveUrl) {
        enviarFilaADrive(nuevo);
      }
    });
  }

  // EVENTOS DEL MODAL DE CARGA RÁPIDA Y CLASIFICADOR CON DETECTOR DE REPETIDOS
  const modalLote = document.getElementById("modal-lote");
  const btnCargaLote = document.getElementById("btn-carga-lote");
  const btnCerrarLote = document.getElementById("btn-cerrar-lote");
  const btnCancelarLote = document.getElementById("btn-cancelar-lote");
  const btnAnalizarLote = document.getElementById("btn-analizar-lote");
  const btnGuardarLote = document.getElementById("btn-guardar-lote");

  const cerrarModalLote = () => {
    if (modalLote) {
      modalLote.classList.add("hidden");
      modalLote.classList.remove("flex");
    }
  };

  if (btnCargaLote && modalLote) {
    btnCargaLote.addEventListener("click", () => {
      document.getElementById("inp-lunes-lote").value = obtenerLunesActualYYYYMMDD();
      document.getElementById("inp-texto-lote").value = "";
      document.getElementById("contenedor-preview-lote").classList.add("hidden");
      document.getElementById("contenedor-resumen-dias").classList.add("hidden");
      const cajaAlertaDup = document.getElementById("alerta-duplicados-lote");
      if (cajaAlertaDup) cajaAlertaDup.className = "hidden";
      document.getElementById("resumen-lote").textContent = "";
      btnGuardarLote.disabled = true;
      loteTemporal = [];
      modalLote.classList.remove("hidden");
      modalLote.classList.add("flex");
      inicializarIconos();
    });
  }
  if (btnCerrarLote) btnCerrarLote.addEventListener("click", cerrarModalLote);
  if (btnCancelarLote) btnCancelarLote.addEventListener("click", cerrarModalLote);

  if (btnAnalizarLote) {
    btnAnalizarLote.addEventListener("click", () => {
      const texto = document.getElementById("inp-texto-lote").value.trim();
      const lunesVal = document.getElementById("inp-lunes-lote").value || obtenerLunesActualYYYYMMDD();
      if (!texto) return alert("Pega primero la lista de servicios.");

      loteTemporal = procesarTextoLote(texto, lunesVal);
      if (loteTemporal.length === 0) {
        alert("No se detectaron líneas de servicio válidas.");
        return;
      }

      renderizarPreviewLote();
    });
  }

  if (btnGuardarLote) {
    btnGuardarLote.addEventListener("click", async () => {
      if (!loteTemporal.length) return;

      const repetidosActivos = loteTemporal.filter((it) => it.alertasDuplicado && it.alertasDuplicado.length > 0);
      if (repetidosActivos.length > 0) {
        const listaAlerta = repetidosActivos
          .map((r) => `• ${r.fecha} (${r.diaSemana}): ${r.marca} ${r.modelo} - ${r.trabajo}`)
          .join("\n");

        const ok = confirm(
          `⚠️ ATENCIÓN: Estás por guardar ${repetidosActivos.length} servicio(s) repetido(s) en la misma fecha:\n\n` +
            `${listaAlerta}\n\n` +
            `¿Confirmas que se trata de equipos distintos atendidos el mismo día (Aceptar) o prefieres volver para quitar alguno (Cancelar)?`
        );
        if (!ok) return;
      }

      const nuevosConID = loteTemporal.map((item, idx) => {
        const copia = { ...item };
        delete copia.diaSemana;
        delete copia.alertasDuplicado;
        return {
          id: generarNuevoID(idx + 1),
          ...copia
        };
      });

      servicios.push(...nuevosConID);
      guardarLocal();
      poblarSelectores();
      aplicarFiltros();
      cerrarModalLote();

      if (driveUrl) {
        for (const reg of nuevosConID) {
          await enviarFilaADrive(reg);
        }
      }
      alert(`¡Se guardaron ${nuevosConID.length} servicios correctamente!`);
    });
  }

  const btnExportar = document.getElementById("btn-exportar");
  if (btnExportar) {
    btnExportar.addEventListener("click", () => {
      const encabezados = ["ID", "Fecha", "Día", "Categoría", "Marca", "Modelo", "Tipo de Intervención", "Trabajo Realizado", "Repuestos", "Precio (Gs)", "Estado", "Cliente / Notas"];
      const filas = servicios.map((s) => [
        s.id,
        s.fecha,
        obtenerDiaSemana(s.fecha),
        s.categoria,
        s.marca,
        s.modelo,
        `"${s.intervencion}"`,
        `"${s.trabajo.replace(/"/g, '""')}"`,
        s.repuestos,
        s.precio || "",
        s.estado,
        `"${(s.notas || "").replace(/"/g, '""')}"`
      ]);
      const csvContent = "\uFEFF" + [encabezados.join(";"), ...filas.map((f) => f.join(";"))].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "BD_Servicios_Tecnicos_DN.csv";
      a.click();
    });
  }

  const modalDrive = document.getElementById("modal-drive");
  const btnConfigDrive = document.getElementById("btn-config-drive");
  if (btnConfigDrive && modalDrive) {
    btnConfigDrive.addEventListener("click", () => {
      document.getElementById("inp-drive-url").value = driveUrl;
      modalDrive.classList.remove("hidden");
      modalDrive.classList.add("flex");
    });
  }
  const btnCerrarDrive = document.getElementById("btn-cerrar-drive");
  if (btnCerrarDrive && modalDrive) {
    btnCerrarDrive.addEventListener("click", () => {
      modalDrive.classList.add("hidden");
      modalDrive.classList.remove("flex");
    });
  }
  const btnGuardarDrive = document.getElementById("btn-guardar-drive");
  if (btnGuardarDrive) {
    btnGuardarDrive.addEventListener("click", () => {
      driveUrl = document.getElementById("inp-drive-url").value.trim();
      localStorage.setItem(DRIVE_URL_KEY, driveUrl);
      actualizarBadgeDrive(Boolean(driveUrl));
      modalDrive.classList.add("hidden");
      modalDrive.classList.remove("flex");
      if (driveUrl) sincronizarDesdeDrive();
    });
  }
  const btnSubirDrive = document.getElementById("btn-subir-drive");
  if (btnSubirDrive) {
    btnSubirDrive.addEventListener("click", subirBaseCompletaADrive);
  }
}

function actualizarBadgeDrive(conectado) {
  const badge = document.getElementById("cloud-badge");
  if (!badge) return;
  if (conectado) {
    badge.textContent = "Google Drive Conectado";
    badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-600 font-medium";
  } else {
    badge.textContent = "Base Local Activa";
  }
}

async function enviarFilaADrive(registro) {
  try {
    await fetch(driveUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "add", row: registro })
    });
  } catch (err) {
    console.error("Error enviando a Google Drive:", err);
  }
}

async function subirBaseCompletaADrive() {
  const urlInput = document.getElementById("inp-drive-url").value.trim();
  if (!urlInput) return alert("Pega la URL de tu Google Apps Script.");
  driveUrl = urlInput;
  localStorage.setItem(DRIVE_URL_KEY, driveUrl);

  try {
    let registrosJunior = [];
    try {
      const res = await fetch(driveUrl);
      const data = await res.json();
      if (Array.isArray(data)) {
        registrosJunior = data.filter((r) => String(r.id || "").toUpperCase().startsWith("REP-"));
      }
    } catch (err) {
      console.warn("No se pudieron leer registros previos, enviando lote.", err);
    }

    const baseUnificada = [...servicios, ...registrosJunior];

    await fetch(driveUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "bulk", rows: baseUnificada })
    });
    actualizarBadgeDrive(true);
    alert(`¡Sincronización completa! Se guardaron tus ${servicios.length} servicios junto con los ${registrosJunior.length} servicios de Junior en tu Google Drive.`);
  } catch (e) {
    alert("Error al subir a Google Drive.");
  }
}

async function sincronizarDesdeDrive() {
  try {
    const res = await fetch(driveUrl);
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      const soloAngel = data.filter((r) => String(r.id || "").toUpperCase().startsWith("SER-"));
      servicios = normalizarRegistros(fusionarConMaestros(soloAngel));
      guardarLocal();
      poblarSelectores();
      aplicarFiltros();
    }
  } catch (e) {
    console.log("Usando base completa local de Ángel.");
  }
}