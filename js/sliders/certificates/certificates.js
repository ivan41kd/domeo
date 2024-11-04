const swiper = new Swiper('.swiper', {
 effect: 'coverflow',
 grabCursor: true,
 centeredSlides: true,
 slidesPerView: 'auto',
 loop: true,
 coverflowEffect: {
  rotate: 0,
  stretch: 5,
  depth: 500,
  scale: 1,
 },
 autoplay: {
  delay: 3000,
  pauseOnMouseEnter: true,
 },
});
