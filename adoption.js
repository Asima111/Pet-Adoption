const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const registerBtn = document.getElementById("launchRegister");
const registerModal = document.getElementById("registerModal");
const closeRegister = document.getElementById("closeRegister");

registerBtn.addEventListener("click", () => {
  registerModal.style.display = "flex";
});

closeRegister.addEventListener("click", () => {
  registerModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === registerModal) {
    registerModal.style.display = "none";
  }
});



const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const summaryBox = document.getElementById('cart-summary');
    const totalPetsEl = document.getElementById('total-pets');
    const totalPriceEl = document.getElementById('total-price');
    const emptyMsg = document.getElementById('empty-cart-message');

    function renderCart() {
      cartContainer.innerHTML = '';
      if (cartItems.length === 0) {
        emptyMsg.style.display = 'block';
        summaryBox.style.display = 'none';
        return;
      }

      emptyMsg.style.display = 'none';
      summaryBox.style.display = 'block';

      let totalPrice = 0;

      cartItems.forEach((pet, index) => {
        const card = document.createElement('div');
        card.className = 'cart-card';
        card.innerHTML = `
          <img src="${pet.image}" alt="${pet.name}" />
          <h3>${pet.name}</h3>
          <p>Pet ID: ${pet.id}</p>
          <p>Price: ₹${pet.price}</p>
          <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        cartContainer.appendChild(card);
        totalPrice += parseInt(pet.price);
      });

      totalPetsEl.textContent = cartItems.length;
      totalPriceEl.textContent = totalPrice;
    }

    function removeItem(index) {
      cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      renderCart();
    }

    function confirmOrder() {
      alert('🎉 Adoption Confirmed! Thank you for adopting.');
      localStorage.removeItem('cart');
      renderCart();
    }

    renderCart();