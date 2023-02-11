// Объявляем переменные для окна редактирования профиля

const popupEditElement = document.querySelector(".popup_type_edit");
const popupEditButtonElement = document.querySelector(".profile__edit");
const popupCloseButtonElement = document.querySelector(".popup__button-close");
const profileElement = document.querySelector(".profile");
const popupForm = document.querySelector(".popup__form");
let profileNameElement = profileElement.querySelector(".profile__name");
let profileProfessionElement = profileElement.querySelector(".profile__profession");
let popupNameElement = document.querySelector(".popup__input_type_name");
let popupProfessionElement = document.querySelector(".popup__input_type_profession");

// Объявляем переменные для окна добавление фотограффий

const popupAddElement = document.querySelector(".popup_type_add");
const popupAddButtonElement = document.querySelector(".profile__button-add");
const popupAddCloseElement = document.querySelector(".popup_type_close");

// Открываем окна

const openPopup = function (popup) {
    popup.classList.add("popup_opened");
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

const closePopup = function (popup) {
    popup.classList.remove("popup_opened");
};
popupCloseButtonElement.addEventListener("click", function () {
    closePopup(popupEditElement);
    closePopup(popupAddElement);
});

popupAddCloseElement.addEventListener("click", function () {
    closePopup(popupAddElement);
});

// Меняем данные пользователя

const textWrapping = function (evt) {
    evt.preventDefault();
    profileNameElement.textContent = popupNameElement.value;
    profileProfessionElement.textContent = popupProfessionElement.value;
    closePopup(popupEditElement);
};
popupForm.addEventListener("submit", textWrapping);

// При загрузке на странице загружаются 6 карточек, которые добавит JavaScript

const initialCards = [
    { name: "Архыз", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" },
    { name: "Челябинская область", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg" },
    { name: "Иваново", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" },
    { name: "Камчатка", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" },
    { name: "Холмогорский район", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg" },
    { name: "Байкал", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" },
];

//   Определяем место, куда добавляются карточки и выгружаем туда содержимое template

const containerElements = document.querySelector(".elements");
const elementTemplate = document.querySelector("#elements");
const inputPlace = document.querySelector(".popup__input_type_place");
const inputPlaceName = document.querySelector(".popup__input_type_name");
const popupZoomPicture = document.querySelector(".popup__image");
const popupZoomDescription = document.querySelector(".popup__image-name");
const popupImage = document.querySelector(".popup_type_image");
const popupAdd = document.querySelector(".popup__form_add");

const createCard = (name, link) => {
    const card = elementTemplate.content.querySelector(".element").cloneNode(true);
    const cardName = card.querySelector(".element__name");
    const cardImage = card.querySelector(".element__image");
    cardImage.src = link;
    cardName.textContent = name;
    cardImage.alt = name;
    cardImage.addEventListener("click", () => popupZoom(link, name));

    //  Кнопка активации лайка

    const buttonLike = card.querySelector(".element__button-like");
    buttonLike.addEventListener("click", function (evt) {
        const evtLike = evt.target;
        evtLike.classList.toggle("element__button-like_active");
    });

    //   Кнопка удаления карточки

    const buttonDell = card.querySelector(".element__button-delete");
    buttonDell.addEventListener("click", () => {
        card.remove();
    });

    // Увеличенное изображение

    function popupZoom(link, name) {
        popupZoomPicture.src = link;
        popupZoomPicture.alt = name;
        popupZoomDescription.textContent = name;
        openPopup(popupImage);
    }

    popupImage.addEventListener("click", function () {
        closePopup(popupImage);
    });

    return card;
};

const renderCard = (name, link) => {
    containerElements.append(createCard(name, link));
};

initialCards.forEach((item) => {
    renderCard(item.name, item.link);
});

// Добавление новой карточки

const addCard = function (evt) {
    evt.preventDefault();
    let form = evt.target.querySelector(".popup__input-block");
    const popupCardNameInput = form.querySelector(".popup__input_type_place");
    const popupCardPLinkInput = form.querySelector(".popup__input_type_link");

    let name = popupCardNameInput.value;
    let link = popupCardPLinkInput.value;

    renderCard(name, link);
    closePopup(popupAddElement);
};

popupAdd.addEventListener("submit", (evt) => addCard(evt));
