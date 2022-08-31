
//Button
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__button');

//Popup
const popupProfile = document.querySelector('.popup_section_profile');
const popupElements = document.querySelector('.popup_section_elements');
const popupImage = document.querySelector('.popup_section_image');

//Title
const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');

//Form
const formProfileAdd = document.querySelector('.popup__form_section_profile');
const formElementsAdd = document.querySelector('.popup__form_section_elements');

//Input
const inputName = formProfileAdd.querySelector('.popup__input_field_name');
const inputAboutme = formProfileAdd.querySelector('.popup__input_field_aboutme');
const inputTitle = formElementsAdd.querySelector('.popup__input_field_title');
const inputLink = formElementsAdd.querySelector('.popup__input_field_link');

const listElement = document.querySelector('.elements');
const template = document.querySelector('.template');



//Cards Array
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

//Close  buttons
const closeButtons = document.querySelectorAll('.popup__button-close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => hidePopup(popup));
});

//Edit button
editButton.addEventListener('click', () => {
  openPopup(popupProfile);
  inputName.value = titleText.textContent;
  inputAboutme.value = subtitleText.textContent;
});

//Add button
addButton.addEventListener('click', () => {
  openPopup(popupElements);
});

//Function Add cards

function addCard(itemTitle, itemLink) {
  card = createCard(itemTitle, itemLink)
  listElement.prepend(card);
};

function createCard(itemTitle, itemLink) {
  const newCard = template.content.cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  cardImage.setAttribute('src', itemLink);
  cardImage.setAttribute('alt', itemTitle);
  newCard.querySelector('.card__location').textContent = itemTitle;
  newCard.querySelector('.card__trash').addEventListener('click', (evt) => {
    const cardToDel = evt.target.closest('.card');
    cardToDel.remove();
  });
  cardImage.addEventListener('click', () => {
    openPopup(popupImage);
    const imageInPopup = popupImage.querySelector('.popup__image');
    imageInPopup.setAttribute('src', itemLink);
    imageInPopup.setAttribute('alt', itemTitle);
    popupImage.querySelector('.popup__title-image').textContent = itemTitle;
  });
  newCard.querySelector('.card__like').addEventListener('click', (evt) => {
    const likeButton = evt.target
    likeButton.classList.toggle('card__like_state_active');
    likeButton.classList.toggle('card__like_state_hover');
  });

  return (newCard);
};



//Form add new card(element)

formElementsAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const itemTitle = inputTitle.value;
  const itemLink = inputLink.value;
  addCard(itemTitle, itemLink);
  hidePopup(popupElements);
  evt.target.reset();
});

//Form add New Profile
formProfileAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  titleText.textContent = inputName.value;
  subtitleText.textContent = inputAboutme.value;
  hidePopup(popupProfile);
});

initialCards.forEach((element) => {
  addCard(element.name, element.link);
});