const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

const API_OPTIONS = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-56',

  headers: {
    authorization: '5bc865bb-7482-46a1-8209-c5f11aa5ba1a',
    'Content-Type': 'application/json',
  }
};

const selectors = {
  title: '.profile__title',
  subtitle: '.profile__subtitle',
  avatar: '.profile__avatar'
}

//Button
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__button');
const avatarButton = document.querySelector('.profile__avatar-button')

//Popup
const popupProfile = document.querySelector('.popup_section_profile');
const popupElements = document.querySelector('.popup_section_elements');
const popupImage = document.querySelector('.popup_section_image');
const imageInPopup = popupImage.querySelector('.popup__image');
const titlePopupImage = popupImage.querySelector('.popup__title-image')
const popups = Array.from(document.querySelectorAll('.popup'));


//Title
const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');

//Form
const formPopup = document.querySelector('.popup__form');
const formProfileAdd = document.querySelector('.popup__form_section_profile');
const formElementsAdd = document.querySelector('.popup__form_section_elements');
const formAvatarLoad = document.querySelector('.popup__form_section_avatar-load')

//Input
const inputName = formProfileAdd.querySelector('.popup__input_field_name');
const inputAbout = formProfileAdd.querySelector('.popup__input_field_about');
const inputTitle = formElementsAdd.querySelector('.popup__input_field_title');
const inputLink = formElementsAdd.querySelector('.popup__input_field_link');

const listElement = document.querySelector('.elements');
const template = document.querySelector('.template');



export { formPopup, selectors, API_OPTIONS, formAvatarLoad, avatarButton, settings, editButton, addButton, popupProfile, popupElements, popupImage, imageInPopup, titlePopupImage, popups, titleText, subtitleText, formProfileAdd, formElementsAdd, inputName, inputAbout
, inputTitle, inputLink, listElement};