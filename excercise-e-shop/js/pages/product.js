import { fetchData, getCart, getQuantity } from "../common/index.js";
function renderListProduct() {
    const cart = getCart();
    document.querySelector(".cart-quantity").innerHTML = `${getQuantity(cart)}`;
    for (let i = 0; i < 2; i++) {
        products.forEach((product) => {
            const priceBefore = product.discount
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
function addToCart() {
    const btns = document.getElementsByClassName("btn-add-cart");
    for (let btn of btns) {
        btn.addEventListener("click", () => {
            const productId = +btn.getAttribute("productid");
            let cart = getCart();
            const product = products.find((product) => product.id === productId);
            const index = cart.findIndex((product) => product.id === productId);
            if (index >= 0) {
                cart[index].quantity += 1;
            }
            else {
                cart.push(Object.assign(Object.assign({}, product), { quantity: 1 }));
            }
            updateAddCart(cart);
        });
    }
}
function updateAddCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    document.querySelector(".cart-quantity").innerHTML = `${getQuantity(cart)}`;
}
const products = fetchData();
renderListProduct();
