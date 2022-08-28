
//Button
const editButton = document.querySelector('.profile__edit-button');
const closeButtonProfile = document.querySelector('.popup__button-close_section_profile');
const closeButtonElements = document.querySelector('.popup__button-close_section_elements');
const closeButtonImage = document.querySelector('.popup__button-closeimage');
const addButton = document.querySelector('.profile__button');

//Popup
const popup_profile = document.querySelector('.popup_section_profile');
const popup_elements = document.querySelector('.popup_section_elements');
const popup_image = document.querySelector('.popup_section_image');

//Title
const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');

//Form
const formProfile = document.querySelector('.popup__form_section_profile');
const formElement = document.querySelector('.popup__form_section_elements');

//Input
const inputName = formProfile.querySelector('.popup__input_field_name');
const inputAboutme = formProfile.querySelector('.popup__input_field_aboutme');
const inputTitle = formElement.querySelector('.popup__input_field_title');
const inputLink = formElement.querySelector('.popup__input_field_link');

//Template
const templateCard = document.querySelector('.template');



//Cards
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

//Popup open
function openPopup(section) {
  section.classList.add('popup_opened');
};

//Edit button
editButton.addEventListener('click', function () {
  const tester = document.querySelector('.popup_section_profile');
  tester.classList.toggle('popup_opened');
  inputName.value = titleText.textContent;
  inputAboutme.value = subtitleText.textContent;
});

//Close button section profile
closeButtonProfile.addEventListener('click', () => {
  hidePopup(popup_profile);
});

//Close button section elements
closeButtonElements.addEventListener('click', () => {
  hidePopup(popup_elements);
});

//Close button section image
closeButtonImage.addEventListener('click', () => {
  hidePopup(popup_image);
});

//Add button
addButton.addEventListener('click', () => {
 openPopup(popup_elements);
});

listElement = document.querySelector('.elements'); // Select section for add cards

function addCard(itemTitle, itemLink) {
  const card = templateCard.content.cloneNode(true);
  card.querySelector('.card__image').setAttribute('src', itemLink);
  card.querySelector('.card__image').setAttribute('alt', itemTitle);
  card.querySelector('.card__location').textContent = itemTitle;
  card.querySelector('.card__trash').addEventListener('click', (evt) => {
    const cardToDel = evt.target.closest('.card');
    cardToDel.remove();
  });

  card.querySelector('.card__like').addEventListener('click', (evt) => {
    const cardToLike = evt.target.closest('.card__like');
    cardToLike.classList.toggle('card__like_state_active');
    cardToLike.classList.toggle('card__like_state_hover');
  });

  const cardImage = card.querySelector('.card__image');
  cardImage.addEventListener('click', () => {
      openPopup(popup_image);
      popup_image.querySelector('.popup__image').setAttribute('src', itemLink);
      const elementTitle = elementPopupImage.querySelector('.popup__title-image');
      elementTitle.textContent = itemTitle;
      });

  listElement.prepend(card);
};

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
});