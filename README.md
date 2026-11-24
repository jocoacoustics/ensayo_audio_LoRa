# Jocotoco Messenger — GitHub Pages · v1.2.0

Sitio HTML estático **listo para subir directamente** a GitHub Pages. Autor: **Pedro Galindo**, Coordinación de Ciencia, IA y Tecnología Aplicada, Fundación Jocotoco.

## Para publicar

1. Descomprime el ZIP: `index.html` debe quedar en la raíz del repositorio.
2. Sube todo el contenido al repositorio de GitHub.
3. Configura `Settings → Pages → Deploy from a branch → main → / (root)`.
4. No hay compilación, backend ni claves. El mapa Folium carga ESRI/OSM/CARTO desde internet; los audios y la web son locales.

## Estructura

- `index.html`: informe ejecutivo ES/EN con la portada generativa aprobada.
- `.nojekyll`: publicación GitHub Pages.
- `assets/brand/`: originales SVG Jocotoco aportados en la maqueta institucional.
- `assets/images/`: imagen generativa aprobada basada en fotografía del prototipo urbano.
- `assets/css/`: estilos Jocotoco originales, ajustes y representación de la UX v3 aportada.
- `assets/js/app_v11.js`: interacción bilingüe, mensajes reales, reproductores WAV, selector compartido de ensayos que sincroniza UX y mapa, con horas recuperadas.
- `assets/audio/wav/`: **17 WAV reales** decodificados de JCV1 del nodo receptor.
- `assets/audio/jcv1/`: **17 JCV1 originales** recuperados de JO01.
- `mapas/folium_es.html`, `mapas/folium_en.html`: dos versiones lingüísticas del **mismo mapa** de los dos ensayos. Capas ESRI Satélite, ESRI Topográfico, OSM y CARTO. Marcadores, receptores JO01, polígonos circulares/radios, y control de capas.
- `data/evidencias.json` / `.js`: observaciones, distancias y hashes.
- `data/distancias_ensayos.csv`: cálculo geodésico de las ubicaciones.

## Evidencia y límite de inferencia

Dos ensayos urbanos (primer recorrido y mediodía), **un mapa** y dos coordenadas exactas de receptor suministradas por el autor.

- Ensayo 1: receptor JO01 en **(-0.20501427442791853, -78.48139476637581)**; 4/4 coordenadas halladas en los dos historiales; distancia máxima documentada **140,9 m**.
- Ensayo 2: receptor JO01 en **(-0.17471069990614604, -78.48516267975725)**; 3/5 coordenadas halladas en los dos historiales; distancia máxima documentada **186,2 m**. Los puntos a **343,8 m** y **523,9 m** únicamente constan en JO02, sin recepción verificable desde el archivo recuperado.
- 17 audios con **payload Codec2 idéntico** en ambos nodos (SHA-256); 10 de ellos aparecen en la interfaz como evidencia de las franjas de ambos ensayos, 4 + 6.
- Las burbujas de audio de JO02 y JO01 comparten WAV por tener el contenido comprimido cotejado; se reproduce el WAV obtenido del original de **JO01**, no un WAV capturado por separado de JO02.
- **No hay relación uno a uno verificada entre un mensaje de coordenadas y un audio**. Se muestra material de la misma sesión, agrupado por el tiempo registrado en JO02. Los relojes de las Heltec reportaban `clockSynced: false`.
- No se publican chats casuales; solo coordenadas y audios de esas sesiones.
- Los círculos son **distancias reales en metros**, no mapa de calor, cobertura radioeléctrica ni mediciones de RSSI/SNR en cada punto.
- Los puntos 8–9 ausentes de JO01 no demuestran categóricamente que nunca se recibieran; solo no están presentes en el historial recuperado.
- La UI reproduce de forma fiel la sección mensajes/audio de la maqueta UX v3 entregada, **en modo consulta**, sin controles ficticios de envío ni estados de radio en tiempo real.
- **No es un ensayo forestal ni garantiza alcance operativo en bosque.**

## Fuente de datos

ZIP de extracción de JO01 y JO02 del 24 de noviembre de 2026. La fuente sin procesar se mantiene en archivos de evidencia del proyecto, fuera del sitio promocional. La página expone JCV1/WAV cotejados y mensajes de coordenadas.

## Correcciones v1.2.0

- Ensayo 1, Ensayo 2 y Ambos comparten un único estado entre la UX y los mapas Folium. Tanto el selector encima de la UX como el del mapa están sincronizados.
- Ambos ensayos se muestran por defecto. Se conservaron los dos receptores y los nueve mensajes georreferenciados.
- Nueve marcadores tipo pin, uno en cada punto visitado; sus colores identifican coincidencia entre historiales.
- Etiquetas de los anillos discretas, oscurecidas y con valor en metros.
- Timestamps de texto y voz extraídos de los registros JO02, hora local Ecuador, solo orientativos: `clockSynced=false`.
- No se presenta RSSI/SNR como dato por ubicación.

## Regenerar el mapa (solo mantenimiento)

`tools/GENERAR_MAPAS.py` reconstruye los dos mapas Folium a partir de `data/evidencias.json`.
Requiere Python con `folium` y `geographiclib` solo si se quiere regenerar.
La publicación estática **no necesita ejecutar Python**.
