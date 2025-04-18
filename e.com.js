/*
let btnNext = document.querySelector(".next");
let iconCart = document.querySelector(".many");
let cartShop = document.getElementById("value");
let listCartHTML = document.querySelector(".watch");
let iconCartSpan = document.querySelector(".many span");
let myWatch = document.querySelector(".combos");
let body = document.querySelector("body");

let powers = [];

iconCart.addEventListener("click", () => {
  //   body.classList.toggle('showcart');
  window.location.href = "cartlist.html"
});

// iconCartSpan.innerText = totalQuantity;

myWatch.addEventListener("click", (event) => {
  let positionclick = event.target;
  if (positionclick.classList.contains("next")) {
    let product_id = positionclick.parentElement.dataset.id;
    addToCart(product_id);
    console.log(product_id);
    
  }
});

const addToCart = (product_id) => {
  let positionThisProductInCartShop = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (carts.length <= 0) {
    cart = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCarts < 0) {
    cart.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    carts(positionThisProductInCartShop).quantity =
      cart(positionThisProductInCartShop).quantity + 1;
  }
  addCartToHTML();
  addCartToMemory();
};
const addCartToMemory = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

listCartHTML.addEventListener("click", (event) => {
  let positionclick = event.target;
  if (
    positionclick.classList.contains("minus") ||
    positionclick.classList.contains("plus")
  ) {
    let product_id = positionclick.parentElement.da.id;
    let type = "minus";
    if (positionclick.classList.contains("plus")) {
      type = "plus";
    }
    changeQuantity(product_id, type);
  }
});
const changeQuantity = (product_id, type) => {
  let positionItemInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (positionItemInCart >= 0) {
    switch (type) {
      case "plus":
        carts[positionItemInCart].quantity =
          cart[positionItemInCart].quantity + 1;
        break;

      default:
        let valueChange = cart[positionItemInCart].quantity - 1;
        if (valueChange > 0) {
          cart[positionItemInCart].quantity = valueChange;
        } else {
          cart.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  addCartToMemory();
  addCartToHTML();
};
*/

let minusBtn = document.querySelectorAll(".minus");
let addBtn = document.querySelectorAll(".plus");
// let count = document.querySelectorAll("#count");
let addToCart = document.querySelectorAll(".next");
let cartQuantity = document.querySelector("#cart-quantity");
let cartIcon = document.querySelector(".many");
let iconImg = document.querySelectorAll("#product-image");

let cartPrice = document.querySelectorAll("#price");

// console.log(minusBtn, addBtn, count, addToCart, iconImg, cartName, cartPrice);

const dataBase = [];

addBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the nearest .watch container (or .powers/.major — depends on how deep you want to go)
    const parent = button.closest(".watch");

    // Find the count span within this container
    const countSpan = parent.querySelector("#count");

    // Convert to number, increment, update text
    let count = parseInt(countSpan.innerText);
    count++;
    countSpan.innerText = count;
  });
});

minusBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the nearest .watch container (or .powers/.major — depends on how deep you want to go)
    const parent = button.closest(".watch");

    // Find the count span within this container
    const countSpan = parent.querySelector("#count");

    // Convert to number, increment, update text
    let count = parseInt(countSpan.innerText);
    count--;
    countSpan.innerText = count;
  });
});

let totalCartItems = 0;

addToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.closest(".combos");
    const countSpan = parent.querySelector("#count");
    const itemName = parent.querySelector("#item-name");
    const price = parent.querySelector("#price");
    const itemImage = parent.querySelector("#product-image")

    let count = parseInt(countSpan.innerText);

    if (count > 0) {
      totalCartItems += count;

      // Reset that product's count to 0
      // countSpan.innerText = 0;

      // Update cart icon
      document.getElementById("cart-quantity").innerText = totalCartItems;
    }

    // save data to dataBase
    dataBase.push({
      itemname: itemName.innerText, 
      count: countSpan.innerText, 
      price: price.innerText, 
      image: itemImage.src
    })

    console.log(dataBase);
    
    localStorage.setItem("cartList", JSON.stringify(dataBase))

  });
});

cartQuantity.onclick = ()=>{
  window.location.href = "cartlist.html"
}



// data.itemName = cartName.innerText;
// data.image = iconImg.src
// data.price = cartPrice.innerText;

// minusBtn.addEventListener("click", () => {
//   if (count.innerHTML == 0) {
//     count.innerHTML = 0;
//   } else {
//     count.innerHTML--;
//   }

//   data.quantity = count.innerHTML;

//   console.log(data);
//   saveToStorage()
// });

// addBtn.addEventListener("click", () => {
//   count.innerHTML++;
//   data.quantity = count.innerHTML;

//   console.log(data);
//   saveToStorage()
// });

// addToCart.addEventListener("click", () => {
//   cartQuantity.innerHTML = count.innerHTML;
// });

// let seenImg = document.getElementById("product-seen");
// let carrtQuantity = document.querySelector("#cart-quantity");
// let cartMint = document.querySelector(".minust");
// let cartPlut = document.querySelector(".plust");
// let btnNext = document.querySelector(".nextt");
// let countOther = document.querySelector("#countt");
// let cartNamee = document.getElementById("item-names");
// let cartPricee = document.getElementById("prices");

// data.itemName = cartNamee.innerText;
// data.image = seenImg.src;
// data.price = cartPricee.innerText;

// cartMint.addEventListener("click", () => {
//   if (countOther.innerHTML == 0) {
//     countOther.innerHTML = 0;
//   } else {
//     countOther.innerHTML--;
//   }

//   data.quantity = countOther.innerHTML;

//   console.log(data);
//   saveToStorage()
// });

// cartPlut.addEventListener("click", () => {
//   countOther.innerHTML++;
//   data.quantity = countOther.innerHTML;

//   console.log(data);
//   saveToStorage()
// });

// btnNext.addEventListener("click", () => {
//   carrtQuantity.innerHTML = countOther.innerHTML;
// });
