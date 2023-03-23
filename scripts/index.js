import Card from './Card.js';
import FormValidator from './FormValidator.js';
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
const popupZoomPicture = document.querySelector(".popup__image");
const popupZoomDescription = document.querySelector(".popup__image-name");
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

//Валидация формы редактирования профиля
const formUdate = new FormValidator(validationConfig, document.querySelector('#editForm'));
formUdate.enableValidation();

//Валидация формы создания карточки
const formCreate = new FormValidator(validationConfig, document.querySelector('#createForm'));
formCreate.enableValidation();

const openPopup = function (popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEsc);
};


popupEditButtonElement.addEventListener("click", function () {
    popupNameElement.value = profileNameElement.textContent;
    popupProfessionElement.value = profileProfessionElement.textContent;
    openPopup(popupEditElement);
});


popupAddButtonElement.addEventListener("click", function () {
    openPopup(popupAddElement);
});

// Закрываем окна

popupElements.forEach((popup) =>
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            closePopup(popup);
        }
    })
);

function closeByEsc(event) {
    if (event.key === "Escape") closePopup(document.querySelector(".popup_opened"));
}

const closePopup = function (popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEsc);
};


popupEditCloseButtonElement.addEventListener("click", function () {
    closePopup(popupEditElement);
});

popupAddCloseButtonElement.addEventListener("click", function () {
    closePopup(popupAddElement);
});

popupImageCloseButtonElement.addEventListener("click", function () {
    closePopup(popupImage);
});

// Меняем данные пользователя

const editProfile = function (evt) {
    evt.preventDefault();
    profileNameElement.textContent = popupNameElement.value;
    profileProfessionElement.textContent = popupProfessionElement.value;
    closePopup(popupEditElement);
};
popupEditForm.addEventListener("submit", editProfile);

// При загрузке на странице загружаются 6 карточек, которые добавит JavaScript

//   Определяем место, куда добавляются карточки и выгружаем туда содержимое template

function handleCardClick(name, link) {
    popupZoomPicture.src = this._link;
    popupZoomPicture.alt = this._name;
    popupZoomDescription.textContent = this._name;
    openPopup(popupImage);
}

function createCard(item) {
    const card = new Card(item, "#elements", handleCardClick)
    const cardElement = card.createCard();
    return cardElement;
}

const renderCard = (name, link) => {
    cardsContainer.append(createCard({ name, link }));
};

const renderPrependCard = (name, link) => {
    cardsContainer.prepend(createCard({ name, link }));
};

initialCards.forEach((item) => {
    renderCard(item.name, item.link);
});

// Добавление новой карточки


const addCard = function (evt) {
    evt.preventDefault();
    const name = popupCardNameInput.value;
    const link = popupCardLinkInput.value;
    renderPrependCard(name, link);
    closePopup(popupAddElement);
    formCreate.resetValid();
};

popupAddForm.addEventListener("submit", (evt) => addCard(evt));

const closeButtons = document.querySelectorAll('.popup_close');
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});