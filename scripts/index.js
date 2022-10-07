
import { Validator } from './FormValidator.js';
import { settings, initialCards, popups, editButton, addButton,
   formElementsAdd, formProfileAdd, popupElements, listElement,
    inputTitle, inputLink, popupImage, titlePopupImage, imageInPopup,
     popupProfile, inputName, titleText, inputAboutme
    , subtitleText } from './constants.js';
import { Card } from './Card.js';


// Вызов валидатора

const validatorFormElement = new Validator(settings, formElementsAdd);
validatorFormElement.enableValidation();

const validatorFormProfile = new Validator(settings, formProfileAdd);
validatorFormProfile.enableValidation();

//Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    hidePopup(popupOpened);
  };
};


//Popup hide
function hidePopup(section) {
  section.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};



//Popup open
function openPopup(section) {
  section.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

export function handleOpenPopup (link, name) {
  imageInPopup.src = link;
  imageInPopup.alt = name;
  titlePopupImage.textContent = this._name;
  openPopup(popupImage);
}

//Overlay && buttonClose
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')
     ||
      evt.target.classList.contains('popup__button-close')) {
      hidePopup(popup)
     };
  });
});


// Кнопка редактировать
editButton.addEventListener('click', () => {
  openPopup(popupProfile);
  inputName.value = titleText.textContent;
  inputAboutme.value = subtitleText.textContent;
  validatorFormProfile.toggleButtonState();
});

// Кнопка добавить
addButton.addEventListener('click', () => {
  openPopup(popupElements);
  validatorFormElement.toggleButtonState();
});

// Новая карточка
function createNewCard(data) {
  const card = new Card(data, '.template', handleOpenPopup);
  const cardElement = card.createCard();
  return cardElement;
}

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

// Создаем карточки из массива
initialCards.forEach((element) => {
 listElement.append(createNewCard(element));
});

