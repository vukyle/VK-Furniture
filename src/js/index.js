import '../css/index.sass';
import '../../slick/slick.js';
//var slick = require('slick-carousel');

$('.main-slider').slick({
    dots: true,
    autoplay: true,
    nextArrow: $('#right'),
    prevArrow: $('#left')
});

const nav = {
    toggleMenu: function() {
        var hamburger = document.getElementById('menuToggle');
        var hamburgerContainer = document.getElementById('hamburger-container');
        var nav = document.getElementById('mobileOverlay');

        if (hamburger.className === 'hamburger') {
            hamburger.className = 'hamburger open';
            $(hamburgerContainer).addClass('hamburger-container--active');
            nav.style.width = '100%';
        } else {
            hamburger.className = 'hamburger';
            $(hamburgerContainer).removeClass('hamburger-container--active');
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
    const dayOfWeekFooter = document.getElementById('day-of-week-footer').getElementsByTagName('LI');
    const date = new Date();
    const day = date.getDay() - 1;
    // let weekArray = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    // weekArray = weekArray.map((item) => {
    //  return weekArray.indexOf(item);
    // });
    let weekArray = [0, 1, 2, 3, 4, 5, 6];

     for (let i = 0; i < weekArray.length; i++) {
         if (day === weekArray[i]) {
         $(dayOfWeek[i]).addClass('active');
         $(dayOfWeekFooter[i]).addClass('active');
         break;
         }
     }
}
highlightDay();

$('.testimonial__slider').slick({
  autoplay: true,
  arrows: false
});

$('.gallery__slider-main').slick({
    autoplay: false,
    arrows: false
});

const gallery = {
    imgIDArray: [],
    createID: function() {
        const img = document.getElementById('thumb-gallery').getElementsByTagName('DIV');
        for (let i=0; i < img.length; i++) {
            this.imgIDArray[i] = 'img-gallery-' + i;
            img[i].setAttribute('id', this.imgIDArray[i]);
        }
    },
    assignPosition: function(child) {
        let node = document.getElementById(child);
        var i = 0;
        while(node.previousSibling) {
            node = node.previousSibling;
            if(node.nodeType === 1) {
                i++;
            }
        }
        return i;
    },
    GoToSlide: function(id) {
        this.button = () => {
            $('.gallery__slider-main').slick('slickGoTo', gallery.assignPosition(id));
        };

    },
    addEventHandler: function () {
        let img = null;
        let imgElement = null;
        function toggle (element, button) {
                element.onclick = () => {
                    button.button();
                };
        }

        for (let i = 0; i < this.imgIDArray.length; i++) {
            img = new this.GoToSlide(this.imgIDArray[i]);
            imgElement = document.getElementById('img-gallery-' + i);
            toggle(imgElement, img);
        }

    },
    eventListener: function() {
        let mainGallery = document.getElementById("thumb-gallery");
        mainGallery.addEventListener('click', function(event){
            let elementClicked = event.target;
            console.log(event);
            $('.gallery__slider-main').slick('slickGoTo', 3);

        });
    }
};
//gallery.eventListener();
gallery.createID();
gallery.addEventHandler();
