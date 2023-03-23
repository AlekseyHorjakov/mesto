
export default class Card {
    constructor(data, template, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }

    createCard() {
        this._card = document.querySelector(this._template).content.querySelector(".element").cloneNode(true);
        this._cardName = this._card.querySelector(".element__name");
        this._cardImage = this._card.querySelector(".element__image");
        this._cardImage.src = this._link;
        this._cardName.textContent = this._name;
        this._cardImage.alt = this._name;
        this._setEventListeners();
        return this._card;
    }

    _likeCard(evt) {
        evt.target.classList.toggle("element__button-like_active");
    }

    _deleteCard() {
        this._card.remove();
    }

    _setEventListeners() {
        this._card.querySelector(".element__button-delete").addEventListener("click", () => { this._deleteCard() });
        this._card.querySelector(".element__button-like").addEventListener("click", (e) => { this._likeCard(e) });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
}