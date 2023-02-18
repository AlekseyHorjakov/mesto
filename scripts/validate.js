const objectForm = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__error_visible",
};

function showError(input, form, object) {
  const error = document.querySelector(`.${input.id}-inputError`);
  error.classList.add(object.errorClass);
  input.classList.add(object.inputErrorClass);
  error.textContent = input.validationMessage;
}

function hideError(input, form, object) {
  const error = document.querySelector(`.${input.id}-inputError`);
  error.classList.remove(object.errorClass);
  input.classList.remove(object.inputErrorClass);
  error.textContent = "";
}

function enableValidation(object) {
  const forms = Array.from(document.querySelectorAll(object.formSelector));
  forms.forEach((form) => {
      setEventListeners(form, object);
  });
}

function toggleButton(inputs, buttonElement, object) {
  if (isValidInput(inputs)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(object.inactiveButtonClass);
  } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(object.inactiveButtonClass);
  }
}

function checkInput(form, input, object) {
  if (!input.validity.valid) {
      showError(input, form, object);
  } else {
      hideError(input, form, object);
  }
}

function isValidInput(inputs) {
  console.warn(inputs);
  return inputs.some((inputElement) => {
      return !inputElement.validity.valid;
  });
}

function setEventListeners(form, object) {
  const inputs = Array.from(form.querySelectorAll(object.inputSelector));
  const button = form.querySelector(object.submitButtonSelector);
  toggleButton(inputs, button, object);
  inputs.forEach((input) => {
      input.addEventListener("input", () => {
          checkInput(form, input, object);
          toggleButton(inputs, button, object);
      });
  });
}

enableValidation(objectForm);
