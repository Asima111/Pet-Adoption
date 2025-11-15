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


document.getElementById("formContact").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent!");
});
