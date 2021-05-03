//get total price
var price = cart.reduce((price, product) => {
  return price += product.price * product.quantity;
}, 0)
console.log(cart);
if (cart !==null && cart.length>0) {
  //create element show products in carts
  var row = document.createElement('div');
  row.className = "row";
  document.getElementsByClassName("cart-wrap")[0].appendChild(row);

  var cartLeft = document.createElement('div');
  cartLeft.className = "col-9";
  row.appendChild(cartLeft);

  var cartProductList = document.createElement('ul');
  cartProductList.className = "cart-product-list";
  cartLeft.appendChild(cartProductList);

  cart.forEach((product) => {
    var cartProduct = document.createElement('li');
    cartProduct.className = "cart-product";
    cartProductList.appendChild(cartProduct);

    var cartProductWrap = document.createElement('div');
    cartProductWrap.className = "cart-product-wrap";
    cartProduct.appendChild(cartProductWrap);

    var cartProductImg = document.createElement('img');
    cartProductImg.className = "cart-product-img";
    cartProductImg.src = product.image;
    cartProductImg.alt = product.name;
    cartProductWrap.appendChild(cartProductImg);

    var cartProductRight = document.createElement('div');
    cartProductRight.className = "cart-product-right";
    cartProductWrap.appendChild(cartProductRight);

    var cartProductInfo = document.createElement('div');
    cartProductInfo.className = "cart-product-info";
    cartProductRight.appendChild(cartProductInfo);

    var cartProductName = document.createElement('h4');
    cartProductName.className = "cart-product-name";
    cartProductName.innerHTML = product.name;
    cartProductInfo.appendChild(cartProductName);

    var cartProductPrice = document.createElement('p');
    cartProductPrice.className = "cart-product-price";
    cartProductPrice.innerHTML = product.price;
    cartProductInfo.appendChild(cartProductPrice);

    var cartProductQuantity = document.createElement('div');
    cartProductQuantity.className = "cart-product-quantity";
    cartProductInfo.appendChild(cartProductQuantity);

    var btnDecrease = document.createElement('button');
    btnDecrease.className = "btn btn-outline btn-quantity";
    btnDecrease.innerHTML = "-";
    if (product.quantity === 1) btnDecrease.setAttribute("style", "background-color: rgba(1,1,1,0.05)")
    btnDecrease.addEventListener('click', handleClickQuantity.bind(this, product.id, 1));
    cartProductQuantity.appendChild(btnDecrease);

    var cartProductInput = document.createElement('input');
    cartProductInput.className = "cart-product-input";
    cartProductInput.value = product.quantity;
    cartProductQuantity.appendChild(cartProductInput);

    var btnIncrease = document.createElement('button');
    btnIncrease.className = "btn btn-outline btn-quantity";
    btnIncrease.innerHTML = "+";
    btnIncrease.addEventListener('click', handleClickQuantity.bind(this, product.id, 2));
    cartProductQuantity.appendChild(btnIncrease);

    var cartProductActions = document.createElement('div');
    cartProductActions.className = "cart-product-action";
    cartProductRight.appendChild(cartProductActions);

    var cartProductAction = document.createElement('a');
    cartProductAction.className = "cart-product-link";
    cartProductAction.href = "#";
    cartProductAction.innerHTML = "Xóa";
    cartProductAction.addEventListener('click', handleRemove.bind(this, product.id));
    cartProductActions.appendChild(cartProductAction);
  })
  var colRight = document.createElement('div');
  colRight.className = "col-3";
  row.appendChild(colRight);

  var cartRight = document.createElement('div');
  cartRight.className = "cart-page-left";
  colRight.appendChild(cartRight);

  var addressTitle = document.createElement('p');
  addressTitle.innerHTML = "Address";
  addressTitle.className = "address-title";
  cartRight.appendChild(addressTitle);

  var address = document.createElement('span');
  address.className = "address";
  address.innerHTML = "363 Nguyễn Hữu Thọ";
  addressTitle.appendChild(address);

  var totalPriceText = document.createElement('p');
  totalPriceText.className = "total-price-text";
  totalPriceText.innerHTML = "Total";
  cartRight.appendChild(totalPriceText);

  var totalPrice = document.createElement('span');
  totalPrice.className = "total-price";
  totalPrice.innerHTML = price;
  totalPriceText.appendChild(totalPrice);

  var btnPay = document.createElement('a');
  btnPay.href = "#";
  btnPay.className = "btn btn-primary btn-pay";
  btnPay.innerHTML = "Pay";
  cartRight.appendChild(btnPay);
}
else {
  var cartEmpty = document.createElement('div')
  cartEmpty.className = "cart-empty";
  document.getElementsByClassName("cart-wrap")[0].appendChild(cartEmpty);

  var cartEmptyImg = document.createElement('img');
  cartEmptyImg.src = "./assets/img/cart-empty.png";
  cartEmptyImg.alt = "cart-empty";
  cartEmptyImg.className = "cart-empty-img";
  cartEmpty.appendChild(cartEmptyImg);

  var cartEmptyText = document.createElement('p');
  cartEmptyText.innerHTML = "Không có sản phẩm trong giỏ hàng của bạn";
  cartEmptyText.className = "cart-empty-text";
  cartEmpty.appendChild(cartEmptyText);

  var cartEmptyBtn = document.createElement('a');
  cartEmptyBtn.className = "btn btn-primary btn-shopping";
  cartEmptyBtn.innerHTML = "Tiếp tục mua sắm";
  cartEmptyBtn.href="/home.html";
  cartEmpty.appendChild(cartEmptyBtn);
}
function handleClickQuantity(productId, id, e) {
  console.log("id", id);
  var index = cart.findIndex(product => product.id === productId);
  var quantity = cart[index].quantity;
  //check id to know button is decrease or increase
  if (id == 1) {
    if (quantity === 2) {
      e.target.setAttribute("style", "background-color: rgba(1,1,1,0.05)");
    }
    if (quantity !== 1) {
      cart[index].quantity -= 1;
      price -= cart[index].price;
      document.getElementsByClassName("cart-quantity")[0].innerHTML = Number(cartQuantity.innerHTML) - 1;
    }
  }
  else {
    if (quantity === 1) {
      document.getElementsByClassName("btn-quantity")[2 * index].setAttribute("style", "background-color: white");
    }
    cart[index].quantity += 1;
    price += cart[index].price;
    document.getElementsByClassName("cart-quantity")[0].innerHTML = Number(cartQuantity.innerHTML) + 1;
  }
  document.getElementsByClassName("cart-product-input")[index].value = cart[index].quantity;
  document.getElementsByClassName("total-price")[0].innerHTML = price;
  localStorage.setItem("test", JSON.stringify(cart));
}

function handleRemove(productId) {
  var product = cart.find(product => product.id === productId);
  price -= product.price * product.quantity;
  document.getElementsByClassName("cart-quantity")[0].innerHTML = Number(cartQuantity.innerHTML) - product.quantity;
  document.getElementsByClassName("total-price")[0].innerHTML = price;
  cart = cart.filter((product) => product.id !== productId);
  localStorage.setItem("test", JSON.stringify(cart));
  window.location.reload();
}