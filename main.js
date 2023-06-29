$(document).ready(function($) {
    "use strict";

    WebGLSampler.registerPlugin(ScrollTriger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTriger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }
})

/*===================PRELOADER JS===================*/

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})

/*===================SEARCH BAR JS===================*/

const toggleSearch = (search,button) =>{
    const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button)

    searchButton.addEventListener('click',() => {
        //We add the show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    })
}

toggleSearch('search-bar','search-button')

$(document).ready(function($){
    "use strict";

    jQuery(".menu-toggle").click(function(){
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function(){
        jQuery(".main-navigation").toggleClass("toggled");
    });


    gsap.registerPlugin(ScrollTriger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTriger.create({
        trigger : "body",
        start : "30px top",
        end : "bottom bottom",

        onEnter : () => myFunction(),
        onLeaveBack : () => myFunction(),
    });

    function myFunction(){
        elementFirst.classList.toggle('sticky_head');
    }

});


/*===================HERO SLIDER JS===================*/

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}
const slideNext = function (){
    if (currentSlidePos >= heroSliderItems.length - 1){
        currentSlidePos = 0;
    } else {
        currentSlidePos ++;
    }

    updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function (){
    if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
    } else {
        currentSlidePos --;
    }

    updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);


/*=================== AUTO SLIDE ===================*/


function addEventOnElements(elements, eventType, eventHandler) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener(eventType, eventHandler);
    }
}

var elements = document.getElementsByClassName("my-class");
addEventOnElements(elements, "click", function() {
  // Code to be executed when the element is clicked
});


let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);