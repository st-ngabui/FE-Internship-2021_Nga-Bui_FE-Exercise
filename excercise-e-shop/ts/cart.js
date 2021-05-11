import { getCart, getQuantity } from "./index.js";
//get total price
function getPrice(cart) {
    return cart.reduce((price, product) => price + product.quantity * product.price, 0);
}
//show cart page
function renderCart() {
    const cart = getCart();
    const quantity = getQuantity(cart);
    document.querySelector(".cart-quantity").innerHTML = `${quantity}`;
    // check cart is product or not
    if (cart.length) {
        document.querySelector(".cart-empty").setAttribute("style", "display: none");
        //loop the product in cart
        cart.forEach((product) => {
            //create element show product
            const priceBefore = product.discount > 0
                ? `<p class="cart-product-price-before">&dollar;${((product.price * 100) / (100 - product.discount)).toFixed(2)}</p>`
                : "";
            document.querySelector(".cart-product-list").innerHTML +=
                `<li class="cart-product"> 
          <div class="cart-product-wrap"> 
            <img class="cart-product-img" src="${product.image}" alt="${product.name}"/> 
            <div class="cart-product-right"> 
              <div class="cart-product-info"> 
                <h4 class="cart-product-name">${product.name}</h4> 
                <div class="cart-product-price-group"> 
                  <p class="cart-product-price">&dollar;${product.price}</p> 
                  ${priceBefore} 
                </div> 
                <div class="cart-product-quantity"> 
                  <button class="btn btn-outline btn-quantity" productid="${product.id}">-</button> 
                  <input value="${product.quantity}" type="number" class="cart-product-input" productid="${product.id}"> 
                  <button class="btn btn-outline btn-quantity" productid="${product.id}">+</button> 
                </div> 
              </div> 
              <div class="cart-product-action"> 
                <button class="cart-product-link cart-delete" productid="${product.id}" >Delete</button> 
              </div> 
            </div> 
          </div> 
        </li>`;
        });
        addEventQuantity();
        addEventRemove();
        //create right element of cart page
        document.getElementsByClassName("cart-summary-number")[0].innerHTML = `${quantity}`;
        document.getElementsByClassName("total-price")[0].innerHTML = "$" + getPrice(cart).toFixed(2);
    }
    //show cart page if cart empty
    else {
        document.querySelector(".cart-show").setAttribute("style", "display: none");
        document.querySelector(".cart-empty").setAttribute("style", "display: flex");
    }
}
function addEventQuantity() {
    const cart = getCart();
    const btnQuantitys = document.getElementsByClassName("btn-quantity");
    const cartInput = document.getElementsByClassName("cart-product-input");
    //add event for btnQuantity
    for (let btn of btnQuantitys) {
        const productId = +btn.getAttribute("productid");
        const product = cart.find((product) => product.id === productId);
        const productQuantity = btn.innerHTML === "-" ? product.quantity - 1 : product.quantity + 1;
        btn.addEventListener("click", () => handleChangeQuantity(productId, productQuantity));
    }
    //add event for input quantity
    for (let input of cartInput) {
        const productId = +input.getAttribute("productid");
        input.addEventListener("change", () => handleChangeQuantity(productId, +input.value));
    }
}
//add event remove product from cart
function addEventRemove() {
    const deletes = document.getElementsByClassName("cart-delete");
    for (let deleteAction of deletes) {
        const productId = +deleteAction.getAttribute("productid");
        deleteAction.addEventListener("click", () => removeProductCart(productId));
    }
}
function removeProductCart(productId) {
    let cart = getCart();
    cart = cart.filter((product) => product.id !== productId);
    update(cart);
    document.querySelector(".cart-product-list").innerHTML = "";
    renderCart();
}
//handle change quantity in input
function handleChangeQuantity(productId, productQuantity) {
    let cart = getCart();
    const index = cart.findIndex((product) => product.id === productId);
    //check quantity < 1 or not
    if (productQuantity < 1) {
        //not change if quantity < 1
        (document.getElementsByClassName("cart-product-input")[index]).value = `${cart[index].quantity}`;
        return;
    }
    else {
        (document.getElementsByClassName("cart-product-input")[index]).value = `${productQuantity}`;
        //change cart
        cart[index].quantity = productQuantity;
        update(cart);
        document.querySelector(".cart-product-list").innerHTML = "";
        renderCart();
    }
}
function update(cart) {
    const quantity = getQuantity(cart);
    document.getElementsByClassName("cart-quantity")[0].innerHTML = `${quantity}`;
    document.getElementsByClassName("total-price")[0].innerHTML = "$" + getPrice(cart).toFixed(2);
    document.querySelector(".cart-summary-number").innerHTML = `${quantity}`;
    localStorage.setItem("cart", JSON.stringify(cart));
}
renderCart();
