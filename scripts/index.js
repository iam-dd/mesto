
//Button
const editButton = document.querySelector('.profile__edit-button');
const closeButtonProfile = document.querySelector('.popup__button-close_section_profile');
const closeButtonElements = document.querySelector('.popup__button-close_section_elements');
const addButton = document.querySelector('.profile__button');

//Popup
let popup_profile = document.querySelector('.popup_section_profile');
let popup_elements = document.querySelector('.popup_section_elements');

//Title
let titleText = document.querySelector('.profile__title');
let subtitleText = document.querySelector('.profile__subtitle');

//Input
let inputName = document.querySelector('.popup__input_field_name');
let inputAboutme = document.querySelector('.popup__input_field_aboutme');

//Form
let formElement = document.querySelector('.popup__form');


function hidePopup() {
  popup_profile.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  titleText.textContent = inputName.value;
  subtitleText.textContent = inputAboutme.value;
  hidePopup();
}

//Edit button
editButton.addEventListener('click', function() {
  popup_profile.classList.add('popup_opened');
  inputName.value = titleText.textContent;
  inputAboutme.value = subtitleText.textContent;
});
//Close button
closeButtonProfile.addEventListener('click', function() {
  popup_profile.classList.remove('popup_opened');
});

closeButtonElements.addEventListener('click', function() {
  popup_elements.classList.remove('popup_opened');
});
//Add button
addButton.addEventListener('click', function() {
  popup_elements.classList.add('popup_opened');
});


formElement.addEventListener('submit', formSubmitHandler);


//TemplateAddCards

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

listElement = document.querySelector('.elements');

initialCards.forEach(item =>  {
   const card = `
  <div class="card">
  <img class="card__image" src="${item.link}" alt="${item.name}">
  <div class="card__sign">
    <h2 class="card__location">${item.name}</h2>
    <button type="button" class="card__like"></button>
  </div>
</div> 
  `
  listElement.insertAdjacentHTML('afterbegin', card);
});








