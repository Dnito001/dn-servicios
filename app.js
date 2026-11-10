const PIN_ACCESO = "000";
const AUTH_SESSION_KEY = "dn_servicios_autenticado";
const STORAGE_KEY = "dn_servicios_db_v4";
const DRIVE_URL_KEY = "dn_servicios_drive_url";

const DEFAULT_DRIVE_URL = "https://script.google.com/macros/s/AKfycbxezjx2ilDKOrdGQXrE3bHUO3cnMnMFDoDl3FJ7SX1xGTU-HmLXqWHrNB3h2IzcIrPF-g/exec";

// 58 REGISTROS HISTÓRICOS + LOS 3 NUEVOS QUE CARGASTE (TOTAL: 61)
const DATOS_MAESTROS = [
  { id: "SER-001", fecha: "10/03/2026", categoria: "Impresora", marca: "HP", modelo: "Impresora HP + PC", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Mantenimiento de impresora HP y revisión de PC", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-002", fecha: "10/03/2026", categoria: "PC Escritorio / Servidor", marca: "Genérico", modelo: "PC Diseño", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación de CorelDRAW 2025, Photoshop, AutoCAD y Canva", repuestos: "Ninguno", estado: "Entregado", notas: "Suite gráfica completa" },
  { id: "SER-003", fecha: "10/03/2026", categoria: "Electrónica / Línea Blanca / Periférico", marca: "Silhouette", modelo: "Cameo + Sublimadoras", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Mantenimiento preventivo de plotter Cameo y máquinas de sublimación", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-004", fecha: "10/03/2026", categoria: "Audio / Consola / Portátil", marca: "JBL", modelo: "JBL GO", intervencion: "Microelectrónica / Reparación de Placa", trabajo: "Revisión y servicio técnico de parlante portátil JBL GO", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-005", fecha: "11/03/2026", categoria: "Impresora", marca: "Brother", modelo: "Serie HL", intervencion: "Reemplazo de Repuesto / Hardware + Mantenimiento Físico / Limpieza", trabajo: "Limpieza interna e instalación de unidad de imagen (Drum) y tóner", repuestos: "Drum y Tóner", estado: "Entregado", notas: "" },
  { id: "SER-006", fecha: "12/03/2026", categoria: "Smart TV / Monitor", marca: "Amazon", modelo: "Fire TV Stick (x3 unidades)", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación y configuración de aplicación Flujo en 3 TV Stick", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-007", fecha: "12/03/2026", categoria: "Notebook / Laptop", marca: "Genérico", modelo: "PC / Laptop", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación y activación de AutoCAD", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-008", fecha: "13/03/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3150", intervencion: "Mantenimiento Físico / Limpieza + Reset de Software / Contadores", trabajo: "Mantenimiento completo y reset de contador de almohadillas", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-009", fecha: "13/03/2026", categoria: "Impresora", marca: "Brother", modelo: "Impresora Brother", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Reparación de mecanismo de arrastre (no estiraba hojas)", repuestos: "Ninguno", estado: "Entregado", notas: "Francisco (40.000 Gs)" },
  { id: "SER-010", fecha: "14/03/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3210", intervencion: "Instalación / Conectividad / Redes", trabajo: "Inicialización de impresora y descarga/instalación de drivers", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-011", fecha: "29/09/2026", categoria: "Impresora", marca: "Genérico", modelo: "Impresora de Oficina", intervencion: "Instalación / Conectividad / Redes", trabajo: "Entrega, instalación física de impresora y servicio técnico", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-012", fecha: "30/09/2026", categoria: "Smart TV / Monitor", marca: "Genérico", modelo: "Smart TV / Box", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación y configuración de aplicación Xuper TV", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-013", fecha: "01/10/2026", categoria: "Smartphone", marca: "Apple", modelo: "Samsung a iPhone 16 Pro Max", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Traspaso completo de fotografías de Samsung a iPhone", repuestos: "Ninguno", estado: "Entregado", notas: "Anotado como iPhone 18" },
  { id: "SER-014", fecha: "06/10/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3110", intervencion: "Mantenimiento Físico / Limpieza + Reemplazo de Repuesto / Hardware + Reset de Software / Contadores", trabajo: "Reset de software, cambio de almohadillas y mantenimiento general", repuestos: "Almohadillas absorbentes", estado: "Entregado", notas: "" },
  { id: "SER-015", fecha: "07/10/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3110", intervencion: "Reemplazo de Repuesto / Hardware + Mantenimiento Físico / Limpieza", trabajo: "Mantenimiento completo y cambio de encoder circular", repuestos: "Encoder circular", estado: "Entregado", notas: "" },
  { id: "SER-016", fecha: "07/10/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Mantenimiento Físico / Limpieza + Software / Sistema Operativo / Backup", trabajo: "Mantenimiento completo preventivo de hardware y optimización de software", repuestos: "Pasta térmica", estado: "Entregado", notas: "" },
  { id: "SER-017", fecha: "07/10/2026", categoria: "Almacenamiento", marca: "Genérico", modelo: "Disco Óptico CD", intervencion: "Software / Sistema Operativo / Backup + Impresión / Corte Plotter / Trabajo Práctico", trabajo: "Extracción e impresión de estudios de radiografía desde CD", repuestos: "Papel / Impresión", estado: "Entregado", notas: "Cliente Sr." },
  { id: "SER-018", fecha: "07/10/2026", categoria: "Notebook / Laptop", marca: "Asus", modelo: "Laptop Asus", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Ajuste estructural de pantalla y reconexión de flex de cámara web", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-019", fecha: "08/10/2026", categoria: "Impresora", marca: "Genérico", modelo: "Impresora Térmica", intervencion: "Microelectrónica / Reparación de Placa", trabajo: "Revisión técnica y diagnóstico de impresora térmica", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-020", fecha: "08/10/2026", categoria: "Smart TV / Monitor", marca: "Genérico", modelo: "TV Box", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación y configuración de plataforma Flujo en TV Box", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-021", fecha: "08/10/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP Negro", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho de tinta color negro", repuestos: "Tinta negra", estado: "Entregado", notas: "" },
  { id: "SER-022", fecha: "08/10/2026", categoria: "Impresora", marca: "Genérico", modelo: "Sistema Continuo", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de tanques de tinta de impresora", repuestos: "Tinta", estado: "Entregado", notas: "Cliente: Troche" },
  { id: "SER-023", fecha: "09/10/2026", categoria: "Impresora", marca: "Genérico", modelo: "Impresora Sublimación", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Limpieza de cabezal desde software (sistema con tinta de sublimación)", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-024", fecha: "09/10/2026", categoria: "Almacenamiento", marca: "Genérico", modelo: "Disco Duro", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Extracción y recuperación de archivos de disco", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-025", fecha: "10/10/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3210", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Mantenimiento completo con purgado de dampers y limpieza de cabezal", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-026", fecha: "13/10/2026", categoria: "Notebook / Laptop", marca: "Acer", modelo: "Laptop Acer", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Reparación y reconstrucción de bisagra de pantalla", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-027", fecha: "14/10/2026", categoria: "Notebook / Laptop", marca: "Genérico", modelo: "Laptop #1", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación de programas de ofimática, drivers y configuración general", repuestos: "Ninguno", estado: "Entregado", notas: "Pack 2 laptops (50.000 Gs)" },
  { id: "SER-028", fecha: "14/10/2026", categoria: "Notebook / Laptop", marca: "Genérico", modelo: "Laptop #2", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Instalación de programas de ofimática, drivers y configuración general", repuestos: "Ninguno", estado: "Entregado", notas: "Pack 2 laptops" },
  { id: "SER-029", fecha: "14/10/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP Negro", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho de tinta negra", repuestos: "Tinta negra", estado: "Entregado", notas: "10.000 Gs" },
  { id: "SER-030", fecha: "15/10/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3250", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Mantenimiento completo con limpieza de cabezal por fallo de color negro", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-031", fecha: "16/10/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho de tinta", repuestos: "Tinta", estado: "Entregado", notas: "" },
  { id: "SER-032", fecha: "16/10/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Mantenimiento Físico / Limpieza + Software / Sistema Operativo / Backup", trabajo: "Mantenimiento completo y activación de licencia de Office", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-033", fecha: "16/10/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Reemplazo de Repuesto / Hardware + Software / Sistema Operativo / Backup", trabajo: "Instalación de unidad SSD, sistema operativo y programas de ofimática", repuestos: "Disco SSD", estado: "Entregado", notas: "" },
  { id: "SER-034", fecha: "17/10/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Reemplazo de Repuesto / Hardware + Software / Sistema Operativo / Backup", trabajo: "Ampliación de memoria RAM + SSD, sistema operativo y ofimática", repuestos: "Memoria RAM + SSD", estado: "Entregado", notas: "" },
  { id: "SER-035", fecha: "18/10/2026", categoria: "PC Escritorio / Servidor", marca: "Genérico", modelo: "PC de Oficina", intervencion: "Instalación / Conectividad / Redes", trabajo: "Servicio técnico y soporte en oficina de contaduría", repuestos: "Ninguno", estado: "Entregado", notas: "Cliente: Contaduría" },
  { id: "SER-036", fecha: "24/10/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L380", intervencion: "Mantenimiento Físico / Limpieza + Reemplazo de Repuesto / Hardware", trabajo: "Mantenimiento completo con cambio de almohadillas", repuestos: "Almohadillas", estado: "Entregado", notas: "" },
  { id: "SER-037", fecha: "27/10/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho HP", repuestos: "Tinta", estado: "Entregado", notas: "" },
  { id: "SER-038", fecha: "28/10/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Reemplazo de Repuesto / Hardware + Software / Sistema Operativo / Backup", trabajo: "Instalación de disco SSD con sistema operativo nuevo", repuestos: "Disco SSD", estado: "Entregado", notas: "" },
  { id: "SER-039", fecha: "28/10/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP Negro", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho negro HP", repuestos: "Tinta negra", estado: "Entregado", notas: "" },
  { id: "SER-040", fecha: "29/10/2026", categoria: "Electrónica / Línea Blanca / Periférico", marca: "Genérico", modelo: "Jarra Térmica", intervencion: "Microelectrónica / Reparación de Placa", trabajo: "Revisión y reparación eléctrica de jarra térmica", repuestos: "Ninguno", estado: "Entregado", notas: "Cliente: Fígaro" },
  { id: "SER-041", fecha: "29/10/2026", categoria: "Almacenamiento", marca: "Genérico", modelo: "Disco Duro HDD", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Revisión de estado y diagnóstico de disco HDD", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-042", fecha: "29/10/2026", categoria: "PC Escritorio / Servidor", marca: "Genérico", modelo: "PC Gamer / Escritorio", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Reensamblaje y corrección de cableado de PC mal armada", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-043", fecha: "29/10/2026", categoria: "Microelectrónica / Componente", marca: "Genérico", modelo: "Placa Madre Socket CPU", intervencion: "Microelectrónica / Reparación de Placa", trabajo: "Diagnóstico de placa que no encendía y enderezado de pines doblados en socket", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-044", fecha: "30/10/2026", categoria: "Audio / Consola / Portátil", marca: "Amazfit", modelo: "Smartwatch Amazfit", intervencion: "Instalación / Conectividad / Redes", trabajo: "Vinculación y configuración de reloj inteligente con smartphone", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-045", fecha: "30/10/2026", categoria: "Impresiones / Corte Plotter / Trabajos Prácticos", marca: "Genérico", modelo: "Servicio de Impresión", intervencion: "Impresión / Corte Plotter / Trabajo Práctico", trabajo: "Impresión de lote de 80 imágenes", repuestos: "Papel y Tinta", estado: "Entregado", notas: "" },
  { id: "SER-046", fecha: "31/10/2026", categoria: "Electrónica / Línea Blanca / Periférico", marca: "Genérico", modelo: "Rastreador GPS", intervencion: "Instalación / Conectividad / Redes", trabajo: "Configuración y puesta en marcha de dispositivo GPS", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-047", fecha: "02/11/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3250", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Limpieza de cabezal por falta de inyección en color amarillo", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-048", fecha: "02/11/2026", categoria: "Smartphone", marca: "Samsung", modelo: "Samsung a Samsung", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Transferencia completa de datos entre teléfonos Samsung", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-049", fecha: "02/11/2026", categoria: "Smartphone", marca: "Xiaomi", modelo: "Redmi a Redmi", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Transferencia completa de datos entre teléfonos Redmi", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-050", fecha: "02/11/2026", categoria: "Smartphone", marca: "Genérico", modelo: "Smartphone Android", intervencion: "Desbloqueo / FRP / Firmware", trabajo: "Configuración inicial de teléfono y recuperación de cuentas", repuestos: "Ninguno", estado: "Entregado", notas: "Cliente Sr." },
  { id: "SER-051", fecha: "02/11/2026", categoria: "Smartphone", marca: "Honor", modelo: "Honor a Honor", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Transferencia completa de todos los datos de Honor a Honor", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-052", fecha: "02/11/2026", categoria: "PC Escritorio / Servidor", marca: "Dell", modelo: "PC Dell", intervencion: "Reemplazo de Repuesto / Hardware + Software / Sistema Operativo / Backup", trabajo: "Cambio de disco, instalación de sistema operativo y paquete Office", repuestos: "Disco SSD", estado: "Entregado", notas: "" },
  { id: "SER-053", fecha: "03/11/2026", categoria: "Audio / Consola / Portátil", marca: "JBL", modelo: "Parlante JBL", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Actualización de firmware de parlante JBL", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-054", fecha: "04/11/2026", categoria: "Almacenamiento", marca: "Genérico", modelo: "Disco Duro HDD", intervencion: "Software / Sistema Operativo / Backup", trabajo: "Extracción y respaldo de datos de disco duro HDD", repuestos: "Ninguno", estado: "Entregado", notas: "" },
  { id: "SER-055", fecha: "05/11/2026", categoria: "Notebook / Laptop", marca: "Acer", modelo: "Laptop Acer", intervencion: "Microelectrónica / Reparación de Placa", trabajo: "Diagnóstico y reparación de laptop Acer que no encendía", repuestos: "Ninguno", estado: "Entregado", notas: "Cliente: Adalberto" },
  { id: "SER-056", fecha: "06/11/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L380", intervencion: "Mantenimiento Físico / Limpieza + Reemplazo de Repuesto / Hardware + Reset de Software / Contadores", trabajo: "Limpieza completa, reset de contador y cambio de almohadillas", repuestos: "Almohadillas", estado: "Entregado", notas: "" },
  { id: "SER-057", fecha: "06/11/2026", categoria: "Impresora", marca: "Epson", modelo: "EcoTank L3110", intervencion: "Reemplazo de Repuesto / Hardware + Mantenimiento Físico / Limpieza", trabajo: "Cambio de cabezal de impresión, cable flex y limpieza general", repuestos: "Cabezal y Flex", estado: "Entregado", notas: "Cliente: Adalberto" },
  { id: "SER-058", fecha: "07/11/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "Laptop HP", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Cambio de batería interna de laptop HP", repuestos: "Batería HP", estado: "Entregado", notas: "" },
  { id: "SER-059", fecha: "09/11/2026", categoria: "Notebook / Laptop", marca: "HP", modelo: "HP 250 G5", intervencion: "Reemplazo de Repuesto / Hardware", trabajo: "Cambio de Teclado", repuestos: "Teclado en Ingles para HP 250 G5", estado: "Entregado", notas: "Laptop del Local" },
  { id: "SER-060", fecha: "10/11/2026", categoria: "Impresora", marca: "HP", modelo: "Cartucho HP 664", intervencion: "Mantenimiento Físico / Limpieza", trabajo: "Recarga de cartucho de tinta negra", repuestos: "Tinta color Negro", estado: "Entregado", notas: "15.000 Gs" },
  { id: "SER-061", fecha: "10/11/2026", categoria: "Impresiones / Corte Plotter / Trabajos Prácticos", marca: "Genérico", modelo: "Documento Word", intervencion: "Impresión / Corte Plotter / Trabajo Práctico", trabajo: "Digitalización y escaneo de documentos a formato PDF / imagen", repuestos: "Ninguno", estado: "Entregado", notas: "-" }
];

let servicios = [];
let driveUrl = localStorage.getItem(DRIVE_URL_KEY) || DEFAULT_DRIVE_URL;

function normalizarFecha(f) {
  if (!f) return "";
  const str = String(f).trim();
  if (str.includes("T")) {
    const soloFecha = str.split("T")[0];
    const partes = soloFecha.split("-");
    if (partes.length === 3) return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
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
    let inter = item.intervencion || "Mantenimiento Físico / Limpieza";
    inter = inter.replace(/Mantenimiento Físico \/ Limpieza \/ Reflux/gi, "Mantenimiento Físico / Limpieza");
    inter = inter.replace(/\/ Reflux/gi, "").trim();

    let notasLimpias = (item.notas || "")
      .replace(/\(Téc:\s*ANGEL VILLALBA\)/gi, "")
      .replace(/Téc:\s*ANGEL VILLALBA/gi, "")
      .trim();

    return {
      id: item.id,
      fecha: normalizarFecha(item.fecha),
      categoria: item.categoria,
      marca: item.marca,
      modelo: item.modelo,
      intervencion: inter,
      trabajo: item.trabajo,
      repuestos: item.repuestos || "Ninguno",
      estado: item.estado || "Entregado",
      notas: notasLimpias
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
  const guardados = localStorage.getItem(STORAGE_KEY);
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

// Fusiona los registros sin perder nunca la lista completa
function fusionarConMaestros(listaEntrante) {
  const mapa = new Map();
  DATOS_MAESTROS.forEach((m) => mapa.set(m.id, m));
  listaEntrante.forEach((item) => mapa.set(item.id, item));
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
  selFecha.innerHTML = '<option value="">Todas las fechas</option>' + fechas.map((f) => `<option value="${f}">${f}</option>`).join("");

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
    const coincideTexto =
      !texto ||
      item.id.toLowerCase().includes(texto) ||
      item.modelo.toLowerCase().includes(texto) ||
      item.trabajo.toLowerCase().includes(texto) ||
      (item.notas || "").toLowerCase().includes(texto) ||
      item.marca.toLowerCase().includes(texto);

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
    if (tbody) tbody.innerHTML = `<tr><td colspan="9">${vacioHTML}</td></tr>`;
    if (listaMovil) listaMovil.innerHTML = vacioHTML;
    return;
  }

  const invertidos = [...lista].reverse();

  if (listaMovil) {
    listaMovil.innerHTML = invertidos
      .map(
        (item) => `
        <div class="p-4 space-y-2 hover:bg-slate-50">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="font-bold text-teal-700 text-sm">${item.id}</span>
              <span class="text-xs text-slate-500">· ${item.fecha}</span>
            </div>
            <button onclick="eliminarServicio('${item.id}')" class="text-slate-400 hover:text-rose-600 p-1">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
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
      `
      )
      .join("");
  }

  if (tbody) {
    tbody.innerHTML = invertidos
      .map(
        (item) => `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-3 px-4 font-bold text-teal-700 whitespace-nowrap">${item.id}</td>
          <td class="py-3 px-4 text-slate-600 whitespace-nowrap">${item.fecha}</td>
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
          <td class="py-3 px-4 text-slate-800 max-w-xs">${item.trabajo}</td>
          <td class="py-3 px-4 text-xs text-slate-600">${item.repuestos || "Ninguno"}</td>
          <td class="py-3 px-4 text-xs font-semibold text-teal-800">${item.notas || "-"}</td>
          <td class="py-3 px-4 text-center">
            <button onclick="eliminarServicio('${item.id}')" class="text-slate-400 hover:text-rose-600 transition p-1" title="Eliminar registro">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </td>
        </tr>
      `
      )
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

function formatearFechaInput(yyyy_mm_dd) {
  const [y, m, d] = yyyy_mm_dd.split("-");
  return `${d}/${m}/${y}`;
}

function generarNuevoID() {
  const maxNum = servicios.reduce((acc, s) => {
    const n = parseInt(String(s.id).replace(/\D/g, "")) || 0;
    return n > acc ? n : acc;
  }, 0);
  return `SER-${String(maxNum + 1).padStart(3, "0")}`;
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

      const nuevo = {
        id: generarNuevoID(),
        fecha: formatearFechaInput(document.getElementById("inp-fecha").value),
        categoria: document.getElementById("inp-categoria").value,
        marca: document.getElementById("inp-marca").value.trim(),
        modelo: document.getElementById("inp-modelo").value.trim(),
        intervencion: checks.join(" + "),
        trabajo: document.getElementById("inp-trabajo").value.trim(),
        repuestos: document.getElementById("inp-repuestos").value.trim() || "Ninguno",
        estado: "Entregado",
        notas: document.getElementById("inp-notas").value.trim()
      };

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

  const btnExportar = document.getElementById("btn-exportar");
  if (btnExportar) {
    btnExportar.addEventListener("click", () => {
      const encabezados = ["ID", "Fecha", "Categoría", "Marca", "Modelo", "Tipo de Intervención", "Trabajo Realizado", "Repuestos", "Estado", "Cliente / Notas"];
      const filas = servicios.map((s) => [
        s.id,
        s.fecha,
        s.categoria,
        s.marca,
        s.modelo,
        `"${s.intervencion}"`,
        `"${s.trabajo.replace(/"/g, '""')}"`,
        s.repuestos,
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
    await fetch(driveUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "bulk", rows: servicios })
    });
    actualizarBadgeDrive(true);
    alert("¡Los 61 servicios fueron enviados a tu Google Drive!");
  } catch (e) {
    alert("Error al subir a Google Drive.");
  }
}

async function sincronizarDesdeDrive() {
  try {
    const res = await fetch(driveUrl);
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      servicios = normalizarRegistros(fusionarConMaestros(data));
      guardarLocal();
      poblarSelectores();
      aplicarFiltros();
    }
  } catch (e) {
    console.log("Usando base completa local.");
  }
}