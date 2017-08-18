import '../css/index.sass';
import '../../slick/slick.js';
//var slick = require('slick-carousel');

$('.main-slider').slick({
  dots: true,
  autoplay: true,
});

const nav = {
    toggleMenu: function() {
        var hamburger = document.getElementById('menuToggle');
        var nav = document.getElementById('mobileOverlay');

        if (hamburger.className === 'hamburger') {
            hamburger.className = 'hamburger open';
            nav.style.width = '100%';
        } else {
            hamburger.className = 'hamburger';
            nav.style.width = '0';
            }
        },
        eventListener: function() {
            var menuOverlay = document.getElementById('mobileOverlay');
            menuOverlay.addEventListener('click', function(event) {
                var elementClicked = event.target;
                if (elementClicked.nodeName === 'A') {
                this.toggleMenu();
                }
            }.bind(nav));

            var hamburger = document.getElementById('menuToggle');
            hamburger.addEventListener('click', function(event) {
                var elementClicked = event.target;
                if (elementClicked.nodeName === 'SPAN' || elementClicked.id === 'menuToggle') {
                    this.toggleMenu();
                }
            }.bind(nav));
        }
};
nav.eventListener();

function highlightDay() {
    const dayOfWeek = document.getElementById('day-of-week').getElementsByTagName('LI');
     const date = new Date();
     const day = date.getDay();
     let weekArray = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
     weekArray = weekArray.map((item) => {
         return weekArray.indexOf(item);
     });

     for (let i = 0; i < weekArray.length; i++) {
         if (day === weekArray[i] + 1) {
         $(dayOfWeek[i]).addClass('active');
         break;
         }
     }
}
highlightDay();

$('.testimonial__slider').slick({
  dots: true,
  autoplay: true,
});

$('.gallery__slider-main').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 asNavFor: '.gallery__slider-nav'
});
$('.gallery__slider-nav').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    asNavFor: '.gallery__slider-main',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
    {
        breakpoint: 1024,
        settings:
        {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
        }
    }
]
});
