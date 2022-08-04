


//buttons
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');

function showPopup () {
  popup.removeAttribute('class', 'popup_opened');
}

function hidePopup () {
  popup.setAttribute('class', 'popup_opened');
  inputName.removeAttribute('value', titleText);
  inputAboutme.removeAttribute('value', subtitleText);

}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);

//inputs


let titleText = document.querySelector('.profile__title').innerText;
let subtitleText = document.querySelector('.profile__subtitle').innerText;
let inputName = document.querySelector('input[id=name]');
let inputAboutme = document.querySelector('input[id=aboutme]');

inputName.setAttribute('value', titleText);
inputAboutme.setAttribute('value', subtitleText);


//form

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('input[id=name]');
let jobInput = formElement.querySelector('input[id=aboutme]');
let nameTitle = document.querySelector('.profile__title').value;

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput;
    subtitleText.textContent = jobInput;
}

formElement.addEventListener('submit', formSubmitHandler); 
console.log(nameTitle);



