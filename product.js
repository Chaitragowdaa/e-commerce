// product.js
document.addEventListener("DOMContentLoaded", function () {
  const productName = document.getElementById("product-name");
  const productImage = document.getElementById("product-image");
  const productPrice = document.getElementById("product-price");
  const productDescription = document.getElementById("product-description");
  const addToCartButton = document.getElementById("add-to-cart");

  // Sample product data
  const productData = {
      id: 1,
      name: "Cool Gadget",
      image: "https://via.placeholder.com/150",
      price: 49.99,
      description: "This gadget will make your life easier and cooler!"
  };

  // Populate page with product data
  productName.textContent = productData.name;
  productImage.src = productData.image;
  productPrice.textContent = `Price: $${productData.price}`;
  productDescription.textContent = productData.description;

  // Retrieve cart from localStorage or initialize empty cart
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartStorage() {
      localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Add to cart function
  addToCartButton.addEventListener("click", function () {
      let existingProduct = cart.find(item => item.id === productData.id);
      if (existingProduct) {
          existingProduct.quantity++;
      } else {
          cart.push({ ...productData, quantity: 1 });
      }
      updateCartStorage();
      alert(`${productData.name} added to cart!`);
  });
});
