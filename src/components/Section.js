export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(item => { 
      this.addItem(item);
    })
  }

  _appendItem(item) {
    this._container.append(item);
  }

  _prependItem(item) {
    this._container.prepend(item);
  }
  
  addItem(item, isInversed = false) {
    const element = this._renderer(item);
    if (isInversed) {
      this._prependItem(element);
    } else {
      this._appendItem(element);
    }
  }
}