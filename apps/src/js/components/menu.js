const navbarBtn = document.querySelector('.navbar_btn');
const navbarBtnSpan = document.querySelector('.navbar_btn span');
const navbarMenu = document.querySelector('.navbar_menu');

if (navbarBtn && navbarMenu) {
navbarBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (navbarBtn.classList.contains('active')) {
        navbarBtn.classList.remove('active');
        navbarMenu.style = 'left: -280px; transition: left 0.5s';
    }else{
        navbarBtn.classList.add('active');
        navbarMenu.style = 'left: 0; transition: left 0.5s';
    }
})
document.addEventListener('mouseup', function(e) {
    const clickedToggle = e.target === navbarBtn || e.target === navbarBtnSpan;
    if (!clickedToggle) {
        navbarBtn.classList.remove('active');
        navbarMenu.style = 'left: -280px; transition: left 0.5s';
    }
})
navbarMenu.addEventListener('mouseup',function(e) {
    e.stopPropagation();
})
}