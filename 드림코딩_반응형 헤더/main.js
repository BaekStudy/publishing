const toggleBtn = document.querySelector("header .navbar_toggleBtn");
const menu = document.querySelector("header .navbar_menu");
const icons = document.querySelector("header .navbar_icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
