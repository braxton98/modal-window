"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const openmodals = document.querySelectorAll(".show-modal");
const closemModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hiden");
};

const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hiden");
};

for (let i = 0; i < openmodals.length; i++) {
  openmodals[i].addEventListener("click", openmodal);
}

closeModal.addEventListener("click", closemModal);
overlay.addEventListener("click", closemModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closemModal();
  }
});
