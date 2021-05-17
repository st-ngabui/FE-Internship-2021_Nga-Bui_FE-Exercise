import { fetchData, getCart, getQuantity } from "../common/index";
import IProduct from "../interfaces/IProduct";
import IProductCart from "../interfaces/IProductCart";

//show product in 2 section
function renderListProduct(): void {
  const cart: IProductCart[] = getCart();
  document.querySelector(".cart-quantity").innerHTML = `${getQuantity(cart)}`;
  for (let i = 0; i < 2; i++) {
    products.forEach((product) => {
      const priceBefore: string = 
        product.discount
          ? `<p class="price-before-sale">&dollar;${((product.price * 100) / (100 - product.discount)).toFixed(2)}</p>`
          : "";
      document.getElementsByClassName("product-list")[i].innerHTML += 
        `<li class="product col-3 col-sm-6">
          <div class="product-item">
            <a href="#" class="product-info">
              <img src="${product.image}" alt="${product.name}">
              <h4 class="product-name">${product.name}</h4>
            </a> 
            <div class="product-price-group ${product.discount ? "product-sale" : ""}">
              <p class="product-price">&dollar;${product.price}</p>
              ${priceBefore}
            </div>
            ${product.discount ? `<p class="product-discount">-${product.discount}%</p>` : ""}
            <button class="btn btn-add-cart" productid=${product.id}>Add to cart</button>
          </div>
        </li>`;
    });
  }
  addToCart();
}
//handle when click add to cart
function addToCart(): void {
  const btns: HTMLCollection = document.getElementsByClassName("btn-add-cart");
  for (let btn of btns) {
    btn.addEventListener("click", () => {
      const productId: number = +btn.getAttribute("productid");
      let cart: IProductCart[] = getCart();
      //find product has id = productId
      const product: IProduct = products.find(
        (product) => product.id === productId
      );
      //find index product in cart
      const index: number = cart.findIndex(
        (product) => product.id === productId
      );
      //check product is exits in cart or not
      if (index >= 0) {
        cart[index].quantity += 1;
      }
      else {
        cart.push({
          ...product,
          quantity: 1,
        });
      }
      updateAddCart(cart);
    });
  }
}
//Update cart and show quanity
function updateAddCart(cart: IProductCart[]): void {
  localStorage.setItem("cart", JSON.stringify(cart));
  document.querySelector(".cart-quantity").innerHTML = `${getQuantity(cart)}`;
}

const products: IProduct[] = fetchData();
renderListProduct();
