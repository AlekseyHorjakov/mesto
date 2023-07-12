export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(item => { 
      this.appendItem(item);
    })
  }

  appendItem(item) {
    this._container.append(this._renderer(item));
  }

  prependItem(item) {
    this._container.prepend(this._renderer(item));
  }
}