/*============Sticky and Menu=============== */
let menuIcon = document.querySelector('#bar');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('ri-close');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
   
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 70);
    
}


/*======Dark Mode==== */

let darkModeIcon = document.querySelector('#darkMode-icon ');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("ri-sun-line");
    document.body.classList.toggle('dark-mode');
}

/*========== typing text animation ===========*/

let typed = new Typed(".typing", {
    strings: ["Full stack Developer", "Front-end developer", "Back-end Developer","MERN stack Developer", "Web Developer","Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

let typed2 = new Typed(".typing-2", {
    strings: ["Full stack Developer", "Front-end developer", "Back-end Developer","MERN stack Developer", "Web Developer","Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});




/* =====Scrool reveal ======*/
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading, .section-header ,.footer-iconTop', { origin: 'top' });
    ScrollReveal().reveal('.home-image img, .skills-wrapper, .portfolio-container, .contact, .services', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1,.about-img img , .social', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3,.home-content p, .about-content', { origin: 'right' });



    