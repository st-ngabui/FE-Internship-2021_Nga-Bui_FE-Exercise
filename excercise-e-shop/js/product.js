//show product in 2 section
for (var i = 0; i < 2; i++) {
  //create element show list product
  var productList = document.createElement('ul');
  productList.className = 'row';
  document.getElementsByClassName("products-wrap")[i].appendChild(productList);

  products.forEach(function (product) {
    //create element show product
    var li = document.createElement('li');
    li.className = "product col-3 col-sm-6";
    productList.appendChild(li);

    var productItem = document.createElement('div');
    productItem.className = "product-item";
    li.appendChild(productItem);

    var productInfo = document.createElement('a');
    productInfo.className = "product-info";
    productItem.appendChild(productInfo);

    var productImgCart = document.createElement('div');
    productImgCart.className = "product-img-cart";
    productInfo.appendChild(productImgCart);

    var productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.name;
    productImgCart.appendChild(productImg);

    var button = document.createElement("button");
    button.className = "btn btn-add-cart";
    button.innerHTML = "Add to cart";
    button.addEventListener('click', addToCart.bind(this, product.id));
    productImgCart.appendChild(button);

    var productName = document.createElement('h4');
    productName.className = "product-name";
    productName.innerHTML = product.name;
    productInfo.appendChild(productName);

    var productPriceGroup = document.createElement('div');
    productPriceGroup.className = "product-price-group";
    productItem.appendChild(productPriceGroup);

    var productPrice = document.createElement('p')
    productPrice.className = "product-price";
    productPrice.innerHTML = `$${product.price}`;
    productPriceGroup.appendChild(productPrice);
    //check product has discount or not
    if (product.discount) {
      //create element show discount
      var productSale = document.createElement('p');
      productSale.className = "product-sale";
      productSale.innerHTML = `-${product.discount}%`;
      productInfo.appendChild(productSale);
      //add class for element
      productPriceGroup.classList.add("product-sale");
      //create element show price before sale
      var priceBefore = document.createElement('p');
      priceBefore.className = "price-before-sale";
      priceBefore.innerHTML = `$${(product.price * 100 / (100 - product.discount)).toFixed(2)}`;
      productPriceGroup.appendChild(priceBefore);
    }
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
