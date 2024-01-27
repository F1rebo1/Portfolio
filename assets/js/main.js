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

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass = this.parentNode.className
    //itemClass tracks the classes of the currently clicked element. We then close
    //every skill list in the for loop below, and then based on itemClass's classes
    //we open the clicked list if itemClass was originally closed.

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close';
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills);
})

/* QUALIFICATION TABS*/

const tabContent = document.querySelectorAll('[data-content]'),
      tabs = document.querySelectorAll('[data-target]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContent => {
            tabContent.classList.remove('qualification_active');
        })
        target.classList.add('qualification_active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/* PORTFOLIO SWIPER */
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

/* SCROLL SECTIONS ACTIVE LINK */
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id');

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav_menu a[href=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav_menu a[href=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll',scrollActive)

/* CHANGE BACKGROUND HEADER */
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 200) navClose.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

/* SHOW SCOLL UP */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);

/* DARK AND LIGHT THEME */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Get the current theme by checking for current classnames within body
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validate if the user chose a topic
if(selectedTheme){
    // If validated, we ask what the issue was to know if we activated it
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate/deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme);  //.toggle(i) adds i if not present,
    themeButton.classList.toggle(iconTheme);    //or removes it if present
    // Save the theme and the current icon chosen by the user
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})