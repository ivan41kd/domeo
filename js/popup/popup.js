const quizData = data;
const popup = document.querySelector('.popup');
const closePopupIcon = document.querySelector('.popup__close');
const popupWrapper = document.querySelector('.popup__wrapper');

const questionTitle = document.querySelector('.popup__question-title');
const questionsWrapper = document.querySelector('.popup__questions');

const saleValue = document.querySelector('.popup__sale-value');

const loading = document.querySelector('.popup__loading');
const loadingWrapper = document.querySelector('.popup__loading-bar-container');

const ready = document.querySelector('.popup__ready');

let currentQuiz = 0;

const openPopup = () => {
 popup.classList.add('active');
 popupWrapper.classList.contains('disable')
  ? loading.classList.add('visible')
  : null;
};
const closePopup = () => {
 popup.classList.remove('active');
 loading.classList.contains('visible')
  ? loading.classList.remove('visible')
  : null;
};

const enableLoading = () => {
 let loadingProgress = 0;
 popupWrapper.classList.add('disable');
 loading.classList.add('visible');
 setInterval(() => {
  loadingProgress < 100 ? loadingProgress++ : enableReady();

  loadingWrapper.style.width = `${loadingProgress}%`;
 }, 100);
};

const enableReady = () => {
 loading.remove();
 ready.classList.remove('disable');
 ready.classList.add('visible');
};

const renderButtons = (text) => {
 const questionButton = document.createElement('div');
 questionButton.className = 'popup__question-variant';
 questionButton.innerHTML = `       <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="popup__question-icon"
   >
    <circle
     cx="20"
     cy="20"
     r="20"
     transform="rotate(-180 20 20)"
     fill="white"
    />
    <circle
     cx="20"
     cy="20"
     r="17"
     transform="rotate(-180 20 20)"
     fill="#F6F6F6"
     class='popup__question-circle-bg'
    />
    <path
     d="M27 16L18.75 24L15 20.3636"
     stroke="#C1C1C1"
     stroke-width="3"
     stroke-miterlimit="10"
     stroke-linecap="round"
     stroke-linejoin="round"
     class='popup__question-circle-tick'
    />
   </svg>
   <p class="popup__question-variant-text">${text}</p>`;
 questionsWrapper.appendChild(questionButton);
 questionButton.addEventListener('click', () => {
  questionButton.classList.add('selected');
  setTimeout(() => {
   nextQuiz();
   renderPopup();
  }, 500);
 });
};

const nextQuiz = () => {
 currentQuiz++;
 console.log(currentQuiz);
 switch (currentQuiz) {
  case 1:
   saleValue.textContent = '1,9%';
   break;
  case 2:
   saleValue.textContent = '2,6%';
   break;
  case 3:
   saleValue.textContent = '4,3%';
   break;
  case 4:
   saleValue.textContent = '5,6%';
   break;
 }
};
const renderPopup = () => {
 questionsWrapper.innerHTML = '';
 quizData.forEach((item, index) => {
  if (currentQuiz == index) {
   questionTitle.textContent = item.title;
   const variants = Object.values(item.variants);
   variants.forEach((text) => {
    renderButtons(text);
   });
  } else if (currentQuiz >= quizData.length) {
   enableLoading();
  }
 });
};

closePopupIcon.addEventListener('click', closePopup);
popupInput.addEventListener('input', () => enableMask(popupInput));
popupInput.addEventListener('focus', () => {
 if (popupInput.value === '') {
  popupInput.value = '+7 (';
 }
});

popupInput.addEventListener('blur', () => {
 if (popupInput.value === '+7 (') {
  popupInput.value = '';
 }
});

renderPopup();
