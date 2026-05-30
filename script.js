const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
const year = document.querySelector('#year');

toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('open'));
});
year.textContent = new Date().getFullYear();
