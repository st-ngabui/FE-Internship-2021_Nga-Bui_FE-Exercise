//fetch product
function fetchData() {
  return [
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
}
//get cart from localstorage
function getCart() {
  return localStorage.getItem("test") ? JSON.parse(localStorage.getItem("test")) : [];
}
//get quantity product in cart
function getQuantity(cart) {
  return cart.reduce(function (quantity, product) {
    return quantity + product.quantity;
  }, 0);
}
function getIndex(id, array) {
  for (var j = 0; j < array.length; j++) {
    if (array[j].id === id) {
      return j;
    }
  }
  return -1;
}
function getProduct(id, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return array[i];
    }
  }
  return null;
}
