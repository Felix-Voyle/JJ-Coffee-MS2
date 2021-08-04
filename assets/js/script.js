function burgerDropMenu() {
  var burger = document.getElementById('burger-menu');
  var links = document.getElementById("navLinks");
  burger.classList.toggle('opened');
  burger.setAttribute('aria-expanded', burger.classList.contains('opened'));
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}