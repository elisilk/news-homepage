const header = document.getElementById("header");
const navMenu = document.getElementById("nav");

const navMenuControl = document.getElementById("nav-menu-control");
const navMenuOpen = document.getElementById("nav-menu-open");
const navMenuClose = document.getElementById("nav-menu-close");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    if (!header.classList.contains("shadow")) header.classList.add("shadow");
  } else {
    if (header.classList.contains("shadow")) header.classList.remove("shadow");
  }
});

navMenuControl.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button clicked");

  if (navMenuControl.getAttribute("aria-expanded") == "true") {
    navMenu.classList.add("nav--hidden");
    navMenuControl.setAttribute("aria-expanded", false);
  } else {
    navMenu.classList.remove("nav--hidden");
    navMenuControl.setAttribute("aria-expanded", true);
  }
});
