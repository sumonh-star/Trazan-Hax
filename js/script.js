'use strict';

// =====sticky-nav-&-scrollup=====
const scrollUp = document.querySelectorAll('[data-scroll]'),
      sticky = document.querySelectorAll('.sticky');
for(let i=0; i < scrollUp.length; i++){
 const scroll = function(){
  if(this.scrollY >= 160){
  scrollUp[i].classList.add('show-scroll');
  sticky[i].classList.add('nav-color');
  }
  else{
    scrollUp[i].classList.remove('show-scroll');
    sticky[i].classList.remove('nav-color');
  };
};
window.addEventListener('scroll', scroll);
};



// product-variables
const menuToggleBtn = document.querySelectorAll('[data-toggle-btn]');
const toggleMenu = document.querySelectorAll('[data-toggle-menu]');

for (let i = 0; i < menuToggleBtn.length; i++) {
  menuToggleBtn[i].addEventListener('click', function () {
    const clickedToggle = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < toggleMenu.length; i++) {
      if (clickedToggle) break;
      if (toggleMenu[i].classList.contains('active')) {

        toggleMenu[i].classList.remove('active');
        menuToggleBtn[i].classList.remove('active');

      }
    }
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });
};

// product-variables
const productBtn = document.querySelectorAll('[data-product-btn]');
const productBox = document.querySelectorAll('[data-stock-product]');

for (let i = 0; i < productBtn.length; i++) {
  productBtn[i].addEventListener('click', function () {
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < productBox.length; i++) {
      if (clickedBtn) break;
      if (productBox[i].classList.contains('active')) {

        productBox[i].classList.remove('active');
        productBtn[i].classList.remove('active');

      }
    }
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });
};


// ====nav-menu-side-slide=====

const mobileNavMenuOpenBtn = document.querySelectorAll('[data-nav-open-btn]'),
      mobileNavMenu = document.querySelectorAll('[data-nav-menu]'),
      mobileNavMenuCloseBtn = document.querySelectorAll('[data-menu-close-btn]'),
      fixedOverlay = document.querySelector('[data-overlay]');

  for(let i = 0; i < mobileNavMenuOpenBtn.length; i++){

    const mobileNavMenuCloseFunction = function(){
      mobileNavMenu[i].classList.remove('active');
      fixedOverlay.classList.remove('active');
    };

    mobileNavMenuOpenBtn[i].addEventListener('click',function(){
      mobileNavMenu[i].classList.add('active');
      fixedOverlay.classList.add('active');
    });

    mobileNavMenuCloseBtn[i].addEventListener('click',mobileNavMenuCloseFunction);
    fixedOverlay.addEventListener('click',mobileNavMenuCloseFunction);
  };


// ======spiner-box close======
const spinerBox = document.querySelectorAll('[data-spiner]');
const spinerCloseBtn = document.querySelectorAll('[data-spiner-close-btn]');

for(let i = 0; i < spinerBox.length; i++){
spinerCloseBtn[i].addEventListener('click', function () {
  spinerBox[i].classList.add('closed');
});
};



// =====main-home-menu=====
const mainHome = document.querySelector('[data-main-home]');
const menuBtn = document.querySelector('[data-menu-btn]');

menuBtn.addEventListener('click', function(){
  mainHome.classList.toggle('active');
})