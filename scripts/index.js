
import { Validator } from './FormValidator.js';
import {
  settings, initialCards, popups, editButton, addButton,
  formElementsAdd, formProfileAdd, popupElements, listElement,
  inputTitle, inputLink, popupImage, titlePopupImage, imageInPopup,
  popupProfile, inputName, titleText, inputAboutme
  , subtitleText
} from './constants.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';


// Вызов валидатора

const validatorFormElement = new Validator(settings, formElementsAdd);
validatorFormElement.enableValidation();

const validatorFormProfile = new Validator(settings, formProfileAdd);
validatorFormProfile.enableValidation();

//Esc
export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    hidePopup(popupOpened);
  };
};


export function handleOpenPopup(link, name) {
  imageInPopup.src = link;
  imageInPopup.alt = name;
  titlePopupImage.textContent = this._name;
  openPopup(popupImage);
}



// Кнопка редактировать
editButton.addEventListener('click', () => {
  openPopup(popupProfile);
  inputName.value = titleText.textContent;
  inputAboutme.value = subtitleText.textContent;
  validatorFormProfile.toggleButtonState();
});

// Кнопка добавить
addButton.addEventListener('click', () => {
  const popupElementsOpen = new Popup ('.popup_section_elements');
  popupElementsOpen.openPopup();
  validatorFormElement.toggleButtonState();
});

// Новая карточка
// function createNewCard(data) {
//   const card = new Card(data, '.template', handleOpenPopup);
//   const cardElement = card.createCard();
//   return cardElement;
// }

// Форма добавления новой карточки

formElementsAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const data =
  {
    name: inputTitle.value,
    link: inputLink.value
  };
  listElement.prepend(createNewCard(data));
  hidePopup(popupElements);
  evt.target.reset();

});

// Форма добавления профайла
formProfileAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  titleText.textContent = inputName.value;
  subtitleText.textContent = inputAboutme.value;
  hidePopup(popupProfile);
});


const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '.template', handleOpenPopup);
    const cardElement = card.createCard();
    cardList.addItem(cardElement)
  }
},
  '.elements');
cardList.renderItems();

