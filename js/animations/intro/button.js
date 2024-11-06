const introButton = document.querySelector('.intro__button');
const enableAnim = () => {
 const buttonWrapper = document.querySelector('.intro__button-wrapper');
 setTimeout(() => {
  buttonWrapper.style.transition = '1.2s';
  introButton.style.transition = '1.2s';
  buttonWrapper.classList.add('middle');
  buttonWrapper.classList.remove('middle');
  buttonWrapper.classList.add('end');
 }, 600);
};

document.addEventListener('DOMContentLoaded', enableAnim);
introButton.addEventListener('click', openPopup);
