
export class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);

  }


  renderItems(res) {
    res.forEach((item) => {
      this._renderer(item)
    });
  };

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }

}
