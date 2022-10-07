
import { Validator } from './FormValidator.js';
import { settings, initialCards, popups, editButton, addButton,
   formElementsAdd, formProfileAdd, popupElements, listElement,
    inputTitle, inputLink, popupImage, titlePopupImage, imageInPopup,
     popupProfile, inputName, titleText, inputAboutme
    , subtitleText } from './constants.js';
import { Card } from './Card.js';

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
    if (evt.target.classList.contains('popup_opened')) {
      hidePopup(popup)
    }
    if (evt.target.classList.contains('popup__button-close')) {
      hidePopup(popup)
    };
  });
});


// Кнопка редактировать
editButton.addEventListener('click', () => {
  openPopup(popupProfile);
  const validator = new Validator(settings, formProfileAdd);
  validator.enableValidation();
  inputName.value = titleText.textContent;
  inputAboutme.value = subtitleText.textContent;
});

// Кнопка добавить
addButton.addEventListener('click', () => {
  openPopup(popupElements);
  const validator = new Validator(settings, formElementsAdd);
  validator.enableValidation();

  const buttonSubmit = popupElements.querySelector('.popup__button-submit');
  buttonSubmit.setAttribute('disabled', 'disabled');
  buttonSubmit.classList.add('popup__button-submit_disable');
});

// Форма добавления новой карточки

formElementsAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const data =
  {
    name: inputTitle.value,
    link: inputLink.value
  };
  const card = new Card(data, '.template');
  const cardElement = card.createCard();
  listElement.prepend(cardElement);
  const button = formElementsAdd.querySelector('.popup__button-submit')
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
  const card = new Card(element, '.template', handleOpenPopup);
  const cardElement = card.createCard();
  listElement.append(cardElement);
});

