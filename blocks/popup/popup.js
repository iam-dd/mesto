
//Button
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');

//Popup
let popup = document.querySelector('.popup');

//Title
let titleText = document.querySelector('.profile__title');
let subtitleText = document.querySelector('.profile__subtitle');

//Input
let inputName = document.querySelector('input[id=name]');
let inputAboutme = document.querySelector('input[id=aboutme]');

function showPopup() {
  popup.classList.remove('popup_opened');
  inputName.value = titleText.innerText;
  inputAboutme.value = subtitleText.innerText;
}

function hidePopup() {
  popup.classList.add('popup_opened');
  inputName.value = titleText.innerText;
  inputAboutme.value = subtitleText.innerText;

}

//EventListener
editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);


//Form
let formElement = document.querySelector('.popup__form');
function formSubmitHandler(evt) {
  evt.preventDefault();
  titleText.innerText = (inputName).value;
  subtitleText.innerText = (inputAboutme).value;
  hidePopup();

}

formElement.addEventListener('submit', formSubmitHandler);




