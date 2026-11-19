var P=[['#8a6a45','#4a3524'],['#a67c52','#5a3f2a'],['#6f7a58','#3b4130'],['#b08968','#6b4a32'],['#8c6f55','#3a2a1c']];
function ph(t,i){return '<div class="ph" style="--a:'+P[i%5][0]+';--b:'+P[i%5][1]+'"><span>'+t+'</span></div>'}
document.querySelectorAll('[data-ph]').forEach(function(e,i){if(e.dataset.img){e.innerHTML='<img src="'+e.dataset.img+'" alt="'+e.dataset.ph+'" loading="lazy" style="object-position:'+(e.dataset.pos||'50% 50%')+'">'}else{e.innerHTML=ph(e.dataset.ph,i)}});
var PR=[['Taza clásica',9800],['Taza espresso',7500],['Set de 2 tazas',17500],['Plato de postre',8200],['Jarra de cerámica',14500],['Bowl artesanal',9200]];
function fmt(n){return '$'+String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.')}
var cart={};
try{cart=JSON.parse(localStorage.getItem('noma_cart')||'{}')||{}}catch(e){cart={}}
function save(){try{localStorage.setItem('noma_cart',JSON.stringify(cart))}catch(e){}}
function add(i){cart[i]=(cart[i]||0)+1;save();document.getElementById('cm').textContent='';draw();openC()}
function chg(i,d){cart[i]+=d;if(cart[i]<=0)delete cart[i];save();draw()}
function draw(){var t=0,n=0,h='';Object.keys(cart).forEach(function(k){var q=cart[k],p=PR[k];t+=p[1]*q;n+=q;h+='<li><span>'+p[0]+'</span><b>'+fmt(p[1]*q)+'</b><div class="qty"><button onclick="chg('+k+',-1)" aria-label="Quitar uno">−</button><span>'+q+'</span><button onclick="chg('+k+',1)" aria-label="Sumar uno">+</button></div></li>'});
document.getElementById('cl').innerHTML=h||'<li style="display:block;color:var(--mute)">Tu carrito está vacío.</li>';document.getElementById('ct').textContent=fmt(t);document.getElementById('cnt').textContent=n}
function openC(){document.getElementById('cart').classList.add('open');document.getElementById('veil').classList.add('open')}
function closeC(){document.getElementById('cart').classList.remove('open');document.getElementById('veil').classList.remove('open')}
document.getElementById('cbtn').onclick=openC;document.getElementById('cx').onclick=closeC;document.getElementById('veil').onclick=closeC;
document.getElementById('buy').onclick=function(){var m=document.getElementById('cm');if(!Object.keys(cart).length){m.textContent='Agregá algún producto primero.';return}cart={};save();draw();m.textContent='¡Gracias por tu compra!'};
function closeNav(){document.getElementById('nav').classList.remove('open');document.getElementById('bg').setAttribute('aria-expanded','false')}
document.getElementById('bg').onclick=function(){var o=document.getElementById('nav').classList.toggle('open');this.setAttribute('aria-expanded',o)};
var lb=document.getElementById('lb'),lbi=document.getElementById('lbi');
function lbOpen(im){lbi.src=im.src;lbi.alt=im.alt;lb.classList.add('open')}
function lbClose(){lb.classList.remove('open')}
lb.addEventListener('click',lbClose);
addEventListener('keydown',function(e){if(e.key==='Escape'){closeC();closeNav();lbClose()}});
var nv=document.getElementById('nvid');if(nv&&(nv.getAttribute('src')||nv.querySelector('source')))document.getElementById('vph').style.display='none';
draw();
