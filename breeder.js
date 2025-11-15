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


 const pets = [
      { name: "Luna", species: "Dog", image: "assets/Luna.png", bio: "Rescued pup.", details: { Gender: "Female", Age: "2y", Color: "Golden", Size: "Medium", Location: "NY", ID: "A101" } },
      { name: "Milo", species: "Cat", image: "assets/Milo.png", bio: "Playful kitten.", details: { Gender: "Male", Age: "6m", Color: "Tabby", Size: "Small", Location: "CA", ID: "A102" } },
      { name: "Tweety", species: "Bird", image: "assets/twi.png", bio: "Chirpy yellow bird.", details: { Gender: "Female", Age: "1y", Color: "Yellow", Size: "Tiny", Location: "FL", ID: "A103" } },
      { name: "Bella", species: "Dog", image: "assets/Bella.png", bio: "Gentle family pet.", details: { Gender: "Female", Age: "3y", Color: "Black", Size: "Large", Location: "TX", ID: "A104" } },
      { name: "Oscar", species: "Rabbit", image: "assets/daisy.png", bio: "Sweet hopper.", details: { Gender: "Male", Age: "1y", Color: "White", Size: "Small", Location: "WA", ID: "A105" } },
      { name: "Polly", species: "Parrot", image: "assets/kiwi.png", bio: "Talkative parrot.", details: { Gender: "Female", Age: "4y", Color: "Green", Size: "Medium", Location: "FL", ID: "A106" } },
      { name: "Max", species: "Dog", image: "assets/max.png", bio: "Energetic buddy.", details: { Gender: "Male", Age: "2y", Color: "Brown", Size: "Medium", Location: "NV", ID: "A107" } },
      { name: "Lily", species: "Cat", image: "assets/lily.png", bio: "Calm explorer.", details: { Gender: "Female", Age: "1y", Color: "Grey", Size: "Small", Location: "NJ", ID: "A108" } },
      { name: "Chirpy", species: "Sparrow", image: "assets/chirpy.png", bio: "Lively flier.", details: { Gender: "Male", Age: "6m", Color: "Brown", Size: "Tiny", Location: "OH", ID: "A109" } },
      { name: "Snow", species: "Rabbit", image: "assets/snowfall.png", bio: "Soft snowball.", details: { Gender: "Female", Age: "2y", Color: "White", Size: "Small", Location: "IL", ID: "A110" } },
      { name: "Rusty", species: "Dog", image: "assets/rusty.png", bio: "Loyal friend.", details: { Gender: "Male", Age: "4y", Color: "Rust", Size: "Large", Location: "AZ", ID: "A111" } },
      { name: "Mimi", species: "Cat", image: "assets/mimi.png", bio: "Loves cuddles.", details: { Gender: "Female", Age: "5y", Color: "Calico", Size: "Medium", Location: "GA", ID: "A112" } }
    ];

    const petCards = document.getElementById("petCards");

    pets.forEach(p => {
      const div = document.createElement("div");
      div.className = "pet-card";
      div.innerHTML = `
        <h2>${p.name} (${p.species})</h2>
        <div class="info">${p.bio}</div>
        <img src="${p.image}" alt="${p.name}" />
        <div class="bio"><strong>About Bio:</strong> ${p.bio}</div>
        <div class="details">
          ${Object.entries(p.details).map(([k, v]) => `<span><strong>${k}:</strong> ${v}</span>`).join('')}
        </div>
        
      `;
      petCards.appendChild(div);
    });

    let index = 0;
    function showCard(i) {
      petCards.style.transform = `translateX(-${i * 100}%)`;
    }
    function prevCard() {
      index = (index - 1 + pets.length) % pets.length;
      showCard(index);
    }
    function nextCard() {
      index = (index + 1) % pets.length;
      showCard(index);
    }



    const counters = document.querySelectorAll(".number");

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText.replace(/[^0-9]/g, '');

      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment) + (counter.innerText.includes('%') ? '%' : counter.innerText.includes('+') ? '+' : counter.innerText.includes('K') ? 'K' : '');
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target + (counter.innerText.includes('%') ? '%' : counter.innerText.includes('+') ? '+' : counter.innerText.includes('K') ? 'K' : '');
      }
    };

    // Trigger when in viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter); // Only run once
        }
      });
    }, { threshold: 0.5 });

    observer.observe(counter);
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