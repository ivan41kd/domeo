const introButton = document.querySelector('.intro__button');
const enableAnim = () => {
 const buttonWrapper = document.querySelector('.intro__button-wrapper');
 buttonWrapper.classList.add('middle');
 buttonWrapper.classList.remove('middle');
 buttonWrapper.classList.add('end');
};

document.addEventListener('DOMContentLoaded', enableAnim);
introButton.addEventListener('click', openPopup);
