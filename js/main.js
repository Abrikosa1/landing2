'use strict';
var mySwiper = new Swiper('#header-slider', {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.header-slider-pagination',
        bulletClass:'pagination-bullet',
        bulletActiveClass: 'pagination-bullet-active',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      },
});


var innerPostsSwiper = new Swiper('#inner-post-slider', {
  clickable: true,
  pagination: {
    el: '.inner-pagination',
    bulletClass:'pagination-bullet',
    bulletActiveClass: 'pagination-bullet-active',
    clickable: true,
  },
});

var postsSwiper = new Swiper('#posts-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.post-next',
    prevEl: '.post-prev',
    clickable: true,
  },
  breakpoints: {
    865: {
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 2,
    },
  }
});

const typeSelection = document.querySelector('.type-selection'),
      projectCards = document.querySelectorAll('.project-card'),
      menuButton = document.querySelector('.menu-button'),
      menu = document.querySelector('.navbar'),
      projectsBtn = document.querySelector('.projects-btn');



const cardsLoadLimiter = type => {
  projectCards.forEach(item => {
    item.style.display = 'none';
  });
  if(type !== 'all'){
    let typeQuery = document.querySelectorAll(`div[data-card-type=${type}]`);
    if(typeQuery.length > 6){
      for(let i = 0; i < 6; i++){
        typeQuery[i].style.display = 'block';
      }
    } else{
        typeQuery.forEach(element => {
          element.style.display = 'block';
      });
    }
  } else{
    for(let i = 0; i < 6; i++){
      projectCards[i].style.display = 'block';
    }
  }
};



menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
});

projectsBtn.addEventListener('click', () => {
  let type = document.querySelector('input[type="radio"]:checked').value;
  let typeQuery = document.querySelectorAll(`div[data-card-type=${type}]`);
/*   var loadedCards = 6;
  if(typeQuery.length > 6){
    for(let i = loadedCards; i < loadedCards + 6; i++){
      typeQuery[i].style.display = 'block';
    }
    loadedCards += 6;
  } else{
      console.log('nothing more');
  } */

});




typeSelection.addEventListener('change', () => cardsLoadLimiter(event.target.value));


window.onload = cardsLoadLimiter('all');  