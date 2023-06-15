export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderer.items.forEach(item => {
      const element = this._renderer.renderer(item);
      this.addItem(element);
    })
  }

  addItem(item, isInversed = false) {
    if (isInversed) {
      this._container.prepend(item);
    } else {
      this._container.append(item);
    }
  }
}