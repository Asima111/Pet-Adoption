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

 function setView(viewType) {
    const container = document.getElementById('other-pet-cards');
    container.className = 'pet-container ' + viewType;
  }

  const toggleButtons = document.querySelectorAll('.view-toggle button');
const container = document.querySelector('.pet-container');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    container.classList.toggle('grid');
    container.classList.toggle('list');

    // Reset animation
    container.style.animation = 'none';
    void container.offsetWidth; // Force reflow
    container.style.animation = container.classList.contains('grid') 
      ? 'slideInGrid 0.6s ease' 
      : 'slideInList 0.6s ease';
  });
});


 // Load existing cart or empty array
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Attach click listeners to each Adopt button
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pet = {
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: parseFloat(btn.dataset.price),
        image: btn.dataset.image
      };

      // Check if already in cart
      const exists = cart.find(p => p.id === pet.id);
      if (exists) {
        alert(`${pet.name} is already in your adoption cart!`);
        return;
      }

      // Add to cart and save
      cart.push(pet);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${pet.name} added to your adoption cart!`);

      // Update cart count
      const countEl = document.getElementById('cart-count');
      if (countEl) countEl.textContent = cart.length;
    });
  });

  // On page load: show cart count
  const existing = JSON.parse(localStorage.getItem('cart')) || [];
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = existing.length;