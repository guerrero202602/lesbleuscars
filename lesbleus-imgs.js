// LESBLEUS IMGS v4 — Proxy Netlify (sin CORS)
(function(){
  var ICO={opticas:'💡',espejos:'🪞','levanta-cristal':'🔧',manijas:'🚪',amortiguadores:'🚗',frenos:'🛑',rodamientos:'⚙️',bujias:'⚡',filtros:'🔩',correas:'🔄',bieletas:'🔧',bujes:'🔩',fluidos:'💧'};
  var BG={opticas:'#FFFBEB',espejos:'#EFF6FF','levanta-cristal':'#F0FDF4',manijas:'#F5F3FF',amortiguadores:'#FFF7ED',frenos:'#FEF2F2',rodamientos:'#EFF6FF',bujias:'#FEFCE8',filtros:'#F0FDF4',correas:'#F5F3FF',bieletas:'#FFF7ED',bujes:'#F0FDFA',fluidos:'#EFF6FF'};

  function ph(cat,sz){return'<div style="width:'+sz+'px;height:'+sz+'px;border-radius:8px;background:'+(BG[cat]||'#F1F5F9')+';display:flex;align-items:center;justify-content:center;font-size:'+Math.round(sz*.5)+'px">'+(ICO[cat]||'🔩')+'</div>';}

  window.imgHtml=function(p,sz){
    sz=sz||52;
    var cached=localStorage.getItem('img_'+p.id);
    if(cached)return'<img src="'+cached+'" style="width:'+sz+'px;height:'+sz+'px;object-fit:contain;border-radius:6px;filter:drop-shadow(0 2px 6px rgba(0,0,0,.1))" onerror="this.style.display=\'none\'">';
    if(p.ml&&p.ml.startsWith('MLA'))return'<span data-lb="'+p.id+'" data-cat="'+p.cat+'" style="display:inline-block">'+ph(p.cat,sz)+'</span>';
    return ph(p.cat,sz);
  };

  function updateEl(id,url,cat){
    document.querySelectorAll('[data-lb="'+id+'"]').forEach(function(el){
      var img=document.createElement('img');
      img.src=url;
      img.style.cssText='width:56px;height:56px;object-fit:contain;border-radius:6px;filter:drop-shadow(0 2px 6px rgba(0,0,0,.1))';
      img.onerror=function(){el.outerHTML=ph(cat,56);};
      el.replaceWith(img);
    });
  }

  async function loadImg(p){
    var key='img_'+p.id;
    var cached=localStorage.getItem(key);
    if(cached){updateEl(p.id,cached,p.cat);return;}
    try{
      var r=await fetch('/api/img?id='+p.ml);
      if(!r.ok)return;
      var d=await r.json();
      if(d.img){localStorage.setItem(key,d.img);updateEl(p.id,d.img,p.cat);}
    }catch(e){}
  }

  async function run(){
    try{
      var arr=typeof lista!=='undefined'?lista:(typeof PP!=='undefined'?[].concat(PP):[]);
      if(arr.length&&typeof renderGrid==='function')renderGrid(arr);
      if(typeof renderCombos==='function')renderCombos();
    }catch(e){}
    var prods=[];
    try{prods=(typeof PP!=='undefined'?PP:[]).filter(function(p){return p.ml&&p.ml.startsWith('MLA');});}catch(e){}
    var BATCH=5;
    for(var i=0;i<prods.length;i+=BATCH){
      await Promise.all(prods.slice(i,i+BATCH).map(loadImg));
      if(i+BATCH<prods.length)await new Promise(function(r){setTimeout(r,100);});
    }
  }

  if(document.readyState==='complete')setTimeout(run,500);
  else window.addEventListener('load',function(){setTimeout(run,500);});
})();
