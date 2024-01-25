/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');


/* MENU SHOW */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


/* MENU HIDDEN */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


/* HIDE MENU ON BUTTON CLICK MOBILE*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    // const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
//We iterate through each clickable link within the menu, and if clicked then hide the
//menu

/* ACCORDION SKILLS */



/* QUALIFICATION TABS*/
