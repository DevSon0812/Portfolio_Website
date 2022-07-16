// CONST handle Menu
const toggleMenu = document.querySelector(".header-icon ion-icon");
const Menu = document.querySelector(".header-menu");

// * to do : handle menu
toggleMenu.addEventListener("click", () => {
  Menu.classList.add("show");
});
