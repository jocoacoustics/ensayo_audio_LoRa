from pathlib import Path
import html,json,math
import folium
from folium import FeatureGroup, Marker, Circle, DivIcon
from branca.element import Element
from geographiclib.geodesic import Geodesic
root=Path(__file__).resolve().parent.parent
data=json.loads((root/'data/evidencias.json').read_text(encoding='utf-8'))
points=data['coords']
receivers=data['receivers']
rings={50:('#58A7C8','#145873'),100:('#73B99F','#1E634B'),150:('#C1C05F','#555F20'),200:('#D9A34D','#784C1F'),350:('#C97F51','#794020'),550:('#A97073','#66333B')}
map_head='''<style>
.geo-pin{width:29px;height:29px;position:relative;background:var(--pin);border:3px solid white;border-radius:52% 52% 52% 0;transform:rotate(-45deg);box-shadow:0 3px 11px rgba(5,38,31,.46);display:grid;place-items:center;transition:filter .12s ease}
.geo-pin span{transform:rotate(45deg);font:800 12px Inter,Arial,sans-serif;color:#fff;text-shadow:0 1px 3px #0003;line-height:1}
.geo-pin:hover{filter:brightness(1.2)}
.geo-pin.only{--pin:#B57C33}
.ring-chip{display:inline-flex;align-items:center;gap:5px;padding:5px 8px;border-radius:8px;background:var(--chip);color:#fff;border:1px solid var(--line);box-shadow:0 2px 12px #0004;white-space:nowrap;font:800 11px Inter,Arial,sans-serif;text-shadow:0 1px 1px #0003}
.ring-chip:before{content:"";width:6px;height:6px;background:var(--line);border:1px solid #fff;border-radius:50%;display:block;flex:none}
.receiver-pin{display:flex;align-items:center;flex-direction:column;gap:2px;white-space:nowrap;filter:drop-shadow(0 3px 5px #0004)}
.receiver-pin .rx-icon{background:#015486;color:#fff;border:3px solid #fff;border-radius:50%;width:34px;height:34px;display:grid;place-items:center;font:850 12px Inter,Arial,sans-serif}
.receiver-pin b{background:#fff;border-radius:4px;color:#174a59;padding:3px 5px;border:1px solid #bed5df;font:800 10px Inter,Arial,sans-serif}
.geo-popup{font:12px/1.55 Inter,Arial,sans-serif;color:#23423a;max-width:245px;display:flex;flex-direction:column;gap:5px}.geo-popup strong{font-size:15px}.geo-popup small{color:#63786c;font-size:11px}.geo-popup code{font:10px/1.5 monospace;background:#f0f5f0;padding:4px 6px;border-radius:6px;white-space:nowrap}.geo-popup em{font-style:normal;font-weight:700;color:var(--status);font-size:11px}
.leaflet-control-layers{border-radius:9px!important;box-shadow:0 2px 16px #0002!important;max-width:205px;font:11px Inter,Arial,sans-serif}.leaflet-control-layers-list{max-height:220px;overflow-y:auto}
.geo-legend{position:absolute;z-index:700;bottom:13px;left:12px;border-radius:10px;background:#fffdf9ef;padding:9px 10px;box-shadow:0 3px 15px #0002;font:11px/1.45 Inter,Arial,sans-serif;color:#234739;max-width:260px;pointer-events:none}
.geo-legend strong{display:block;margin-bottom:4px}.geo-legend .lg-item{display:inline-flex;align-items:center;gap:5px;margin-right:9px}.geo-legend .lg-pin{background:var(--color);height:10px;width:10px;border-radius:50%}.geo-legend .lg-small{display:block;font-size:9px;margin-top:3px;color:#627365}
.geo-toolbar{position:absolute;top:10px;left:10px;z-index:800;background:#ffffffed;border-radius:10px;padding:5px;display:flex;gap:4px;box-shadow:0 3px 12px #0003}.geo-toolbar button{background:#fff;border:1px solid #dbe5db;color:#315642;padding:8px 9px;border-radius:7px;font:800 10px Inter,Arial;cursor:pointer}.geo-toolbar button.active,.geo-toolbar button:hover{background:#2b5f4b;color:#fff}
@media(max-width:550px){.geo-legend{bottom:8px;left:8px;font-size:10px;max-width:205px}.geo-legend .lg-small{font-size:8px}.geo-toolbar{left:7px;top:7px}.geo-toolbar button{padding:7px;font-size:9px}.leaflet-control-layers{max-width:155px}}
</style>'''
for locale in ('es','en'):
    is_es=locale=='es'
    lab={
        'layer1': 'Ensayo 1 · primer recorrido' if is_es else 'Trial 1 · first route',
        'layer2': 'Ensayo 2 · mediodía' if is_es else 'Trial 2 · midday',
        'trial': 'Ensayo' if is_es else 'Trial',
        'receiver': 'Receptor fijo' if is_es else 'Fixed receiver',
        'point': 'Punto' if is_es else 'Point',
        'from_receiver': 'del receptor' if is_es else 'from receiver',
        'both': 'Recuperado en JO01 y JO02' if is_es else 'Found on JO01 and JO02',
        'sender': 'Solo registrado en JO02 (sin recepción documentada)' if is_es else 'Only logged by JO02 (no documented reception)',
        'clock': 'Hora registrada en JO02 · reloj no sincronizado' if is_es else 'Time from JO02 log · clock not synchronized',
        'rings': 'Distancia geográfica, no señal o cobertura' if is_es else 'Geographic distance, not signal or coverage',
        'both_button': 'Ambos' if is_es else 'Both',
        'base_sat': 'ESRI · Satélite' if is_es else 'ESRI · Satellite',
        'base_topo': 'ESRI · Topográfico' if is_es else 'ESRI · Topographic',
        'open': 'Registrado en ambos' if is_es else 'On both nodes',
        'only': 'Solo JO02' if is_es else 'JO02 only',
        'time': 'Hora' if is_es else 'Time',
    }
    m=folium.Map(location=[-0.188,-78.484],zoom_start=13,tiles=None,control_scale=True,scroll_wheel_zoom=False,prefer_canvas=False,zoom_control=True)
    folium.TileLayer(tiles='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', name=lab['base_sat'],attr='© Esri, Maxar, Earthstar Geographics and the GIS User Community',max_zoom=19,show=True).add_to(m)
    folium.TileLayer(tiles='https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', name=lab['base_topo'],attr='© Esri, HERE, Garmin, USGS, OpenStreetMap contributors',max_zoom=19,show=False).add_to(m)
    folium.TileLayer(tiles='https://tile.openstreetmap.org/{z}/{x}/{y}.png',name='OpenStreetMap',attr='© OpenStreetMap contributors',max_zoom=19,show=False).add_to(m)
    folium.TileLayer(tiles='https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',name='CARTO · Claro' if is_es else 'CARTO · Light',attr='© OpenStreetMap contributors © CARTO',max_zoom=19,show=False).add_to(m)
    groups=[]
    for n in [1,2]:
        r=receivers[str(n)];rpt=(r['lat'],r['lon'])
        fg=folium.FeatureGroup(name=lab['layer1'] if n==1 else lab['layer2'],show=True)
        # Each circle and label is in the group and always around its actual receiver
        for radius in sorted(r['ranges'],reverse=True):
            c,dk=rings[radius]
            Circle(location=rpt,radius=radius,color=c,weight=1.8,opacity=.8,fill=True,fill_color=c,fill_opacity=.055,tooltip=f'{lab["trial"]} {n} · {radius} m · {lab["rings"]}').add_to(fg)
        for radius in sorted(r['ranges'],reverse=True):
            c,dk=rings[radius]
            bearing=38 if n==1 else 142
            geo=Geodesic.WGS84.Direct(rpt[0],rpt[1],bearing,radius)
            Marker([geo['lat2'],geo['lon2']],icon=DivIcon(icon_size=(72,24),icon_anchor=(36,12),html=f'<span class="ring-chip" style="--chip:{dk};--line:{c}">{radius} m</span>'),tooltip=f'{lab["trial"]} {n} · {radius} m').add_to(fg)
        # receiver marker
        Marker(rpt,icon=DivIcon(icon_size=(44,53),icon_anchor=(22,39),html=f'<div class="receiver-pin"><span class="rx-icon">RX</span><b>JO01</b></div>'),popup=folium.Popup(f'<div class="geo-popup"><strong>JO01 · {lab["receiver"]}</strong><small>{lab["trial"]} {n}</small><code>{rpt[0]:.10f}, {rpt[1]:.10f}</code></div>',max_width=340),tooltip=f'JO01 · {lab["trial"]} {n}').add_to(fg)
        for p in [x for x in points if x['trial']==n]:
            num=p['number'];lat,lon=p['lat'],p['lon'];color='#28784f' if p['received'] else '#ae7838';status=lab['both'] if p['received'] else lab['sender']
            import datetime
            from zoneinfo import ZoneInfo
            date=datetime.datetime.fromtimestamp(p['epoch'],ZoneInfo('America/Guayaquil')).strftime('%d/%m/%Y %H:%M')
            popup=f'<div class="geo-popup" style="--status:{color}"><strong>{lab["point"]} {num} · {lab["trial"]} {n}</strong><small>{p["distanceM"]:.1f} m {lab["from_receiver"]}</small><code>{lat:.7f}, {lon:.7f}</code><small>{lab["time"]}: {date}</small><em>{status}</em><small>{lab["clock"]}</small></div>'
            h=f'<div class="geo-pin" style="--pin:{color}"><span>{num}</span></div>'
            Marker([lat,lon],icon=DivIcon(icon_size=(40,42),icon_anchor=(20,39),html=h),popup=folium.Popup(popup,max_width=330),tooltip=f'{lab["point"]} {num} · {p["distanceM"]:.1f} m · {status}',rise_on_hover=True).add_to(fg)
        fg.add_to(m);groups.append(fg)
    folium.LayerControl(position='topright',collapsed=True).add_to(m)
    m.get_root().header.add_child(Element(map_head))
    m.fit_bounds([[-0.2071,-78.487],[-0.1687,-78.480]])
    js=f'''
<script>
(function(){{
 const map={m.get_name()};
 const groups={{1:{groups[0].get_name()},2:{groups[1].get_name()}}};
 let current='all';
 function focus(value){{
   let which=['1','2','all'].includes(String(value))?String(value):'all';
   current=which;
   for(const n of ['1','2']){{ if(which==='all'||which===n){{ if(!map.hasLayer(groups[n]))map.addLayer(groups[n]); }} else if(map.hasLayer(groups[n]))map.removeLayer(groups[n]); }}
   // Compute bounds from the actual Folium geometries and points, never from the default initial view.
   let bounds=which==='all'?groups[1].getBounds().extend(groups[2].getBounds()):groups[which].getBounds();
   map.invalidateSize({{pan:false}});
   map.fitBounds(bounds,{{padding:[30,32],maxZoom:17,animate:false}});
   document.querySelectorAll('[data-geo-focus]').forEach(b=>b.classList.toggle('active',b.dataset.geoFocus===which));
 }}
 const legend=document.createElement('div');legend.className='geo-legend';
 legend.innerHTML='<strong>{lab["trial"]} 1 + {lab["trial"]} 2</strong><span class="lg-item"><i class="lg-pin" style="--color:#28784f"></i>{lab["open"]}</span><span class="lg-item"><i class="lg-pin" style="--color:#ae7838"></i>{lab["only"]}</span><small class="lg-small">{lab["rings"]}</small>';
 map.getContainer().append(legend);
 if(window.self===window.top){{
   const bar=document.createElement('div');bar.className='geo-toolbar';
   for(const [id,label] of [['1','{lab["trial"]} 1'],['2','{lab["trial"]} 2'],['all','{lab["both_button"]}']]){{
     const b=document.createElement('button');b.type='button';b.dataset.geoFocus=id;b.textContent=label;b.addEventListener('click',()=>focus(id));bar.append(b);
   }}
   map.getContainer().append(bar);
 }}
 window.addEventListener('message',function(e){{if(e.data && e.data.type==='joco-focus')focus(e.data.trial);}});
 map.whenReady(function(){{
   setTimeout(()=>{{focus('all');if(window.parent!==window)window.parent.postMessage({{type:'joco-map-ready'}},'*');}},120);
 }});
 window.jocoMapTest={{focus:focus,getCurrent:()=>current,getVisible:()=>[1,2].filter(n=>map.hasLayer(groups[n])),getPinCount:()=>Object.values(groups).reduce((s,g)=>{{let n=0;g.eachLayer(x=>{{if(x instanceof L.Marker && x.getElement()?.querySelector('.geo-pin'))n++}});return s+n}},0)}};
}})();
</script>
'''
    outfile=root/'mapas'/f'folium_{locale}.html'
    m.save(str(outfile))
    txt=outfile.read_text(encoding='utf-8')
    txt=txt.replace('</body>',js+'</body>')
    outfile.write_text(txt,encoding='utf-8')
    print(outfile.name, len(txt),groups[0].get_name(), groups[1].get_name())
