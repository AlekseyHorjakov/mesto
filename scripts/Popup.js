export default class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
        this._handleEscClose();
        this.setEventListeners();
    }

    open(){
        this._popup.classList.add("popup_opened");
    }

    close(){
        this._popup.classList.remove("popup_opened");
    }

    _handleEscClose(){
        document.addEventListener("keydown", (event)=>{
            if (event.key === "Escape") this.close();
        });
    }

    setEventListeners(){
        this._popup.addEventListener("click", (event) => {
            if (event.target === this._popup) {
                this.close();
            }
        })
        this._popup.querySelector('.popup__button-close').addEventListener('click', () => this.close());
    }

  }