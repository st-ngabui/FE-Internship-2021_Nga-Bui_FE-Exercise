//get total price
var price = getCart().reduce(function (price, product) {
  return price + product.price * product.quantity;
}, 0)
function render() {
  var cart = getCart();
  // check cart is product or not
  if (cart.length) {
    document.querySelector(".cart-empty").setAttribute("style", "display: none");
    //loop the product in cart
    cart.forEach(function (product) {
      //create element show product
      var priceBefore = product.discount > 0 ? '<p class="cart-product-price-before">$' + (product.price * 100 / (100 - product.discount)).toFixed(2) + '</p>' : ''
      document.querySelector(".cart-product-list").innerHTML +=
        '<li class="cart-product">' +
        '<div class="cart-product-wrap">' +
        '<img class="cart-product-img" src="' + product.image + '" alt="' + product.name + '"/>' +
        '<div class="cart-product-right">' +
        '<div class="cart-product-info">' +
        '<h4 class="cart-product-name">' + product.name + '</h4>' +
        '<div class="cart-product-price-group">' +
        '<p class="cart-product-price">$' + product.price + '</p>' +
        priceBefore +
        '</div>' +
        '<div class="cart-product-quantity">' +
        '<button class="btn btn-outline btn-quantity" onclick = "handleChangeQuantity(' + product.id + ',' + (product.quantity - 1) + ')">-</button>' +
        '<input value=' + product.quantity + ' type="number" class="cart-product-input" onchange = "handleChangeQuantity(' + product.id + ', this.value)">' +
        '<button class="btn btn-outline btn-quantity" onclick = "handleChangeQuantity(' + product.id + ',' + (product.quantity + 1) + ')">+</button>' +
        '</div>' +
        '</div>' +
        '<div class="cart-product-action">' +
        '<a href="" class="cart-product-link" onclick = "handleRemove(' + product.id + ')" >Delete</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</li>'
    })
    //create right element of cart page
    document.getElementsByClassName("cart-summary-number")[0].innerHTML = quantity;
    document.getElementsByClassName("total-price")[0].innerHTML = "$" + price.toFixed(2);
  }
  //show cart page if cart empty
  else {
    document.querySelector(".cart-show").setAttribute("style", "display: none");
    document.querySelector(".cart-empty").setAttribute("style", "display: flex");
  }
}
render();
//handle remove product from cart
function handleRemove(productId) {
  var cart = getCart();
  var index = getIndex(productId, cart);
  var product = getProduct(productId, cart);
  //change price after remove product
  price -= product.price * product.quantity;
  quantity -= product.quantity;
  //remove product
  document.getElementsByClassName("cart-product")[index].remove();
  //change cart
  cart = cart.filter((product) => product.id !== productId);
  update(cart);
  render();
}
//handle change quantity in input 
function handleChangeQuantity(productId, productQuantity) {
  var cart = getCart();
  var index = getIndex(productId, cart);
  //check quantity < 1 or not
  if (productQuantity < 1) {
    //not change if quantity < 1
    document.getElementsByClassName("cart-product-input")[index].value = cart[index].quantity;
    return;
  }
  else {
    document.getElementsByClassName("cart-product-input")[index].value = productQuantity;
    //show quantity product of cart
    quantity += productQuantity - cart[index].quantity;
    //change price
    price = price + cart[index].price * (productQuantity - cart[index].quantity);
    //change cart
    cart[index].quantity = productQuantity;
    update(cart);
    document.querySelector(".cart-product-list").innerHTML = "";
    render();
  }
}
function update(cart) {
  document.getElementsByClassName("cart-quantity")[0].innerHTML = quantity;
  document.getElementsByClassName("total-price")[0].innerHTML = "$" + price.toFixed(2);
  document.querySelector(".cart-summary-number").innerHTML = quantity;
  localStorage.setItem("test", JSON.stringify(cart));
}
