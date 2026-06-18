const products = [
{
id:1,
name:"Laptop",
price:55000
},
{
id:2,
name:"Smartphone",
price:20000
},
{
id:3,
name:"Smart Watch",
price:5000
}
];

let cart = [];

function displayProducts(){

let container =
document.getElementById("productList");

container.innerHTML = "";

products.forEach(product => {

container.innerHTML += `
<div class="card">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart(${product.id})">
Add To Cart
</button>
</div>
`;

});

}

function addToCart(id){

let product =
products.find(item => item.id === id);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();

}

function updateCart(){

let cartList =
document.getElementById("cartItems");

let total = 0;

cartList.innerHTML = "";

cart.forEach(item => {

cartList.innerHTML +=
`<li>${item.name} - ₹${item.price}</li>`;

total += item.price;

});

document.getElementById("total")
.innerText = total;

}

window.onload = function(){

let savedCart =
JSON.parse(localStorage.getItem("cart"));

if(savedCart){
cart = savedCart;
updateCart();
}

displayProducts();

};
