// // Toogle class active
// const navbarNav = document.querySelector('.navbar-nav');

// // ketika hamburger menu di klik
// document.querySelector('#hamburger-menu').onclick = () => {
//     navbarNav.classList.toogle('active');
// };

const navbarNav = document.querySelector('.navbar-nav'); 
const hamburgerMenu = document.getElementById('hamburger-menu');

hamburgerMenu.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah link berpindah halaman
    navbarNav.classList.toggle('active');
});

// klik diluar sidebar untuk menghilangkan hamburger menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})