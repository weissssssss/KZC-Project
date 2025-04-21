const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuIcon.classList.toggle('bx-x');
  menuIcon.classList.toggle('bx-menu');
});
