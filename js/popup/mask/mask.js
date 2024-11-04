const popupInput = document.querySelector('.popup__ready-form-input');

const enableMask = (phoneInput) => {
 let value = phoneInput.value.replace(/\D/g, ''); // Remove all non-digit characters
 if (value.length === 0) {
  phoneInput.value = '';
  return;
 }

 if (value.length > 11) {
  value = value.substring(0, 11); // Limit to 11 digits
  phoneInput.parentElement.classList.add('invalid');
 }

 // Build formatted string step-by-step
 let formattedValue = '+7 (';

 if (value.length > 1) {
  formattedValue += value.substring(1, 4);
 }
 if (value.length >= 5) {
  formattedValue += ') ' + value.substring(4, 7);
 }
 if (value.length >= 8) {
  formattedValue += '-' + value.substring(7, 9);
 }
 if (value.length >= 10) {
  formattedValue += '-' + value.substring(9, 11);
 }

 phoneInput.value = formattedValue;
};
