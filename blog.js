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
  {
    name: "Luna",
    image: "assets/Luna.png",
    desc: "Luna was rescued from the streets. She's now looking for a loving family.",
    tags: ["Golden Retriever", "Female", "2 years"]
  },
  {
    name: "Milo",
    image: "assets/Milo.png",
    desc: "Milo is a playful tabby kitten with a heart full of love.",
    tags: ["Kitten", "Male", "6 months"]
  },
  {
    name: "Bella",
    image: "assets/Bella.png",
    desc: "Gentle and kind, Bella is a perfect family pet.",
    tags: ["Labrador", "Female", "3 years"]
  },
  {
    name: "Oscar",
    image:"assets/Oscar .png",
    desc: "Oscar loves playing fetch and cuddling. He’s full of energy!",
    tags: ["Mixed Breed", "Male", "1 year"]
  },
  {
    name: "Whiskers",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
    desc: "Whiskers enjoys chasing light and cuddling by the window.",
    tags: ["Cat", "Male", "2 years"]
  },
  {
    name: "Snowball",
    image: "assets/snowfall.png",
    desc: "Snowball is a fluffy rabbit who loves fresh veggies.",
    tags: ["Rabbit", "Female", "1 year"]
  },
  {
    name: "Kiwi",
    image: "assets/kiwi.png",
    desc: "Kiwi is a talkative parrot who enjoys music and attention.",
    tags: ["Parrot", "Male", "4 years"]
  },
  {
    name: "Daisy",
    image: "assets/daisy.png",
    desc: "Daisy is a gentle bunny who gets along with cats and kids.",
    tags: ["Rabbit", "Female", "2 years"]
  },
  {
    name: "Coco",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
    desc: "Coco is a social butterfly who gets along with everyone.",
    tags: ["Shih Tzu", "Female", "3 years"]
  },
  {
    name: "Max",
    image: "assets/max.png",
    desc: "Max was rescued during a storm. He's recovered and ready to go!",
    tags: ["Beagle", "Male", "2 years"]
  },
  {
    name: "Sunny",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    desc: "Sunny is a cheerful little bird who loves to sing in the morning.",
    tags: ["Canary", "Female", "1 year"]
  },
  {
    name: "Leo",
    image: "assets/leo.png",
    desc: "Leo is a calm cat who loves sunbathing and sleeping peacefully.",
    tags: ["Cat", "Male", "3 years"]
  }
];


const petGrid = document.getElementById("petGrid");

pets.forEach(pet => {
  const card = document.createElement("div");
  card.className = "pet-card";
  card.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}">
    <div class="pet-card-content">
      <h3>${pet.name}</h3>
      <p>${pet.desc}</p>
      <div class="tags">
        ${pet.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `;
  petGrid.appendChild(card);
});


