/* Jocotoco Messenger v1.2 · Historical read-only UX v3 with real WAV and bilingual Folium map. */
(()=>{'use strict';
const dataset=window.JOCO_EVIDENCIAS;
if(!dataset||!dataset.coords||!dataset.sessionClips) {document.body.insertAdjacentText('afterbegin','Datos del ensayo no disponibles');return;}
  const d = {
    es: {
      navLabel:'CONTENIDO',nav0:'Inicio',nav1:'El logro',nav2:'Cómo funciona',nav3:'Mensajes y audio',nav4:'Mapa del ensayo',nav5:'Qué sigue',
      navFoot:'Ensayo urbano · noviembre de 2026',topLabel:'RESULTADO DE INNOVACIÓN APLICADA',overline:'PROTOTIPO FUNCIONAL · ENSAYO URBANO',
      title:'Jocotoco Messenger',subtitle:'Audio y coordenadas por radio, sin cobertura celular entre nodos.',
      authorRole:'Coordinador de Ciencia, IA y Tecnología Aplicada',heroTag:'Ensayo urbano · noviembre de 2026',heroRight:'Dos dispositivos Heltec V4 · Enlace LoRa',
      contextTitle:'Una prueba funcional, todavía no una red de bosque',contextText:'En un ensayo urbano demostramos el envío de información entre dos dispositivos sin depender de internet ni cobertura celular para el enlace de radio.',contextBadge:'Etapa: prototipo validado en entorno urbano',
      section1:'Lo que demostramos',sec1sub:'Resultados contrastados con archivos extraídos de JO01 y JO02.',
      metric1:'Audios coincidentes',metric1sub:'17 grabaciones con contenido Codec2 idéntico en ambos extremos',metric2:'Ubicaciones enviadas',metric2sub:'Coordenadas geográficas reales enviadas como mensajes',
      metric3:'En los dos historiales',metric3sub:'Siete mensajes de ubicación conservados en ambos nodos',metric4:'Internet entre nodos',metric4sub:'El enlace LoRa funciona sin red celular',
      message:'Un pequeño prototipo ya consigue transportar algo valioso: una voz y una ubicación a través de un enlace de radio local.',
      section2:'Una conexión sencilla',sec2sub:'Del teléfono a la radio, y de la radio a una computadora. El internet no participa en el tramo LoRa.',
      phone:'Celular',phoneSub:'Interfaz Jocotoco',jo02Sub:'Nodo emisor',jo01Sub:'Nodo receptor',pc:'Computadora',pcSub:'Escucha y consulta',
      wifi:'Wi-Fi local en cada extremo',radio:'LoRa · 915 MHz · entre nodos',
      section3:'Lo que salió y lo que llegó',sec3sub:'Recreación de la interfaz Messenger usando únicamente mensajes reales de coordenadas. Selecciona una ubicación para ver la evidencia de audio de la misma sesión.',
      leftTag:'JO01 · RECEPTOR',leftSub:'Historial recuperado del nodo receptor',rightTag:'JO02 · EMISOR',rightSub:'Historial recuperado del nodo emisor',
      point:'Ubicación',received:'Recibido',delivered:'Entregado',unconfirmed:'Sin confirmación',notInHistory:'No consta en el historial recuperado',
      proof:'EVIDENCIA CONSULTABLE',audioFocus:'Ubicación seleccionada',both:'Presente en ambos dispositivos',onlySender:'Registrada solo en JO02',
      audioTitle:'Audio de la misma secuencia de pruebas',audioNone:'Para esta ubicación no se puede establecer un audio cercano en los registros recuperados.',
      listening:'Escuchar grabación real recibida en JO01',audioDetails:'Audio JO01 #{id} · {duration} s · cotejado con JO02',wav:'Abrir WAV',
      evidenceCaveat:'Los audios se muestran por cercanía en los registros de la prueba. No existe un identificador que vincule de forma inequívoca cada audio con un mensaje de coordenadas, y los relojes de los nodos no estaban sincronizados.',
      legendBoth:'7 ubicaciones en ambos historiales',legendOnly:'2 ubicaciones solo en el historial JO02',legendAudio:'6 audios de referencia disponibles',
      section4:'Coordenadas sobre el territorio',sec4sub:'Nueve ubicaciones tomadas de los mensajes enviados; no es una trayectoria GPS continua.',
      mapTitle:'Mapa interactivo Folium · imágenes satelitales ESRI',mapAside:'Capas y controles dentro del mapa',mapNote:'Verde: ubicación conservada en JO01 y JO02. Dorado: ubicación conservada solo en JO02. Las capas satelitales requieren conexión a internet; las coordenadas proceden de los mensajes reales.',
      section5:'De la idea a una capacidad real',sec5sub:'El valor del prototipo está en integrar componentes, desarrollar el software y verificar el resultado en ambos extremos.',
      lesson1:'Integración propia',lesson1Text:'Dos Heltec V4, micrófono digital, conexión local con teléfono y PC, e interfaz de mensajería Jocotoco.',
      lesson2:'Audio por radio',lesson2Text:'Compresión de voz, división en paquetes, transmisión LoRa y reconstrucción de archivos escuchables en el receptor.',
      lesson3:'Evidencia comprobable',lesson3Text:'Extracción independiente desde ambos nodos, cotejo de 17 grabaciones y recuperación de los mensajes espaciales.',
      nextTitle:'El siguiente paso es probarlo en condiciones de conservación',nextText:'Evaluar alcance, consumo de energía, estabilidad, retransmisión y utilidad operativa en un entorno de bosque. Este ensayo urbano no demuestra todavía cobertura forestal.',nextPill:'Siguiente fase · evaluación en terreno',
      provenance:'Nota de lectura: los 17 audios se cotejaron mediante la huella SHA-256 del contenido Codec2. Dos ubicaciones no aparecen en el historial conservado de JO01; esto no demuestra que nunca fueran recibidas. Los acuses y la recepción tampoco deben confundirse.',
      footerTitle:'Jocotoco Messenger · demostración de tecnología aplicada',footerSub:'Pedro Galindo · Fundación Jocotoco · noviembre de 2026',back:'Volver arriba',
      idLabel:'Mensaje',playHint:'Escuchar',study:'Prototipo de comunicación local'
    },
    en: {
      navLabel:'CONTENTS',nav0:'Home',nav1:'What we achieved',nav2:'How it works',nav3:'Messages & audio',nav4:'Trial map',nav5:'What comes next',
      navFoot:'Urban trial · November 2026',topLabel:'APPLIED INNOVATION RESULT',overline:'WORKING PROTOTYPE · URBAN TRIAL',
      title:'Jocotoco Messenger',subtitle:'Voice recordings and coordinates over radio, with no cellular coverage needed between nodes.',
      authorRole:'Science, AI & Applied Technology Coordinator',heroTag:'Urban trial · November 2026',heroRight:'Two Heltec V4 devices · LoRa link',
      contextTitle:'A working prototype, not yet a forest network',contextText:'An urban trial demonstrated information exchange between two devices using a radio link that needs neither internet nor cellular coverage.',contextBadge:'Stage: urban proof of concept',
      section1:'What we demonstrated',sec1sub:'Results checked against files retrieved independently from JO01 and JO02.',
      metric1:'Matching recordings',metric1sub:'17 voice recordings with identical Codec2 payloads at both ends',metric2:'Sent locations',metric2sub:'Real geographic coordinates transmitted as messages',
      metric3:'In both histories',metric3sub:'Seven location messages preserved on both nodes',metric4:'Internet between nodes',metric4sub:'The LoRa link operates without cellular service',
      message:'A small prototype already carries something valuable: a voice recording and a location across a local radio link.',
      section2:'One straightforward connection',sec2sub:'From phone to radio, and from radio to computer. Internet is not involved in the LoRa hop.',
      phone:'Phone',phoneSub:'Jocotoco interface',jo02Sub:'Sending node',jo01Sub:'Receiving node',pc:'Computer',pcSub:'Listen and review',
      wifi:'Local Wi-Fi at each end',radio:'LoRa · 915 MHz · node to node',
      section3:'What was sent, what arrived',sec3sub:'Recreated Messenger interface using only real coordinate messages. Select a location to inspect an audio example from the same test period.',
      leftTag:'JO01 · RECEIVER',leftSub:'Recovered history on the receiving node',rightTag:'JO02 · SENDER',rightSub:'Recovered history on the sending node',
      point:'Location',received:'Received',delivered:'Delivered',unconfirmed:'No acknowledgement',notInHistory:'Not in the recovered history',
      proof:'RECOVERED EVIDENCE',audioFocus:'Selected location',both:'Present on both devices',onlySender:'Recorded only on JO02',
      audioTitle:'Audio from the same series of tests',audioNone:'No recording can be reliably associated by proximity with this location in the recovered records.',
      listening:'Listen to actual recording recovered on JO01',audioDetails:'JO01 audio #{id} · {duration}s · cross-checked with JO02',wav:'Open WAV',
      evidenceCaveat:'Audio examples are grouped by proximity in the trial records. No shared identifier uniquely links each recording to its coordinate message, and node clocks were not synchronized.',
      legendBoth:'7 locations in both histories',legendOnly:'2 locations in JO02 history only',legendAudio:'6 reference recordings available',
      section4:'Coordinates in geographic context',sec4sub:'Nine locations from transmitted text messages, not a continuous GPS track.',
      mapTitle:'Interactive Folium map · ESRI satellite imagery',mapAside:'Layers and controls within the map',mapNote:'Green: location preserved on JO01 and JO02. Gold: preserved on JO02 only. Satellite basemap tiles require an internet connection; the coordinates come from actual messages.',
      section5:'From an idea to working capability',sec5sub:'The achievement is integrating the hardware, developing the software, and validating files at both ends.',
      lesson1:'In-house integration',lesson1Text:'Two Heltec V4 boards, a digital microphone, phone and laptop Wi-Fi access, and the Jocotoco messaging interface.',
      lesson2:'Audio over radio',lesson2Text:'Voice compression, packet splitting, LoRa transfer and reconstruction of playable recordings at the receiver.',
      lesson3:'Verifiable evidence',lesson3Text:'Independent extraction from both nodes, 17 matched recordings, and recovery of geographic messages.',
      nextTitle:'Next: test this capability in conservation conditions',nextText:'Assess range, power use, reliability, relaying and operational value in forest environments. This urban trial does not yet establish forest coverage.',nextPill:'Next phase · field evaluation',
      provenance:'Evidence note: 17 recordings were matched using SHA-256 fingerprints of their Codec2 payloads. Two locations are absent from the saved JO01 history; this does not prove they were never received. Delivery acknowledgements and reception are not the same event.',
      footerTitle:'Jocotoco Messenger · applied technology demonstration',footerSub:'Pedro Galindo · Fundación Jocotoco · November 2026',back:'Back to top',
      idLabel:'Message',playHint:'Listen',study:'Local communication prototype'
    }
  };

Object.assign(d.es, {
heroTag:'Dos ensayos urbanos · noviembre de 2026',nav4:'Mapa de los dos ensayos',navFoot:'Dos ensayos urbanos · noviembre de 2026',
overline:'DOS ENSAYOS URBANOS · PROTOTIPO FUNCIONAL',contextTitle:'Dos ensayos urbanos, todavía no una red de bosque',
contextText:'En dos ensayos urbanos demostramos el envío de coordenadas y grabaciones de voz entre dos dispositivos, sin cobertura celular ni internet en el enlace LoRa.',
sec1sub:'Dos recorridos cotejados con la evidencia recuperada de JO01 y JO02.',metric4:'Ensayos urbanos',metric4sub:'Dos recorridos con el mismo prototipo de radio',
section3:'La conversación, vista desde ambos nodos',sec3sub:'La interfaz de Jocotoco Messenger, reconstruida con coordenadas reales y audios cotejados de ambos ensayos.',
section4:'Dos ensayos en un solo mapa',sec4sub:'Ubicaciones enviadas por mensaje y anillos de distancia desde cada receptor. No son curvas de señal ni zonas de cobertura.',
mapTitle:'Mapa Folium · ESRI / OpenStreetMap / CARTO · radios en metros',
mapNote:'Verde: coordenada presente en JO01 y JO02. Ocre: solo JO02. Los círculos representan distancia geodésica desde los receptores, no intensidad de señal ni cobertura. Las capas base requieren internet.',
trialOne:'Ensayo 1 · primer recorrido',trialTwo:'Ensayo 2 · mediodía',mapBoth:'Ambos ensayos',uxHistory:'Historial recuperado · consulta',
uxReceiver:'Nodo receptor',uxSender:'Nodo emisor',uxArchived:'ARCHIVO',uxReadonly:'Mensajes históricos · solo lectura',
uxNotice:'Las grabaciones pertenecen a la misma sesión del ensayo según los registros de JO02; las horas se recuperaron de los mensajes y las grabaciones, pero los relojes de los nodos no estaban sincronizados. No existe vinculación individual verificada entre cada audio y cada coordenada. Estos reproductores contienen audio real de JO01, no muestras sintéticas; tampoco existe conexión en vivo con las radios.',
mapTrial1:'Ensayo 1 · primer recorrido',mapTrial2:'Ensayo 2 · mediodía',verified:'documentados',mapOpen:'Abrir mapa completo ↗',
distancesTitle:'Distancias desde cada receptor',distancesNote:'Cálculo geodésico WGS84 · mensajes reales',
session:'ENSAYO',audio:'Audio',audioPeriod:'Grabación de la sesión',incoming:'Recibido',sent:'Enviado',unconfirmed:'Sin confirmación',
matched:'Cotejado JO01 ↔ JO02',listen:'Reproducir audio real',pause:'Pausar audio',
noReceipt:'No consta en JO01',distance:'Distancia',loc:'Ubicación',
trialSummary1:'Primer ensayo · recorrido urbano',trialSummary2:'Segundo ensayo · mediodía',trialSummaryAll:'Dos ensayos urbanos',timeCaveat:'Hora registrada en JO02; reloj no sincronizado',
receivedCount:'ubicaciones en ambos historiales',voiceCount:'audios reales de la sesión',
provenance:'La cotejación de 17 audios compara las huellas SHA-256 del contenido Codec2. Se registraron cuatro ubicaciones del primer ensayo y cinco del segundo; dos de las últimas no constan en el historial recuperado de JO01. El registro no acredita cobertura a mayor distancia ni permite asociar una voz a una ubicación concreta. Los relojes de las radios no estaban sincronizados.'
});
Object.assign(d.en, {
heroTag:'Two urban trials · November 2026',nav4:'Two-trial map',navFoot:'Two urban trials · November 2026',
overline:'TWO URBAN TRIALS · WORKING PROTOTYPE',contextTitle:'Two urban trials, not yet a forest network',
contextText:'Across two urban trials we exchanged coordinates and real voice recordings between two radios without cellular coverage or internet over their LoRa link.',
sec1sub:'Two trials cross-checked against evidence recovered from JO01 and JO02.',metric4:'Urban trials',metric4sub:'Two routes with the same radio prototype',
section3:'The conversation, from both devices',sec3sub:'The Jocotoco Messenger interface reconstructed with real coordinates and verified recordings from both trials.',
section4:'Two trials, one map',sec4sub:'Coordinates sent in messages and distance rings from each receiver. These are not signal contours or coverage zones.',
mapTitle:'Folium map · ESRI / OpenStreetMap / CARTO · distances in meters',
mapNote:'Green: coordinate present on JO01 and JO02. Ochre: only on JO02. Rings represent geodesic distances from the receivers, not signal strength or coverage. Basemap tiles require internet.',
trialOne:'Trial 1 · first route',trialTwo:'Trial 2 · midday',mapBoth:'Both trials',uxHistory:'Recovered history · read-only',
uxReceiver:'Receiving node',uxSender:'Sending node',uxArchived:'ARCHIVE',uxReadonly:'Historical messages · read-only',
uxNotice:'Recordings are grouped into the same trial session using JO02 logs. The recorded times are shown, but node clocks were not synchronized; an individual voice recording cannot be reliably matched to an individual coordinate message. The players use actual audio from JO01, not synthetic sounds, and the interface is not connected live to the radios.',
mapTrial1:'Trial 1 · first route',mapTrial2:'Trial 2 · midday',verified:'documented',mapOpen:'Open full map ↗',
distancesTitle:'Distances from each receiver',distancesNote:'WGS84 geodesic calculation · actual messages',
session:'TRIAL',audio:'Audio',audioPeriod:'Session recording',incoming:'Received',sent:'Sent',unconfirmed:'No acknowledgement',
matched:'Matched JO01 ↔ JO02',listen:'Play actual audio',pause:'Pause audio',
noReceipt:'Not recorded on JO01',distance:'Distance',loc:'Location',
trialSummary1:'Trial one · urban route',trialSummary2:'Trial two · midday',trialSummaryAll:'Both urban trials',timeCaveat:'Time logged by JO02; clock not synchronized',
receivedCount:'locations found in both histories',voiceCount:'real audio clips from this session',
provenance:'17 audio payloads matched via SHA-256 of Codec2 content. Four coordinates belong to the first trial and five to the second; two from the latter are absent from the recovered JO01 history. This does not prove coverage at longer ranges or establish a one-to-one location/audio pairing. Radio clocks were not synchronized.'
});


let lang='es',trial='all',mobile='JO01',playing=null;
const $=q=>document.querySelector(q),all=q=>Array.from(document.querySelectorAll(q));
const nodeId=side=>side==='JO01'?'01':'02';
const safeText=(x)=>String(x ?? '');
function iconButton(text,cls,aria){let b=document.createElement('button');b.type='button';b.className=cls;b.textContent=text;if(aria)b.setAttribute('aria-label',aria);return b;}
function tag(name,cls,text){let e=document.createElement(name);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
function currentItems(){return dataset.coords.filter(p=>trial==='all'||p.trial===trial);}
function currentClips(){return dataset.sessionClips.filter(a=>trial==='all'||a.trial===trial);}
function eventTime(epoch){
 const n=Number(epoch);
 if(!Number.isFinite(n)||n<=0)return '—';
 return new Intl.DateTimeFormat(lang==='es'?'es-EC':'en-GB',{timeZone:'America/Guayaquil',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(n*1000));
}
function timeChip(epoch){
 const el=tag('span','ux-v3-time','◷ '+eventTime(epoch));
 el.title=d[lang].timeCaveat;
 return el;
}
function pauseCurrent(){if(playing){playing.audio.pause();playing.audio.currentTime=0;refreshPlay(playing.parent,false,0);playing=null;}}
function refreshPlay(parent,isPlaying,ratio){const btn=parent.querySelector('.ux-v3-play');if(btn){btn.textContent=isPlaying?'❚❚':'▶';btn.setAttribute('aria-label',isPlaying?d[lang].pause:d[lang].listen)};
 const bars=parent.querySelectorAll('.ux-v3-wave i');bars.forEach((b,j)=>b.classList.toggle('active',(j+1)/bars.length<=ratio));
 const ctr=parent.querySelector('.ux-v3-voice-sub strong');const max=Number(parent.dataset.duration);
 if(ctr)ctr.textContent=(isPlaying?Math.floor(max*ratio)+' / ':'')+max.toFixed(1)+' s';}
function newMessage(p,side){
 const outgoing=side==='JO02';
 const row=tag('div','ux-v3-msg-row '+(outgoing?'outgoing':'incoming'));
 row.dataset.message=p.id;
 if(!outgoing)row.append(tag('span','ux-v3-msg-avatar','02'));
 const bubble=tag('div','ux-v3-bubble');
 bubble.append(tag('div','ux-v3-msg-id',`JO02 → JO01 · ${d[lang].loc} ${p.number} · #${String(p.id).slice(-6)}`));
 bubble.append(tag('p','ux-v3-msg-text',p.text));
 const meta=tag('div','ux-v3-meta');
 meta.append(tag('span','',`${p.distanceM.toLocaleString(lang==='es'?'es-EC':'en-US',{maximumFractionDigits:1})} m`));
 meta.append(timeChip(p.epoch));
 if(outgoing){if(p.sent_status==='Entregado')meta.append(tag('span','ux-v3-ticks','✓✓'));else meta.append(tag('span','ux-v3-ticks pending','◷'));meta.append(tag('span','',p.sent_status==='Entregado'?d[lang].sent:d[lang].unconfirmed));}
 else meta.append(tag('span','',d[lang].incoming+' ✓'));
 bubble.append(meta);row.append(bubble);return row;
}
function newAudio(a,side){
 const outgoing=side==='JO02';
 const row=tag('div','ux-v3-msg-row '+(outgoing?'outgoing':'incoming'));row.dataset.voice=String(a.jo01Id);
 if(!outgoing)row.append(tag('span','ux-v3-msg-avatar','02'));
 const bubble=tag('div','ux-v3-bubble');
 bubble.append(tag('div','ux-v3-msg-id',`JO02 → JO01 · ${d[lang].audio} #${a['jo'+nodeId(side)+'Id']}`));
 const audiowrap=tag('div','ux-v3-voice');audiowrap.dataset.duration=String(a.durationSeconds);
 const play=iconButton('▶','ux-v3-play',d[lang].listen);
 const wavebox=tag('div','ux-v3-wavebox');const waveline=tag('div','ux-v3-wave');waveline.title=(lang==='es'?'Buscar en el audio':'Seek within audio');waveline.setAttribute('role','slider');waveline.setAttribute('tabindex','0');waveline.setAttribute('aria-label',waveline.title);waveline.setAttribute('aria-valuemin','0');waveline.setAttribute('aria-valuemax','100');waveline.setAttribute('aria-valuenow','0');
 a.waveform.forEach(val=>{let i=tag('i');i.style.height=Math.max(3,Math.round(val*19))+'px';waveline.append(i);});
 const footer=tag('div','ux-v3-voice-sub');footer.append(tag('strong','',a.durationSeconds.toFixed(1)+' s'));
 const wav=tag('a','', 'WAV');wav.href=a.wavPath;wav.download='JO01_ID'+String(a.jo01Id).padStart(4,'0')+'.wav';wav.title=d[lang].matched;
 const raw=tag('a','','JCV1');raw.href=a.jcv1Path;raw.download='JO01_ID'+String(a.jo01Id).padStart(4,'0')+'.jcv1';raw.title=lang==='es'?'Original comprimido':'Original compressed recording';
 footer.append(wav,raw);wavebox.append(waveline,footer);audiowrap.append(play,wavebox);bubble.append(audiowrap);
 const meta=tag('div','ux-v3-meta');meta.append(timeChip(a.orderEpochJO02));meta.append(tag('span','',outgoing?d[lang].matched:d[lang].incoming+' ✓'));bubble.append(meta);row.append(bubble);
 let player=null;
 const advance=(ratio)=>{const r=Math.max(0,Math.min(1,ratio));if(!player)player=new Audio(a.wavPath);player.currentTime=player.duration?r*player.duration:r*a.durationSeconds;refreshPlay(audiowrap,!player.paused,r);};
 const start=()=>{if(playing&&playing.parent===audiowrap){if(playing.audio.paused){playing.audio.play().then(()=>refreshPlay(audiowrap,true,player.currentTime/player.duration)).catch(()=>{});}else{playing.audio.pause();refreshPlay(audiowrap,false,player.currentTime/player.duration);}return;}
 pauseCurrent();player=player||new Audio(a.wavPath);playing={audio:player,parent:audiowrap};
 player.addEventListener('timeupdate',()=>{if(playing&&playing.parent===audiowrap){const progress=player.currentTime/(player.duration||a.durationSeconds);refreshPlay(audiowrap,!player.paused,progress);waveline.setAttribute('aria-valuenow',String(Math.round(progress*100)));}});
 player.addEventListener('ended',()=>{if(playing&&playing.parent===audiowrap){refreshPlay(audiowrap,false,0);playing=null;}});
 player.play().then(()=>refreshPlay(audiowrap,true,0)).catch(()=>{play.title='No se pudo abrir el WAV';playing=null;});};
 play.addEventListener('click',start);
 waveline.addEventListener('click',(evt)=>{if(!player){player=new Audio(a.wavPath);}const rect=waveline.getBoundingClientRect();const r=(evt.clientX-rect.left)/rect.width;advance(r);});
 waveline.addEventListener('keydown',(evt)=>{if(evt.key==='ArrowRight'||evt.key==='ArrowLeft'){evt.preventDefault();if(!player)player=new Audio(a.wavPath);let r=player.currentTime/(player.duration||a.durationSeconds);r+=(evt.key==='ArrowRight'?0.05:-0.05);advance(r);}});
 return row;
}
function renderPhones(){
 pauseCurrent();const t=d[lang];
 for(const side of ['JO01','JO02']){
   const panel=side==='JO01'?$('#chat-left'):$('#chat-right');if(!panel)continue;
   const frag=document.createDocumentFragment();
   const trials=trial==='all'?[1,2]:[trial];
   for(const n of trials){
     const pts=dataset.coords.filter(p=>p.trial===n && (side==='JO02'||p.received));
     const clips=dataset.sessionClips.filter(a=>a.trial===n);
     const events=[...pts.map(p=>({type:'coord',sort:p.epoch,content:p})),...clips.map(a=>({type:'audio',sort:a.orderEpochJO02,content:a}))].sort((a,b)=>a.sort-b.sort||(a.type==='coord'?-1:1));
     const label=(n===1?t.trialOne:t.trialTwo)+' · 23 '+(lang==='es'?'NOV':'NOV')+' 2026';
     frag.append(tag('div','ux-v3-day',label.toUpperCase()));
     events.forEach(e=>frag.append(e.type==='coord'?newMessage(e.content,side):newAudio(e.content,side)));
   }
   panel.replaceChildren(frag);panel.scrollTop=0;
 }
 const pts=currentItems(),matched=pts.filter(p=>p.received).length,voice=currentClips().length;
 $('#ux-trial-summary').textContent=trial==='all'?t.trialSummaryAll:trial===1?t.trialSummary1:t.trialSummary2;
 $('#ux-trial-reception').textContent=matched+'/'+pts.length+' '+t.receivedCount;
 $('#ux-trial-clips').textContent=voice+' '+t.voiceCount;
 all('[data-trial]').forEach(b=>{const isActive=b.dataset.trial===String(trial);b.classList.toggle('active',isActive);b.setAttribute('aria-pressed',String(isActive));});
}
function renderDistances(){
 const root=$('#distance-grid');if(!root)return;
 root.replaceChildren();for(const n of [1,2]){
 const group=tag('section','distance-group');group.append(tag('strong','',n===1?d[lang].mapTrial1:d[lang].mapTrial2));
 dataset.coords.filter(x=>x.trial===n).forEach(p=>{
 let row=tag('div','distance-item');row.append(tag('span','distance-no'+(!p.received?' unconfirmed':''),String(p.number)));
 const body=tag('div');body.append(tag('div','',p.received?d[lang].incoming:d[lang].noReceipt));body.append(tag('div','distance-state',p.lat.toFixed(7)+', '+p.lon.toFixed(7)));row.append(body);row.append(tag('b','',p.distanceM.toLocaleString(lang==='es'?'es-EC':'en-US',{minimumFractionDigits:1,maximumFractionDigits:1})+' m'));group.append(row);
 });root.append(group);
 }
}

function setMapFocus(which){
 const value=String(which);
 const frame=$('#folium');
 if(frame&&frame.contentWindow)frame.contentWindow.postMessage({type:'joco-focus',trial:value},'*');
 all('[data-map-focus]').forEach(btn=>{const active=btn.dataset.mapFocus===value;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});
}
function selectTrial(value){
 const next=String(value)==='all'?'all':Number(value);
 if(!['all',1,2].includes(next))return;
 trial=next;renderPhones();setMapFocus(next);
}

function translate(){
 const t=d[lang];document.documentElement.lang=lang;document.title='Jocotoco Messenger · '+(lang==='es'?'Dos ensayos urbanos':'Two urban trials');
 all('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(Object.prototype.hasOwnProperty.call(t,k))el.textContent=t[k];});
 all('[data-lang]').forEach(b=>{let v=b.dataset.lang===lang;b.classList.toggle('active',v);b.setAttribute('aria-pressed',String(v));});
 const map=$('#folium'),mapfile='mapas/folium_'+lang+'.html';
 if(map){
   if(map.getAttribute('src')!==mapfile){map.src=mapfile;}
   map.title=t.mapTitle;
 }
 const mapLink=$('#map-open');if(mapLink)mapLink.href=mapfile;
 renderPhones();renderDistances();
 setTimeout(()=>setMapFocus(trial),120);
}
all('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;translate();}));
all('[data-trial]').forEach(b=>b.addEventListener('click',()=>selectTrial(b.dataset.trial)));
all('[data-map-focus]').forEach(b=>b.addEventListener('click',()=>selectTrial(b.dataset.mapFocus)));
$('#folium')?.addEventListener('load',()=>setTimeout(()=>setMapFocus(trial),150));
window.addEventListener('message',event=>{if(event.source===$('#folium')?.contentWindow && event.data?.type==='joco-map-ready')setMapFocus(trial);});
all('[data-mobile-node]').forEach(b=>b.addEventListener('click',()=>{mobile=b.dataset.mobileNode;$('.ux-v3-pair').dataset.mobile=mobile;all('[data-mobile-node]').forEach(x=>x.classList.toggle('active',x.dataset.mobileNode===mobile));}));
all('.toc-link').forEach(a=>a.addEventListener('click',()=>$('#shell').classList.remove('mobile-open')));
$('#mobile-menu')?.addEventListener('click',()=>$('#shell').classList.toggle('mobile-open'));
$('#sidebar-close')?.addEventListener('click',()=>{if(window.innerWidth>950)$('#shell').classList.toggle('collapsed');else $('#shell').classList.remove('mobile-open');});
$('#shade')?.addEventListener('click',()=>$('#shell').classList.remove('mobile-open'));
$('#collapse-sidebar')?.addEventListener('click',()=>$('#shell').classList.toggle('collapsed'));
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{const hit=entries.find(e=>e.isIntersecting);if(hit){all('.toc-link').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+hit.target.id));}},{rootMargin:'-16% 0px -68% 0px',threshold:0});
 all('section[id]').forEach(s=>observer.observe(s));
}
translate();
})();
