const navbar = document.getElementById('header');
const navbarOffset = 200;

function handleScroll() {
  if (window.scrollY >= navbarOffset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.addEventListener('scroll', handleScroll);