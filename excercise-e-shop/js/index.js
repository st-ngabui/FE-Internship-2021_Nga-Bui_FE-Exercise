var cart = JSON.parse(localStorage.getItem("test"));

var cartQuantity = document.createElement('p');
cartQuantity.className = "cart-quantity";

if(cart) {
  cartQuantity.innerHTML = cart.reduce((quantity, product) => {
    return quantity += product.quantity;
  },0);
}
else {
  cartQuantity.innerHTML = "0";
}
document.getElementsByClassName("cart-icon")[0].appendChild(cartQuantity);