// *  CONST handle Menu
const toggleMenu = document.querySelector(".header-icon ion-icon");
const Menu = document.querySelector(".header-menu");
const overlay = document.querySelector(".overlay");
// * Const Scroll Top
const btnTop = document.querySelector(".btn");
const headerScroll = document.querySelector(".header");
// * Const Active Nav
const nav = document.querySelectorAll(".sec");

// * to do : handle menu
const showMenu = () => {
  Menu.classList.add("show-menu");
  overlay.classList.add("show");
};
const hideMenu = () => {
  Menu.classList.remove("show-menu");
  overlay.classList.remove("show");
};

toggleMenu.addEventListener("click", () => {
  showMenu();
});

overlay.addEventListener("click", () => {
  hideMenu();
});

// * handle ScrollTop
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 700) {
    btnTop.classList.add("op1");
  } else {
    btnTop.classList.remove("op1");
  }
});

const scrollTop = () => {
  window.scrollTo(0, 0);
};

btnTop.addEventListener("click", scrollTop);

// * todo: handle Active Nav
nav.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    hideMenu();
  });
});
