// LESBLEUS IMGS v3 — Sistema de imágenes autónomo
(function(){
  const CAT={
    opticas:'#FEF9C3','levanta-cristal':'#F0FDF4',manijas:'#F5F3FF',
    espejos:'#EFF6FF',amortiguadores:'#FFF7ED',frenos:'#FEF2F2',
    rodamientos:'#EFF6FF',bujias:'#FEFCE8',filtros:'#F0FDF4',
    correas:'#F5F3FF',bieletas:'#FFF7ED',bujes:'#F0FDFA',fluidos:'#EFF6FF'
  };
  const ICO={
    opticas:'💡',espejos:'🪞','levanta-cristal':'🔧',manijas:'🚪',
    amortiguadores:'🚗',frenos:'🛑',rodamientos:'⚙️',bujias:'⚡',
    filtros:'🔩',correas:'🔄',bieletas:'🔧',bujes:'🔩',fluidos:'💧'
  };

  function placeholder(cat,sz){
    const bg=CAT[cat]||'#F1F5F9',ico=ICO[cat]||'🔩';
    return`<div style="width:${sz}px;height:${sz}px;border-radius:8px;background:${bg};display:flex;align-items:center;justify-content:center;font-size:${Math.round(sz*.55)}px">${ico}</div>`;
  }

  function setImg(id,url,sz,cat){
    document.querySelectorAll(`[data-lb="${id}"]`).forEach(el=>{
      const img=document.createElement('img');
      img.src=url;
      img.style.cssText=`width:${sz}px;height:${sz}px;object-fit:contain;border-radius:6px;filter:drop-shadow(0 2px 6px rgba(0,0,0,.1))`;
      img.onerror=()=>{el.outerHTML=placeholder(cat,sz);};
      el.replaceWith(img);
    });
  }

  async function fetchAndSet(p){
    if(!p.ml||!p.ml.startsWith('MLA'))return;
    const sz=56,key='img_'+p.id;
    const cached=localStorage.getItem(key);
    if(cached){setImg(p.id,cached,sz,p.cat);return;}
    try{
      const r=await fetch('https://api.mercadolibre.com/items/'+p.ml);
      if(!r.ok)return;
      const d=await r.json();
      const url=(d.thumbnail||(d.pictures&&d.pictures[0]&&d.pictures[0].secure_url)||'').replace('http:','https:');
      if(url){
        localStorage.setItem(key,url);
        setImg(p.id,url,sz,p.cat);
      }
    }catch(e){}
  }

  // Override imgHtml para agregar data-lb a cada imagen
  const origImgHtml=window.imgHtml;
  window.imgHtml=function(p,size){
    size=size||52;
    const key='img_'+p.id;
    const cached=localStorage.getItem(key);
    if(cached)return`<img src="${cached}" style="width:${size}px;height:${size}px;object-fit:contain;border-radius:6px;filter:drop-shadow(0 2px 6px rgba(0,0,0,.1))" onerror="this.style.display='none'">`;
    if(p.ml&&p.ml.startsWith('MLA'))return`<span data-lb="${p.id}" data-cat="${p.cat}" style="display:inline-block">${placeholder(p.cat,size)}</span>`;
    return placeholder(p.cat,size);
  };

  async function run(){
    // Re-render grid con nuevo imgHtml
    try{
      if(typeof renderGrid==='function'&&typeof lista!=='undefined')renderGrid(lista);
      else if(typeof renderGrid==='function'&&typeof PP!=='undefined')renderGrid([...PP]);
      if(typeof renderCombos==='function')renderCombos();
    }catch(e){}

    // Cargar imágenes de MercadoLibre
    const prods=typeof PP!=='undefined'?PP.filter(p=>p.ml&&p.ml.startsWith('MLA')):[];
    const BATCH=8;
    for(let i=0;i<prods.length;i+=BATCH){
      await Promise.all(prods.slice(i,i+BATCH).map(fetchAndSet));
      if(i+BATCH<prods.length)await new Promise(r=>setTimeout(r,120));
    }
  }

  // Ejecutar después de que la página termina de cargar
  if(document.readyState==='complete')setTimeout(run,400);
  else window.addEventListener('load',()=>setTimeout(run,400));
})();
