
//Button
const editButton = document.querySelector('.profile__edit-button');
const closeButtonProfile = document.querySelector('.popup__button-close_section_profile');
const closeButtonElements = document.querySelector('.popup__button-close_section_elements');
const addButton = document.querySelector('.profile__button');



//Popup
const popup_profile = document.querySelector('.popup_section_profile');
const popup_elements = document.querySelector('.popup_section_elements');

//Title
let titleText = document.querySelector('.profile__title');
let subtitleText = document.querySelector('.profile__subtitle');

//Form
let formProfile = document.querySelector('.popup__form_section_profile');
const formElement = document.querySelector('.popup__form_section_elements');

//Input
let inputName = formProfile.querySelector('.popup__input_field_name');
let inputAboutme = formProfile.querySelector('.popup__input_field_aboutme');
const inputTitle = formElement.querySelector('.popup__input_field_title');
const inputLink = formElement.querySelector('.popup__input_field_link');

const templateCard = document.querySelector('.template');



// Cards
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



//Popup hide
function hidePopup(section) {
  section.classList.remove('popup_opened');
};

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

function addCard (itemTitle, itemLink) {
   const card = templateCard.content.cloneNode(true);
   card.querySelector('.card__image').setAttribute('src', itemLink);
   card.querySelector('.card__image').setAttribute('alt', itemTitle);
   card.querySelector('.card__location').textContent = itemTitle;
   card.querySelector('.card__trash').addEventListener('click',(evt) => {
    const cardToDel = evt.target.closest('.card');
    cardToDel.remove();
       });
   card.querySelector('.card__like').addEventListener('click',(evt) => {
    const cardToLike = evt.target.closest('.card__like');
    cardToLike.classList.toggle('card__like_state_active');
    cardToLike.classList.toggle('card__like_state_hover');
   }); 
 listElement.prepend(card);
};


listElement = document.querySelector('.elements'); // Select section for add cards

//likeButton.addEventListener('click', function() {
 // likeButton.classList.toggle('card__like_state_active');
//});

formElement.addEventListener('submit', (ev) => {
ev.preventDefault();
const fieldTitle = inputTitle.value;
const fieldLink = inputLink.value; 
addCard(fieldTitle, fieldLink);
hidePopup(popup_elements);
});

formProfile.addEventListener('submit', (ev) => {
  ev.preventDefault();
  titleText.textContent = inputName.value;
  subtitleText.textContent = inputAboutme.value;
  hidePopup(popup_profile);
});

initialCards.forEach((element) => {
  addCard(element.name, element.link);
})








