let navMenu = document.getElementById("nav-menu");
let IcoN = document.getElementById("logo");

if (IcoN) {
    IcoN.addEventListener('click', () => {
        navMenu.classList.toggle('nav-show')
    })
}
const navLink = document.querySelectorAll('.navbar')

function LinkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('nav-show')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))
