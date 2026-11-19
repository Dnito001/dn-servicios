// ============================================================================
// DN SERVICIOS Y TECNOLOGÍAS - SISTEMA DE JUNIOR ALMIRÓN (PIN: 111)
// BASE SUPABASE (SQL) + EXTRACCIÓN COMPLETA DE PRECIOS (GS) Y CLIENTES
// ============================================================================

const PIN_ACCESO = "111";
const TECNICO_NOMBRE = "JUNIOR ALMIRON";
const AUTH_SESSION_KEY = "dn_junior_autenticado_supa_v1";
const CACHE_LOCAL_KEY = "dn_junior_cache_supa_v1";

// CREDENCIALES SUPABASE (clave publishable -> solo header apikey)
const SUPABASE_URL = "https://fnnfcjmpobzbcjzwkuow.supabase.co";
const SUPABASE_KEY = "sb_publishable_Yy8MvXnSvj1SqivYCs630w_ahx4zwKF";

const HEADERS_GET = {
  "apikey": SUPABASE_KEY
};

const HEADERS_POST = {
  "apikey": SUPABASE_KEY,
  "Content-Type": "application/json",
  "Prefer": "return=representation,resolution=merge-duplicates"
};

const SVG_EDIT = `<svg style="pointer-events:none;" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>`;
const SVG_TRASH = `<svg style="pointer-events:none;" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`;

const RAW_DATOS_JUNIOR = [
  ["REP-001", "20/07/2026", "Smartphone", "Samsung", "Galaxy A06", "Cambio de pantalla", "En DN Tecnología"],
  ["REP-002", "20/07/2026", "Smartphone", "Samsung", "Galaxy A34", "Cambio de pantalla", "En DN Tecnología"],
  ["REP-003", "20/07/2026", "Smartphone", "Xiaomi", "Redmi Note 12", "Cambio de pantalla", "En DN Tecnología"],
  ["REP-004", "20/07/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", "En DN Tecnología"],
  ["REP-005", "21/07/2026", "Smartphone", "Samsung", "Galaxy A12", "Desbloqueo", ""],
  ["REP-006", "21/07/2026", "Smartphone", "Xiaomi", "Redmi Note 12", "Desbloqueo", ""],
  ["REP-007", "21/07/2026", "Smartphone", "Samsung", "Galaxy A02", "Cambio de pantalla", ""],
  ["REP-008", "22/07/2026", "Smartphone", "Samsung", "Galaxy A11", "Desbloqueo FRP", ""],
  ["REP-009", "22/07/2026", "Smartphone", "Apple", "iPhone 11 a iPhone 16", "Traspaso de datos", ""],
  ["REP-010", "22/07/2026", "Smartphone", "Motorola", "Moto E7i Power", "Cambio de pantalla", ""],
  ["REP-011", "22/07/2026", "Smartphone", "Samsung", "Galaxy J2 Pro", "Desbloqueo", ""],
  ["REP-012", "22/07/2026", "Smartphone", "Xiaomi", "Redmi Note 13", "Reparación de sensor", ""],
  ["REP-013", "22/07/2026", "Smartphone", "Samsung", "Galaxy A15", "Colocación de estuche y antiquiebre", "Accesorio"],
  ["REP-014", "25/07/2026", "Smartphone", "Xiaomi", "Redmi Note 12 Pro", "Cambio de pantalla", ""],
  ["REP-015", "25/07/2026", "Smartphone", "Samsung", "Galaxy A20s", "Desbloqueo", ""],
  ["REP-016", "25/07/2026", "Smartphone", "Samsung", "Galaxy A15", "Reparación de housing", ""],
  ["REP-017", "25/07/2026", "Smartphone", "Ulefone", "Armor 22", "Desbloqueo", ""],
  ["REP-018", "25/07/2026", "Laptop", "HP", "Laptop 15 pulgadas", "Reparación de bisagras", ""],
  ["REP-019", "27/07/2026", "Smartphone", "Samsung", "Galaxy A12", "Reparación de botón y speaker", "Cliente de Derlis"],
  ["REP-020", "27/07/2026", "Almacenamiento", "Genérico", "Disco Duro HDD", "Recuperación de archivos", "Cliente de Junior"],
  ["REP-021", "28/07/2026", "Laptop", "HP", "Laptop HP", "Cambio de HDD a SSD, sistema y Office", ""],
  ["REP-022", "28/07/2026", "Smartphone", "Samsung", "Galaxy A53", "Cambio de pantalla", ""],
  ["REP-023", "29/07/2026", "Smartphone", "Apple", "iPhone 13 Pro", "Reparación de pantalla verde", "Ana"],
  ["REP-024", "29/07/2026", "PC / Software", "Genérico", "Sistema PC", "Soporte técnico de firma digital", ""],
  ["REP-025", "29/07/2026", "Infraestructura", "Genérico", "Instalación eléctrica", "Solución de parte eléctrica", ""],
  ["REP-026", "29/07/2026", "Tablet", "Samsung", "Galaxy Tab S6 Lite", "Cambio de pantalla", ""],
  ["REP-027", "30/07/2026", "Smartphone", "Samsung", "Galaxy M13", "Cambio de pantalla", ""],
  ["REP-028", "30/07/2026", "Smartphone", "Motorola", "Moto E13i", "Cambio de pantalla", ""],
  ["REP-029", "31/07/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", ""],
  ["REP-030", "31/07/2026", "Smartphone", "Apple", "iPhone 8 Plus", "Cambio de housing y reparación de carga", ""],
  ["REP-031", "01/08/2026", "Smartphone", "Apple", "iPhone XR", "Re-pegado de pantalla", ""],
  ["REP-032", "01/08/2026", "Smartphone", "Apple", "iPhone 8 Plus", "Cambio de cámara, flex de carga y micrófono", ""],
  ["REP-033", "01/08/2026", "Smartphone", "Samsung", "Galaxy A02s", "Reparación de botón", ""],
  ["REP-034", "01/08/2026", "Smartphone", "Samsung", "Galaxy A52", "Cambio de pantalla", ""],
  ["REP-035", "01/08/2026", "Smartphone", "Samsung", "Galaxy A01", "Cambio de pantalla", ""],
  ["REP-036", "10/08/2026", "Impresora", "Epson", "Impresora Epson", "Cambio de cartucho y configuración", "20.000 Gs"],
  ["REP-037", "11/08/2026", "PC / Redes", "Genérico", "PC Escritorio", "Optimización de PC lento y reparación WiFi", "Consultoría"],
  ["REP-038", "11/08/2026", "Smartphone", "Xiaomi", "Redmi Note 8", "Solución a problemas de reinicio", ""],
  ["REP-039", "11/08/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", ""],
  ["REP-040", "11/08/2026", "Smartphone", "Samsung", "Galaxy A23", "Re-pegado de pantalla", ""],
  ["REP-041", "11/08/2026", "Smartphone", "Xiaomi", "Redmi Note 13", "Cambio de batería", ""],
  ["REP-042", "11/08/2026", "Electrónica", "Genérico", "Lector de antena", "Reparación de ficha coaxial", ""],
  ["REP-043", "12/08/2026", "Smartphone", "Apple", "iPhone XR", "Cambio de pantalla", "Anotado como 12/02"],
  ["REP-044", "12/08/2026", "Smartphone", "Xiaomi", "Redmi Note 12", "Cambio de pantalla", "Anotado como 12/02"],
  ["REP-045", "13/08/2026", "Smartphone", "Xiaomi", "Redmi 12C", "Cambio de pantalla, pin de carga y desbrickeo", ""],
  ["REP-046", "13/08/2026", "Smartphone", "Samsung", "Galaxy A15", "Recuperación de archivos", ""],
  ["REP-047", "13/08/2026", "Smartphone", "Xiaomi", "Redmi A2", "Cambio de pantalla", ""],
  ["REP-048", "14/08/2026", "Smartphone", "Xiaomi", "Redmi 13C", "Cambio de pantalla", "Ana"],
  ["REP-049", "14/08/2026", "Tablet", "C-Idea", "Tablet C-Idea", "Reparación de pin de carga", ""],
  ["REP-050", "14/08/2026", "Smartphone", "Samsung", "Galaxy A34", "Reparación de táctil", ""],
  ["REP-051", "15/08/2026", "Smartphone", "Apple", "iPhone 12", "Limpieza de cámara", "Con servicio delivery"],
  ["REP-052", "15/08/2026", "Smartphone", "Samsung", "Galaxy A24", "Cambio de pantalla, batería y botón", "Ana"],
  ["REP-053", "15/08/2026", "Smartphone", "Samsung", "Galaxy A02s", "Cambio de pantalla", ""],
  ["REP-054", "15/08/2026", "Smartphone", "Samsung", "Galaxy A03 Core", "Cambio de pantalla, placa y pin de carga", ""],
  ["REP-055", "17/08/2026", "Smartphone", "Samsung", "Galaxy A20s", "Cambio de pin de carga", ""],
  ["REP-056", "17/08/2026", "Smartphone", "Samsung", "Galaxy A15", "Cambio de pantalla, pin de carga y micrófono", "Derlis"],
  ["REP-057", "18/08/2026", "Smartphone", "Xiaomi", "Redmi a Redmi", "Traspaso de datos", ""],
  ["REP-058", "18/08/2026", "Smartphone", "Xiaomi", "Redmi A1", "Cambio de pin de carga", ""],
  ["REP-059", "19/08/2026", "PC / Software", "Genérico", "PC / Laptop", "Activación de paquete Office", ""],
  ["REP-060", "20/08/2026", "Smartphone", "Samsung", "Galaxy A01", "Cambio de pantalla", "Derlis"],
  ["REP-061", "20/08/2026", "Laptop", "HP", "Laptop 15 pulgadas", "Cambio de batería", ""],
  ["REP-062", "20/08/2026", "Smartphone", "Samsung", "Galaxy A50", "Cambio de pantalla", ""],
  ["REP-063", "20/08/2026", "Impresora", "Epson", "Serie L1200", "Cambio de rodillo de arrastre con fusor", ""],
  ["REP-064", "21/08/2026", "Tablet", "Samsung", "Galaxy Tab A8", "Reparación de flex de carga y housing", ""],
  ["REP-065", "21/08/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pin de carga y recuperación de datos", ""],
  ["REP-066", "21/08/2026", "Smartphone", "Xiaomi", "Redmi 14C", "Cambio de pantalla", ""],
  ["REP-067", "21/08/2026", "PC / Redes", "Genérico", "PC Escritorio", "Cambio de IP y reconfiguración LAN Ethernet", "Contaduría"],
  ["REP-068", "21/08/2026", "Smartphone", "Xiaomi", "Redmi A1", "Cambio de pantalla", ""],
  ["REP-069", "21/08/2026", "Smartphone", "Xiaomi", "Redmi A1", "Cambio de pin de carga", ""],
  ["REP-070", "21/08/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", "Derlis"],
  ["REP-071", "21/08/2026", "Smartphone", "Samsung", "Galaxy A15", "Cambio de pantalla", ""],
  ["REP-072", "21/08/2026", "Smartphone", "Oppo", "A3x", "Recuperación de software", ""],
  ["REP-073", "24/08/2026", "Smartphone", "Tecno", "Spark Go 2024", "Cambio de pantalla", ""],
  ["REP-074", "24/08/2026", "Smartphone", "Samsung", "Galaxy A05", "Cambio de pantalla", ""],
  ["REP-075", "24/08/2026", "Smartphone", "Xiaomi", "Redmi Note 8", "Cambio de tapa trasera", ""],
  ["REP-076", "24/08/2026", "Smartphone", "Xiaomi", "Redmi Note 12", "Cambio de pantalla y desbloqueo", ""],
  ["REP-077", "25/08/2026", "Smartphone", "Xiaomi", "Redmi 14C", "Limpieza por humedad y cambio de pantalla", ""],
  ["REP-078", "25/08/2026", "Laptop", "Asus", "VivoBook", "Solución a trackpad numérico", ""],
  ["REP-079", "26/08/2026", "Impresora", "HP", "Serie 2900", "Configuración de impresora en PC HP", ""],
  ["REP-080", "26/08/2026", "Smartphone", "Samsung", "Galaxy A04", "Cambio de batería", ""],
  ["REP-081", "26/08/2026", "Smartphone", "Samsung", "Galaxy A22", "Reparación de placa de carga, huella y pantalla", ""],
  ["REP-082", "26/08/2026", "Smartphone", "Xiaomi", "Redmi Note 12S", "Cambio de pantalla", ""],
  ["REP-083", "27/08/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Cambio de pantalla", ""],
  ["REP-084", "27/08/2026", "Audio / Parlante", "JBL", "Charge 4 Versión S", "Cambio de batería y reparación de pin de carga", ""],
  ["REP-085", "27/08/2026", "Smartphone", "Samsung", "Galaxy A04e", "Cambio de pantalla", ""],
  ["REP-086", "27/08/2026", "Smartphone", "Samsung", "Galaxy A12", "Reparación de botón power", ""],
  ["REP-087", "28/08/2026", "Smartphone", "Samsung", "Galaxy M13", "Re-pegado de pantalla", ""],
  ["REP-088", "28/08/2026", "Smartphone", "Xiaomi", "Redmi 10C", "Reparación de pin de carga y cambio de pantalla", ""],
  ["REP-089", "28/08/2026", "Impresora", "Epson", "TM-U220D", "Mantenimiento y reparación de engranajes", "Graciela"],
  ["REP-090", "28/08/2026", "Smartphone", "Xiaomi", "Redmi Note 14 Pro", "Cambio de cámara y base de visor", ""],
  ["REP-091", "29/08/2026", "Celular Básico", "Nokia", "Nokia 106", "Cambio de pin de carga", ""],
  ["REP-092", "29/08/2026", "Smartphone", "Samsung", "Galaxy A32", "Cambio de pantalla", "Ana"],
  ["REP-093", "29/08/2026", "Impresora", "Epson", "LX-350", "Mantenimiento de impresora matricial", ""],
  ["REP-094", "29/08/2026", "Smartphone", "Xiaomi", "Mi 8 Lite", "Cambio de pantalla", "Ana"],
  ["REP-095", "01/09/2026", "Audio / Radio", "Megastar", "Radio Megastar", "Cambio de batería", ""],
  ["REP-096", "01/09/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", ""],
  ["REP-097", "01/09/2026", "Smartphone", "Samsung", "Galaxy A01", "Reparación de línea de carga", ""],
  ["REP-098", "02/09/2026", "Seguridad / Redes", "Genérico", "Cámaras WiFi (2 unidades)", "Instalación WiFi, eléctrica y tomacorriente", "2 fichas hembra y 7m cable"],
  ["REP-099", "03/09/2026", "Smartphone", "Samsung", "Galaxy A02", "Reparación de botón power y desbloqueo", ""],
  ["REP-100", "03/09/2026", "Smartphone", "Motorola", "Moto G42", "Reparación de sensor de carga", "Ana"],
  ["REP-101", "03/09/2026", "Smartphone", "Samsung", "Galaxy J7 Neo", "Reparación de pin de carga", "Ana"],
  ["REP-102", "03/09/2026", "Smartphone", "Samsung", "Galaxy A33", "Cambio de pantalla", ""],
  ["REP-103", "03/09/2026", "Smartphone", "Samsung", "Galaxy A32", "Cambio de pantalla y desbloqueo", "Derlis"],
  ["REP-104", "03/09/2026", "Smartphone", "Xiaomi", "Redmi 9A", "Reparación de botón power", ""],
  ["REP-105", "03/09/2026", "Smartphone", "Apple", "Android a iPhone", "Traspaso de datos", ""],
  ["REP-106", "03/09/2026", "Smartphone", "Apple", "iPhone 12", "Limpieza de pin de carga", ""],
  ["REP-107", "03/09/2026", "Smartphone", "Apple", "iPhone XS Max", "Limpieza de parlante y pin de carga", ""],
  ["REP-108", "04/09/2026", "Smartphone", "Apple", "iPhone 14 Pro Max", "Cambio de pantalla con trasplante de IC", ""],
  ["REP-109", "04/09/2026", "Smartphone", "Samsung", "Galaxy J7 Neo", "Recuperación de pin de carga", ""],
  ["REP-110", "05/09/2026", "Smartphone", "Motorola", "Moto G32", "Cambio de pantalla", ""],
  ["REP-111", "05/09/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", ""],
  ["REP-112", "07/09/2026", "Smartphone", "Samsung", "Galaxy A24", "Cambio de pin de carga", ""],
  ["REP-113", "07/09/2026", "Smartphone", "Samsung", "Galaxy S21 FE", "Reparación FPC pantalla y cambio FPC antena", ""],
  ["REP-114", "07/09/2026", "Smartphone", "Xiaomi", "Redmi 9A", "Cambio de pantalla", ""],
  ["REP-115", "07/09/2026", "Smartphone", "Xiaomi", "Redmi Note 8", "Flasheo y desbloqueo", ""],
  ["REP-116", "07/09/2026", "Audio / Auricular", "Xiaomi", "Auricular Réplica Redmi", "Reparación de pin de carga", ""],
  ["REP-117", "08/09/2026", "Smartphone", "Apple", "iPhone XR", "Cambio de pantalla", ""],
  ["REP-118", "10/09/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Cambio de batería", ""],
  ["REP-119", "10/09/2026", "Smartphone", "Xiaomi", "Redmi 9", "Reparación de conector FPC", "Derlis"],
  ["REP-120", "14/09/2026", "Smartphone", "Samsung", "Galaxy A14", "Cambio de pantalla", ""],
  ["REP-121", "14/09/2026", "Smartphone", "Samsung", "Galaxy A21s", "Desbloqueo", ""],
  ["REP-122", "14/09/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", ""],
  ["REP-123", "14/09/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de flex power y volumen", ""],
  ["REP-124", "14/09/2026", "Smartphone", "Samsung", "Galaxy A20", "Cambio de pantalla", ""],
  ["REP-125", "14/09/2026", "Smartphone", "Samsung", "Galaxy A02s", "Cambio de pantalla", ""],
  ["REP-126", "15/09/2026", "Smartphone", "Xiaomi", "Redmi 9", "Cambio de tapa trasera", ""],
  ["REP-127", "15/09/2026", "Smartphone", "Apple", "iPhone 13 Pro", "Recuperación de fotos", ""],
  ["REP-128", "16/09/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-129", "16/09/2026", "Impresora", "Brother", "HL-1200", "Reparación de impresora", ""],
  ["REP-130", "18/09/2026", "Smartphone", "Xiaomi", "Redmi 14C", "Cambio de pantalla", ""],
  ["REP-131", "18/09/2026", "Smartphone", "Tecno", "Spark 2024", "Cambio de pantalla", ""],
  ["REP-132", "19/09/2026", "Smartphone", "Tecno", "Spark", "Reparación de pin de carga", "Ana"],
  ["REP-133", "19/09/2026", "Smartphone", "Apple", "iPhone 11", "Retiro de tapa trasera", ""],
  ["REP-134", "21/09/2026", "Smartphone", "Xiaomi", "Redmi A3", "Cambio de pantalla", ""],
  ["REP-135", "21/09/2026", "Smartphone", "Apple", "iPhone 15 Pro", "Cambio de pantalla", ""],
  ["REP-136", "21/09/2026", "Celular Básico", "Nokia", "Nokia 110", "Cambio de pin de carga", ""],
  ["REP-137", "21/09/2026", "Smartphone", "Xiaomi", "Poco M5", "Cambio de pantalla", ""],
  ["REP-138", "21/09/2026", "Smartphone", "Xiaomi", "Redmi Note 12", "Reparación de conector FPC", ""],
  ["REP-139", "21/09/2026", "Smartphone", "Xiaomi", "Redmi 9A", "Reparación de botón power", "Ana"],
  ["REP-140", "21/09/2026", "Infraestructura", "Genérico", "Instalación eléctrica", "Reparación de parte eléctrica", "Derlis"],
  ["REP-141", "22/09/2026", "Seguridad / Redes", "HiLook", "Cámara 360", "Adaptación de cable UTP con fuente", ""],
  ["REP-142", "23/09/2026", "Smartphone", "Xiaomi", "Redmi 9A", "Cambio de pantalla y flasheo", "Ana"],
  ["REP-143", "23/09/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Reparación de pin de carga", ""],
  ["REP-144", "23/09/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de botones y re-pegado de pantalla", ""],
  ["REP-145", "23/09/2026", "Smartphone", "Apple", "iPhone 15 Pro", "Cambio de pantalla con trasplante de IC", ""],
  ["REP-146", "23/09/2026", "Smartphone", "Samsung", "Galaxy A04", "Cambio de pantalla y flasheo", "Derlis"],
  ["REP-147", "23/09/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", ""],
  ["REP-148", "24/09/2026", "Smartphone", "Apple", "Galaxy A14 a iPhone 13 Pro", "Traspaso de datos", ""],
  ["REP-149", "24/09/2026", "Smartphone", "Xiaomi", "Redmi Note 8 Pro", "Cambio de pantalla", ""],
  ["REP-150", "24/09/2026", "Multimedia", "Genérico", "3 Dispositivos TV/Móvil", "Instalación de aplicación Flujo", ""],
  ["REP-151", "24/09/2026", "Smartphone", "Apple", "iPhone 12 Pro", "Cambio de pantalla", ""],
  ["REP-152", "25/09/2026", "Smartphone", "Xiaomi", "Redmi A5", "Desbloqueo FRP", ""],
  ["REP-153", "25/09/2026", "Smartphone", "Apple", "iPhone 15 Pro", "Cambio y programación de pantalla", ""],
  ["REP-154", "25/09/2026", "Smartphone", "Apple", "iPhone 11", "Mantenimiento de pin de carga", ""],
  ["REP-155", "25/09/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Reparación de reinicio", ""],
  ["REP-156", "25/09/2026", "Smartphone", "Xiaomi", "Redmi 14C", "Cambio de pantalla", ""],
  ["REP-157", "26/09/2026", "Smartphone", "Genérico", "Placa de teléfono", "Recuperación de pistas y resoldado de pin", ""],
  ["REP-158", "26/09/2026", "Smartphone", "Samsung", "Galaxy S24 Plus", "Mantenimiento de pin de carga", ""],
  ["REP-159", "28/09/2026", "Celular Básico", "Nokia", "Nokia 110", "Cambio de pin de carga", ""],
  ["REP-160", "28/09/2026", "Smartphone", "Samsung", "Galaxy A02", "Cambio de pin de carga", ""],
  ["REP-161", "28/09/2026", "Smartphone", "Samsung", "Galaxy S8", "Cambio de flex de carga", ""],
  ["REP-162", "28/09/2026", "Smartphone", "Samsung", "Galaxy A02s", "Cambio de pantalla", ""],
  ["REP-163", "28/09/2026", "Smartphone", "Xiaomi", "Redmi Note 13", "Cambio de pantalla", ""],
  ["REP-164", "28/09/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pin de carga", "Honorio"],
  ["REP-165", "28/09/2026", "Smartphone", "Samsung", "Galaxy J6", "Cambio de pin de carga", ""],
  ["REP-166", "29/09/2026", "Smartphone", "Samsung", "Galaxy A03", "Cambio de pantalla", ""],
  ["REP-167", "29/09/2026", "Smartphone", "Samsung", "Galaxy S20 FE", "Cambio de pantalla", ""],
  ["REP-168", "29/09/2026", "Electrónica", "Toyota", "Control de vehículo", "Reparación de control Toyota", ""],
  ["REP-169", "29/09/2026", "Smartphone", "Samsung", "Galaxy A15", "Cambio de pantalla", "Honorio"],
  ["REP-170", "29/09/2026", "Smartphone", "Samsung", "Galaxy A55", "Reparación de placa de carga", ""],
  ["REP-171", "30/09/2026", "Smartphone", "Xiaomi", "Redmi 15C", "Cambio de pantalla", "Derlis"],
  ["REP-172", "30/09/2026", "PC / Laptop", "Genérico", "Computadora", "Cambio a disco SSD, instalación SO y activación", ""],
  ["REP-173", "30/09/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pin y flex de carga", ""],
  ["REP-174", "01/10/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", ""],
  ["REP-175", "01/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pin de carga", "Ever"],
  ["REP-176", "01/10/2026", "Smartphone", "Apple", "iPhone 6s", "Cambio de pantalla", "Honorio"],
  ["REP-177", "01/10/2026", "Smartphone", "Samsung", "Galaxy A15", "Cambio de pantalla", "Honorio"],
  ["REP-178", "01/10/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", "Derlis"],
  ["REP-179", "02/10/2026", "Tablet", "Xiaomi", "Redmi Pad 2", "Flasheo de software", ""],
  ["REP-180", "02/10/2026", "Smartphone", "Xiaomi", "Galaxy A25 a Redmi 15C", "Traspaso de datos y configuración", ""],
  ["REP-181", "02/10/2026", "Smartphone", "Samsung", "Galaxy A10", "Reparación de placa de carga, micrófono y power", ""],
  ["REP-182", "02/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de placa de carga", ""],
  ["REP-183", "03/10/2026", "Smartphone", "Samsung", "Galaxy A31", "Cambio de pantalla", ""],
  ["REP-184", "03/10/2026", "Smartphone", "Xiaomi", "Redmi Note 10S", "Cambio de pantalla", ""],
  ["REP-185", "03/10/2026", "Smartphone", "Xiaomi", "Redmi Note 12 Pro+", "Reparación de reinicio", ""],
  ["REP-186", "03/10/2026", "Smartphone", "Apple", "iPhone 12", "Cambio de batería", "Honorio"],
  ["REP-187", "05/10/2026", "Smartphone", "Samsung", "Galaxy A14 5G", "Cambio de pantalla y pin de carga", ""],
  ["REP-188", "05/10/2026", "Smartphone", "Samsung", "Galaxy A03", "Cambio de pin de carga", ""],
  ["REP-189", "05/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Reparación de micrófono", ""],
  ["REP-190", "05/10/2026", "Smartphone", "Samsung", "Galaxy A72", "Reparación de lector SIM", "Nancy"],
  ["REP-191", "05/10/2026", "Smartphone", "Umidigi", "Umidigi", "Adaptación de batería", ""],
  ["REP-192", "05/10/2026", "Smartphone", "Samsung", "Galaxy A34", "Cambio de pantalla", ""],
  ["REP-193", "06/10/2026", "Infraestructura", "Genérico", "Luces LED externas", "Cambio de luces LED", ""],
  ["REP-194", "06/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pin de carga", "Ana"],
  ["REP-195", "06/10/2026", "Smartphone", "Apple", "iPhone 15 Pro Max", "Cambio de pantalla con trasplante de IC", ""],
  ["REP-196", "06/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla y reparación de audio", ""],
  ["REP-197", "07/10/2026", "Audio / Radio", "Genérico", "Radio portátil", "Reparación de pin de carga y pistas", ""],
  ["REP-198", "07/10/2026", "Smartphone", "Samsung", "Galaxy A52", "Cambio de pantalla", "Honorio"],
  ["REP-199", "07/10/2026", "Smartphone", "Samsung", "Galaxy S24 Ultra", "Reparación de cámara", ""],
  ["REP-200", "07/10/2026", "Smartphone", "Apple", "iPhone 12 Pro", "Cambio de tapa y flex power/volumen", ""],
  ["REP-201", "09/10/2026", "Smartphone", "Samsung", "Galaxy A72", "Reparación de FPC y cambio de pin de carga", ""],
  ["REP-202", "09/10/2026", "Smartphone", "Apple", "Galaxy S22 a iPhone 16 Pro Max", "Traspaso de datos", "Anotado como 18 Pro Max"],
  ["REP-203", "09/10/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", ""],
  ["REP-204", "12/10/2026", "Smartphone", "Samsung", "Galaxy A50", "Cambio de pantalla", ""],
  ["REP-205", "12/10/2026", "Smartphone", "Samsung", "Galaxy A15", "Ajuste y resoldado de conector FPC", ""],
  ["REP-206", "13/10/2026", "Smartphone", "Xiaomi", "Redmi 13C", "Cambio de pantalla y placa de carga", ""],
  ["REP-207", "13/10/2026", "Celular Básico", "Nokia", "Nokia 110", "Reparación de jack de audio 2.5", ""],
  ["REP-208", "13/10/2026", "Infraestructura", "Genérico", "Luminaria LED", "Colocación de luz LED", ""],
  ["REP-209", "13/10/2026", "Smartphone", "Samsung", "Galaxy A32", "Cambio de pantalla", ""],
  ["REP-210", "14/10/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", "Honorio"],
  ["REP-211", "14/10/2026", "Smartphone", "Tecno", "Spark 2023", "Cambio de pantalla", ""],
  ["REP-212", "14/10/2026", "Smartphone", "Xiaomi", "Redmi Note 11 Pro+", "Cambio de batería", ""],
  ["REP-213", "14/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-214", "14/10/2026", "Smartphone", "Samsung", "Galaxy A54", "Reparación de pin de carga", "Honorio"],
  ["REP-215", "14/10/2026", "Smartphone", "Apple", "iPhone 12 Pro", "Cambio de pantalla", ""],
  ["REP-216", "15/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-217", "15/10/2026", "Smartphone", "Xiaomi", "Redmi 13C", "Reparación de conector FPC (no cargaba)", "Honorio"],
  ["REP-218", "15/10/2026", "Smartphone", "Apple", "iPhone 13 a iPhone 16", "Traspaso de datos", ""],
  ["REP-219", "16/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", "Honorio"],
  ["REP-220", "16/10/2026", "Smartphone", "Xiaomi", "Redmi Note 8 Pro", "Reparación de botón power y volumen", ""],
  ["REP-221", "16/10/2026", "Smartphone", "Samsung", "Galaxy A52", "Ajuste de pin de carga y parlante", "Ana"],
  ["REP-222", "16/10/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", ""],
  ["REP-223", "16/10/2026", "Smartphone", "Samsung", "Galaxy A16", "Cambio de pantalla", ""],
  ["REP-224", "16/10/2026", "PC / Software", "Genérico", "PC / Laptop", "Actualización de drivers y activación Office 365", ""],
  ["REP-225", "17/10/2026", "Smartphone", "Honor", "X5b", "Cambio de pantalla", ""],
  ["REP-226", "17/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-227", "17/10/2026", "Smartphone", "Apple", "iPhone 11", "Limpieza de cámara y sellado de pantalla", ""],
  ["REP-228", "19/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-229", "19/10/2026", "Smartphone", "Samsung", "Galaxy A05", "Cambio de pantalla", "Ana"],
  ["REP-230", "19/10/2026", "Smartphone", "Apple", "iPhone 13", "Cambio de pantalla con IC y tapa trasera", ""],
  ["REP-231", "19/10/2026", "Smartphone", "Samsung", "Galaxy A32", "Cambio de pantalla", ""],
  ["REP-232", "19/10/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", "Honorio"],
  ["REP-233", "20/10/2026", "Smartphone", "Samsung", "Galaxy M12", "Cambio de pantalla", ""],
  ["REP-234", "20/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", "Ever"],
  ["REP-235", "20/10/2026", "Smartphone", "Apple", "iPhone 12 Pro", "Revisión de pantalla y fallo de apagado", ""],
  ["REP-236", "21/10/2026", "Smartphone", "Realme", "C65", "Limpieza y mantenimiento general", ""],
  ["REP-237", "21/10/2026", "Smartphone", "Samsung", "Galaxy A53", "Limpieza y mantenimiento general", ""],
  ["REP-238", "21/10/2026", "Smartphone", "Samsung", "Galaxy S20 FE", "Cambio de pantalla", "Ana"],
  ["REP-239", "21/10/2026", "Smartphone", "Xiaomi", "Redmi Note 10", "Cambio de pantalla", ""],
  ["REP-240", "21/10/2026", "Celular Básico", "Nokia", "Nokia", "Cambio de pin de carga", "Ana"],
  ["REP-241", "21/10/2026", "Smartphone", "Samsung", "Galaxy A03 Core", "Cambio de pantalla y pin de carga", ""],
  ["REP-242", "22/10/2026", "Seguridad / Redes", "Genérico", "Red de internet", "Verificación y solución de internet", "Hospital"],
  ["REP-243", "22/10/2026", "Smartphone", "Apple", "iPhone 13 Pro", "Cambio de housing, pantalla con IC y batería", "Ña Graciela"],
  ["REP-244", "23/10/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Cambio de pantalla", "Anotado como 2023"],
  ["REP-245", "23/10/2026", "Smartphone", "Samsung", "Galaxy A33", "Cambio de pantalla", "Anotado como 2023"],
  ["REP-246", "23/10/2026", "PC / Software", "Genérico", "PC / Laptop", "Activación de paquete Office", "Anotado como 2023"],
  ["REP-247", "23/10/2026", "Smartphone", "Samsung", "Galaxy A20s", "Cambio de firmware y desbloqueo", "Anotado como 2023"],
  ["REP-248", "23/10/2026", "Tablet", "C-Idea", "Tablet C-Idea", "Adaptación de pin de carga", "Anotado como 2023"],
  ["REP-249", "26/10/2026", "Smartphone", "Apple", "iPhone 13 Pro Max", "Cambio de tapa y batería con reprogramación", ""],
  ["REP-250", "26/10/2026", "Smartphone", "Samsung", "Galaxy A50", "Reparación de reinicio", ""],
  ["REP-251", "26/10/2026", "Seguridad / Redes", "Imou", "Cámara IP", "Instalación de cámara en poste", ""],
  ["REP-252", "27/10/2026", "Smartphone", "Samsung", "Galaxy A20s", "Cambio de pantalla", ""],
  ["REP-253", "27/10/2026", "Audio / Parlante", "JBL", "Charge 5", "Cambio de placa de carga", ""],
  ["REP-254", "27/10/2026", "Smartphone", "Apple", "iPhone 11", "Cambio de pantalla", ""],
  ["REP-255", "28/10/2026", "Tablet", "Amazon", "Fire", "Cambio de pin de carga", ""],
  ["REP-256", "28/10/2026", "Audio / Parlante", "JBL", "Grip", "Reparación de puerto de carga", ""],
  ["REP-257", "29/10/2026", "Smartphone", "Samsung", "Galaxy A04e", "Cambio de batería y placa de carga", ""],
  ["REP-258", "29/10/2026", "Smartphone", "Samsung", "Galaxy A03s", "Cambio de pantalla", ""],
  ["REP-259", "29/10/2026", "Smartphone", "Samsung", "Galaxy A03s", "Cambio de pantalla y desbloqueo", "Derlis"],
  ["REP-260", "29/10/2026", "Smartphone", "Samsung", "Galaxy A30s", "Cambio de housing y solución de audio", ""],
  ["REP-261", "30/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-262", "30/10/2026", "Smartphone", "Samsung", "Galaxy A04e", "Cambio de pantalla", ""],
  ["REP-263", "30/10/2026", "Smartphone", "Samsung", "Galaxy A26", "Flasheo de software", ""],
  ["REP-264", "30/10/2026", "Smartphone", "Xiaomi", "Redmi Note 12S", "Cambio de batería", "Ana"],
  ["REP-265", "30/10/2026", "Audio / Parlante", "JBL", "Charge 3", "Cambio de batería", ""],
  ["REP-266", "30/10/2026", "Smartphone", "Motorola", "Moto E7i", "Cambio de pin de carga", ""],
  ["REP-267", "30/10/2026", "Smartphone", "Samsung", "Galaxy A30s", "Cambio de pin de carga", ""],
  ["REP-268", "30/10/2026", "Smartphone", "Realme", "8i", "Solución a apagado de pantalla", "Derlis"],
  ["REP-269", "31/10/2026", "Smartphone", "Samsung", "Galaxy A15", "Cambio de pantalla", "Honorio"],
  ["REP-270", "31/10/2026", "Smartphone", "Xiaomi", "Redmi Note 9", "Solución a reinicio, audio y cambio flex carga", ""],
  ["REP-271", "31/10/2026", "Smartphone", "Samsung", "Galaxy S21 FE", "Solución a carga y señal", ""],
  ["REP-272", "31/10/2026", "Smartphone", "Honor", "X7b", "Cambio de pantalla y pin de carga", ""],
  ["REP-273", "31/10/2026", "Smartphone", "Samsung", "Galaxy A31", "Cambio de pin de carga y botón power", ""],
  ["REP-274", "31/10/2026", "Smartphone", "Samsung", "Galaxy A50", "Cambio de pantalla y reparación de IC de carga", ""],
  ["REP-275", "31/10/2026", "Smartphone", "Samsung", "Galaxy S21 FE", "Cambio de batería y reparación de carga húmeda", ""],
  ["REP-276", "04/11/2026", "Smartphone", "Realme", "C11", "Cambio de pantalla", ""],
  ["REP-277", "04/11/2026", "Smartphone", "Samsung", "Galaxy A03", "Cambio de pantalla", ""],
  ["REP-278", "05/11/2026", "Smartphone", "Motorola", "Moto G15", "Cambio de pantalla", ""],
  ["REP-279", "05/11/2026", "Smartphone", "TCL", "605", "Limpieza por humedad, resoldado y pantalla", ""],
  ["REP-280", "05/11/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Cambio de pantalla y desbloqueo FRP", "Derlis"],
  ["REP-281", "05/11/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla y desbloqueo FRP", "A13"],
  ["REP-282", "06/11/2026", "Smartphone", "Samsung", "Galaxy A23", "Cambio de pantalla", ""],
  ["REP-283", "07/11/2026", "Smartphone", "Samsung", "Galaxy A03 Core", "Cambio de pantalla, visor de cámara y FRP", "Derlis"],
  ["REP-284", "07/11/2026", "Smartphone", "Samsung", "Huawei Y9 2019 a Galaxy A03s", "Traspaso de datos", ""],
  ["REP-285", "07/11/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-286", "07/11/2026", "Smartphone", "Huawei", "Y9 2019", "Cambio de pantalla y flasheo", "Derlis"],
  ["REP-287", "07/11/2026", "Smartphone", "Samsung", "Galaxy A52", "Ajuste de conector FPC", ""]
];

// Nombres y clientes habituales en Paraguay / taller para detección sin separador
const CLIENTES_BASE_CONOCIDOS = [
  "ña graciela", "ña maria", "ña maría", "ña rosa", "ña marta", "ña carmen", "ña blasida",
  "don carlos", "don juan", "don pedro", "don jose", "don josé", "don ramon", "don ramón",
  "don julio", "don jorge", "don miguel", "don luis", "don victor", "don víctor", "don roberto",
  "derlis", "ana", "honorio", "ever", "nancy", "graciela", "adalberto", "francisco", "troche",
  "contaduría", "contaduria", "hospital", "fígaro", "figaro", "junior", "ángel", "angel",
  "juan", "carlos", "pedro", "lucas", "marcos", "luis", "josé", "jose", "maría", "maria",
  "jorge", "miguel", "diego", "ramón", "ramon", "julio", "césar", "cesar", "oscar", "óscar",
  "víctor", "victor", "rubén", "ruben", "javier", "fernando", "alberto", "rodrigo", "cristian",
  "cristhian", "christian", "sergio", "pablo", "raúl", "raul", "hugo", "néstor", "nestor",
  "héctor", "hector", "gustavo", "richard", "edgar", "nelson", "camilo", "esteban", "fabián",
  "fabian", "iván", "ivan", "matías", "matias", "nicolás", "nicolas", "sebastián", "sebastian",
  "tomás", "tomas", "gabriel", "daniel", "david", "andrés", "andres", "antonio", "manuel",
  "mario", "roberto", "eduardo", "ricardo", "alejandro", "ariel", "axel", "braian", "bryan",
  "kevin", "jonathan", "alex", "elías", "elias", "walter", "wilson", "marcelo", "claudio",
  "roque", "blas", "arnaldo", "alcides", "eligio", "eusebio", "fidel", "hilario", "isidro",
  "lorenzo", "lucio", "marcial", "osvaldo", "patricio", "reinaldo", "rogelio", "silvio",
  "rosa", "carmen", "laura", "sara", "claudia", "patricia", "mónica", "monica", "silvia",
  "verónica", "veronica", "carolina", "gabriela", "andrea", "natalia", "paola", "liz",
  "fátima", "fatima", "mirian", "miriam", "lourdes", "sonia", "gloria", "norma", "marta",
  "martha", "elena", "ester", "esther", "raquel", "rebeca", "ruth", "eva", "olga", "blanca",
  "zully", "celeste", "belén", "belen", "camila", "sofía", "sofia", "valentina", "romina",
  "tamara", "vanesa", "vanessa", "jessica", "yesica", "yessica", "cintia", "cynthia", "diana",
  "elizabeth", "karina", "liliana", "lorena", "marisol", "mercedes", "nadia", "noelia",
  "pamela", "rocío", "rocio", "sandra", "susana", "teresa", "viviana", "yanina", "zulma",
  "milagros", "daisy", "deisy", "leticia", "carmen", "mirta", "mirtha", "alicia", "beatriz",
  "cecilia", "clara", "doris", "edith", "estela", "evelyn", "florencia", "gladys", "hilda",
  "irene", "isabel", "jessica", "julia", "karen", "karla", "leidy", "lidia", "lilian",
  "lucia", "lucía", "magali", "magalí", "marcela", "margarita", "mariela", "marina",
  "marlene", "melissa", "miguelina", "milena", "nadia", "nelida", "nélida", "nidia", "noemi",
  "noemí", "nora", "patricia", "paula", "perla", "ramona", "reina", "rosana", "roxana",
  "selva", "stella", "tania", "tatiana", "valeria", "victoria", "virginia", "yeni", "yenny"
];

const PALABRAS_NO_CLIENTE = new Set([
  "pantalla", "bateria", "batería", "carga", "pin", "cabezal", "almohadilla", "almohadillas",
  "flex", "disco", "sistema", "office", "amarillo", "negro", "color", "software", "telefono",
  "teléfono", "placa", "camara", "cámara", "datos", "modulo", "módulo", "tactil", "táctil",
  "boton", "botón", "botones", "power", "volumen", "tapa", "housing", "carcasa", "fpc", "ic",
  "pistas", "reinicio", "sensor", "microfono", "micrófono", "audio", "parlante", "speaker",
  "señal", "senal", "humedad", "limpieza", "mantenimiento", "desbloqueo", "frp", "flasheo",
  "firmware", "traspaso", "recuperacion", "recuperación", "archivos", "fotos", "wifi",
  "internet", "utp", "ethernet", "led", "electrica", "eléctrica", "cartucho", "tinta",
  "rodillo", "fusor", "engranajes", "bisagra", "bisagras", "teclado", "ssd", "hdd", "ram",
  "windows", "drivers", "antena", "visor", "sellado", "original", "oled", "incell", "generico",
  "genérico", "nuevo", "usado", "roto", "quebrado", "mojado", "cargaba", "encendia", "encendía",
  "prende", "corto", "completo", "general", "preventivo", "express", "delivery", "accesorio",
  "estuche", "antiquiebre", "vidrio", "templado", "iphone", "samsung", "xiaomi", "redmi",
  "poco", "motorola", "moto", "honor", "realme", "huawei", "tecno", "nokia", "tcl", "jbl",
  "epson", "hp", "brother", "acer", "asus", "dell", "lenovo", "galaxy", "tablet", "laptop",
  "notebook", "impresora", "pc", "celular", "smartphone", "android", "5g", "4g", "pro",
  "plus", "max", "ultra", "lite", "core", "mini", "fe", "neo", "play", "prime", "unidades",
  "unidad", "metros", "cable", "ficha", "fuente", "poste", "vehiculo", "vehículo", "toyota",
  "control", "radio", "portatil", "portátil", "auricular", "jack", "sim", "lector", "trackpad",
  "huella", "trasera", "frontal", "verde", "blanca", "negra", "azul", "roja", "reprogramacion",
  "reprogramación", "trasplante", "resoldado", "adaptacion", "adaptación", "configuracion",
  "configuración", "instalacion", "instalación", "activacion", "activación", "optimizacion",
  "optimización", "reparacion", "reparación", "cambio", "ajuste", "repegado", "re-pegado",
  "retiro", "colocacion", "colocación", "solucion", "solución", "verificacion", "verificación",
  "revision", "revisión", "diagnostico", "diagnóstico", "apagado", "fallo", "coaxial",
  "firma", "digital", "parte", "tomacorriente", "humeda", "húmeda", "sin", "no", "con",
  "encendido", "imagen", "sonido", "tinta", "recarga", "reset", "contador", "contadores",
  "puerto", "linea", "línea", "conector", "chip", "cuenta", "cuentas", "google", "icloud",
  "backup", "respaldo", "formateo", "formatear", "pulgadas", "externas", "luminaria",
  "en", "dn", "tecnologia", "tecnología", "anotado", "como", "local", "taller"
]);

let servicios = [];
let ultimosFiltrados = [];
let loteTemporal = [];
let timerBusqueda = null;
let ultimoAnchoMovil = window.innerWidth < 768;

// ============================================================================
// UTILIDADES DE SEGURIDAD HTML, MODALES E ÍCONOS
// ============================================================================
function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function mostrarModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("hidden");
  el.classList.add("flex");
}

function ocultarModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add("hidden");
  el.classList.remove("flex");
}

function inicializarIconos() {
  if (window.lucide && typeof lucide.createIcons === "function") {
    try { lucide.createIcons(); } catch (e) {}
  }
}

// ============================================================================
// UTILIDADES DE FECHAS, PRECIOS (GS) Y CLIENTES
// ============================================================================
function limpiarParaBusqueda(valor) {
  return String(valor ?? "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function limpiarTextoComparacion(str) {
  return String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
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
  const matchCorta = str.match(/^(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{2,4}))?$/);
  if (matchCorta) {
    const dd = matchCorta[1].padStart(2, "0");
    const mm = matchCorta[2].padStart(2, "0");
    let yy = matchCorta[3] || String(new Date().getFullYear());
    if (yy.length === 2) yy = "20" + yy;
    return `${dd}/${mm}/${yy}`;
  }
  return str;
}

function formatearFechaInput(yyyy_mm_dd) {
  if (!yyyy_mm_dd) return "";
  const partes = String(yyyy_mm_dd).split("-");
  if (partes.length === 3) return `${partes[2]}/${partes[1]}/${partes[0]}`;
  return normalizarFecha(yyyy_mm_dd);
}

function convertirFechaAYYYYMMDD(fechaDDMMYYYY) {
  const partes = String(fechaDDMMYYYY || "").split("/");
  if (partes.length !== 3) return "";
  return `${partes[2]}-${partes[1].padStart(2, "0")}-${partes[0].padStart(2, "0")}`;
}

function convertirFechaATimestamp(fechaDDMMYYYY) {
  const partes = String(fechaDDMMYYYY ?? "").split("/");
  if (partes.length !== 3) return 0;
  return new Date(Number(partes[2]), Number(partes[1]) - 1, Number(partes[0])).getTime() || 0;
}

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

function obtenerLunesActualYYYYMMDD() {
  const hoy = new Date();
  const dia = hoy.getDay();
  const diff = dia === 0 ? -6 : 1 - dia;
  const lunes = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate() + diff);
  const y = lunes.getFullYear();
  const m = String(lunes.getMonth() + 1).padStart(2, "0");
  const d = String(lunes.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function sumarDiasAFecha(yyyy_mm_dd, dias) {
  const [y, m, d] = yyyy_mm_dd.split("-").map(Number);
  const fecha = new Date(y, m - 1, d + dias);
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

function formatearGuaranies(valor) {
  if (!valor && valor !== 0) return "";
  const s = String(valor).trim();
  const matchMil = s.match(/^(\d{1,4})\s*(?:mil|k)\s*(?:gs\.?)?$/i);
  let num = 0;
  if (matchMil) {
    num = parseInt(matchMil[1], 10) * 1000;
  } else {
    const limpio = s.replace(/\D/g, "");
    if (!limpio) return "";
    num = parseInt(limpio, 10);
  }
  if (isNaN(num) || num <= 0) return "";
  return num.toLocaleString("es-PY") + " Gs";
}

function obtenerMontoNumerico(precioStr) {
  if (!precioStr) return 0;
  const s = String(precioStr).trim();
  const matchMil = s.match(/^(\d{1,4})\s*(?:mil|k)\s*(?:gs\.?)?$/i);
  if (matchMil) return parseInt(matchMil[1], 10) * 1000;
  return parseInt(s.replace(/\D/g, ""), 10) || 0;
}

// EXTRACTOR ROBUSTO DE PRECIOS EN GUARANÍES (cualquier posición y formato)
function extraerPrecioDeTexto(linea) {
  let texto = String(linea || "").trim();
  let precioFormateado = "";

  // 1. Entre paréntesis: (50.000 gs), (50.000), (120000), (50 mil), (120k)
  let m = texto.match(/\(\s*(?:gs\.?|g\$|₲)?\s*(\d{1,3}(?:[.,]\d{3})+|\d{4,9})\s*(?:gs\.?|guaran[ií]es|g\.?)?\s*\)/i);
  if (m) {
    const rawNum = parseInt(m[1].replace(/\D/g, ""), 10);
    const tieneMoneda = /(?:gs|g\$|₲|guaran|\bg\b)/i.test(m[0]);
    const tieneSep = /[.,]/.test(m[1]);
    if (tieneMoneda || tieneSep || (rawNum >= 5000 && !(rawNum >= 1990 && rawNum <= 2039))) {
      precioFormateado = formatearGuaranies(rawNum);
      texto = (texto.slice(0, m.index) + " " + texto.slice(m.index + m[0].length)).trim();
    }
  }

  if (!precioFormateado) {
    m = texto.match(/\(\s*(\d{1,4})\s*(?:mil|k)\s*(?:gs\.?)?\s*\)/i);
    if (m) {
      const rawNum = parseInt(m[1], 10) * 1000;
      if (rawNum >= 1000) {
        precioFormateado = formatearGuaranies(rawNum);
        texto = (texto.slice(0, m.index) + " " + texto.slice(m.index + m[0].length)).trim();
      }
    }
  }

  // 2. Prefijo de moneda: Gs. 50.000, Gs 50000, G$ 120.000, ₲50.000
  if (!precioFormateado) {
    m = texto.match(/(?:^|[\s\-–:=,/])(?:gs\.?|g\$|₲)\s*(\d{1,3}(?:[.,]\d{3})+|\d{4,9})(?=$|[\s\-–:,./)])/i);
    if (m) {
      precioFormateado = formatearGuaranies(m[1]);
      texto = (texto.slice(0, m.index) + " " + texto.slice(m.index + m[0].length)).trim();
    }
  }

  // 3. Sufijo explícito en cualquier lugar: 5.000gs, 50.000 gs, 120000gs, 50.000g (evita 5G/4G)
  if (!precioFormateado) {
    m = texto.match(/(?:^|[\s\-–:=,/])(\d{1,3}(?:[.,]\d{3})+|\d{4,9})\s*(?:gs\.?|guaran[ií]es|g\.?)(?=$|[\s\-–:,.)/])/i);
    if (m) {
      precioFormateado = formatearGuaranies(m[1]);
      texto = (texto.slice(0, m.index) + " " + texto.slice(m.index + m[0].length)).trim();
    }
  }

  // 4. Formato "mil" o "k" en cualquier posición: 50 mil, 120mil, 50k, 120k (evita 4k)
  if (!precioFormateado) {
    m = texto.match(/(?:^|[\s\-–:=,/])(\d{1,4})\s*mil(?:\s*gs\.?)?(?=$|[\s\-–:,.)/])/i);
    if (m) {
      precioFormateado = formatearGuaranies(parseInt(m[1], 10) * 1000);
      texto = (texto.slice(0, m.index) + " " + texto.slice(m.index + m[0].length)).trim();
    }
  }

  if (!precioFormateado) {
    m = texto.match(/(?:^|[\s\-–:=,/])(\d{1,4})k(?:\s*gs\.?)?(?=$|[\s\-–:,.)/])/i);
    if (m && parseInt(m[1], 10) >= 5) {
      precioFormateado = formatearGuaranies(parseInt(m[1], 10) * 1000);
      texto = (texto.slice(0, m.index) + " " + texto.slice(m.index + m[0].length)).trim();
    }
  }

  // 5. Miles con punto o coma sin "gs" en cualquier posición: 5.000, 50.000, 120.000, 1.200.000
  if (!precioFormateado) {
    m = texto.match(/(?:^|[\s\-–:=,/])(\d{1,3}(?:[.,]\d{3})+)(?=$|[\s\-–:,.)/])/);
    if (m) {
      precioFormateado = formatearGuaranies(m[1]);
      texto = (texto.slice(0, m.index) + " " + texto.slice(m.index + m[0].length)).trim();
    }
  }

  // 6. Número entero sin puntos ni "gs" (ej. 120000, 50000, 5000), ignorando años (1990-2039) y modelos (HL-1200, L3110)
  if (!precioFormateado) {
    const regexEntero = /(?:^|[\s:=,/])(\d{4,8})(?=$|[\s\-–:,.)/])/g;
    let matchEntero;
    while ((matchEntero = regexEntero.exec(texto)) !== null) {
      const num = parseInt(matchEntero[1], 10);
      if (num >= 1990 && num <= 2039) continue;
      if (num >= 10000 || (num >= 5000 && num % 500 === 0)) {
        precioFormateado = formatearGuaranies(num);
        texto = (texto.slice(0, matchEntero.index) + " " + texto.slice(matchEntero.index + matchEntero[0].length)).trim();
        break;
      }
    }
  }

  texto = texto.replace(/\s{2,}/g, " ").replace(/^[\s\-–:,/=]+|[\s\-–:,/=]+$/g, "").trim();
  return { textoSinPrecio: texto, precio: precioFormateado };
}

function esNombreClienteValido(candidato) {
  const c = String(candidato || "").replace(/^[\s\-–:,./()]+|[\s\-–:,./()]+$/g, "").trim();
  if (c.length < 2 || c.length > 32) return false;
  if (/\d/.test(c)) return false;

  const low = c.toLowerCase();
  if (PALABRAS_NO_CLIENTE.has(low)) return false;

  const palabras = low.split(/\s+/).filter(Boolean);
  if (palabras.length === 0 || palabras.length > 4) return false;

  const conectores = new Set(["ña", "na", "don", "doña", "dona", "sr", "sr.", "sra", "sra.", "prof", "prof.", "cliente", "de", "del", "la", "el"]);
  for (const p of palabras) {
    const pLimpia = p.replace(/[.,:]/g, "");
    if (PALABRAS_NO_CLIENTE.has(pLimpia) && !conectores.has(p) && !conectores.has(pLimpia)) {
      return false;
    }
  }
  if (palabras.every((p) => conectores.has(p) || conectores.has(p.replace(/[.,:]/g, "")))) {
    return false;
  }
  return true;
}

function capitalizarCliente(c) {
  return String(c || "")
    .replace(/\s{2,}/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((w) => (w.length > 1 ? w.charAt(0).toUpperCase() + w.slice(1) : w.toUpperCase()))
    .join(" ");
}

function obtenerListaClientesConocidos() {
  const conjunto = new Set(CLIENTES_BASE_CONOCIDOS);
  if (Array.isArray(servicios)) {
    servicios.forEach((s) => {
      const n = String(s.notas || "").trim();
      if (n && esNombreClienteValido(n)) {
        conjunto.add(n.toLowerCase());
      }
    });
  }
  return Array.from(conjunto).sort((a, b) => b.length - a.length);
}

// EXTRACTOR ROBUSTO DE CLIENTE (etiquetas, paréntesis, separadores, último "de/para", prefijo y nombres conocidos)
function extraerClienteDeTexto(textoCrudo) {
  let texto = String(textoCrudo || "").trim();
  let cliente = "";

  // 1. Etiqueta explícita: "cliente: Ana", "cliente de Derlis", "cl: Honorio", "cli: Pedro"
  let m = texto.match(/(?:^|[\s\-–,/(])(?:cliente\s+de|cliente|cli\.?|cl\.?)\s*[:\-]?\s*([A-ZÁÉÍÓÚÜÑa-záéíóúüñ.]+(?:\s+[A-ZÁÉÍÓÚÜÑa-záéíóúüñ.]+){0,2})(?=$|[\s\-–,/)])/i);
  if (m && esNombreClienteValido(m[1])) {
    cliente = capitalizarCliente(m[1]);
    texto = (texto.slice(0, m.index) + " " + texto.slice(m.index + m[0].length)).trim();
  }

  // 2. Entre paréntesis: "(Derlis)", "(Ana)", "(Ña Graciela)"
  if (!cliente) {
    const regexParen = /\(\s*([^()]{2,32})\s*\)/g;
    let mp;
    while ((mp = regexParen.exec(texto)) !== null) {
      const cand = mp[1].trim().replace(/^(?:cliente\s*(?:de)?|de|para)\s*[:\-]?\s*/i, "");
      if (esNombreClienteValido(cand)) {
        cliente = capitalizarCliente(cand);
        texto = (texto.slice(0, mp.index) + " " + texto.slice(mp.index + mp[0].length)).trim();
        break;
      }
    }
  }

  // 3. Después de separador al final: "- Derlis", "/ Ana", "| Honorio", ", Juan Perez"
  if (!cliente) {
    m = texto.match(/(?:\s+[\-–/|]\s*|\s*[,;|]\s*)(?:de\s+|para\s+)?([A-ZÁÉÍÓÚÜÑa-záéíóúüñ.]+(?:\s+[A-ZÁÉÍÓÚÜÑa-záéíóúüñ.]+){0,2})\s*$/i);
    if (m && esNombreClienteValido(m[1])) {
      cliente = capitalizarCliente(m[1]);
      texto = texto.slice(0, m.index).trim();
    }
  }

  // 4. Después del ÚLTIMO "de" o "para" (corrige el bug de "cambio de pantalla de Derlis")
  if (!cliente) {
    const regexDe = /\b(?:de|para)\s+/gi;
    let ultimoMatch = null;
    let tmp;
    while ((tmp = regexDe.exec(texto)) !== null) {
      ultimoMatch = tmp;
    }
    if (ultimoMatch) {
      const cola = texto.slice(ultimoMatch.index + ultimoMatch[0].length).trim();
      if (esNombreClienteValido(cola)) {
        cliente = capitalizarCliente(cola);
        texto = texto.slice(0, ultimoMatch.index).trim();
      }
    }
  }

  // 5. Prefijo al inicio antes de ":" o " - ": "Derlis: A13 cambio de pantalla"
  if (!cliente) {
    m = texto.match(/^([A-ZÁÉÍÓÚÜÑa-záéíóúüñ.]+(?:\s+[A-ZÁÉÍÓÚÜÑa-záéíóúüñ.]+)?)\s*[:\-–]\s+(.+)$/);
    if (m && esNombreClienteValido(m[1])) {
      cliente = capitalizarCliente(m[1]);
      texto = m[2].trim();
    }
  }

  // 6. Nombre de cliente habitual/conocido al final sin separador (ej. "A13 cambio de pantalla Derlis")
  if (!cliente) {
    const conocidos = obtenerListaClientesConocidos();
    for (const nombre of conocidos) {
      const escaped = nombre.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const rx = new RegExp(`(?:^|\\s)(${escaped})\\s*$`, "i");
      const mc = texto.match(rx);
      if (mc) {
        cliente = capitalizarCliente(mc[1]);
        texto = texto.slice(0, mc.index).trim();
        break;
      }
    }
  }

  texto = texto.replace(/\s{2,}/g, " ").replace(/^[\s\-–:,/|]+|[\s\-–:,/|]+$/g, "").trim();
  return { textoSinCliente: texto, cliente };
}

function deducirIntervencion(trabajo) {
  const t = (trabajo || "").toLowerCase();
  const lista = [];
  if (t.includes("pantalla") || t.includes("táctil") || t.includes("tactil") || t.includes("display") || t.includes("módulo") || t.includes("modulo")) lista.push("Cambio de Pantalla / Módulo");
  if (t.includes("pin") || t.includes("puerto de carga") || t.includes("placa de carga") || t.includes("línea de carga") || t.includes("linea de carga") || t.includes("flex de carga") || t.includes("flex carga")) lista.push("Pin de Carga / Placa de Carga");
  if (t.includes("batería") || t.includes("bateria") || t.includes("tapa") || t.includes("housing") || t.includes("botón") || t.includes("boton") || t.includes("botones") || t.includes("bisagra") || t.includes("cámara") || t.includes("camara") || t.includes("flex power")) lista.push("Cambio de Batería / Flex / Carcasa");
  if (t.includes("desbloqueo") || t.includes("frp") || t.includes("flasheo") || t.includes("firmware") || t.includes("desbrickeo") || t.includes("cuentas") || t.includes("iniciar")) lista.push("Desbloqueo / FRP / Flasheo");
  if (t.includes("fpc") || t.includes("ic") || t.includes("pistas") || t.includes("resoldado") || t.includes("reinicio") || t.includes("sensor") || t.includes("micrófono") || t.includes("microfono") || t.includes("audio") || t.includes("señal") || t.includes("no encendía") || t.includes("no encendia")) lista.push("Microelectrónica / Placa / FPC");
  if (t.includes("limpieza") || t.includes("mantenimiento") || t.includes("humedad") || t.includes("cartucho") || t.includes("cabezal") || t.includes("almohadilla")) lista.push("Mantenimiento Físico / Limpieza");
  if (t.includes("traspaso") || t.includes("pasar datos") || t.includes("pasar todos los datos") || t.includes("sacar datos") || t.includes("recuperación") || t.includes("recuperacion") || t.includes("office") || t.includes("ssd") || t.includes("disco") || t.includes("sistema") || t.includes("software") || t.includes("flujo") || t.includes("actualizar")) lista.push("Software / Traspaso de Datos / Backup");
  if (t.includes("eléctrica") || t.includes("electrica") || t.includes("wifi") || t.includes("utp") || t.includes("ethernet") || t.includes("internet") || t.includes("led")) lista.push("Instalación / Redes / Electricidad");
  return lista.length > 0 ? lista.join(" + ") : "Cambio de Pantalla / Módulo";
}

function deducirRepuestos(trabajo) {
  const t = (trabajo || "").toLowerCase();
  const rep = [];
  if (t.includes("pantalla") || t.includes("módulo") || t.includes("modulo")) rep.push("Módulo de Pantalla");
  if (t.includes("pin de carga") || t.includes("cambio de pin")) rep.push("Pin de Carga");
  if (t.includes("placa de carga")) rep.push("Placa de Carga");
  if (t.includes("flex de carga") || t.includes("flex carga")) rep.push("Flex de Carga");
  else if (t.includes("flex")) rep.push("Cable Flex");
  if (t.includes("batería") || t.includes("bateria")) rep.push("Batería");
  if (t.includes("tapa")) rep.push("Tapa Trasera");
  if (t.includes("housing")) rep.push("Housing / Carcasa");
  if (t.includes("ssd") || t.includes("cambiar disco")) rep.push("Disco SSD");
  if (t.includes("cabezal")) rep.push("Cabezal");
  if (t.includes("almohadilla")) rep.push("Almohadillas");
  return rep.length > 0 ? rep.join(" + ") : "Ninguno";
}

const DATOS_MAESTROS = RAW_DATOS_JUNIOR.map(([id, fecha, categoria, marca, modelo, trabajo, notas]) => {
  const extNotas = extraerPrecioDeTexto(notas);
  return {
    id,
    fecha,
    categoria,
    marca,
    modelo,
    intervencion: deducirIntervencion(trabajo),
    trabajo,
    repuestos: deducirRepuestos(trabajo),
    precio: extNotas.precio || "",
    estado: "Entregado",
    notas: extNotas.precio ? extNotas.textoSinPrecio : notas,
    tecnico: TECNICO_NOMBRE
  };
});

function ordenarPorFechaYNumero(lista) {
  return [...lista].sort((a, b) => {
    const tA = a._timestamp || convertirFechaATimestamp(a.fecha);
    const tB = b._timestamp || convertirFechaATimestamp(b.fecha);
    if (tA !== tB) return tA - tB;
    const numA = parseInt(String(a.id).replace(/\D/g, ""), 10) || 0;
    const numB = parseInt(String(b.id).replace(/\D/g, ""), 10) || 0;
    return numA - numB;
  });
}

function generarNuevoID(offset = 1) {
  const maxNum = servicios.reduce((acc, s) => {
    const n = parseInt(String(s.id).replace(/\D/g, ""), 10) || 0;
    return n > acc ? n : acc;
  }, 0);
  return `REP-${String(maxNum + offset).padStart(3, "0")}`;
}

function normalizarRegistros(lista) {
  return lista.map((item) => {
    const idLimpio = String(item.id || "").trim().toUpperCase();
    const trabajoRaw = String(item.trabajo || "").replace(/Ajuste reflux de conector FPC/gi, "Ajuste y resoldado de conector FPC");
    const extTrabajo = extraerPrecioDeTexto(trabajoRaw);
    const notasRaw = String(item.notas || "").trim();
    const extNotas = extraerPrecioDeTexto(notasRaw);

    const precioFinal = item.precio ? formatearGuaranies(item.precio) : (extTrabajo.precio || extNotas.precio || "");
    const trabajoLimpio = (extTrabajo.precio ? extTrabajo.textoSinPrecio : trabajoRaw).trim();
    const notasLimpias = (extNotas.precio && !item.precio ? extNotas.textoSinPrecio : notasRaw).trim();
    const inter = (item.intervencion ? String(item.intervencion).replace(/\/ Reflux/gi, "").trim() : deducirIntervencion(trabajoLimpio));

    const fechaNorm = normalizarFecha(item.fecha);
    const catLimpia = String(item.categoria || "Smartphone").trim();
    const marcaLimpia = String(item.marca || "Genérico").trim();
    const modeloLimpio = String(item.modelo || "-").trim();
    const repuestosLimpio = String(item.repuestos || deducirRepuestos(trabajoLimpio)).trim();
    const diaSemana = obtenerDiaSemana(fechaNorm);
    const timestamp = convertirFechaATimestamp(fechaNorm);

    const claveGemelo = `${fechaNorm}|${limpiarTextoComparacion(marcaLimpia)}|${limpiarTextoComparacion(modeloLimpio)}|${limpiarTextoComparacion(trabajoLimpio)}`;
    const indiceBusqueda = limpiarParaBusqueda(
      `${idLimpio} ${fechaNorm} ${diaSemana} ${catLimpia} ${marcaLimpia} ${modeloLimpio} ${inter} ${trabajoLimpio} ${repuestosLimpio} ${precioFinal} ${notasLimpias}`
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
      _timestamp: timestamp,
      _claveGemelo: claveGemelo,
      _busqueda: indiceBusqueda
    };
  });
}

// ============================================================================
// CONEXIÓN REAL A SUPABASE (SOLO REGISTROS REP- DE JUNIOR)
// ============================================================================
function empaquetarParaSupabase(reg) {
  return {
    id: String(reg.id).toUpperCase(),
    fecha: normalizarFecha(reg.fecha),
    tecnico: TECNICO_NOMBRE,
    categoria: reg.categoria,
    marca: reg.marca,
    modelo: reg.modelo,
    intervencion: reg.intervencion,
    trabajo: reg.trabajo,
    repuestos: reg.repuestos || "Ninguno",
    precio: formatearGuaranies(reg.precio) || "",
    estado: reg.estado || "Entregado",
    notas: reg.notas || ""
  };
}

function actualizarBadgeSupabase(estado, textoPersonalizado = "") {
  const b = document.getElementById("cloud-badge");
  if (!b) return;
  if (estado === "ok") {
    b.textContent = textoPersonalizado || "Supabase Conectado (SQL)";
    b.className = "text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-600 font-bold tracking-wide";
  } else if (estado === "warn") {
    b.textContent = textoPersonalizado || "Supabase Conectado (Presiona Migrar)";
    b.className = "text-[10px] px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-500 font-bold tracking-wide";
  } else {
    b.textContent = textoPersonalizado || "Modo Local (Sin red)";
    b.className = "text-[10px] px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-600 font-bold tracking-wide";
  }
}

async function obtenerTodosJuniorDeSupabase() {
  const acumulados = [];
  const paso = 1000;
  let offset = 0;

  while (true) {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/servicios?id=like.REP-*&select=*&limit=${paso}&offset=${offset}`,
      { method: "GET", headers: HEADERS_GET }
    );
    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`HTTP ${res.status}: ${errTxt}`);
    }
    const bloque = await res.json();
    if (!Array.isArray(bloque) || bloque.length === 0) break;
    acumulados.push(...bloque);
    if (bloque.length < paso) break;
    offset += paso;
  }
  return acumulados;
}

async function guardarServicioSupabase(reg) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/servicios?on_conflict=id`, {
      method: "POST",
      headers: HEADERS_POST,
      body: JSON.stringify(empaquetarParaSupabase(reg))
    });
    if (!res.ok) {
      console.error("Error Supabase al guardar:", res.status, await res.text());
      actualizarBadgeSupabase("error", `Error Guardar (${res.status})`);
      return false;
    }
    actualizarBadgeSupabase("ok");
    return true;
  } catch (e) {
    console.error("Error red al guardar:", e);
    actualizarBadgeSupabase("error");
    return false;
  }
}

async function guardarLoteSupabase(loteCrudo, onProgress = null) {
  const payload = loteCrudo.map(empaquetarParaSupabase);
  const tamBloque = 100;
  try {
    for (let i = 0; i < payload.length; i += tamBloque) {
      const bloque = payload.slice(i, i + tamBloque);
      const res = await fetch(`${SUPABASE_URL}/rest/v1/servicios?on_conflict=id`, {
        method: "POST",
        headers: HEADERS_POST,
        body: JSON.stringify(bloque)
      });
      if (!res.ok) {
        const errTxt = await res.text();
        console.error("Error Supabase bloque:", res.status, errTxt);
        return { ok: false, status: res.status, detail: errTxt };
      }
      if (onProgress) onProgress(Math.min(i + bloque.length, payload.length), payload.length);
    }
    actualizarBadgeSupabase("ok");
    return { ok: true };
  } catch (e) {
    console.error("Error red lote:", e);
    return { ok: false, status: 0, detail: e.message };
  }
}

async function eliminarServicioSupabase(id) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/servicios?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: HEADERS_GET
    });
    if (!res.ok) {
      console.error("Error Supabase al eliminar:", res.status, await res.text());
    }
  } catch (e) {
    console.error("Error red al eliminar:", e);
  }
}

async function cargarBaseDeDatos() {
  let cargadoLocal = false;
  const cache = localStorage.getItem(CACHE_LOCAL_KEY);
  if (cache) {
    try {
      const parsed = JSON.parse(cache);
      if (Array.isArray(parsed) && parsed.length > 0) {
        servicios = ordenarPorFechaYNumero(normalizarRegistros(parsed));
        cargadoLocal = true;
      }
    } catch (e) {}
  }
  if (!cargadoLocal) {
    servicios = ordenarPorFechaYNumero(normalizarRegistros([...DATOS_MAESTROS]));
  }

  poblarSelectores();
  aplicarFiltros();

  try {
    const soloJunior = await obtenerTodosJuniorDeSupabase();
    if (soloJunior.length > 0) {
      servicios = ordenarPorFechaYNumero(normalizarRegistros(soloJunior));
      localStorage.setItem(CACHE_LOCAL_KEY, JSON.stringify(servicios));
      poblarSelectores();
      aplicarFiltros();
      actualizarBadgeSupabase("ok");
    } else {
      actualizarBadgeSupabase("warn", "Supabase Conectado (Presiona Migrar)");
    }
  } catch (e) {
    console.warn("Error leyendo Supabase:", e);
    actualizarBadgeSupabase("error");
  }
}

window.migrarBaseASupabase = async function () {
  const btn = document.getElementById("btn-migrar-supabase");
  const estadoTxt = document.getElementById("estado-migracion-texto");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Subiendo registros...";
  }
  if (estadoTxt) estadoTxt.textContent = `Preparando ${servicios.length} registros de Junior...`;

  const resultado = await guardarLoteSupabase(servicios, (subidos, total) => {
    if (btn) btn.textContent = `Subiendo ${subidos} / ${total}...`;
    if (estadoTxt) estadoTxt.textContent = `Enviados ${subidos} de ${total} registros a Supabase...`;
  });

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = `<i data-lucide="upload-cloud" class="w-4 h-4"></i> Migrar Base Local a Supabase`;
    inicializarIconos();
  }

  if (resultado.ok) {
    if (estadoTxt) estadoTxt.textContent = `¡Sincronización completada (${servicios.length} registros)!`;
    alert(`¡Éxito! Se subieron los ${servicios.length} registros de Junior Almirón a Supabase sin tocar los de Ángel.`);
    ocultarModal("modal-supabase");
  } else {
    if (estadoTxt) estadoTxt.textContent = `Error al subir (${resultado.status || "red"}).`;
    alert(`Error al migrar a Supabase (${resultado.status}):\n${resultado.detail}`);
  }
};

window.recargarDesdeSupabase = async function () {
  await cargarBaseDeDatos();
  ocultarModal("modal-supabase");
};

// ============================================================================
// DETECTOR DE DUPLICADOS (INDIVIDUAL Y EN LOTE)
// ============================================================================
function verificarDuplicadoIndividual(nuevoItem, ignorarId = null) {
  const fNueva = normalizarFecha(nuevoItem.fecha);
  const marcaNueva = limpiarTextoComparacion(nuevoItem.marca);
  const modeloNuevo = limpiarTextoComparacion(nuevoItem.modelo);
  const trabajoNuevo = limpiarTextoComparacion(nuevoItem.trabajo);
  const intNueva = limpiarTextoComparacion(nuevoItem.intervencion);

  return servicios.filter((s) => {
    if (ignorarId && s.id === ignorarId) return false;
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
      return (
        limpiarTextoComparacion(s.marca) === marcaItem &&
        limpiarTextoComparacion(s.modelo) === modeloItem &&
        limpiarTextoComparacion(s.trabajo) === trabajoItem
      );
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
        repetidosEnNota.push(`Fila #${otroIdx + 1} (Mismo servicio repetido el ${fItem})`);
      }
    });

    if (repetidosEnNota.length > 0) {
      alertas.push({
        nivel: "ambar",
        mensaje: `Repetido en esta fecha con: ${repetidosEnNota.join(", ")}`
      });
    }

    return { ...item, alertasDuplicado: alertas };
  });
}

// ============================================================================
// SELECTORES, FILTROS, KPIs Y RENDER DE TABLA / MÓVIL
// ============================================================================
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

  const conteoCat = {};
  const conteoMarca = {};
  const conteoFecha = {};

  servicios.forEach((s) => {
    conteoCat[s.categoria] = (conteoCat[s.categoria] || 0) + 1;
    conteoMarca[s.marca] = (conteoMarca[s.marca] || 0) + 1;
    conteoFecha[s.fecha] = (conteoFecha[s.fecha] || 0) + 1;
  });

  const intervenciones = obtenerIntervencionesUnicas();

  selCat.innerHTML =
    '<option value="">Todas las categorías</option>' +
    Object.keys(conteoCat).sort().map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)} (${conteoCat[c]})</option>`).join("");

  selMarca.innerHTML =
    '<option value="">Todas las marcas</option>' +
    Object.keys(conteoMarca).sort().map((m) => `<option value="${escapeHtml(m)}">${escapeHtml(m)} (${conteoMarca[m]})</option>`).join("");

  selInt.innerHTML =
    '<option value="">Todas las intervenciones</option>' +
    intervenciones.map((i) => `<option value="${escapeHtml(i)}">${escapeHtml(i)}</option>`).join("");

  selFecha.innerHTML =
    '<option value="">Todas las fechas</option>' +
    Object.keys(conteoFecha)
      .sort((a, b) => convertirFechaATimestamp(b) - convertirFechaATimestamp(a))
      .map((f) => `<option value="${escapeHtml(f)}">${escapeHtml(f)} (${obtenerDiaSemana(f)} · ${conteoFecha[f]} serv.)</option>`)
      .join("");

  selCat.value = valCat;
  selMarca.value = valMarca;
  selInt.value = valInt;
  selFecha.value = valFecha;
}

function aplicarFiltros() {
  const inpTexto = document.getElementById("filtro-texto");
  if (!inpTexto) return;

  const textoQuery = limpiarParaBusqueda(inpTexto.value);
  const palabras = textoQuery ? textoQuery.split(/\s+/).filter(Boolean) : [];
  const cat = document.getElementById("filtro-categoria")?.value || "";
  const marca = document.getElementById("filtro-marca")?.value || "";
  const intervencion = document.getElementById("filtro-intervencion")?.value || "";
  const fecha = document.getElementById("filtro-fecha")?.value || "";

  document.querySelectorAll(".chip-cat").forEach((b) => {
    b.className = b.getAttribute("data-cat") === cat
      ? "chip-cat px-3 py-1 rounded-xl text-xs font-extrabold bg-teal-600 text-white shadow-xs transition cursor-pointer"
      : "chip-cat px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition cursor-pointer";
  });

  document.querySelectorAll(".chip-marca").forEach((b) => {
    b.className = b.getAttribute("data-marca") === marca
      ? "chip-marca px-3 py-1 rounded-xl text-xs font-extrabold bg-indigo-600 text-white shadow-xs transition cursor-pointer"
      : "chip-marca px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition cursor-pointer";
  });

  ultimosFiltrados = servicios.filter((item) => {
    if (cat && item.categoria !== cat) return false;
    if (marca && item.marca !== marca) return false;
    if (intervencion && !item.intervencion.includes(intervencion)) return false;
    if (fecha && item.fecha !== fecha) return false;
    if (palabras.length > 0 && !palabras.every((p) => item._busqueda.includes(p))) return false;
    return true;
  });

  renderizarVista(ultimosFiltrados);
  actualizarKPIs(ultimosFiltrados);
}

function obtenerColorBadge(categoria) {
  if (categoria.includes("Smartphone") || categoria.includes("Celular")) return "bg-teal-100 text-teal-800 border-teal-200";
  if (categoria.includes("Tablet")) return "bg-sky-100 text-sky-800 border-sky-200";
  if (categoria.includes("Impresora")) return "bg-emerald-100 text-emerald-800 border-emerald-200";
  if (categoria.includes("Laptop") || categoria.includes("PC")) return "bg-amber-100 text-amber-800 border-amber-200";
  if (categoria.includes("Audio")) return "bg-purple-100 text-purple-800 border-purple-200";
  return "bg-slate-100 text-slate-700 border-slate-200";
}

function renderizarVista(lista) {
  const tbody = document.getElementById("tabla-body");
  const listaMovil = document.getElementById("lista-movil");
  const contador = document.getElementById("contador-tabla");
  if (contador) contador.textContent = `Mostrando ${lista.length} registros`;

  if (lista.length === 0) {
    const vacio = `<div class="py-10 text-center text-slate-500 text-sm">No se encontraron servicios con los filtros seleccionados.</div>`;
    if (tbody) tbody.innerHTML = `<tr><td colspan="10">${vacio}</td></tr>`;
    if (listaMovil) listaMovil.innerHTML = vacio;
    return;
  }

  const conteoGemelos = {};
  lista.forEach((it) => {
    conteoGemelos[it._claveGemelo] = (conteoGemelos[it._claveGemelo] || 0) + 1;
  });

  const invertidos = [...lista].reverse();

  if (window.innerWidth < 768 && listaMovil) {
    listaMovil.innerHTML = invertidos.map((item) => {
      const esGemelo = conteoGemelos[item._claveGemelo] > 1;
      const safeId = escapeHtml(item.id);
      return `
        <div class="p-4 space-y-2 ${esGemelo ? "bg-amber-50/40" : "hover:bg-slate-50"}">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="font-bold text-teal-700 text-sm">${safeId}</span>
              <span class="text-xs font-semibold text-slate-700">· ${escapeHtml(item.fecha)}</span>
              <span class="text-[11px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">${escapeHtml(item._dia)}</span>
              ${esGemelo ? `<span class="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold border border-amber-300">⚠️ Repetido (${conteoGemelos[item._claveGemelo]}x)</span>` : ""}
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <button type="button" onclick="window.abrirEditarServicio('${safeId}')" class="text-xs font-extrabold px-2.5 py-1 rounded-md cursor-pointer ${item.precio ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-slate-100 text-slate-600 border border-slate-300"}">${item.precio ? escapeHtml(item.precio) : "+ Gs"}</button>
              <button type="button" onclick="window.abrirEditarServicio('${safeId}')" title="Editar" class="text-slate-400 hover:text-teal-600 p-1 cursor-pointer">${SVG_EDIT}</button>
              <button type="button" onclick="window.eliminarServicio('${safeId}')" title="Eliminar" class="text-slate-400 hover:text-rose-600 p-1 cursor-pointer">${SVG_TRASH}</button>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <p class="font-bold text-slate-900 text-sm">${escapeHtml(item.marca)} <span class="font-normal text-slate-500">· ${escapeHtml(item.modelo)}</span></p>
            <span class="text-[11px] font-semibold px-2 py-0.5 rounded-md border ${obtenerColorBadge(item.categoria)}">${escapeHtml(item.categoria)}</span>
          </div>
          <p class="text-xs font-medium text-teal-800">${escapeHtml(item.intervencion)}</p>
          <p class="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">${escapeHtml(item.trabajo)}</p>
          <div class="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 gap-2">
            <span><strong>Insumos:</strong> ${escapeHtml(item.repuestos || "Ninguno")}</span>
            <span class="text-teal-800 font-semibold">${escapeHtml(item.notas || "-")}</span>
          </div>
        </div>`;
    }).join("");
  } else if (tbody) {
    tbody.innerHTML = invertidos.map((item) => {
      const esGemelo = conteoGemelos[item._claveGemelo] > 1;
      const safeId = escapeHtml(item.id);
      return `
        <tr class="${esGemelo ? "bg-amber-50/40 hover:bg-amber-50/80" : "hover:bg-slate-50"} transition">
          <td class="py-3 px-4 font-bold text-teal-700 whitespace-nowrap">${safeId}</td>
          <td class="py-3 px-4 whitespace-nowrap">
            <div class="font-semibold text-slate-800">${escapeHtml(item.fecha)}</div>
            <div class="text-[11px] font-bold text-indigo-600 uppercase tracking-wide">${escapeHtml(item._dia)}</div>
          </td>
          <td class="py-3 px-4">
            <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-md border ${obtenerColorBadge(item.categoria)}">${escapeHtml(item.categoria)}</span>
          </td>
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${escapeHtml(item.marca)}</div>
            <div class="text-xs text-slate-500">${escapeHtml(item.modelo)}</div>
          </td>
          <td class="py-3 px-4 text-xs font-medium text-slate-700 max-w-xs">${escapeHtml(item.intervencion)}</td>
          <td class="py-3 px-4 text-slate-800 max-w-xs">
            <div>${escapeHtml(item.trabajo)}</div>
            ${esGemelo ? `<span class="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">⚠️ Mismo equipo y servicio en esta fecha (${conteoGemelos[item._claveGemelo]}x)</span>` : ""}
          </td>
          <td class="py-3 px-4 text-xs text-slate-600">${escapeHtml(item.repuestos || "Ninguno")}</td>
          <td class="py-3 px-4 text-right whitespace-nowrap">
            <button type="button" onclick="window.abrirEditarServicio('${safeId}')" class="cursor-pointer transition ${item.precio ? "inline-block text-xs font-extrabold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100" : "inline-block text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200"}">${item.precio ? escapeHtml(item.precio) : "+ Cargar Gs"}</button>
          </td>
          <td class="py-3 px-4 text-xs font-semibold text-teal-800">${escapeHtml(item.notas || "-")}</td>
          <td class="py-3 px-4 text-center whitespace-nowrap">
            <button type="button" onclick="window.abrirEditarServicio('${safeId}')" title="Editar servicio" class="text-slate-400 hover:text-teal-600 p-1.5 cursor-pointer transition">${SVG_EDIT}</button>
            <button type="button" onclick="window.eliminarServicio('${safeId}')" title="Eliminar servicio" class="text-slate-400 hover:text-rose-600 p-1.5 cursor-pointer transition">${SVG_TRASH}</button>
          </td>
        </tr>`;
    }).join("");
  }
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

// ============================================================================
// FUNCIONES GLOBALES (ACCESIBLES DIRECTO DESDE EL HTML)
// ============================================================================
window.procesarLogin = function (e) {
  e.preventDefault();
  const inp = document.getElementById("inp-password");
  if (inp.value.trim() === PIN_ACCESO) {
    sessionStorage.setItem(AUTH_SESSION_KEY, "true");
    document.getElementById("error-login").classList.add("hidden");
    inp.value = "";
    document.getElementById("pantalla-login").style.display = "none";
    const app = document.getElementById("app-contenido");
    app.classList.remove("hidden");
    app.style.display = "flex";
    cargarBaseDeDatos();
    inicializarIconos();
  } else {
    document.getElementById("error-login").classList.remove("hidden");
    inp.value = "";
    inp.focus();
  }
};

window.bloquearSistema = function () {
  sessionStorage.removeItem(AUTH_SESSION_KEY);
  const app = document.getElementById("app-contenido");
  app.classList.add("hidden");
  app.style.display = "none";
  document.getElementById("pantalla-login").style.display = "flex";
  document.getElementById("inp-password")?.focus();
};

window.limpiarFiltros = function () {
  ["filtro-texto", "filtro-categoria", "filtro-marca", "filtro-intervencion", "filtro-fecha"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  aplicarFiltros();
};

window.abrirModalNuevoRegistro = function () {
  document.getElementById("form-servicio")?.reset();
  document.getElementById("inp-edit-id").value = "";
  document.getElementById("titulo-modal-registro").textContent = "Registrar Nuevo Servicio Técnico";
  const inpFecha = document.getElementById("inp-fecha");
  if (inpFecha) inpFecha.valueAsDate = new Date();
  document.getElementById("error-intervencion").classList.add("hidden");
  mostrarModal("modal-registro");
};

window.abrirEditarServicio = function (id) {
  const item = servicios.find((s) => s.id === id);
  if (!item) return;

  document.getElementById("titulo-modal-registro").textContent = `Editar Servicio ${item.id}`;
  document.getElementById("inp-edit-id").value = item.id;
  document.getElementById("inp-fecha").value = convertirFechaAYYYYMMDD(item.fecha);

  const selCat = document.getElementById("inp-categoria");
  if (selCat) {
    const existe = Array.from(selCat.options).some((o) => o.value === item.categoria);
    if (!existe && item.categoria) {
      const opt = document.createElement("option");
      opt.value = item.categoria;
      opt.textContent = item.categoria;
      selCat.appendChild(opt);
    }
    selCat.value = item.categoria;
  }

  document.getElementById("inp-marca").value = item.marca;
  document.getElementById("inp-modelo").value = item.modelo;
  document.getElementById("inp-trabajo").value = item.trabajo;
  document.getElementById("inp-repuestos").value = item.repuestos === "Ninguno" ? "" : (item.repuestos || "");
  document.getElementById("inp-precio").value = item.precio || "";
  document.getElementById("inp-notas").value = item.notas === "-" ? "" : (item.notas || "");

  const partes = String(item.intervencion || "").split("+").map((x) => x.trim());
  const checks = document.querySelectorAll('input[name="intervencion-check"]');
  let marcoAlguno = false;
  checks.forEach((chk) => {
    const coincide = partes.includes(chk.value);
    chk.checked = coincide;
    if (coincide) marcoAlguno = true;
  });
  if (!marcoAlguno && checks.length > 0) checks[0].checked = true;

  document.getElementById("error-intervencion").classList.add("hidden");
  mostrarModal("modal-registro");
  setTimeout(() => document.getElementById("inp-precio")?.focus(), 80);
};

window.cerrarModalRegistro = function () {
  ocultarModal("modal-registro");
};

window.guardarServicioIndividual = async function (e) {
  e.preventDefault();
  const checks = Array.from(document.querySelectorAll('input[name="intervencion-check"]:checked')).map((c) => c.value);
  const errorInt = document.getElementById("error-intervencion");
  if (checks.length === 0) {
    errorInt.classList.remove("hidden");
    return;
  }
  errorInt.classList.add("hidden");

  const editId = document.getElementById("inp-edit-id").value.trim().toUpperCase();
  const trabajoRaw = document.getElementById("inp-trabajo").value.trim();
  const notasInputRaw = document.getElementById("inp-notas")?.value.trim() || "";
  const pInput = document.getElementById("inp-precio")?.value.trim() || "";

  // Extrae precio y cliente automáticamente si se escribieron dentro del trabajo o notas
  const extPrecioTrabajo = extraerPrecioDeTexto(trabajoRaw);
  const extPrecioNotas = extraerPrecioDeTexto(notasInputRaw);
  const precioFinal = pInput
    ? formatearGuaranies(pInput)
    : (extPrecioTrabajo.precio || extPrecioNotas.precio || "");

  let trabajoTxt = extPrecioTrabajo.precio ? extPrecioTrabajo.textoSinPrecio : trabajoRaw;
  let notasTxt = (extPrecioNotas.precio && !pInput) ? extPrecioNotas.textoSinPrecio : notasInputRaw;

  if (!notasTxt) {
    const extCli = extraerClienteDeTexto(trabajoTxt);
    if (extCli.cliente) {
      notasTxt = extCli.cliente;
      if (extCli.textoSinCliente) trabajoTxt = extCli.textoSinCliente;
    }
  }

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
    notas: notasTxt,
    tecnico: TECNICO_NOMBRE
  };

  if (!editId) {
    const duplicadosPrevios = verificarDuplicadoIndividual(datosBase);
    if (duplicadosPrevios.length > 0) {
      const detalle = duplicadosPrevios
        .map((d) => `• ${d.id} (${d.fecha}): ${d.marca} ${d.modelo} - ${d.trabajo} ${d.precio ? `[${d.precio}]` : ""}`)
        .join("\n");
      const confirmar = confirm(
        `⚠️ ALERTA DE SERVICIO REPETIDO EN LA MISMA FECHA (${datosBase.fecha}):\n\n` +
        `Ya existe(n) registro(s) muy similar(es) ese mismo día:\n${detalle}\n\n` +
        `¿Confirmas que es otro dispositivo distinto (Aceptar) o cancelar?`
      );
      if (!confirmar) return;
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
  poblarSelectores();
  aplicarFiltros();
  e.target.reset();
  ocultarModal("modal-registro");

  await guardarServicioSupabase(regNorm);
};

window.eliminarServicio = async function (id) {
  if (!confirm(`¿Seguro que deseas eliminar permanentemente el registro ${id}? (Se borrará también de Supabase)`)) return;
  servicios = servicios.filter((s) => s.id !== id);
  localStorage.setItem(CACHE_LOCAL_KEY, JSON.stringify(servicios));
  poblarSelectores();
  aplicarFiltros();
  await eliminarServicioSupabase(id);
};

// ============================================================================
// MOTOR INTELIGENTE DE CARGA RÁPIDA SEMANAL (EQUIPOS + PRECIOS GS + CLIENTES)
// ============================================================================
function detectarEquipoEnTexto(texto) {
  const tLow = texto.toLowerCase();

  let marca = "";
  if (tLow.includes("samsung") || /\b(galaxy|a\d{2}[s]?|j\d|s2\d|m\d{2})\b/i.test(texto)) marca = "Samsung";
  else if (tLow.includes("xiaomi") || tLow.includes("redmi") || tLow.includes("poco")) marca = "Xiaomi";
  else if (tLow.includes("iphone") || tLow.includes("apple")) marca = "Apple";
  else if (tLow.includes("motorola") || tLow.includes("moto ")) marca = "Motorola";
  else if (tLow.includes("honor")) marca = "Honor";
  else if (tLow.includes("realme")) marca = "Realme";
  else if (tLow.includes("huawei")) marca = "Huawei";
  else if (tLow.includes("tecno") || tLow.includes("spark")) marca = "Tecno";
  else if (tLow.includes("nokia")) marca = "Nokia";
  else if (tLow.includes("tcl")) marca = "TCL";
  else if (tLow.includes("jbl")) marca = "JBL";
  else if (tLow.includes("epson") || /\bl3\d{2,3}\b/i.test(texto)) marca = "Epson";
  else if (tLow.includes("hp")) marca = "HP";
  else if (tLow.includes("brother")) marca = "Brother";
  else if (tLow.includes("acer")) marca = "Acer";
  else if (tLow.includes("asus")) marca = "Asus";
  else if (tLow.includes("dell")) marca = "Dell";
  else if (tLow.includes("lenovo")) marca = "Lenovo";

  let categoria = "Smartphone";
  if (tLow.includes("impresora") || tLow.includes("epson") || tLow.includes("cabezal") || tLow.includes("almohadilla") || tLow.includes("cartucho")) {
    categoria = "Impresora";
  } else if (tLow.includes("laptop") || tLow.includes("notebook") || tLow.includes("acer") || tLow.includes("asus")) {
    categoria = "Laptop";
  } else if (tLow.includes("pc ") || tLow.includes("dell") || tLow.includes("office") || tLow.includes("sistema")) {
    categoria = "PC / Software";
  } else if (tLow.includes("disco hdd") || tLow.includes("sacar datos de disco")) {
    categoria = "Almacenamiento";
  } else if (tLow.includes("jbl") || tLow.includes("parlante") || tLow.includes("auricular")) {
    categoria = "Audio / Parlante";
  } else if (tLow.includes("tablet") || tLow.includes("ipad") || tLow.includes("pad")) {
    categoria = "Tablet";
  } else if (tLow.includes("nokia")) {
    categoria = "Celular Básico";
  }

  let modelo = "";
  const matchTraspaso = texto.match(/([a-zA-Z0-9]+\s+a\s+[a-zA-Z0-9]+)/i);
  const matchEpson = texto.match(/\b(L\d{3,4})\b/i);
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
    "microfono", "auricular", "parlante", "software", "firmware", "recarga"
  ];
  return palabrasTrabajo.some((p) => t.includes(p));
}

function construirRegistroDesdeLinea(lineaTrabajoRaw, fechaActual, contextoEquipo, clientePendiente = "") {
  const textoLimpio = lineaTrabajoRaw.replace(/^[-*•\d.)\s]+/, "").trim();
  if (!textoLimpio) return null;

  // 1. Extraer precio en cualquier parte de la línea
  const { textoSinPrecio, precio } = extraerPrecioDeTexto(textoLimpio);

  // 2. Extraer cliente del texto restante
  const { textoSinCliente, cliente } = extraerClienteDeTexto(textoSinPrecio);
  const texto = textoSinCliente || textoSinPrecio || textoLimpio;
  let notas = cliente || clientePendiente || "";

  // 3. Detectar equipo y heredar contexto si corresponde
  const eqDetectado = detectarEquipoEnTexto(texto);
  let categoria = eqDetectado.categoria;
  let marca = eqDetectado.marca;
  let modelo = eqDetectado.modelo;

  if (!eqDetectado.tieneMarcaOModelo && contextoEquipo) {
    categoria = contextoEquipo.categoria;
    marca = contextoEquipo.marca;
    modelo = contextoEquipo.modelo;
    if (!notas && contextoEquipo.notas) notas = contextoEquipo.notas;
  } else if (!modelo) {
    if (categoria === "Almacenamiento") modelo = "Disco Duro HDD";
    else if (categoria === "Laptop") modelo = `Laptop ${marca}`;
    else if (categoria === "PC / Software") modelo = `PC ${marca}`;
    else if (marca === "JBL") modelo = "Parlante JBL";
    else if (categoria === "Smartphone" && marca === "Genérico") modelo = "Smartphone Android";
    else modelo = marca;
  }

  const trabajoFinal = texto.charAt(0).toUpperCase() + texto.slice(1);
  return {
    fecha: fechaActual,
    diaSemana: obtenerDiaSemana(fechaActual),
    categoria,
    marca,
    modelo,
    intervencion: deducirIntervencion(trabajoFinal),
    trabajo: trabajoFinal,
    repuestos: deducirRepuestos(trabajoFinal),
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
  let clientePendiente = "";
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

  for (const raw of lineas) {
    let l = raw.trim();
    if (!l) continue;

    // Encabezado de fecha sola: "16/11" o "16/11/2026:"
    const matchHeaderFecha = l.match(/^(\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?)\s*:?$/);
    if (matchHeaderFecha) {
      fechaCurso = normalizarFechaNumericaCorta(matchHeaderFecha[1], anioBase);
      contextoEquipoActual = null;
      clientePendiente = "";
      continue;
    }

    // Encabezado de día: "lunes:", "martes 17/11:"
    let cambioDia = false;
    for (const d of mapaDias) {
      if (d.regex.test(l)) {
        const resto = l.replace(d.regex, "").replace(/^[\s:–-]+/, "").trim();
        const matchFechaJuntoADia = resto.match(/^(\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?)\s*:?\s*(.*)$/);
        if (matchFechaJuntoADia) {
          fechaCurso = normalizarFechaNumericaCorta(matchFechaJuntoADia[1], anioBase);
          l = matchFechaJuntoADia[2].trim();
        } else {
          fechaCurso = sumarDiasAFecha(fechaLunesYYYYMMDD, d.offset);
          l = resto;
        }
        contextoEquipoActual = null;
        clientePendiente = "";
        cambioDia = true;
        break;
      }
    }
    if (cambioDia && !l) continue;

    // Fecha al inicio de la línea: "16/11 - Samsung A13..."
    const matchFechaEnLinea = l.match(/^(\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?)\s*[-:–]\s*(.+)$/);
    if (matchFechaEnLinea) {
      fechaCurso = normalizarFechaNumericaCorta(matchFechaEnLinea[1], anioBase);
      l = matchFechaEnLinea[2].trim();
    }

    // Revisar si la línea es SOLO un precio (ej. "120.000gs" en la línea siguiente)
    const { textoSinPrecio, precio } = extraerPrecioDeTexto(l);
    if (!textoSinPrecio && precio) {
      if (resultados.length > 0 && !resultados[resultados.length - 1].precio) {
        resultados[resultados.length - 1].precio = precio;
      }
      continue;
    }

    // Revisar si la línea es SOLO un cliente (ej. "Cliente: Ana" o "de Derlis" en línea propia)
    const { textoSinCliente, cliente } = extraerClienteDeTexto(textoSinPrecio);
    if (!textoSinCliente && cliente) {
      if (contextoEquipoActual && !contextoEquipoActual.notas) {
        contextoEquipoActual.notas = cliente;
      } else if (resultados.length > 0 && resultados[resultados.length - 1].fecha === fechaCurso && !resultados[resultados.length - 1].notas && !/^cliente\b/i.test(l)) {
        resultados[resultados.length - 1].notas = cliente;
      } else {
        clientePendiente = cliente;
      }
      continue;
    }

    // Encabezado de equipo con o sin cliente (ej. "Xiaomi poco M4 pro 5G - Ana")
    const eqInfo = detectarEquipoEnTexto(textoSinCliente || textoSinPrecio);
    const tieneTrabajo = contienePalabrasDeTrabajo(textoSinCliente || textoSinPrecio);

    if (eqInfo.tieneMarcaOModelo && !tieneTrabajo && !precio) {
      contextoEquipoActual = {
        categoria: eqInfo.categoria,
        marca: eqInfo.marca,
        modelo: eqInfo.modelo || eqInfo.marca,
        notas: cliente || clientePendiente || ""
      };
      clientePendiente = "";
      continue;
    }

    const item = construirRegistroDesdeLinea(l, fechaCurso, contextoEquipoActual, clientePendiente);
    if (item) {
      clientePendiente = "";
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

// Permite corregir precio o cliente directo en la vista previa antes de guardar
window.actualizarCampoLote = function (idx, campo, valor) {
  if (!loteTemporal[idx]) return;
  if (campo === "precio") {
    const limpio = String(valor || "").trim();
    loteTemporal[idx].precio = limpio ? (formatearGuaranies(limpio) || limpio) : "";
  } else if (campo === "notas") {
    loteTemporal[idx].notas = String(valor || "").trim();
  }
  renderizarPreviewLote();
};

function renderizarPreviewLote() {
  const tbodyPreview = document.getElementById("tbody-preview-lote");
  const contPreview = document.getElementById("contenedor-preview-lote");
  const contResumenDias = document.getElementById("contenedor-resumen-dias");
  const gridResumenDias = document.getElementById("grid-resumen-dias");
  const cajaAlertaDup = document.getElementById("alerta-duplicados-lote");
  const resumen = document.getElementById("resumen-lote");
  const btnGuardarLote = document.getElementById("btn-guardar-lote");

  if (loteTemporal.length === 0) {
    contResumenDias?.classList.add("hidden");
    contPreview?.classList.add("hidden");
    if (cajaAlertaDup) cajaAlertaDup.className = "hidden";
    if (resumen) resumen.textContent = "Sin servicios en lista.";
    if (btnGuardarLote) btnGuardarLote.disabled = true;
    return;
  }

  const gruposPorFecha = {};
  let sumaTotalLote = 0;
  let conClienteCount = 0;
  const itemsConAlerta = [];

  loteTemporal.forEach((item, idx) => {
    const monto = obtenerMontoNumerico(item.precio);
    sumaTotalLote += monto;
    if (item.notas) conClienteCount++;
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
              Verifica si se cargó dos veces por error o si son dos equipos distintos. Puedes quitar una fila con <strong>"Quitar"</strong> o continuar:
            </p>
            <ul class="text-xs text-amber-950 space-y-1 pt-1">
              ${itemsConAlerta.map((al) => `
                <li class="bg-white/90 px-2.5 py-1.5 rounded border border-amber-300 flex flex-wrap items-center justify-between gap-2">
                  <span><strong>Fila #${al.idx} (${escapeHtml(al.fecha)} · ${escapeHtml(al.diaSemana)}):</strong> ${escapeHtml(al.marca)} ${escapeHtml(al.modelo)} — <em>${escapeHtml(al.trabajo)}</em></span>
                  <span class="text-[11px] font-bold text-rose-700">${escapeHtml(al.alertasDuplicado.map((a) => a.mensaje).join(" | "))}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>`;
    } else {
      cajaAlertaDup.className = "hidden";
      cajaAlertaDup.innerHTML = "";
    }
  }

  if (gridResumenDias) {
    gridResumenDias.innerHTML = Object.values(gruposPorFecha).map((g) => `
      <div class="bg-indigo-50/60 border border-indigo-200 rounded-xl p-3.5 space-y-2">
        <div class="flex items-center justify-between border-b border-indigo-200/70 pb-1.5">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-indigo-600 text-white font-extrabold text-xs uppercase">${escapeHtml(g.dia)}</span>
            <span class="font-bold text-slate-800 text-xs">${escapeHtml(g.fecha)}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold text-indigo-700">${g.items.length} serv.</span>
            ${g.subtotalGs > 0 ? `<span class="text-xs font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">Total: ${formatearGuaranies(g.subtotalGs)}</span>` : ""}
          </div>
        </div>
        <ul class="space-y-1.5 text-xs text-slate-700">
          ${g.items.map((it) => {
            const tieneDup = it.alertasDuplicado && it.alertasDuplicado.length > 0;
            return `
              <li class="flex items-start justify-between gap-2 ${tieneDup ? "bg-amber-100/90 border-amber-400" : "bg-white/80 border-indigo-100"} p-2 rounded-lg border">
                <div>
                  <strong class="text-slate-900">#${it.idx + 1} · ${escapeHtml(it.marca)} · ${escapeHtml(it.modelo)}</strong>
                  <span class="block text-slate-700">${escapeHtml(it.trabajo)}</span>
                  <span class="text-[10px] text-indigo-700 font-semibold block">${escapeHtml(it.intervencion)}</span>
                  ${it.notas ? `<span class="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">Cliente: ${escapeHtml(it.notas)}</span>` : ""}
                  ${tieneDup ? `<span class="text-[10px] font-extrabold text-rose-700 block mt-0.5">⚠️ ${escapeHtml(it.alertasDuplicado.map((a) => a.mensaje).join(" | "))}</span>` : ""}
                </div>
                <div class="flex flex-col items-end gap-1 shrink-0">
                  <span class="font-extrabold text-emerald-700 whitespace-nowrap">${escapeHtml(it.precio || "-")}</span>
                  <button type="button" onclick="window.quitarFilaDeLote(${it.idx})" class="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 hover:bg-rose-200 text-rose-700 font-bold cursor-pointer">Quitar</button>
                </div>
              </li>`;
          }).join("")}
        </ul>
      </div>
    `).join("");
  }

  const textoTotalGs = sumaTotalLote > 0 ? ` · Total: ${formatearGuaranies(sumaTotalLote)}` : "";
  const textoClientes = conClienteCount > 0 ? ` · ${conClienteCount} con cliente` : "";
  if (resumen) resumen.textContent = `¡${loteTemporal.length} servicio(s) en vista previa${textoTotalGs}${textoClientes}!`;

  if (tbodyPreview) {
    tbodyPreview.innerHTML = loteTemporal.map((item, idx) => {
      const tieneDup = item.alertasDuplicado && item.alertasDuplicado.length > 0;
      return `
        <tr class="${tieneDup ? "bg-amber-50 hover:bg-amber-100/70" : "hover:bg-slate-50"}">
          <td class="py-2 px-3 whitespace-nowrap">
            <div class="font-bold text-teal-700">#${idx + 1} · ${escapeHtml(item.fecha)}</div>
            <div class="text-[10px] font-extrabold uppercase text-indigo-600">${escapeHtml(item.diaSemana)}</div>
          </td>
          <td class="py-2 px-3 font-medium">${escapeHtml(item.categoria)}</td>
          <td class="py-2 px-3"><strong>${escapeHtml(item.marca)}</strong> · ${escapeHtml(item.modelo)}</td>
          <td class="py-2 px-3 text-indigo-700 font-semibold">${escapeHtml(item.intervencion)}</td>
          <td class="py-2 px-3 text-slate-800">
            <div>${escapeHtml(item.trabajo)}</div>
            ${tieneDup ? `<span class="inline-block mt-1 px-1.5 py-0.5 rounded bg-amber-200 text-amber-950 text-[10px] font-extrabold">⚠️ ${escapeHtml(item.alertasDuplicado.map((a) => a.mensaje).join(" | "))}</span>` : ""}
          </td>
          <td class="py-2 px-3 text-right whitespace-nowrap">
            <input
              type="text"
              value="${escapeHtml(item.precio || "")}"
              placeholder="Ej. 50.000"
              onchange="window.actualizarCampoLote(${idx}, 'precio', this.value)"
              class="w-24 text-right text-xs font-extrabold text-emerald-800 bg-emerald-50/60 border border-emerald-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </td>
          <td class="py-2 px-3 whitespace-nowrap">
            <div class="flex items-center justify-between gap-1.5">
              <input
                type="text"
                value="${escapeHtml(item.notas || "")}"
                placeholder="Cliente..."
                onchange="window.actualizarCampoLote(${idx}, 'notas', this.value)"
                class="w-24 text-xs font-semibold text-teal-900 bg-teal-50/50 border border-teal-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <button type="button" onclick="window.quitarFilaDeLote(${idx})" class="text-[11px] px-2 py-1 rounded bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-bold cursor-pointer">Quitar</button>
            </div>
          </td>
        </tr>`;
    }).join("");
  }

  contResumenDias?.classList.remove("hidden");
  contPreview?.classList.remove("hidden");
  if (btnGuardarLote) btnGuardarLote.disabled = false;
  inicializarIconos();
}

window.abrirModalCargaLote = function () {
  document.getElementById("inp-lunes-lote").value = obtenerLunesActualYYYYMMDD();
  document.getElementById("inp-texto-lote").value = "";
  document.getElementById("contenedor-preview-lote")?.classList.add("hidden");
  document.getElementById("contenedor-resumen-dias")?.classList.add("hidden");
  const cajaAlertaDup = document.getElementById("alerta-duplicados-lote");
  if (cajaAlertaDup) cajaAlertaDup.className = "hidden";
  document.getElementById("resumen-lote").textContent = "";
  document.getElementById("btn-guardar-lote").disabled = true;
  loteTemporal = [];
  mostrarModal("modal-lote");
  inicializarIconos();
};

window.cerrarModalLote = function () {
  ocultarModal("modal-lote");
};

window.analizarLote = function () {
  const texto = document.getElementById("inp-texto-lote").value.trim();
  const lunesVal = document.getElementById("inp-lunes-lote").value || obtenerLunesActualYYYYMMDD();
  if (!texto) return alert("Pega primero la lista de servicios.");

  loteTemporal = procesarTextoLote(texto, lunesVal);
  if (loteTemporal.length === 0) {
    alert("No se detectaron líneas de servicio válidas.");
    return;
  }
  renderizarPreviewLote();
};

window.quitarFilaDeLote = function (idx) {
  loteTemporal.splice(idx, 1);
  loteTemporal = evaluarDuplicadosEnLote(loteTemporal);
  renderizarPreviewLote();
};

window.guardarLoteConfirmado = async function () {
  if (!loteTemporal.length) return;

  const repetidosActivos = loteTemporal.filter((it) => it.alertasDuplicado && it.alertasDuplicado.length > 0);
  if (repetidosActivos.length > 0) {
    const listaAlerta = repetidosActivos
      .map((r) => `• ${r.fecha} (${r.diaSemana}): ${r.marca} ${r.modelo} - ${r.trabajo}`)
      .join("\n");
    const ok = confirm(
      `⚠️ ATENCIÓN: Estás por guardar ${repetidosActivos.length} servicio(s) repetido(s) en la misma fecha:\n\n` +
      `${listaAlerta}\n\n` +
      `¿Confirmas que son dispositivos distintos (Aceptar) o cancelar para quitar alguno?`
    );
    if (!ok) return;
  }

  const nuevosConID = loteTemporal.map((item, idx) => ({
    id: generarNuevoID(idx + 1),
    fecha: item.fecha,
    categoria: item.categoria,
    marca: item.marca,
    modelo: item.modelo,
    intervencion: item.intervencion,
    trabajo: item.trabajo,
    repuestos: item.repuestos,
    precio: formatearGuaranies(item.precio) || "",
    estado: "Entregado",
    notas: item.notas || "",
    tecnico: TECNICO_NOMBRE
  }));

  const nuevosNorm = normalizarRegistros(nuevosConID);
  servicios.push(...nuevosNorm);
  servicios = ordenarPorFechaYNumero(servicios);
  localStorage.setItem(CACHE_LOCAL_KEY, JSON.stringify(servicios));
  poblarSelectores();
  aplicarFiltros();
  ocultarModal("modal-lote");

  document.body.style.cursor = "wait";
  const res = await guardarLoteSupabase(nuevosNorm);
  document.body.style.cursor = "default";
  alert(res.ok
    ? `¡Se guardaron en Supabase ${nuevosNorm.length} servicio(s) correctamente!`
    : `Se guardaron localmente ${nuevosNorm.length} servicio(s), pero hubo un error al subir a Supabase.`
  );
};

// ============================================================================
// MODAL SUPABASE, CSV Y EVENTOS DE FILTRO
// ============================================================================
window.abrirModalSupabase = function () {
  const estadoTxt = document.getElementById("estado-migracion-texto");
  if (estadoTxt) estadoTxt.textContent = `Actualmente tienes ${servicios.length} registros de Junior cargados en pantalla.`;
  mostrarModal("modal-supabase");
  inicializarIconos();
};

window.cerrarModalSupabase = function () {
  ocultarModal("modal-supabase");
};

window.exportarCSV = function () {
  const encabezados = ["ID", "Fecha", "Día", "Categoría", "Marca", "Modelo", "Tipo de Intervención", "Trabajo Realizado", "Repuestos", "Precio (Gs)", "Estado", "Cliente / Notas"];
  const filas = ultimosFiltrados.map((s) => [
    s.id,
    s.fecha,
    s._dia || obtenerDiaSemana(s.fecha),
    s.categoria,
    s.marca,
    s.modelo,
    `"${String(s.intervencion).replace(/"/g, '""')}"`,
    `"${String(s.trabajo).replace(/"/g, '""')}"`,
    s.repuestos,
    s.precio || "",
    s.estado,
    `"${String(s.notas || "").replace(/"/g, '""')}"`
  ]);
  const csvContent = "\uFEFF" + [encabezados.join(";"), ...filas.map((f) => f.join(";"))].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "BD_Reparaciones_Junior_Almiron_Supabase.csv";
  a.click();
};

function configurarEventos() {
  document.getElementById("filtro-texto")?.addEventListener("input", () => {
    if (timerBusqueda) clearTimeout(timerBusqueda);
    timerBusqueda = setTimeout(aplicarFiltros, 75);
  });

  ["filtro-categoria", "filtro-marca", "filtro-intervencion", "filtro-fecha"].forEach((id) => {
    document.getElementById(id)?.addEventListener("change", aplicarFiltros);
  });

  document.querySelectorAll(".chip-cat").forEach((b) => {
    b.addEventListener("click", () => {
      const sel = document.getElementById("filtro-categoria");
      if (sel) {
        sel.value = sel.value === b.getAttribute("data-cat") ? "" : b.getAttribute("data-cat");
        aplicarFiltros();
      }
    });
  });

  document.querySelectorAll(".chip-marca").forEach((b) => {
    b.addEventListener("click", () => {
      const sel = document.getElementById("filtro-marca");
      if (sel) {
        sel.value = sel.value === b.getAttribute("data-marca") ? "" : b.getAttribute("data-marca");
        aplicarFiltros();
      }
    });
  });

  window.addEventListener("resize", () => {
    if ((window.innerWidth < 768) !== ultimoAnchoMovil) {
      ultimoAnchoMovil = window.innerWidth < 768;
      renderizarVista(ultimosFiltrados);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarIconos();
  configurarEventos();

  if (sessionStorage.getItem(AUTH_SESSION_KEY) === "true") {
    const login = document.getElementById("pantalla-login");
    const app = document.getElementById("app-contenido");
    if (login) login.style.display = "none";
    if (app) {
      app.classList.remove("hidden");
      app.style.display = "flex";
    }
    cargarBaseDeDatos();
    inicializarIconos();
  }
});