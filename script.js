const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
