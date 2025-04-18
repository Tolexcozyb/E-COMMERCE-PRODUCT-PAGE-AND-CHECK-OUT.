let result = localStorage.getItem("cartList");
let data = JSON.parse(result);

let maindiv = document.querySelector(".megan-page");
let price_total = document.getElementById("price-total");

// console.log(data);

let totalVal = 0;

data.forEach((list) => {
  //   console.log(list);

  let image = document.createElement("img");
  let productName = document.createElement("h2");
  let price = document.createElement("h3");
  let quantity = document.createElement("span");
  let itemBlock = document.createElement("div");
  let total = document.createElement("h3");

  image.setAttribute("id", "slide-image");
  productName.setAttribute("id", "slide-name");
  price.setAttribute("id", "slide-price");
  quantity.setAttribute("id", "quantity-product");
  itemBlock.setAttribute("class", "megan-flows");
  total.setAttribute("class", "slide");

  image.src = list.image;
  productName.innerText = list.itemname;
  price.innerText = `$${list.price}`;
  quantity.innerText = list.count;

  let itemTotal = list.price * list.count;
  total.innerText = `$${itemTotal.toFixed(2)}`;

  itemBlock.appendChild(image);
  itemBlock.appendChild(productName);
  itemBlock.appendChild(price);
  itemBlock.appendChild(quantity);
  itemBlock.appendChild(total);

  maindiv.appendChild(itemBlock);

  // Add to running total
  totalVal += itemTotal;
});

// Set total value to the price total element
price_total.innerText = `$${totalVal.toFixed(2)}`;
