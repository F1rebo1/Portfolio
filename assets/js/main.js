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
