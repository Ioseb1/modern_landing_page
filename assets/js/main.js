/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    
    // When clicked on each nav__link, it removes show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SWIPER DISCOVER ====================*/
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    spaceBetween: 32,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
});

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon');


function playPause() {
    if (videoFile.paused) {
        // play video
        videoFile.play();

        // change icon to pause
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    }
    else {
        // pause video
        videoFile.pause();

        // change the icon to play
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
}
videoButton.addEventListener('click', playPause);

function finalVideo() {
    // video ends, icon changes
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}
// ended video event
videoFile.addEventListener('ended', finalVideo);



/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// when scrolling, menu items will be automatiaclly selected
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    // console.log(scrollY)

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// previously selected topic
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// obtain the current theme that the -
// interface has by validating the dark-theme class
const getCurrentTheme = function() {
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}

const getCurrentIcon = function() {
    themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
}

// validating if the user previously chose a topic 
if (selectedTheme) {
    // if the validation is ok, checking what is the issue if we activate/deactivated dark mode
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add': 'remove'](iconTheme);
}

//Activate/Deactivate the theme manually with the buttom
themeButton.addEventListener('click', () => {
    // add or remove dark icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // saving theme and icon to the local storage
    localStorage.getItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selectedIcon', getCurrentIcon());
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
