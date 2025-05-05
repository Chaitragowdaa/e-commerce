// cart.js
document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const clearCartButton = document.getElementById("clear-cart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
      cartItemsContainer.innerHTML = "";
      cart.forEach((item, index) => {
          let itemElement = document.createElement("div");
          itemElement.innerHTML = `
              <p><strong>${item.name}</strong> - $${item.price} x ${item.quantity}</p>
              <button onclick="increaseQuantity(${index})">+</button>
              <button onclick="decreaseQuantity(${index})">-</button>
              <button onclick="removeItem(${index})">Remove</button>
          `;
          cartItemsContainer.appendChild(itemElement);
      });
      localStorage.setItem("cart", JSON.stringify(cart));
  }

  function increaseQuantity(index) {
      cart[index].quantity++;
      renderCart();
  }

  function decreaseQuantity(index) {
      if (cart[index].quantity > 1) {
          cart[index].quantity--;
      } else {
          cart.splice(index, 1);
      }
      renderCart();
  }

  function removeItem(index) {
      cart.splice(index, 1);
      renderCart();
  }

  clearCartButton.addEventListener("click", function () {
      cart = [];
      renderCart();
  });

  renderCart();
});

