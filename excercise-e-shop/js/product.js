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
    price: 119.99,
    discount: 0,
  },
]
var productList = document.createElement('ul');
productList.className = 'row';
document.getElementsByClassName("products-wrap")[0].appendChild(productList);

products.forEach ((product, index) => {
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

  if(product.discount) {
    var productSale = document.createElement('p');
    productSale.className = "product-sale";
    productSale.innerHTML = `-${product.discount}%`;
    productInfo.appendChild(productSale);

    productPriceGroup.classList.add("product-sale");

    var priceBefore = document.createElement('p');
    priceBefore.className = "price-before-sale";
    priceBefore.innerHTML = `$${(product.price*100/(100-product.discount)).toFixed(2)}`;
    productPriceGroup.appendChild(priceBefore);
  }
})

function addToCart(productId) {
  var infoProduct = products.find((product) => product.id = productId);
  var cart = localStorage.getItem("myCart");
  cart === null ? cart=[] : cart=JSON.parse(cart);
  var index = cart.findIndex((cartItem) => cartItem.id === productId);
  if(index >=0) cart[index].quantity += 1;
  else cart.push({...infoProduct, quantity: 1});
  localStorage.setItem("myCart", JSON.stringify(cart));
  console.log(localStorage.getItem("myCart"));
}