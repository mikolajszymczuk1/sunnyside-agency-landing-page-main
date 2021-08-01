// Navigation menu controller
const hamburger = document.querySelector(".navigation__hamburger");
const links_container = document.querySelector(".navigation__links-container");

hamburger.addEventListener("click", function() {
    this.classList.toggle("navigation__hamburger--active");
    links_container.classList.toggle("navigation__links-container--active");
});
