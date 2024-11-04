const burgerIcon = document.querySelector('.header__burger');
const headerWrapper = document.querySelector('.header__wrapper');

const headerInput = document.querySelector('.header__call-input');

const headerInputLabel = document.querySelector('.header__call-input-label');

const openBurger = () => {
 burgerIcon.classList.toggle('active');
 headerWrapper.classList.toggle('burger-active');
 document.body.classList.toggle('scroll-disabled');
};
const closeBurger = () => {
 if (
  burgerIcon.classList.contains('active') &&
  headerWrapper.classList.contains('burger-active')
 ) {
  burgerIcon.classList.remove('active');
  headerWrapper.classList.remove('burger-active');
 }
};

burgerIcon.addEventListener('click', openBurger);
headerInput.addEventListener('input', () => enableMask(headerInput));
headerInput.addEventListener('focus', () => {
 headerInputLabel.classList.add('disable');
 headerInputLabel.parentElement.classList.add('focus');
 if (headerInput.value === '') {
  headerInput.value = '+7 (';
 }
});

headerInput.addEventListener('blur', () => {
 if (headerInput.value === '+7 (') {
  headerInput.value = '';
 }
});
