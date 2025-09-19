function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContainer = document.getElementById("cart-items");
  let total = 0;

  cartContainer.innerHTML = "";

  cart.forEach(item => {
    let subtotal = item.price * item.quantity;
    total += subtotal;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="details">
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <div class="quantity-control">
            <button onclick="updateQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
          <p>Subtotal: ₹${subtotal}</p>
          <button onclick="removeFromCart(${item.id})">❌ Remove</button>
        </div>
      </div>
    `;
  });

  document.getElementById("cart-total").innerText = "Total: ₹" + total;
}

function updateQuantity(id, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find(product => product.id === id);

  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(product => product.id !== id);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

if (window.location.pathname.includes("cart.html")) {
  displayCart();
}
