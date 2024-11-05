const slides = document.querySelector('.socials__slides');
const firstSlide = document.querySelector('.socials__slide');
const allSlides = document.querySelectorAll('.socials__slide');
const lastSlide = allSlides[allSlides.length - 1];

const firstSlideClone = firstSlide.cloneNode(true);
const lastSlideClone = lastSlide.cloneNode(true);

slides.appendChild(firstSlideClone);
slides.insertBefore(lastSlideClone, firstSlide);

const allSlidesWithClones = document.querySelectorAll('.socials__slide');

const slideRight = document.querySelector('.socials__slider-right');
const slideLeft = document.querySelector('.socials__slider-left');
const mediaItems = document.querySelectorAll('.socials__media-list-item');

let index = 1;
let isPaused = false;

slides.style.transform = `translateX(${-firstSlide.offsetWidth}px)`; // Позиция первого слайда

const next = () => {
 if (isPaused) return;

 index++;
 slides.style.transition = 'transform 0.5s ease-in-out';
 slides.style.transform = `translateX(${-index * firstSlide.offsetWidth}px)`; // Позиционирование слайда

 if (index === allSlidesWithClones.length - 1) {
  setTimeout(() => {
   slides.style.transition = 'none';
   index = 1;
   slides.style.transform = `translateX(${-index * firstSlide.offsetWidth}px)`;
  }, 500);
 }

 setActive(mediaItems);
};

const prev = () => {
 if (isPaused) return;

 index--;
 slides.style.transition = 'transform 0.5s ease-in-out';
 slides.style.transform = `translateX(${-index * firstSlide.offsetWidth}px)`;

 if (index === 0) {
  setTimeout(() => {
   slides.style.transition = 'none';
   index = allSlidesWithClones.length - 2;
   slides.style.transform = `translateX(${-index * firstSlide.offsetWidth}px)`;
  }, 500);
 }

 setActive(mediaItems);
};

const setActive = (element) => {
 element.forEach((item, i) => {
  if (i === (index - 1 + allSlides.length) % allSlides.length) {
   item.classList.add('active');
  } else {
   item.classList.remove('active');
  }
 });
};

const clickDots = (i) => {
 index = i + 1;
 setActive(mediaItems);
 enableSlider();
};

const enableSlider = () => {
 slides.style.transition = 'transform 0.5s ease-in-out';
 slides.style.transform = `translateX(${-index * firstSlide.offsetWidth}px)`;
};

mediaItems.forEach((item, i) => {
 item.addEventListener('click', () => {
  clickDots(i);
 });
});

const autoplay = () => setInterval(next, 3000);
let autoplayInterval = autoplay();

slides.addEventListener('mouseenter', () => {
 isPaused = true;
 clearInterval(autoplayInterval);
});
slides.addEventListener('mouseleave', () => {
 isPaused = false;
 autoplayInterval = autoplay();
});

slideRight.addEventListener('click', next);
slideLeft.addEventListener('click', prev);

setActive(mediaItems);
