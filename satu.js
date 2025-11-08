const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("nav-links");
const logoutBtn = document.getElementById("logoutBtn");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});