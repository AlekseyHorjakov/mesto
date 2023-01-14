const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__button_edit');
const popupCloseButtonElement = popupElement.querySelector ('.popup__close-button');
const popupSaveButtonElement = popupElement.querySelector ('.popup__save-button');
const profileElement = document.querySelector('.profile');

let profileNameElement = profileElement.querySelector('.profile__name');
let profileProfessionElement = profileElement.querySelector('.profile__profession');
let popupNameElement = document.querySelector('.popup__input_name');
let popupProfessionElement = document.querySelector('.popup__input_profession');

// Активация и деактивация попапа

const openPopup = function (event) {
  popupElement.classList.add('popup_opened');
  popupNameElement.value = profileNameElement.textContent;
  popupProfessionElement.value = profileProfessionElement.textContent;
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
popupSaveButtonElement.addEventListener('click', closePopup);

// Перенос данных из поля заполнения в профиль

const BringOutText = function (evt) {
  evt.preventDefault();
  profileNameElement.textContent = popupNameElement.value;
  profileProfessionElement.textContent = popupProfessionElement.value;
};

popupElement.addEventListener('submit', BringOutText);