export class Api {
  constructor(options) {
    this._url = options.url
    this._header = options.headers
    this._body = options.body

  }

  async getInitialCards() {
    const res = await fetch(`${this._url}/cards`, {
      headers: this._header,
    })
    return this._getResponse(res)
  };

  async createCardApi(link, name) {
    const res = await fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({ link, name })
    })
    return this._getResponse(res)
  }

  async deleteCard(id) {
    const res = await fetch(`${this._url}/${id}`,
      {
        method: 'DELETE',
        headers: this._header
      })
    return this._getResponse(res)

  };


  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  async newAvatarLoad(avatar) {
    const res = await fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._header,
      body: JSON.stringify({ avatar })
    })
    return this._getResponse(res)
  }

  async setProfileData(dataInputs) {
    const res = await fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._header,
      body: JSON.stringify({
        name: dataInputs.name,
        about: dataInputs.about
      })
    })
    {
      return this._getResponse(res)
    }
  }


  async getProfileData() {
    const res = await fetch(`${this._url}/users/me`, {
      headers: this._header,
    })
    {
    return this._getResponse(res)
    .then((data) => {
      return (data.name, data.about)
    })
    }
  }


}