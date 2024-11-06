const introButton = document.querySelector('.intro__button');
const enableAnim = () => {
 const buttonWrapper = document.querySelector('.intro__button-wrapper');
 setTimeout(() => {
  buttonWrapper.classList.add('middle');
  buttonWrapper.classList.remove('middle');
  buttonWrapper.classList.add('end');
 }, 500);
};

document.addEventListener('DOMContentLoaded', enableAnim);
introButton.addEventListener('click', openPopup);
