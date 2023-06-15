import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popup, handleFormSubmit) {
        super(popup);
        this._selector = document.querySelector(popup);
        this._handleFormSubmit = handleFormSubmit;
        this.formElement = this._selector.querySelector('.popup__form');
        this._inputList = Array.from(
            this.formElement.querySelectorAll('.popup__input')
        );
        this._setEventListeners();
    }

    _setEventListeners() {
        super.setEventListeners()
        this.formElement.addEventListener('submit', (evt) => {
            this._handleFormSubmit(this._getInputValues());
            this.closePopup();
            evt.preventDefault();
        })
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    closePopup() {
        this.formElement.reset();
        super.close();
    }
}