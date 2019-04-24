// Select DOM Items

const menuToggler = document.querySelector('.menu-toggler');

let openMenu = false;

menuToggler.addEventListener('click', toggleMenu);

function toggleMenu(){
  if (!openMenu){
    menuToggler.classList.add('close');
    openMenu = true;
  }
  else{
    menuToggler.classList.remove('close');
    openMenu = false;
  }
}