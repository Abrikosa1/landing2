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
  slidesPerView: 3,
  navigation: {
    nextEl: '.post-next',
    prevEl: '.post-prev',
    clickable: true,
  },
});