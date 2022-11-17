"use strict";

const btnOpenEle = document.querySelector(".btn");
const slideEle = document.getElementById("slide");
const btnCloseEle = document.getElementById("btn-close");
const overLayEle = document.querySelector(".overlay");

//Function
function closeSlide() {
  slideEle.classList.remove("open");
  slideEle.classList.add("close");
  overLayEle.classList.remove("overlay-open");
}

//AddEventListeners

btnOpenEle.addEventListener("click", () => {
  setTimeout(() => {
    slideEle.style.display = "none";
  }, 5000);
  setTimeout(() => {
    overLayEle.style.display = "none";
  }, 6000);
  slideEle.classList.remove("close");
  slideEle.classList.add("open");
  overLayEle.classList.add("overlay-open");
});

btnCloseEle.addEventListener("click", () => {
  closeSlide();
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    closeSlide();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSlide();
  }
});
