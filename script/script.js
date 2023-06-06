// variables
const deNav = document.querySelector("nav");
const menuKnop = document.querySelector("header nav>a");

// eventlisteners
menuKnop.addEventListener(
  "click",
  function () {
    deNav.classList.toggle("open");
  },
  false
);
