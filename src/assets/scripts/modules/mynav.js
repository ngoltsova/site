const headerToggler = document.querySelector('.header__toggler');
const headerArrow = document.querySelector('.header__arrow');
const headerMenu = document.querySelector('.header__menu');

headerToggler.addEventListener('click', function () {
  headerArrow.classList.toggle('header__arrow_rotated');
  headerMenu.classList.toggle('_hidden');
})
