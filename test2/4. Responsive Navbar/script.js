function toggleMenu() {
    var menu = document.getElementById("menu");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("responsive");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }