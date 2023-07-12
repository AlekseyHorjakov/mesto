export default class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
        this.setEventListeners();
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("click", e => this.doEsc(e));
        document.addEventListener("keydown", e => this.doEsc(e));
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("click", e => this.doEsc(e));
        document.removeEventListener("keydown", e => this.doEsc(e));
    }

    doEsc(e) {
        if (e.target === this._popup) {
            console.log(1);
            this.close();
        }
        if (e.key === "Escape") this.close();
    }

    setEventListeners() {
        this._popup.querySelector('.popup__button-close').addEventListener('click', () => this.close());
    }

}