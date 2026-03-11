const products = [

{
id:1,
name:"Elegant Black Dress",
price:45,
image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
},

{
id:2,
name:"White Casual Shirt",
price:30,
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
},

{
id:3,
name:"Street Jacket",
price:65,
image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
},

{
id:4,
name:"Minimal Outfit",
price:52,
image:"https://images.unsplash.com/photo-1483985988355-763728e1935b"
}

];


let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* display products */

function displayProducts(){

const container = document.getElementById("product-container");

if(!container) return;

container.innerHTML = "";

products.forEach(product => {

container.innerHTML +=

`
<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>$${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

</div>
`

})

}

displayProducts();


/* add to cart */

function addToCart(id){

const product = products.find(p => p.id === id);

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

}


/* cart count */

function updateCartCount(){

const count = document.getElementById("cart-count");

if(count){

count.innerText = cart.length;

}

}

updateCartCount();


/* show cart */

function displayCart(){

const container = document.getElementById("cart-items");

const total = document.getElementById("total-price");

if(!container) return;

container.innerHTML = "";

let sum = 0;

cart.forEach(item => {

sum += item.price;

container.innerHTML +=

`
<div class="cart-item">

<span>${item.name}</span>

<span>$${item.price}</span>

</div>
`

})

total.innerText = sum;

}

displayCart();


function scrollToProducts(){

document.getElementById("products")
.scrollIntoView({behavior:"smooth"});

}
