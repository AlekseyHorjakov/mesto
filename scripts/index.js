// Объявляем переменные s

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
const cardsContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector("#elements");
const popupZoomPicture = document.querySelector(".popup__image");
const popupZoomDescription = document.querySelector(".popup__image-name");
const popupImage = document.querySelector(".popup_type_image");
const popupImageCloseButtonElement = popupImage.querySelector(".popup__button-close");
const popupCardNameInput = document.querySelector(".popup__input_type_place");
const popupCardLinkInput = document.querySelector(".popup__input_type_link");
const popupAddForm = document.querySelector(".popup__form_add");
const cardTemplateElement = cardTemplate.content.querySelector(".element")
const buttonAddPlace = popupAddForm.querySelector(".popup__button-save");


// Открываем окна

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


const createCard = (name, link) => {
    const card = cardTemplateElement.cloneNode(true);
    const cardName = card.querySelector(".element__name");
    const cardImage = card.querySelector(".element__image");
    cardImage.src = link;
    cardName.textContent = name;
    cardImage.alt = name;
    cardImage.addEventListener("click", () => zoomPopup(link, name));

    //  Кнопка активации лайка

    const buttonLike = card.querySelector(".element__button-like");
    buttonLike.addEventListener("click", function () {
        buttonLike.classList.toggle("element__button-like_active");
    });

    //   Кнопка удаления карточки

    const buttonDell = card.querySelector(".element__button-delete");
    buttonDell.addEventListener("click", () => {
        card.remove();
    });

    // Увеличенное изображение

    function zoomPopup(link, name) {
        popupZoomPicture.src = link;
        popupZoomPicture.alt = name;
        popupZoomDescription.textContent = name;
        openPopup(popupImage);
    }
    return card;
};


const renderCard = (name, link) => {
    cardsContainer.append(createCard(name, link));
};

const renderPrependCard = (name, link) => {
    cardsContainer.prepend(createCard(name, link));
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
    popupAddForm.reset();
    closePopup(popupAddElement);
    buttonAddPlace.classList.add('popup__button-save_disabled');
    buttonAddPlace.disabled = true;
};

popupAddForm.addEventListener("submit", (evt) => addCard(evt));


