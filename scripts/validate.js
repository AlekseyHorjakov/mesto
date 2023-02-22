const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__error_visible",
};

function showError(input, form, config) {
  const error = document.querySelector(`.${input.id}-inputError`);
  error.classList.add(config.errorClass);
  input.classList.add(config.inputErrorClass);
  error.textContent = input.validationMessage;
}

function hideError(input, form, config) {
  const error = document.querySelector(`.${input.id}-inputError`);
  error.classList.remove(config.errorClass);
  input.classList.remove(config.inputErrorClass);
  error.textContent = "";
}

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
      setEventListeners(form, config);
  });
}

function toggleButton(inputs, buttonElement, config) {
  if (hasInvalidInputs(inputs)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(config.inactiveButtonClass);
  } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(config.inactiveButtonClass);
  }
}

function checkInput(form, input, config) {
  if (!input.validity.valid) {
      showError(input, form, config);
  } else {
      hideError(input, form, config);
  }
}


function hasInvalidInputs(inputs) {
  return inputs.some((inputElement) => {
      return !inputElement.validity.valid;
  });
}

function setEventListeners(form, config) {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const button = form.querySelector(config.submitButtonSelector);
  toggleButton(inputs, button, config);
  inputs.forEach((input) => {
      input.addEventListener("input", () => {
          checkInput(form, input, config);
          toggleButton(inputs, button, config);
      });
  });
}

enableValidation(validationConfig);

