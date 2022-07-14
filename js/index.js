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
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}