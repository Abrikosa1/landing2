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
  slidesPerView: 2,
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
  }
});


var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.navbar');
menuButton.addEventListener('click', function(){
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
})