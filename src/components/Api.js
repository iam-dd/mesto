export class Api {
  constructor(options) {
    this._url = options.url
    this._header = options.headers
    this._token = options.token

  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._header,
      authorization: this._token
    })
    .then((res) => {
      return this._getResponse(res);
    });
  }

  _getResponse() {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
