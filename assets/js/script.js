'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);




/**
 * filter function
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all") {

      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");

    } else {

      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");

    }
  }
}

addEventOnElem(filterBtns, "click", filter);

/**
 * direcionamento dos botoes
//  */

  function scrollToSection(destinationId) {
    const secaoDestino = document.querySelector(destinationId);
    if (secaoDestino) {
      secaoDestino.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  document.querySelector('a[href="#workshopId"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#workshopDs');
  });

  document.querySelector('a[href="#cursoDs"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#cursoDs');
  });
  
  document.querySelector('a[href="#pricing"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#Planos e preços');
  });

  document.querySelector('a[href="#visagismoId"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#visagismoDs');
  });


 

  
  
 /**
 * define o tamanho do video
 */

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('myVideo', {
      videoId: 'xXuDMMDU2r4&t=7s',
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  function onPlayerReady(event) {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    player.setSize(windowWidth, windowHeight);
  }
