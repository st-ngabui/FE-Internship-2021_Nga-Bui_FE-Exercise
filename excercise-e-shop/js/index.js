//products array
var products = [
  {
    id: 1,
    image: './assets/img/product-1.png',
    name: 'T-Shirt Summer Vibes',
    price: 89.99,
    discount: 30,
  },
  {
    id: 2,
    image: './assets/img/product-2.png',
    name: 'Loose Knit 3/4 Sleeve',
    price: 119.99,
    discount: 0,
  },
  {
    id: 3,
    image: './assets/img/product-3.png',
    name: 'Basic Slim Fit T-Shirt',
    price: 79.99,
    discount: 0,
  },
  {
    id: 4,
    image: './assets/img/product-4.png',
    name: 'Loose Textured T-Shirt',
    price: 219.99,
    discount: 0,
  },
]
//get cart from localstorage
var cart = localStorage.getItem("test") ? JSON.parse(localStorage.getItem("test")) : [];

//create element show quantity product in cart
var cartQuantity = document.createElement('p');
cartQuantity.className = "cart-quantity";

//show quantity product in cart
cartQuantity.innerHTML = cart.reduce(function(quantity, product) {
  return quantity + product.quantity;
},0);

document.getElementsByClassName("cart-icon")[0].appendChild(cartQuantity);
