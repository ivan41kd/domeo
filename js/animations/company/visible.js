const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
 const { top, left, bottom, right } = el.getBoundingClientRect();
 const { innerHeight, innerWidth } = window;
 return partiallyVisible
  ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
     ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
  : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
const introText = document.querySelector('.company__logo');
const awards = document.querySelectorAll('.company__award');
document.addEventListener('scroll', () => {
 if (elementIsVisibleInViewport(introText) == true) {
  introText.classList.add('visible');
 }
 awards.forEach((award) => {
  if (elementIsVisibleInViewport(award) == true) {
   award.classList.add('visible');
  }
 });
});
