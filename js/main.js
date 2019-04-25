// Select DOM Items

const menuToggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuInfo = document.querySelector('.menu-info');
const info = document.querySelector('.info');
const navLinks = document.querySelectorAll('.nav-link')

let openMenu = false;

menuToggler.addEventListener('click', toggleMenu);

function toggleMenu(){
  if (!openMenu){
    menuToggler.classList.add('close');
    menu.classList.add('open');
    menuNav.classList.add('open');
    menuInfo.classList.add('open');
    info.classList.add('last-fade-in');
    navLinks.forEach(link => link.classList.add('open'));
    openMenu = true;
  }
  else{
    menuToggler.classList.remove('close');
    menu.classList.remove('open');
    menuNav.classList.remove('open');
    menuInfo.classList.remove('open');
    info.classList.remove('last-fade-in');
    navLinks.forEach(link => link.classList.remove('open'));
    openMenu = false;
  }
}