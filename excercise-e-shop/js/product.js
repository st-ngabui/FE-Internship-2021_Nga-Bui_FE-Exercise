//show product in 2 section
for (var i = 0; i < 2; i++) {
  products.forEach(function (product) {
    var priceBefore = product.discount ? '<p class="price-before-sale">$' + (product.price * 100 / (100 - product.discount)).toFixed(2) + '</p>' : "";
    document.getElementsByClassName("product-list")[i].innerHTML +=
      '<li class="product col-3 col-sm-6">' +
      '<div class="product-item">' +
      '<a href="#" class="product-info">' +
      '<div class="product-img-cart">' +
      '<img src="' + product.image + '" alt="' + product.name + '">' +
      '<button class="btn btn-add-cart" onclick="addToCart(' + product.id + ')">Add to cart</button>' +
      '</div>' +
      '<h4 class="product-name">' + product.name + '</h4>' +
      (product.discount ? '<p class = "product-sale">-' + product.discount + '%</p>' : "") +
      '</a>' +
      '<div class="product-price-group ' + (product.discount ? "product-sale" : "") + '">' +
      '<p class="product-price">$' + product.price + '</p>' +
      priceBefore +
      '</div>' +
      '</div>' +
      '</li>'
  })
}
//handle when click add to cart
function addToCart(productId) {
  //find product has id = productId
  var product = getProduct(productId, products);
  //find index product in cart
  var index = getIndex(productId, cart);
  //check product is exits in cart or not
  if (index >= 0) cart[index].quantity += 1;
  else cart.push({
    id: product.id,
    image: product.image,
    name: product.name,
    price: product.price,
    discount: product.discount,
    quantity: 1
  });
  quantity += 1;
  localStorage.setItem("test", JSON.stringify(cart));
  //show quantity product in cart
  document.getElementsByClassName("cart-quantity")[0].innerHTML = quantity;
}
