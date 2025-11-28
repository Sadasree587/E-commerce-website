import Cart from './cart.js';
const cart = new Cart();
const grid = document.getElementById('product-grid');
const template = document.getElementById('product-template');
async function load(){
const res = await fetch('data/products.json');
const products = await res.json();
products.forEach(p=>{
const el = template.content.cloneNode(true);
el.querySelector('.thumb').src = p.img;
el.querySelector('.thumb').alt = p.title;
el.querySelector('.title').textContent = p.title;
el.querySelector('.price').textContent = `₹${p.price}`;
el.querySelector('.add').addEventListener('click',()=>{cart.add(p)});
grid.appendChild(el);
});
}
load();
// search
document.getElementById('search').addEventListener('input',e=>{
const q=e.target.value.toLowerCase();
Array.from(grid.children).forEach(card=>{
const title=card.querySelector('.title').textContent.toLowerCase();
card.style.display = title.includes(q)?'':'none';
});
});
// cart toggle
document.getElementById('toggle-cart').addEventListener('click',()=>cart.togglePanel());
