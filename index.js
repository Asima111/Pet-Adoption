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




document.getElementById("search-btn").addEventListener("click", function () {
  const term = document.getElementById("search-term").value.trim();
  const location = document.getElementById("location").value.trim();
  if (term && location) {
    alert(`Searching for "${term}" near "${location}"`);
    // You can replace this alert with actual search logic or API call
  } else {
    alert("Please enter both a search term and location.");
  }
});


 const counters = document.querySelectorAll(".counter");
  let animated = false;

  function animateCounters() {
    if (animated) return;
    const section = document.getElementById("statsSection");
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      animated = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = 200;
        const step = target / speed;

        function updateCount() {
          if (count < target) {
            count += step;
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target;
          }
        }

        updateCount();
      });
    }
  }

  window.addEventListener("scroll", animateCounters);

  // script.js

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in-on-scroll");

  const appearOptions = {
    threshold: 0.3,
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(el => {
    appearOnScroll.observe(el);
  });
});

// Reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-on-scroll");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
});

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  });
});

const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}


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