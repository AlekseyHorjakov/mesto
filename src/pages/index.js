import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Popup from '../components/Popup.js';
import '../pages/index.css';
// Объявляем переменные

const popupEditElement = document.querySelector(".popup_type_edit");
const popupEditButtonElement = document.querySelector(".profile__edit");
const popupEditCloseButtonElement = document.querySelector(".popup__button-close");
const profileElement = document.querySelector(".profile");
const popupEditForm = popupEditElement.querySelector(".popup__form");
const profileNameElement = profileElement.querySelector(".profile__name");
const profileProfessionElement = profileElement.querySelector(".profile__profession");
const popupNameElement = document.querySelector(".popup__input_type_name");
const popupProfessionElement = document.querySelector(".popup__input_type_profession");
const popupElements = Array.from(document.querySelectorAll(".popup"));
const popupAddElement = document.querySelector(".popup_type_add");
const popupAddButtonElement = document.querySelector(".profile__button-add");
const popupAddCloseButtonElement = document.querySelector(".popup__close");
const popupImage = document.querySelector(".popup_type_image");
const popupImageCloseButtonElement = popupImage.querySelector(".popup__button-close");
const popupCardNameInput = document.querySelector(".popup__input_type_place");
const popupCardLinkInput = document.querySelector(".popup__input_type_link");
const popupAddForm = document.querySelector(".popup__form_add");
const buttonAddPlace = popupAddForm.querySelector(".popup__button-save");
const cardsContainer = document.querySelector(".elements");

const initialCards = [
  { name: "Архыз", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" },
  { name: "Челябинская область", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg" },
  { name: "Иваново", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" },
  { name: "Камчатка", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" },
  { name: "Холмогорский район", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg" },
  { name: "Байкал", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__error_visible",
};

//Информация о пользователе
const userInfo = new UserInfo({ elementPopupInputName: profileNameElement, elementPopupInputProfession: profileProfessionElement });

//Валидация формы редактирования профиля
const formUdate = new FormValidator(validationConfig, document.querySelector('#editForm'));
formUdate.enableValidation();

//Валидация формы создания карточки
const formCreate = new FormValidator(validationConfig, document.querySelector('#createForm'));
formCreate.enableValidation();

//Всплывающее окно редактирвоания
const popupEdit = new PopupWithForm('.popup_type_edit', (item) => userInfo.setUserInfo(item));

popupEditButtonElement.addEventListener("click", function () {
  const item = userInfo.getUserInfo();
  popupNameElement.value = item.elementPopupInputName;
  popupProfessionElement.value = item.elementPopupInputProfession;
  popupEdit.open();
});


popupAddButtonElement.addEventListener("click", function () {
  popupAdd.open();
});
//Всплывающее окно Карточки
const popupCard = new PopupWithImage('.popup_type_image');

function handleCardClick() {
  popupCard.open(this._link, this._name);
}

function createCard(item) {
  const card = new Card(item, "#elements", handleCardClick)
  const cardElement = card.createCard();
  return cardElement;
}
const section = new Section(createCard, '.elements');
section.renderItems(initialCards);

//Функция добавления карточки
const addCard = function (item) {
  section.prependItem({ name: item.elementPopupInputPlace, link: item.elementPopupInputLink });
  formCreate.resetValid();
};

//Всплывающее окно добавления карточки
const popupAdd = new PopupWithForm('.popup_type_add', addCard);

