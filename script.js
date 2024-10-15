const header = document.getElementById("header");
const navMenu = document.getElementById("nav");
const navMenuOpen = document.getElementById("nav-menu-open");
const navMenuClose = document.getElementById("nav-menu-close");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    if (!header.classList.contains("shadow")) header.classList.add("shadow");
  } else {
    if (header.classList.contains("shadow")) header.classList.remove("shadow");
  }
});

navMenuOpen.addEventListener("click", (e) => {
  e.preventDefault();
  if (navMenu.classList.contains("nav--hidden"))
    navMenu.classList.remove("nav--hidden");
});

navMenuClose.addEventListener("click", (e) => {
  e.preventDefault();
  if (!navMenu.classList.contains("nav--hidden"))
    navMenu.classList.add("nav--hidden");
});
