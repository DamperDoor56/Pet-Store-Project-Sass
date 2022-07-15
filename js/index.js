//Const
const loginForm = document.querySelector('.header .login-form');
const navbar = document.querySelector('.header .navbar');

//user btn login form on click
document.querySelector('#user-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}
//menu btn on mobile
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

//Navbar transparent & colored on scroll
window.onscroll = () => {
    if(window.scrollY > 350){
        document.querySelector('.header').classList.add('active');
        document.querySelector('.hover-me').classList.add('pop');
        document.querySelector('.hover-it').classList.add('pop');
        document.querySelector('.hover-ye').classList.add('pop');
        document.querySelector('.hover-te').classList.add('pop');
        document.querySelector('.hover-mi').classList.add('pop');
    } else {
        document.querySelector('.header').classList.remove('active');
        document.querySelector('.hover-me').classList.remove('pop');
        document.querySelector('.hover-it').classList.remove('pop');
        document.querySelector('.hover-ye').classList.remove('pop');
        document.querySelector('.hover-te').classList.remove('pop');
        document.querySelector('.hover-mi').classList.remove('pop');
    }
}