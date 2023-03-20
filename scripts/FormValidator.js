export default class FormValidator {
  _config;
  _elemValidation;

  constructor(config, elemValidation) {
    this._config = config;
    this._elemValidation = elemValidation;
  }

  enableValidation() {
    const forms = Array.from(document.querySelectorAll(this._config.formSelector));
    forms.forEach((form) => {
      this._setEventListeners(form);
    });
  }

  _setEventListeners(form) {
    const button = form.querySelector(this._config.submitButtonSelector);
    this._toggleButton(button);
    this._elemValidation.addEventListener("input", () => {
      this._checkInput(form);
      this._toggleButton(button);
    });
  }

  _toggleButton(buttonElement) {
    if (this._hasInvalidInputs()) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _hasInvalidInputs() {
      return !this._elemValidation.validity.valid;
  }

  _checkInput() {
    if (!this._elemValidation.validity.valid) {
      this._showError();
    } else {
      this._hideError();
    }
  }

  _showError() {
    const error = document.querySelector(`.${this._elemValidation.id}-inputError`);
    error.classList.add(this._config.errorClass);
    this._elemValidation.classList.add(this._config.inputErrorClass);
    error.textContent = this._elemValidation.validationMessage;
  }

  _hideError() {
    const error = document.querySelector(`.${this._elemValidation.id}-inputError`);
    error.classList.remove(this._config.errorClass);
    this._elemValidation.classList.remove(this._config.inputErrorClass);
    error.textContent = "";
  }
}