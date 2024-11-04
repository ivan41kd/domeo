const galleryItems = document.querySelectorAll('.intro__gallery-item');
const progressBar = document.querySelector('.intro__bar');
let progressCount = 0;
const maxProgress = 100;

galleryItems.forEach((item, index) => {
 item.style.transform = `translateY(${-40 * index}px)`;
 item.style.opacity = '0.3';
 item.style.zIndex = galleryItems.length - index;

 if (index > 1) {
  item.style.opacity = '0.1';
 }
});

galleryItems[0].style.opacity = '1';
galleryItems[0].style.transform = `translateY(0) scale(1)`;

const initSlider = (items) => {
 let index = 0;

 const playSlider = () => {
  items[index].style.opacity = '0.3';
  items[index].style.transform = `translateY(${-40 * (index + 1)}px)`;

  index = (index + 1) % items.length;

  if (index === 0) {
   items.forEach((item, i) => {
    item.style.transform = `translateY(${-40 * i}px)`;
    item.style.opacity = i > 1 ? '0' : '0.1';
   });
  }

  items[index].style.opacity = '1';
  items[index].style.transform = `translateY(0) scale(1)`;

  items.forEach((item, i) => {
   item.style.zIndex = i === index ? items.length : items.length - i - 1;
  });
 };

 return playSlider;
};

const func = initSlider(galleryItems);

const startProgress = () => {
 const interval = setInterval(() => {
  if (progressCount < maxProgress) {
   progressCount++;
   progressBar.style.width = `${progressCount}%`;
  } else {
   progressCount = 0;
   progressBar.style.width = `0%`;
   func();
  }
 }, 100);
};

startProgress();
