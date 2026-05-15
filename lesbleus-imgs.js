// LESBLEUS IMGS v7 + CAUCHOS + BATERIAS
var LB={'ca':'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iOCIgZmlsbD0iIzExMTgyNyIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjM0IiBmaWxsPSIjMWYyOTM3IiBzdHJva2U9IiMzNzQxNTEiIHN0cm9rZS13aWR0aD0iMyIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjI2IiBmaWxsPSIjMTExODI3IiBzdHJva2U9IiM0YjU1NjMiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjE0IiBmaWxsPSIjMWYyOTM3IiBzdHJva2U9IiM2YjcyODAiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjYiIGZpbGw9IiMzNzQxNTEiLz48cmVjdCB4PSIzNyIgeT0iNiIgd2lkdGg9IjYiIGhlaWdodD0iMTAiIGZpbGw9IiM5Y2EzYWYiIHJ4PSIyIi8+PHJlY3QgeD0iMzciIHk9IjY0IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgZmlsbD0iIzljYTNhZiIgcng9IjIiLz48cmVjdCB4PSI2IiB5PSIzNyIgd2lkdGg9IjEwIiBoZWlnaHQ9IjYiIGZpbGw9IiM5Y2EzYWYiIHJ4PSIyIi8+PHJlY3QgeD0iNjQiIHk9IjM3IiB3aWR0aD0iMTAiIGhlaWdodD0iNiIgZmlsbD0iIzljYTNhZiIgcng9IjIiLz48L3N2Zz4=','ba':'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iOCIgZmlsbD0iIzFjMmIwYSIvPjxyZWN0IHg9IjEyIiB5PSIyMiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjM2IiBmaWxsPSIjMzY1MzE0IiByeD0iNiIgc3Ryb2tlPSIjNGQ3YzBmIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxyZWN0IHg9IjI0IiB5PSIxNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjNGQ3YzBmIiByeD0iMiIvPjxyZWN0IHg9IjQ2IiB5PSIxNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjNGQ3YzBmIiByeD0iMiIvPjx0ZXh0IHg9IjI1IiB5PSI0NiIgc3R5bGU9ImZvbnQ6NzAwIDE0cHggbW9ub3NwYWNlO2ZpbGw6Izg0Y2MxNiI+KzwvdGV4dD48dGV4dCB4PSI0NSIgeT0iNDYiIHN0eWxlPSJmb250OjcwMCAxNHB4IG1vbm9zcGFjZTtmaWxsOiM5NGEzYjgiPi08L3RleHQ+PHJlY3QgeD0iMTYiIHk9IjI4IiB3aWR0aD0iNDgiIGhlaWdodD0iMyIgZmlsbD0iIzRkN2MwZiIgcng9IjEiIG9wYWNpdHk9Ii40Ii8+PC9zdmc+','def':'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iOCIgZmlsbD0iIzFlMjkzYiIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjI4IiBmaWxsPSIjMzM0MTU1Ii8+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMTQiIGZpbGw9IiM0NzU1NjkiLz48L3N2Zz4='};
var C={'cauchos':'ca','baterias':'ba'};
window._lbSvg=function(cat,sz){var k=C[cat]||'def';return'<img src="data:image/svg+xml;base64,'+LB[k]+'" style="width:'+sz+'px;height:'+sz+'px;border-radius:6px">';};
window.imgHtml=function(p,sz){sz=sz||52;var c=localStorage.getItem('img_'+p.id);if(c)return'<img src="'+c+'" style="width:'+sz+'px;height:'+sz+'px;object-fit:contain;border-radius:6px">';return window._lbSvg(p.cat,sz);};

// ===== CAUCHOS: 14 productos =====
var _cauchos=[
  {id:90200,ml:'CAU001',n:'Fate Prestiva 165/70 R13 79T',m:'Fate',cat:'cauchos',e:'🛞',p:70200,pf:'$70.200',ok:true,url:'',t:1},
  {id:90201,ml:'CAU002',n:'Pirelli Formula Energy 175/65 R14 82T',m:'Pirelli',cat:'cauchos',e:'🛞',p:81900,pf:'$81.900',ok:true,url:'',t:1},
  {id:90202,ml:'CAU003',n:'Firestone Firehawk 900 185/60 R14 82H',m:'Firestone',cat:'cauchos',e:'🛞',p:92300,pf:'$92.300',ok:true,url:'',t:1},
  {id:90203,ml:'CAU004',n:'Fate Sentiva Sport 195/55 R15 85H',m:'Fate',cat:'cauchos',e:'🛞',p:104000,pf:'$104.000',ok:true,url:'',t:1},
  {id:90204,ml:'CAU005',n:'Pirelli Cinturato P7 205/55 R16 91V',m:'Pirelli',cat:'cauchos',e:'🛞',p:105300,pf:'$105.300',ok:true,url:'',t:1},
  {id:90205,ml:'CAU006',n:'Fate Range Runner AT 235/75 R15 105S',m:'Fate',cat:'cauchos',e:'🛞',p:302813,pf:'$302.813',ok:true,url:'',t:1},
  {id:90206,ml:'CAU007',n:'Bridgestone Dueler AT Revo 2 265/60 R18',m:'Bridgestone',cat:'cauchos',e:'🛞',p:427935,pf:'$427.935',ok:true,url:'',t:1},
  {id:90207,ml:'CAU008',n:'Pirelli Chrono 2 195/75 R16C 107/105R',m:'Pirelli',cat:'cauchos',e:'🛞',p:175500,pf:'$175.500',ok:true,url:'',t:1},
  {id:90208,ml:'CAU009',n:'Fate Cargo SC-240 215/75 R17.5 126/124M',m:'Fate',cat:'cauchos',e:'🛞',p:253500,pf:'$253.500',ok:true,url:'',t:1},
  {id:90209,ml:'CAU010',n:'Fate Cargo SR-200 295/80 R22.5 Direccion',m:'Fate',cat:'cauchos',e:'🛞',p:494000,pf:'$494.000',ok:true,url:'',t:1},
  {id:90210,ml:'CAU011',n:'Pirelli TG01 Rock 295/80 R22.5 Traccion',m:'Pirelli',cat:'cauchos',e:'🛞',p:604500,pf:'$604.500',ok:true,url:'',t:1},
  {id:90211,ml:'CAU012',n:'Fate Cargo SR-260 295/80 R22.5 Acoplado',m:'Fate',cat:'cauchos',e:'🛞',p:513500,pf:'$513.500',ok:true,url:'',t:1},
  {id:90212,ml:'CAU013',n:'Pirelli ST01 Super Single 385/65 R22.5',m:'Pirelli',cat:'cauchos',e:'🛞',p:806000,pf:'$806.000',ok:true,url:'',t:1},
  {id:90213,ml:'CAU014',n:'Industrial Pala Cargadora 17.5-25 16 Telas',m:'Industrial',cat:'cauchos',e:'🛞',p:1293500,pf:'$1.293.500',ok:true,url:'',t:1}
];

(function(){
  function go(){
    try{
      if(typeof lista!=='undefined'){
        var ids=lista.map(function(x){return x.id;});
        _cauchos.forEach(function(p){if(ids.indexOf(p.id)===-1)lista.push(p);});
      }
      if(typeof PP!=='undefined'){
        var ids2=PP.map(function(x){return x.id;});
        _cauchos.forEach(function(p){if(ids2.indexOf(p.id)===-1)PP.push(p);});
      }
      if(typeof renderGrid==='function')renderGrid(typeof lista!=='undefined'?lista:PP);
      if(typeof renderCombos==='function')renderCombos();
    }catch(e){console.warn('cauchos:',e);}
  }
  if(document.readyState==='complete')setTimeout(go,400);
  else window.addEventListener('load',function(){setTimeout(go,400);});
})();
