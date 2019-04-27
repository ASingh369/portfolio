// Select DOM Items

const menuToggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuInfo = document.querySelector('.menu-info');
const info = document.querySelector('.info');
const navLinks = document.querySelectorAll('.nav-link');
const loader = document.querySelector(".loader");

let openMenu = false;

menuToggler.addEventListener('click', toggleMenu);
window.addEventListener("load", function(){
  loader.classList.add("hidden");
});

function toggleMenu(){
  if (!openMenu){
    menuToggler.classList.add('close');
    menu.classList.add('open');
    menuNav.classList.add('open');
    menuInfo.classList.add('open');
    info.classList.add('last-fade-in');
    for (let i = 0; i < 4; i++){
      navLinks[i].classList.add('open');
    }
    openMenu = true;
  }
  else{
    menuToggler.classList.remove('close');
    menu.classList.remove('open');
    menuNav.classList.remove('open');
    menuInfo.classList.remove('open');
    info.classList.remove('last-fade-in');
    for (let i = 0; i < 4; i++){
      navLinks[i].classList.remove('open');
    }
    openMenu = false;
  }
}